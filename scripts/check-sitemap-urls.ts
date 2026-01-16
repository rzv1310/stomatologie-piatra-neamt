/**
 * Sitemap URL Verification Script
 * 
 * This script checks all URLs in the sitemap.xml for:
 * - 404 errors
 * - Redirect chains
 * - Response time issues
 * 
 * Run: npx ts-node scripts/check-sitemap-urls.ts
 * Or in browser console for quick check
 */

import { readFileSync } from 'fs';
import { join } from 'path';

interface UrlCheckResult {
  url: string;
  status: number | 'error';
  redirectTo?: string;
  responseTime: number;
  error?: string;
}

const SITE_URL = "https://stomatologiepiatraneamt.ro";
const TIMEOUT_MS = 10000;

// Parse sitemap.xml and extract URLs
function extractUrlsFromSitemap(): string[] {
  try {
    const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
    const sitemapContent = readFileSync(sitemapPath, 'utf-8');
    
    const urlMatches = sitemapContent.match(/<loc>([^<]+)<\/loc>/g);
    if (!urlMatches) {
      console.error('❌ No URLs found in sitemap.xml');
      return [];
    }
    
    return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
  } catch (error) {
    console.error('❌ Error reading sitemap.xml:', error);
    return [];
  }
}

// Check a single URL
async function checkUrl(url: string): Promise<UrlCheckResult> {
  const startTime = Date.now();
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
    
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'manual',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    const responseTime = Date.now() - startTime;
    
    const result: UrlCheckResult = {
      url,
      status: response.status,
      responseTime
    };
    
    // Check for redirects
    if (response.status >= 300 && response.status < 400) {
      result.redirectTo = response.headers.get('location') || undefined;
    }
    
    return result;
  } catch (error) {
    return {
      url,
      status: 'error',
      responseTime: Date.now() - startTime,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// Main verification function
async function verifySitemapUrls(): Promise<void> {
  console.log('🔍 Starting Sitemap URL Verification...\n');
  console.log(`📍 Base URL: ${SITE_URL}`);
  console.log('─'.repeat(60));
  
  const urls = extractUrlsFromSitemap();
  
  if (urls.length === 0) {
    console.log('❌ No URLs to check');
    return;
  }
  
  console.log(`📋 Found ${urls.length} URLs to check\n`);
  
  const results: UrlCheckResult[] = [];
  const errors: UrlCheckResult[] = [];
  const redirects: UrlCheckResult[] = [];
  const slowResponses: UrlCheckResult[] = [];
  
  for (const url of urls) {
    const result = await checkUrl(url);
    results.push(result);
    
    // Categorize results
    if (result.status === 'error' || result.status === 404) {
      errors.push(result);
      console.log(`❌ ${result.status} - ${url}${result.error ? ` (${result.error})` : ''}`);
    } else if (result.status >= 300 && result.status < 400) {
      redirects.push(result);
      console.log(`↪️ ${result.status} - ${url} → ${result.redirectTo}`);
    } else if (result.responseTime > 3000) {
      slowResponses.push(result);
      console.log(`🐢 ${result.status} - ${url} (${result.responseTime}ms)`);
    } else {
      console.log(`✅ ${result.status} - ${url} (${result.responseTime}ms)`);
    }
  }
  
  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(60));
  console.log(`✅ Successful: ${results.length - errors.length - redirects.length}`);
  console.log(`❌ Errors/404s: ${errors.length}`);
  console.log(`↪️ Redirects: ${redirects.length}`);
  console.log(`🐢 Slow (>3s): ${slowResponses.length}`);
  
  if (errors.length > 0) {
    console.log('\n🚨 ERRORS FOUND:');
    errors.forEach(e => {
      console.log(`   - ${e.url}: ${e.status}${e.error ? ` (${e.error})` : ''}`);
    });
  }
  
  if (redirects.length > 0) {
    console.log('\n⚠️ REDIRECTS:');
    redirects.forEach(r => {
      console.log(`   - ${r.url} → ${r.redirectTo}`);
    });
  }
  
  console.log('\n' + '═'.repeat(60));
  
  // Exit with error code if issues found
  if (errors.length > 0) {
    process.exit(1);
  }
}

// Browser-compatible version for dev console
export const browserCheckUrls = async (baseUrl: string = SITE_URL): Promise<void> => {
  const routes = [
    '/',
    '/servicii',
    '/despre',
    '/contact',
    '/tarife',
    '/blog',
    '/servicii/implant-dentar',
    '/servicii/profilaxie',
    '/servicii/estetica-dentara',
    '/servicii/tratament-carii',
    '/servicii/endodontie-piatra-neamt',
    '/servicii/protetica-piatra-neamt',
    '/servicii/ortodontie-piatra-neamt',
    '/servicii/stomatologie-copii-piatra-neamt',
    '/servicii/urgente',
    '/servicii/chirurgie-orala',
    '/servicii/parodontologie-piatra-neamt',
    '/servicii/radiologie-dentara-piatra-neamt',
    '/blog/albire-dentara-piatra-neamt',
    '/blog/aparat-dentar-adulti-piatra-neamt',
    '/blog/prima-vizita-copil-dentist',
    '/blog/maseaua-de-minte',
    '/blog/urgente-dentare-dinte-rupt',
    '/blog/parodontoza-tratament',
    '/politica-confidentialitate',
    '/termeni-conditii',
    '/politica-cookies'
  ];
  
  console.log('🔍 Checking URLs...');
  
  for (const route of routes) {
    try {
      const response = await fetch(`${baseUrl}${route}`, { method: 'HEAD' });
      const emoji = response.ok ? '✅' : '❌';
      console.log(`${emoji} ${response.status} - ${route}`);
    } catch (error) {
      console.log(`❌ ERROR - ${route}`);
    }
  }
};

// Run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  verifySitemapUrls();
}

export { verifySitemapUrls, extractUrlsFromSitemap, checkUrl };

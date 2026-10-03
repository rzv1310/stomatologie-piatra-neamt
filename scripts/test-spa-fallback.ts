/**
 * SPA Fallback Test Script
 * 
 * Tests that all routes properly handle browser refresh (SPA fallback)
 * by checking that each route returns HTML with the root element.
 * 
 * Run: npm run test:spa
 */

import { ROUTE_REGISTRY } from "../src/config/route-registry";

interface RouteTestResult {
  route: string;
  success: boolean;
  statusCode?: number;
  hasRootElement?: boolean;
  error?: string;
}

const PREVIEW_URL = process.env.PREVIEW_URL || "https://stomatologie-piatra-neamt.lovable.app";
const TIMEOUT_MS = 15000;

// All routes to test
const ALL_ROUTES = [
  ...ROUTE_REGISTRY.filter((r) => r.path !== "*").map((r) => r.path),
  // 404 test
  "/pagina-care-nu-exista-test-404",
];

async function testRoute(route: string, baseUrl: string): Promise<RouteTestResult> {
  const url = `${baseUrl}${route}`;
  
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'text/html',
        'User-Agent': 'SPA-Fallback-Test/1.0'
      },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    const html = await response.text();
    
    // Check if HTML contains the root element (SPA mount point)
    const hasRootElement = html.includes('id="root"') || html.includes("id='root'");
    
    // Check for common SPA indicators
    const hasReactApp = html.includes('/src/main.tsx') || html.includes('assets/index');
    
    // For 404 route, we expect 200 with SPA fallback, not actual 404
    const isExpected404Route = route.includes('test-404');
    const expectedStatus = isExpected404Route ? 200 : 200;
    
    const success = response.status === expectedStatus && hasRootElement;
    
    return {
      route,
      success,
      statusCode: response.status,
      hasRootElement
    };
  } catch (error) {
    return {
      route,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

async function testSpaFallback(): Promise<void> {
  const baseUrl = PREVIEW_URL;
  
  console.log('🧪 SPA Fallback Test Suite');
  console.log('═'.repeat(60));
  console.log(`🌐 Testing: ${baseUrl}`);
  console.log(`📋 Routes: ${ALL_ROUTES.length}`);
  console.log('─'.repeat(60));
  console.log('\nSimulating browser refresh on each route...\n');
  
  const results: RouteTestResult[] = [];
  const passed: RouteTestResult[] = [];
  const failed: RouteTestResult[] = [];
  
  for (const route of ALL_ROUTES) {
    const result = await testRoute(route, baseUrl);
    results.push(result);
    
    if (result.success) {
      passed.push(result);
      console.log(`✅ PASS - ${route} (${result.statusCode})`);
    } else {
      failed.push(result);
      console.log(`❌ FAIL - ${route} (${result.statusCode || 'ERROR'})`);
      if (result.error) {
        console.log(`         Error: ${result.error}`);
      }
      if (!result.hasRootElement) {
        console.log(`         Missing: #root element (SPA not loaded)`);
      }
    }
  }
  
  // Summary
  console.log('\n' + '═'.repeat(60));
  console.log('📊 TEST SUMMARY');
  console.log('═'.repeat(60));
  console.log(`✅ Passed: ${passed.length}/${results.length}`);
  console.log(`❌ Failed: ${failed.length}/${results.length}`);
  
  if (failed.length > 0) {
    console.log('\n🚨 FAILED ROUTES:');
    failed.forEach(f => {
      console.log(`   - ${f.route}: ${f.error || `Status ${f.statusCode}, hasRoot: ${f.hasRootElement}`}`);
    });
    
    console.log('\n💡 POSSIBLE FIXES:');
    console.log('   1. Ensure public/_redirects contains: /*    /index.html   200');
    console.log('   2. Re-publish the app after adding _redirects');
    console.log('   3. Check if hosting provider supports SPA fallback');
  }
  
  console.log('\n' + '═'.repeat(60));
  
  // Exit with error if tests failed
  if (failed.length > 0) {
    process.exit(1);
  } else {
    console.log('🎉 All SPA fallback tests passed!');
  }
}

// Browser-compatible quick test
export const browserTestSpaFallback = async (routes?: string[]): Promise<void> => {
  const testRoutes = routes || [
    '/servicii',
    '/contact',
    '/blog',
    '/servicii/implant-dentar',
    '/blog/maseaua-de-minte',
    '/politica-confidentialitate'
  ];
  
  console.log('🧪 Quick SPA Fallback Test (dev console)');
  console.log('Refresh each URL in browser to verify:');
  
  testRoutes.forEach(route => {
    console.log(`   ${window.location.origin}${route}`);
  });
  
  console.log('\nExpected: Each should load the app, not show 404 or blank page.');
};

// Run if executed directly
if (typeof require !== 'undefined' && require.main === module) {
  testSpaFallback();
}

export { testSpaFallback, testRoute, ALL_ROUTES };

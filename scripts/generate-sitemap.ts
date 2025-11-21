import { writeFileSync } from 'fs';
import { join } from 'path';

// Import route configuration
// Note: This script should be run with ts-node or compiled to JS first
interface RouteConfig {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  excludeFromSitemap?: boolean;
}

const SITE_URL = "https://stomatologiepiatraneamt.ro";

// Route configuration - matches src/config/routes.ts
const routes: RouteConfig[] = [
  // Homepage
  { path: "/", priority: 1.0, changefreq: "weekly" },
  
  // Main pages
  { path: "/servicii", priority: 0.9, changefreq: "monthly" },
  { path: "/despre", priority: 0.9, changefreq: "monthly" },
  { path: "/contact", priority: 0.9, changefreq: "monthly" },
  { path: "/tarife", priority: 0.9, changefreq: "monthly" },
  { path: "/blog", priority: 0.9, changefreq: "weekly" },

  // Service pages
  { path: "/servicii/implant-dentar", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/profilaxie", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/estetica-dentara", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/tratament-carii", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/endodontie-piatra-neamt", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/protetica-piatra-neamt", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/ortodontie-piatra-neamt", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/stomatologie-copii-piatra-neamt", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/urgente", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/chirurgie-orala", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/parodontologie-piatra-neamt", priority: 0.8, changefreq: "monthly" },
  { path: "/servicii/radiologie-dentara-piatra-neamt", priority: 0.8, changefreq: "monthly" },

  // Blog posts
  { path: "/blog/albire-dentara-piatra-neamt", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/aparat-dentar-adulti-piatra-neamt", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/prima-vizita-copil-dentist", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/maseaua-de-minte", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/urgente-dentare-dinte-rupt", priority: 0.7, changefreq: "weekly" },
  { path: "/blog/parodontoza-tratament", priority: 0.7, changefreq: "weekly" },

  // Legal pages
  { path: "/politica-confidentialitate", priority: 0.5, changefreq: "yearly" },
  { path: "/termeni-conditii", priority: 0.5, changefreq: "yearly" },
  { path: "/politica-cookies", priority: 0.5, changefreq: "yearly" },
];

function generateSitemap(): string {
  const today = new Date().toISOString().split('T')[0];
  
  const urlEntries = routes
    .filter(route => !route.excludeFromSitemap)
    .map(route => {
      const url = `${SITE_URL}${route.path}`;
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

function main() {
  console.log('🚀 Generating sitemap.xml...');
  
  const sitemap = generateSitemap();
  const outputPath = join(process.cwd(), 'public', 'sitemap.xml');
  
  writeFileSync(outputPath, sitemap, 'utf-8');
  
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${outputPath}`);
  console.log(`📊 Total URLs: ${routes.filter(r => !r.excludeFromSitemap).length}`);
}

// Run the script
main();

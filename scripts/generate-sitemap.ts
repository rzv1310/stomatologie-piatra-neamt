/**
 * Prints the sitemap generated from src/config/route-registry.ts.
 * The real sitemap is emitted automatically by `vite build` (sitemap plugin in vite.config.ts).
 * Run: npm run sitemap
 */
import { buildSitemapXml } from "../src/config/route-registry";

process.stdout.write(buildSitemapXml());

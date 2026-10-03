// Route registry: plain data, no React imports and only relative imports,
// so the router, the Vite sitemap plugin and Node scripts all read the same list.
import { BLOG_ARTICLES } from "./blog-articles";

export const SITE_URL = "https://stomatologiepiatraneamt.ro";

export type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
export type PageKey =
  | "AlbireDentara"
  | "AparatDentarAdulti"
  | "Blog"
  | "Chirurgie"
  | "Contact"
  | "Despre"
  | "Endodontie"
  | "EsteticaDentara"
  | "ImplantDentar"
  | "Index"
  | "MaseauaMinte"
  | "NotFound"
  | "Ortodontie"
  | "Parodontologie"
  | "Parodontoza"
  | "PoliticaConfidentialitate"
  | "PoliticaCookies"
  | "PrimaVizitaCopil"
  | "Profilaxie"
  | "Protetica"
  | "Radiologie"
  | "Servicii"
  | "StomatologieCopii"
  | "Tarife"
  | "TermeniConditii"
  | "TratamentCarii"
  | "Urgente"
  | "UrgenteDentare";

export interface RouteEntry {
  path: string;
  /** Page component key (resolved in routes.ts). Omit when redirectTo is set. */
  page?: PageKey;
  redirectTo?: string;
  priority: number;
  changefreq: ChangeFreq;
  title: string;
  excludeFromSitemap?: boolean;
  /** ISO date of the last real content change. Omit when unknown — never use build time. */
  lastmod?: string;
}

export const ROUTE_REGISTRY: RouteEntry[] = [
  { path: "/", page: "Index", priority: 1.0, changefreq: "weekly", title: "Home" },
  { path: "/servicii", page: "Servicii", priority: 0.9, changefreq: "monthly", title: "Servicii" },
  { path: "/despre", page: "Despre", priority: 0.9, changefreq: "monthly", title: "Despre" },
  { path: "/contact", page: "Contact", priority: 0.9, changefreq: "monthly", title: "Contact" },
  { path: "/tarife", page: "Tarife", priority: 0.9, changefreq: "monthly", title: "Tarife" },
  { path: "/blog", page: "Blog", priority: 0.9, changefreq: "weekly", title: "Blog" },
  { path: "/servicii/implant-dentar", page: "ImplantDentar", priority: 0.8, changefreq: "monthly", title: "Implant Dentar" },
  { path: "/servicii/profilaxie", page: "Profilaxie", priority: 0.8, changefreq: "monthly", title: "Profilaxie" },
  { path: "/servicii/estetica-dentara", page: "EsteticaDentara", priority: 0.8, changefreq: "monthly", title: "Estetica Dentara" },
  { path: "/servicii/tratament-carii", page: "TratamentCarii", priority: 0.8, changefreq: "monthly", title: "Tratament Carii" },
  { path: "/servicii/endodontie-piatra-neamt", page: "Endodontie", priority: 0.8, changefreq: "monthly", title: "Endodontie" },
  { path: "/servicii/protetica-piatra-neamt", page: "Protetica", priority: 0.8, changefreq: "monthly", title: "Protetica" },
  { path: "/servicii/ortodontie-piatra-neamt", page: "Ortodontie", priority: 0.8, changefreq: "monthly", title: "Ortodontie" },
  { path: "/servicii/stomatologie-copii-piatra-neamt", page: "StomatologieCopii", priority: 0.8, changefreq: "monthly", title: "Stomatologie Copii" },
  { path: "/servicii/urgente", page: "Urgente", priority: 0.8, changefreq: "monthly", title: "Urgente" },
  { path: "/servicii/chirurgie-orala", page: "Chirurgie", priority: 0.8, changefreq: "monthly", title: "Chirurgie Orala" },
  { path: "/servicii/parodontologie-piatra-neamt", page: "Parodontologie", priority: 0.8, changefreq: "monthly", title: "Parodontologie" },
  { path: "/servicii/radiologie-dentara-piatra-neamt", page: "Radiologie", priority: 0.8, changefreq: "monthly", title: "Radiologie" },
  { path: "/blog/albire-dentara", redirectTo: "/blog/albire-dentara-piatra-neamt", priority: 0.1, changefreq: "never", title: "Redirect", excludeFromSitemap: true },
  { path: "/blog/aparat-dentar-adulti", redirectTo: "/blog/aparat-dentar-adulti-piatra-neamt", priority: 0.1, changefreq: "never", title: "Redirect", excludeFromSitemap: true },
  { path: "/blog/parodontoza", redirectTo: "/blog/parodontoza-tratament", priority: 0.1, changefreq: "never", title: "Redirect", excludeFromSitemap: true },
  { path: "/blog/urgente-dentare", redirectTo: "/blog/urgente-dentare-dinte-rupt", priority: 0.1, changefreq: "never", title: "Redirect", excludeFromSitemap: true },
  { path: "/blog/albire-dentara-piatra-neamt", page: "AlbireDentara", lastmod: BLOG_ARTICLES["albire-dentara-piatra-neamt"].dateModified, priority: 0.7, changefreq: "weekly", title: "Albire Dentara" },
  { path: "/blog/aparat-dentar-adulti-piatra-neamt", page: "AparatDentarAdulti", lastmod: BLOG_ARTICLES["aparat-dentar-adulti-piatra-neamt"].dateModified, priority: 0.7, changefreq: "weekly", title: "Aparat Dentar Adulti" },
  { path: "/blog/prima-vizita-copil-dentist", page: "PrimaVizitaCopil", lastmod: BLOG_ARTICLES["prima-vizita-copil-dentist"].dateModified, priority: 0.7, changefreq: "weekly", title: "Prima Vizita Copil" },
  { path: "/blog/maseaua-de-minte", page: "MaseauaMinte", lastmod: BLOG_ARTICLES["maseaua-de-minte"].dateModified, priority: 0.7, changefreq: "weekly", title: "Maseaua de Minte" },
  { path: "/blog/urgente-dentare-dinte-rupt", page: "UrgenteDentare", lastmod: BLOG_ARTICLES["urgente-dentare-dinte-rupt"].dateModified, priority: 0.7, changefreq: "weekly", title: "Urgente Dentare" },
  { path: "/blog/parodontoza-tratament", page: "Parodontoza", lastmod: BLOG_ARTICLES["parodontoza-tratament"].dateModified, priority: 0.7, changefreq: "weekly", title: "Parodontoza" },
  { path: "/politica-confidentialitate", page: "PoliticaConfidentialitate", priority: 0.5, changefreq: "yearly", title: "Politica Confidentialitate" },
  { path: "/termeni-conditii", page: "TermeniConditii", priority: 0.5, changefreq: "yearly", title: "Termeni si Conditii" },
  { path: "/politica-cookies", page: "PoliticaCookies", priority: 0.5, changefreq: "yearly", title: "Politica Cookies" },
  { path: "*", page: "NotFound", priority: 0, changefreq: "never", title: "404", excludeFromSitemap: true },
];

export const sitemapRoutes = () => ROUTE_REGISTRY.filter((r) => !r.excludeFromSitemap && r.path !== "*");

export const buildSitemapXml = (): string => {
  const urls = sitemapRoutes()
    .map((r) => {
      const loc = `${SITE_URL}${r.path}`;
      const lastmod = r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmod}\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

// Single source for blog article dates (ISO). Blog list, homepage, article pages,
// social tags and JSON-LD all read from here.
export interface BlogArticleMeta {
  slug: string;
  datePublished: string;
  dateModified: string;
}

export const BLOG_ARTICLES: Record<string, BlogArticleMeta> = {
  "albire-dentara-piatra-neamt": { slug: "albire-dentara-piatra-neamt", datePublished: "2025-11-15", dateModified: "2025-11-15" },
  "aparat-dentar-adulti-piatra-neamt": { slug: "aparat-dentar-adulti-piatra-neamt", datePublished: "2025-11-10", dateModified: "2025-11-10" },
  "prima-vizita-copil-dentist": { slug: "prima-vizita-copil-dentist", datePublished: "2025-11-05", dateModified: "2025-11-05" },
  "maseaua-de-minte": { slug: "maseaua-de-minte", datePublished: "2025-11-01", dateModified: "2025-11-01" },
  "urgente-dentare-dinte-rupt": { slug: "urgente-dentare-dinte-rupt", datePublished: "2025-10-28", dateModified: "2025-10-28" },
  "parodontoza-tratament": { slug: "parodontoza-tratament", datePublished: "2025-10-25", dateModified: "2025-10-25" },
};

export const getArticleMeta = (slug: string): BlogArticleMeta => {
  const meta = BLOG_ARTICLES[slug];
  if (!meta) throw new Error(`Missing blog article meta for ${slug}`);
  return meta;
};

const RO_MONTHS = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];

export const formatRoDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${RO_MONTHS[m - 1]} ${y}`;
};

export const articleDisplayDate = (slug: string) => formatRoDate(getArticleMeta(slug).datePublished);

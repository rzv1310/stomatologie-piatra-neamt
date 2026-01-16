import { Helmet } from "react-helmet";

const SITE_URL = "https://stomatologiepiatraneamt.ro";
const DEFAULT_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp";

// Dedicated images for different page types
const PAGE_IMAGES = {
  // Service pages
  '/servicii/implant-dentar': 'https://storage.googleapis.com/gpt-engineer-file-uploads/4JwdkPfG3Mgryfl0Byt7yN5KIf43/social-images/social-1763674029142-stomatologie piatra neamt - echipa medstom.webp',
  '/servicii/profilaxie': DEFAULT_IMAGE,
  '/servicii/estetica-dentara': DEFAULT_IMAGE,
  '/servicii/tratament-carii': DEFAULT_IMAGE,
  '/servicii/endodontie-piatra-neamt': DEFAULT_IMAGE,
  '/servicii/protetica-piatra-neamt': DEFAULT_IMAGE,
  '/servicii/ortodontie-piatra-neamt': DEFAULT_IMAGE,
  '/servicii/stomatologie-copii-piatra-neamt': DEFAULT_IMAGE,
  '/servicii/urgente': DEFAULT_IMAGE,
  '/servicii/chirurgie-orala': DEFAULT_IMAGE,
  '/servicii/parodontologie-piatra-neamt': DEFAULT_IMAGE,
  '/servicii/radiologie-dentara-piatra-neamt': DEFAULT_IMAGE,
  '/servicii/stomatologie-generala': DEFAULT_IMAGE,
  
  // Main pages
  '/servicii': DEFAULT_IMAGE,
  '/despre': DEFAULT_IMAGE,
  '/contact': DEFAULT_IMAGE,
  '/tarife': DEFAULT_IMAGE,
  '/blog': DEFAULT_IMAGE,
  
  // Blog pages
  '/blog/albire-dentara-piatra-neamt': DEFAULT_IMAGE,
  '/blog/aparat-dentar-adulti-piatra-neamt': DEFAULT_IMAGE,
  '/blog/prima-vizita-copil-dentist': DEFAULT_IMAGE,
  '/blog/maseaua-de-minte': DEFAULT_IMAGE,
  '/blog/urgente-dentare-dinte-rupt': DEFAULT_IMAGE,
  '/blog/parodontoza-tratament': DEFAULT_IMAGE,
  
  // Legal pages
  '/politica-confidentialitate': DEFAULT_IMAGE,
  '/termeni-conditii': DEFAULT_IMAGE,
  '/politica-cookies': DEFAULT_IMAGE,
} as const;

export interface DynamicSEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

export const useDynamicSEO = ({
  title,
  description,
  path,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false
}: DynamicSEOProps) => {
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || PAGE_IMAGES[path as keyof typeof PAGE_IMAGES] || DEFAULT_IMAGE;
  
  // Ensure image is absolute URL
  const absoluteImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${SITE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Stomatologie MedStom Piatra Neamț" />
      <meta property="og:locale" content="ro_RO" />
      
      {/* Article specific OG tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta */}
      <meta name="author" content="Stomatologie MedStom Piatra Neamț" />
      <meta name="publisher" content="Stomatologie MedStom Piatra Neamț" />
    </Helmet>
  );
};

export { PAGE_IMAGES, SITE_URL, DEFAULT_IMAGE };

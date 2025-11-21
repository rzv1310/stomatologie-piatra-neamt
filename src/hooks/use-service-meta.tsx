import { Helmet } from "react-helmet";
import { SITE_URL } from "@/config/routes";

interface ServiceMetaProps {
  title: string;
  description: string;
  image: string;
  path: string;
  type?: string;
}

export const useServiceMeta = ({ title, description, image, path, type = "website" }: ServiceMetaProps) => {
  const fullUrl = `${SITE_URL}${path}`;
  // Convert relative image paths to absolute URLs for social media
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Medstom Clinic - Stomatologie Piatra Neamț" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      
      {/* Page Title */}
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

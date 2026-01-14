import { Helmet } from "react-helmet";
import { SITE_URL } from "@/config/routes";
import { ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

// Helper function to extract text from JSX for SEO schema
const extractTextFromNode = (node: string | ReactNode): string => {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!node) return '';
  
  // For React elements, we extract the text content
  if (typeof node === 'object' && 'props' in node) {
    const { children } = node.props || {};
    if (!children) return '';
    if (Array.isArray(children)) {
      return children.map(extractTextFromNode).join(' ');
    }
    return extractTextFromNode(children);
  }
  
  return '';
};

interface SEOSchemaProps {
  type: 'FAQPage' | 'BlogPosting' | 'MedicalProcedure' | 'WebPage';
  canonical: string;
  faqs?: FAQItem[];
  article?: {
    headline: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
  };
  medicalProcedure?: {
    name: string;
    description: string;
    procedureType?: string;
  };
}

export const useSEOSchema = (props: SEOSchemaProps) => {
  const { type, canonical, faqs, article, medicalProcedure } = props;
  const fullUrl = `${SITE_URL}${canonical}`;

  const generateFAQSchema = () => {
    if (!faqs || faqs.length === 0) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": extractTextFromNode(faq.answer)
        }
      }))
    };
  };

  const generateArticleSchema = () => {
    if (!article) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.headline,
      "description": article.description,
      "image": article.image.startsWith('http') ? article.image : `${SITE_URL}${article.image}`,
      "datePublished": article.datePublished,
      "dateModified": article.dateModified || article.datePublished,
      "author": {
        "@type": "Organization",
        "name": "Stomatologie MedStom Piatra Neamț",
        "url": SITE_URL
      },
      "publisher": {
        "@type": "Organization",
        "name": "Stomatologie MedStom Piatra Neamț",
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": "https://lovable.dev/opengraph-image-p98pqg.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullUrl
      }
    };
  };

  const generateMedicalProcedureSchema = () => {
    if (!medicalProcedure) return null;

    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": medicalProcedure.name,
      "description": medicalProcedure.description,
      "procedureType": medicalProcedure.procedureType || "Dental",
      "bodyLocation": "Mouth",
      "medicineSystem": "https://schema.org/TraditionalChinese"
    };
  };

  const generateWebPageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": document.title,
      "url": fullUrl,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Stomatologie MedStom Piatra Neamț",
        "url": SITE_URL
      }
    };
  };

  const getSchemaByType = () => {
    switch (type) {
      case 'FAQPage':
        return generateFAQSchema();
      case 'BlogPosting':
        return generateArticleSchema();
      case 'MedicalProcedure':
        return generateMedicalProcedureSchema();
      case 'WebPage':
        return generateWebPageSchema();
      default:
        return null;
    }
  };

  const schema = getSchemaByType();

  return (
    <Helmet>
      <link rel="canonical" href={fullUrl} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

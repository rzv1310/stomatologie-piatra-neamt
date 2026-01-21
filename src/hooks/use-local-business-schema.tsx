import { Helmet } from "react-helmet";
import { SITE_URL } from "@/config/routes";

interface LocalBusinessSchemaProps {
  serviceName: string;
  serviceDescription: string;
  path: string;
  medicalSpecialty?: string;
}

export const useLocalBusinessSchema = ({
  serviceName,
  serviceDescription,
  path,
  medicalSpecialty
}: LocalBusinessSchemaProps) => {
  const fullUrl = `${SITE_URL}${path}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness"],
    "name": "Stomatologie MedStom Piatra Neamț",
    "description": serviceDescription,
    "url": fullUrl,
    "image": "https://stomatologiepiatraneamt.ro/social-image.png",
    "logo": {
      "@type": "ImageObject",
      "url": "https://stomatologiepiatraneamt.ro/favicon.png",
      "width": 512,
      "height": 512
    },
    "telephone": "+40333630005",
    "priceRange": "$$",
    "hasMap": {
      "@type": "Map",
      "url": "https://www.google.com/maps?cid=5933877193378005885"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Ana Ipătescu 9",
      "addressLocality": "Piatra Neamț",
      "postalCode": "610120",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.9337515,
      "longitude": 26.374023
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "10"
    },
    ...(medicalSpecialty && {
      "medicalSpecialty": {
        "@type": "MedicalSpecialty",
        "name": medicalSpecialty
      }
    }),
    "availableService": {
      "@type": "MedicalProcedure",
      "name": serviceName,
      "url": fullUrl
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

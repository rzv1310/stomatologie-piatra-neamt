import { Helmet } from "react-helmet";
import { SITE_URL } from "@/config/routes";
import { ORG_ID, WEBSITE_ID } from "@/config/schema-ids";

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

  // Page-level node only; the clinic itself is referenced by its stable @id.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${fullUrl}#webpage`,
    "url": fullUrl,
    "name": serviceName,
    "description": serviceDescription,
    "isPartOf": { "@id": WEBSITE_ID },
    "about": { "@id": ORG_ID },
    ...(medicalSpecialty && { "specialty": { "@type": "MedicalSpecialty", "name": medicalSpecialty } }),
    "mainEntity": { "@id": `${fullUrl}#procedure` }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

import { Helmet } from "react-helmet";
import { SITE_URL } from "@/config/routes";
import { ORG_ID, WEBSITE_ID, type MedicalSpecialtyValue } from "@/config/schema-ids";

interface LocalBusinessSchemaProps {
  serviceName: string;
  serviceDescription: string;
  path: string;
  specialties?: MedicalSpecialtyValue[];
}

export const useLocalBusinessSchema = ({
  serviceName,
  serviceDescription,
  path,
  specialties = ["Dentistry"]
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
    "specialty": specialties.map((s) => `https://schema.org/${s}`),
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

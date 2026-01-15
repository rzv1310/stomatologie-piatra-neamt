import { Helmet } from "react-helmet";
import { SITE_URL } from "@/config/routes";

interface Review {
  author: string;
  reviewBody: string;
  ratingValue: number;
}

interface AggregateRatingSchemaProps {
  ratingValue: string;
  reviewCount: string;
  reviews?: Review[];
}

export const useAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  reviews = []
}: AggregateRatingSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stomatologie MedStom Piatra Neamț",
    "url": SITE_URL,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    ...(reviews.length > 0 && {
      "review": reviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "reviewBody": review.reviewBody,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.ratingValue,
          "bestRating": "5",
          "worstRating": "1"
        }
      }))
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Default values for the clinic
export const CLINIC_RATING = {
  ratingValue: "5.0",
  reviewCount: "10"
};

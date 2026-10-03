import { Helmet } from "react-helmet";

const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", ...data })}
    </script>
  </Helmet>
);

export default JsonLd;

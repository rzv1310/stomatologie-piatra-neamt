import { useDynamicSEO, type DynamicSEOProps } from "@/hooks/use-dynamic-seo";

/**
 * Single source of page metadata: title, description, canonical, robots, OG, Twitter.
 * `path` must match the route in src/config/routes.ts.
 */
const PageSEO = (props: DynamicSEOProps) => useDynamicSEO(props);

export default PageSEO;

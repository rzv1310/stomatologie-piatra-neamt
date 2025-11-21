import { useMemo } from "react";
import { SITE_URL } from "@/config/routes";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export const useBreadcrumbSchema = (items: BreadcrumbItem[]) => {
  return useMemo(() => {
    const itemListElement = items.map((item, index) => {
      const position = index + 1;
      const isLast = index === items.length - 1;
      
      return {
        "@type": "ListItem",
        position,
        name: item.label,
        ...(item.href && !isLast ? { item: `${SITE_URL}${item.href}` } : {})
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement
    };
  }, [items]);
};

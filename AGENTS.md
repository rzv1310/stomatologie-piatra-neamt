# Project rules

- Every page renders `<PageSEO>` (src/components/PageSEO.tsx) with the path from src/config/routes.ts; no other code emits title, description, canonical, og:* or twitter:* — one source avoids duplicate/stale tags.
- Static head tags in index.html carry `data-react-helmet="true"` so Helmet replaces them instead of duplicating them on navigation.
- `useSEOSchema` emits JSON-LD only, never canonical — canonical belongs to PageSEO.
- The full organization (Dentist) and WebSite JSON-LD live only in index.html with stable `@id`s from src/config/schema-ids.ts; page schema references them by `@id` and FAQ/ItemList appear only on the page whose content they describe — avoids duplicated or misplaced schema on SPA fallback routes.
- Blog article dates live only in src/config/blog-articles.ts (ISO) and every display/meta/JSON-LD reads from it — prevents date drift between list, page and schema.
- Schema enum values (MedicalSpecialty, procedure subtypes) are typed unions in src/config/schema-ids.ts; no free-text values in enum properties and no self-served rating/review markup — keeps markup valid and policy-compliant.

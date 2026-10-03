# Project rules

- Every page renders `<PageSEO>` (src/components/PageSEO.tsx) with the path from src/config/routes.ts; no other code emits title, description, canonical, og:* or twitter:* — one source avoids duplicate/stale tags.
- Static head tags in index.html carry `data-react-helmet="true"` so Helmet replaces them instead of duplicating them on navigation.
- `useSEOSchema` emits JSON-LD only, never canonical — canonical belongs to PageSEO.
- The full organization (Dentist) and WebSite JSON-LD live only in index.html with stable `@id`s from src/config/schema-ids.ts; page schema references them by `@id` and FAQ/ItemList appear only on the page whose content they describe — avoids duplicated or misplaced schema on SPA fallback routes.

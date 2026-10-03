# Project rules

- Every page renders `<PageSEO>` (src/components/PageSEO.tsx) with the path from src/config/routes.ts; no other code emits title, description, canonical, og:* or twitter:* — one source avoids duplicate/stale tags.
- Static head tags in index.html carry `data-react-helmet="true"` so Helmet replaces them instead of duplicating them on navigation.
- `useSEOSchema` emits JSON-LD only, never canonical — canonical belongs to PageSEO.

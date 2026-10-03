# Project rules

- Every page renders `<PageSEO>` (src/components/PageSEO.tsx) with the path from src/config/routes.ts; no other code emits title, description, canonical, og:* or twitter:* — one source avoids duplicate/stale tags.
- Static head tags in index.html carry `data-react-helmet="true"` so Helmet replaces them instead of duplicating them on navigation.
- `useSEOSchema` emits JSON-LD only, never canonical — canonical belongs to PageSEO.
- The full organization (Dentist) and WebSite JSON-LD live only in index.html with stable `@id`s from src/config/schema-ids.ts; page schema references them by `@id` and FAQ/ItemList appear only on the page whose content they describe — avoids duplicated or misplaced schema on SPA fallback routes.
- Blog article dates live only in src/config/blog-articles.ts (ISO) and every display/meta/JSON-LD reads from it — prevents date drift between list, page and schema.
- Schema enum values (MedicalSpecialty, procedure subtypes) are typed unions in src/config/schema-ids.ts; no free-text values in enum properties and no self-served rating/review markup — keeps markup valid and policy-compliant.
- Routes live as plain data in src/config/route-registry.ts (no React, relative imports only); routes.ts maps them to components, and the Vite plugin emits sitemap.xml from it at build — one list for router, sitemap and scripts; `lastmod` only from real content dates, never build time.
- Site verification (scripts/verify-site.ts) keeps fallback, render, metadata, redirects and not-found as separate checks; a 200 on an unknown URL is reported as SOFT-404 warning, never pass — SPA hosting cannot prove a real 404/301.
- Declared image sizes (icons, og:image, schema logo) must equal the real file sizes; scripts/verify-images.ts fails on mismatch — avoids misleading crawlers and oversized downloads.
- Business identity (name, NAP, geo, hours, domain, email) lives only in src/config/business.ts; pages import it, the Vite plugin injects it into index.html JSON-LD/meta and renders llms.txt/robots.txt from src/content templates, and scripts/verify-business.ts fails on hardcoded copies — prevents contradicting details. WhatsApp is a separate field on purpose.
- Bun is the only package manager (bun.lockb, `packageManager` in package.json); never add package-lock.json — one lockfile keeps installs reproducible locally and in CI.
- `bun run check` (typecheck + lint + vitest + build + verify:images + verify:business) is the quality gate run by .github/workflows/ci.yml; a successful Vite build alone is not a typecheck.
- Animations (GSAP, CSS, smooth scroll) must be skipped under prefers-reduced-motion; global scroll-to-top on back/forward is intentional (owner decision).

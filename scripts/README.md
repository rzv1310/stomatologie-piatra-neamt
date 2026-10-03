# Sitemap și scripturi de verificare

Sursa unică a rutelor este `src/config/route-registry.ts` (doar date, fără React). O folosesc:
- routerul aplicației (`src/config/routes.ts`)
- sitemapul, generat automat la fiecare `vite build` (`dist/sitemap.xml`) și servit în dev la `/sitemap.xml`
- scripturile de mai jos

`lastmod` apare doar când există o dată reală de modificare (articolele de blog, din `src/config/blog-articles.ts`). Nu se folosește niciodată data rulării.

## Comenzi
```bash
npm run sitemap         # afișează sitemapul generat
npm run check:sitemap   # fiecare URL din sitemap trebuie să răspundă direct 2xx (orice 4xx/5xx sau redirect = eșec)
npm run verify:site     # fallback, randare, metadata, redirecturi și pagina 404 (BASE_URL opțional)
```

Pagină nouă: adaug-o în `route-registry.ts` (și componenta în `routes.ts`); sitemapul se actualizează singur.

## verify:site
Necesită o singură dată: `npx playwright install chromium`.

Verificări separate: fallback (HTTP 200 + #root), randare (h1, fără erori, nu ecranul 404), metadata (canonical + titlu unic), redirecturi (client-side, nu HTTP 301) și URL inexistent.
Pe hostingul Lovable un URL inexistent răspunde 200 și afișează ecranul 404 cu noindex: raportat ca **SOFT-404 (WARN)**, niciodată ca PASS.

# Sitemap și scripturi de verificare

Sursa unică a rutelor este `src/config/route-registry.ts` (doar date, fără React). O folosesc:
- routerul aplicației (`src/config/routes.ts`)
- sitemapul, generat automat la fiecare `vite build` (`dist/sitemap.xml`) și servit în dev la `/sitemap.xml`
- scripturile de mai jos

`lastmod` apare doar când există o dată reală de modificare (articolele de blog, din `src/config/blog-articles.ts`). Nu se folosește niciodată data rulării.

## Comenzi
```bash
npm run sitemap         # afișează sitemapul generat
npm run check:sitemap   # după build: verifică fiecare URL din dist/sitemap.xml pe site-ul live
npm run test:spa        # verifică fallbackul SPA pentru toate rutele (PREVIEW_URL opțional)
```

Pagină nouă: adaug-o în `route-registry.ts` (și componenta în `routes.ts`); sitemapul se actualizează singur.

# O singură componentă SEO pentru toate paginile

## Ce s-a confirmat în cod
- `index.html` are `og:title`, `og:description`, `twitter:title`, `twitter:description` de două ori (liniile 19–28 și 529–532), cu texte diferite.
- `index.html` nu are `<link rel="canonical">`.
- `useDynamicSEO` (title, description, canonical, robots, OG, Twitter) este folosit în 19 pagini, dar nu în Acasă, Servicii, Tarife și nici în cele 6 articole.
- `useSEOSchema` scoate și el un `<link rel="canonical">`. Paginile care folosesc ambele hookuri riscă să aibă două canonicaluri.
- Articolele își setează title/description direct cu Helmet, fără OG/Twitter.

## Ce se schimbă
1. **Componenta `<PageSEO>`** (`src/components/PageSEO.tsx`) devine singura sursă pentru title, description, canonical, robots, OG, Twitter și article:*. Primește `path` din `src/config/routes.ts`. Exact aceeași cale ajunge în canonical, og:url și twitter:url.
2. **`useSEOSchema` nu mai scoate canonical.** Păstrează doar JSON-LD. `mainEntityOfPage` rămâne construit din aceeași cale.
3. **Fiecare pagină folosește `<PageSEO>`:**
   - Acasă (`/`): title și description ca în index.html.
   - Servicii (`/servicii`) și Tarife (`/tarife`): title și description proprii.
   - Cele 6 articole: `type="article"` și datele publicării/modificării. Elimin blocurile Helmet separate cu title/description.
   - Cele 19 pagini care folosesc acum `useDynamicSEO` trec pe `<PageSEO>`. Hookul vechi rămâne doar ca strat subțire de compatibilitate sau este șters.
4. **`index.html`:**
   - Elimin al doilea set duplicat de la liniile 529–532.
   - Păstrez un singur set static pentru Acasă: title, description, og:*, twitter:*. Adaug canonical-ul `https://stomatologiepiatraneamt.ro/`.
   - Marchez etichetele statice cu `data-react-helmet="true"`. Așa Helmet le înlocuiește în loc să adauge dubluri la navigare.
5. **Regula în `AGENTS.md`:** fiecare pagină folosește `<PageSEO>` cu calea din `routes.ts`. Nicio altă componentă nu scoate title, description, canonical, og sau twitter.

## Verificare
- Verific HTML-ul inițial prin `curl /`: un singur exemplar din fiecare etichetă, plus canonical.
- Verific DOM-ul în Playwright pe traseul Acasă → Servicii → Tarife → un articol → Contact → înapoi la Acasă. După fiecare pas număr title, canonical, og:title, og:url, twitter:title și description. Fiecare trebuie să apară exact o dată, cu valorile paginii curente și fără resturi de la pagina anterioară.

## Limită (spusă onest)
Site-ul este o aplicație care se încarcă în browser. HTML-ul trimis de server conține doar metadatele statice de Acasă, pentru orice adresă. Google vede metadatele fiecărei pagini după ce rulează pagina. Facebook, WhatsApp și LinkedIn nu rulează pagina, așa că văd mereu previzualizarea de Acasă. Pentru previzualizări diferite pe fiecare pagină ar fi nevoie de randare pe server.

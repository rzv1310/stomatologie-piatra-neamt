# Corecții raport: robots duplicat, FAQ Acasă, imagini, verificări

## 1. Metadate duplicate (robots, author, publisher)
- În index.html, etichetele statice `robots`, `author`, `publisher` primesc `data-react-helmet="true"`, ca Helmet să le înlocuiască (nu dubleze).
- Verificare în browser pe Acasă și 404: exact o etichetă `robots`, `author`, `publisher`.

## 2. Schema FAQ pe Acasă
- Index.tsx generează FAQPage JSON-LD din `faqDataForSEO` (aceleași întrebări afișate), cu `@id` stabil din schema-ids, prin componenta JsonLd.
- Se șterge comentariul greșit „FAQPage schema is in index.html”.
- Verificare: FAQPage apare doar pe Acasă, dispare după navigare.

## 4. Redirecturi 301 / 404 reale
- Nu se pot rezolva din cod: găzduirea Lovable nu oferă configurare 301/404. Rămân redirecturi în browser + raportare SOFT-404 (deja documentat). Opțiune ulterioară: găzduire proprie cu reguli de server sau migrare la redare pe server.

## 5. Cookies
- Rămâne infrastructura, conform alegerii anterioare (fără analytics/marketing). Pregătire: `applyConsent` primește un registru simplu de „încărcătoare” (pornire/oprire) în locul TODO-urilor, testat cu Vitest (accept → pornește, retragere → oprește). Fără scripturi reale.

## 6. Verificarea imaginilor fără `magick`
- verify-images.ts folosește `sharp` (declarat ca devDependency) în loc de comanda externă. CI nu mai depinde de ImageMagick.

## 7. Verificări automate mai stricte
- verify-site.ts: eșec dacă există mai mult de un canonical, robots, description, og:url, author sau publisher pe pagină (pe toate rutele + 404).
- CI: job nou care instalează Chromium Playwright, pornește `vite preview` și rulează verify:site.
- GSAP: la resize se recalculează dimensiunile (ScrollTrigger refresh debounced); Safari rămâne de testat manual — nu se afirmă testat.

## Verificare finală
`bun run check` + verify:site local; raport cu ce a trecut și ce rămâne limitat de găzduire.

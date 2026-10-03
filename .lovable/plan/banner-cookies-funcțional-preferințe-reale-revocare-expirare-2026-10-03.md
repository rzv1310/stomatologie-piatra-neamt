# Banner cookies funcțional: preferințe reale, revocare, expirare

## Ce construim

### 1. Preferințe conectate la scripturi (infrastructură)
- Un modul central de consimțământ (`src/lib/consent.ts`) care:
  - citește/scrie preferințele într-un singur loc (localStorage), cu `JSON.parse` protejat prin try/catch și validare de structură — o valoare coruptă nu mai poate bloca site-ul;
  - expune funcții `hasConsent('analytics' | 'marketing')` și un eveniment prin care orice script extern pornește doar după accept și se oprește la retragere;
  - oferă puncte de conectare gata de folosit pentru Google Analytics / scripturi de marketing (se activează ulterior doar prin adăugarea ID-ului, fără alte modificări).

### 2. Versiune de politică + expirare
- Consimțământul salvează: versiunea politicii (ex. `1.0`), data alegerii, preferințele.
- Bannerul reapare automat dacă: versiunea politicii s-a schimbat SAU au trecut 12 luni de la alegere.
- Versiunea apare menționată în banner și în Politica de Cookies.

### 3. Redeschidere / retragere
- Link nou „Setări cookies" în footer (lângă Politica cookies) care redeschide bannerul oricând, cu preferințele curente precompletate.
- Utilizatorul poate schimba sau retrage orice categorie (mai puțin cele necesare) și salvează — retragerea oprește scripturile respective.

### 4. Harta
- Harta OpenStreetMap rămâne încărcată mereu, declarată în Politica de Cookies drept resursă necesară funcționării (fără cookie-uri de urmărire). Adăugăm o notă scurtă în pagina Politica de Cookies.

## Verificare (browser automat)
- Prima vizită: bannerul apare; „Doar necesare" / „Accept toate" / „Salvează preferințele" salvează corect și închid bannerul.
- Reîncărcare: bannerul nu mai apare; preferințele persistă.
- Linkul din footer redeschide bannerul cu valorile curente; modificarea și salvarea funcționează.
- Valoare coruptă în localStorage: site-ul funcționează și bannerul reapare curat.
- Versiune schimbată / dată expirată: bannerul reapare.

## Detalii tehnice
- Fișiere: `src/lib/consent.ts` (nou), `src/components/CookieConsent.tsx` (rescris peste modul), `src/components/Footer.tsx` (link redeschidere), `src/pages/PoliticaCookies.tsx` (versiune + notă hartă).
- Fără scripturi externe reale adăugate acum — doar mecanismul de pornire/oprire, conform alegerii tale.

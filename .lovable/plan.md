# Plan: Corectare canonical greșit pe 4 articole de blog

## Problema
Patru articole de blog declară în cod căi canonice scurte care nu există în router, sitemap sau redirecturi. Aceeași valoare greșită alimentează și `mainEntityOfPage` din schema BlogPosting (hook-ul `useSEOSchema` folosește `canonical` pentru ambele), deci o singură corectare rezolvă ambele.

## Modificări

### 1. `src/pages/blog/AlbireDentara.tsx` (liniile 30 și 41)
- De la: `canonical: '/blog/albire-dentara'`
- La: `canonical: '/blog/albire-dentara-piatra-neamt'`

### 2. `src/pages/blog/AparatDentarAdulti.tsx` (liniile 30 și 41)
- De la: `canonical: '/blog/aparat-dentar-adulti'`
- La: `canonical: '/blog/aparat-dentar-adulti-piatra-neamt'`

### 3. `src/pages/blog/Parodontoza.tsx` (liniile 40 și 52)
- De la: `canonical: '/blog/parodontoza'`
- La: `canonical: '/blog/parodontoza-tratament'`

### 4. `src/pages/blog/UrgenteDentare.tsx` (liniile 40 și 52)
- De la: `canonical: '/blog/urgente-dentare'`
- La: `canonical: '/blog/urgente-dentare-dinte-rupt'`

## Verificare
- Confirm că nu există alte articole de blog cu căi scurte (celelalte două: PrimaVizitaCopil, MaseauaMinte).
- Grep final pe `canonical: '/blog/` în toate paginile pentru a valida că toate căile corespund rutelor din `src/config/routes.ts`.

## Detalii tehnice
- Fiecare fișier are două apeluri `useSEOSchema` (unul pentru BlogPosting, unul pentru FAQPage) — ambele primesc aceeași valoare și trebuie corectate.
- Nu sunt necesare redirecturi noi: căile scurte nu au fost niciodată rute reale, deci nu există trafic de redirecționat.
- Sitemap-ul și router-ul sunt deja corecte; doar cele 4 fișiere erau dezechilibrate.

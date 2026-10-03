# O singură sursă pentru datele clinicii

Hotărâri: program Luni–Vineri 09:00–19:00, închis sâmbăta și duminica; locația clinicii este 46.9337515, 26.374023 (aceeași ca în schemă); numărul de WhatsApp rămâne separat.

## Pași
1. **Configurație comună** `src/config/business.ts` (date simple, fără React): nume, telefon (afișat + tel:), email, domeniu, adresă, coordonate, program (zile + ore), link Google Maps, plus `whatsapp` separat.
2. **Pagini și componente** — Contact, Footer, Navigation, HeroContactBox, NotFound, Index, Tarife, Despre, paginile de servicii și articolele de blog citesc telefonul, adresa și programul din configurație, în loc de text scris direct.
3. **Hartă** — pinul clinicii din AttractionMap folosește coordonatele din configurație (mutat de la 46.9310, 26.3697 la punctul corect).
4. **Scheme** — datele Dentist din index.html (nume, telefon, adresă, geo, program) sunt generate din configurație la build de pluginul Vite existent, la fel ca sitemap-ul; schemele de pagină citesc domeniul din configurație.
5. **Fișiere publice** — llms.txt generat la build din configurație; sâmbăta apare ca închis.
6. **Verificare** — script care caută în `src/`, `index.html` și `public/` telefonul, coordonatele și programul scrise direct în afara configurației și eșuează dacă le găsește sau dacă apar valori diferite; verificare în preview pe Contact, hartă și schema din pagină.

## Tehnic
- Regulă nouă în AGENTS.md: identitatea afacerii (NAP, geo, program, domeniu) trăiește doar în `src/config/business.ts`; WhatsApp este câmp separat intenționat.
- Valorile alese se salvează în memoria proiectului.

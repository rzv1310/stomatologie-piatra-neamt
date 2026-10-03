# Uniformizare program: Luni - Vineri 09:00 - 19:00 pe toate paginile

## Stare actuală (verificată)

Configurația centrală `src/config/business.ts` are corect `09:00 - 19:00`, Luni-Vineri, închis weekend. Majoritatea paginilor (Footer, Acasă, Contact, Urgente parțial, schema JSON-LD, llms.txt) citesc de acolo și sunt corecte.

Două locuri contrazic programul:

1. **`src/pages/Urgente.tsx:504`** — microcopy hardcodat: `✓ Luni-Vineri 8:00-20:00` (ore greșite, nu folosește configurația).
2. **`src/pages/blog/UrgenteDentare.tsx:38`** — FAQ afirmă „serviciu de urgențe disponibil non-stop" și „program special pentru urgențe și în weekend" — contrazice „închis sâmbătă și duminică".

## Modificări

1. **Urgente.tsx** — înlocuiesc textul hardcodat cu `✓ ${BUSINESS.hours.short}` (rezultat: `✓ Luni-Vineri 09:00-19:00`).
2. **UrgenteDentare.tsx (FAQ)** — rescriu răspunsul: urgențele se primesc în programul de lucru (Luni-Vineri 09:00-19:00), fără mențiuni de „non-stop" sau weekend; păstrez linkul telefonic.
3. **Verificare** — rulez `bun run check` (typecheck + lint + teste + build + verificări) și confirm vizual în preview cele două pagini.

## Detalii tehnice

- Nicio schimbare în `business.ts` — valorile de acolo rămân sursa unică.
- Nu ating alte mențiuni de „24 de ore" / „6 luni" din conținut — sunt intervale medicale, nu programul clinicii.

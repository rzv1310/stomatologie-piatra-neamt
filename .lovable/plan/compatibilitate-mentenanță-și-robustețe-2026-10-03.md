# Compatibilitate, mentenanță și robustețe

Hotărâri: derularea rămâne mereu sus (și la Înapoi/Înainte), intenționat; se adaugă teste și verificare automată pe GitHub.

## Pași
1. **Dependențe** — elimin `react-leaflet` (nefolosit; harta folosește Leaflet direct), rămâne React 18 fără conflicte. Păstrez un singur manager de pachete (bun, `bun.lockb`), șterg `package-lock.json`, declar `packageManager` în package.json.
2. **Scripturi** — `typecheck` (tsgo/tsc pe tsconfig.app + node), `test` (vitest), `check` = typecheck + lint + test + build; documentez că build reușit nu înseamnă typecheck reușit.
3. **Teste** — Vitest + Testing Library: configurația afacerii, consimțământul cookies (salvare, refuz, revocare, valoare coruptă), paginarea blogului din URL, ErrorBoundary.
4. **CI GitHub** — `.github/workflows/ci.yml`: bun install --frozen-lockfile, typecheck, lint, test, build, verify-images, verify-business.
5. **ErrorBoundary** — componentă în jurul rutelor, cu mesaj în română și buton de reîncărcare.
6. **Paginare blog** — pagina curentă în URL (`/blog?pagina=2`), păstrată la refresh și la Înapoi; valori invalide revin la 1.
7. **Carusel** — dezabonare explicită a listenerului `select` (MobileServicesCarousel; în Index nu există listener, verific și acolo).
8. **Derulare** — păstrez scriptul global, cu comentariu care declară comportamentul ca intenționat.
9. **Accesibilitate** — widgetul salvează preferințele (mărime text, contrast) în localStorage cu citire protejată și le aplică la încărcare; `prefers-reduced-motion` dezactivează animațiile GSAP și derularea animată. Fără afirmații de conformitate completă.

## Tehnic
- Reguli noi în AGENTS.md: un singur manager de pachete (bun); `check` e poarta de calitate; animațiile respectă reduced-motion.
- Activarea CI necesită proiectul conectat la GitHub.

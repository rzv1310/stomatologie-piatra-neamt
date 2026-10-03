# Optimizare imagini: dimensiuni reale = dimensiuni declarate

Confirmat: social-image.png 1344x768 (1 MB) declarat 1200x630; favicon.png și apple-touch-icon.png 1920x1920 (650 KB) declarate 16/32/180, logo schema 512x512; AttractionMap importă 7 imagini originale (jpg/png); fundaluri CSS pe paginile de servicii și Acasă.

## Pași
1. **Imagine social** — crop la exact 1200x630, export JPG (~150–250 KB) `public/social-image.jpg`; actualizez og:image, twitter:image, og:image:type, schema `image`.
2. **Iconuri** — generez din aceeași sursă: `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` 180x180, `logo-512.png` 512x512. HTML și logo-ul din schema indică fișierul cu dimensiunea declarată.
3. **AttractionMap** — importuri prin imagetools la lățimea afișată (`?w=400&format=webp`), cu `loading="lazy"`, `decoding="async"`, width/height.
4. **Fundaluri CSS** — fundalurile sub pliere devin `<img>` absolut poziționat cu `loading="lazy"`; cel din primul ecran rămâne eager cu `fetchpriority="high"` și variantă webp redimensionată.
5. **srcset/AVIF** — componentă `ResponsiveImage` (`<picture>` cu AVIF + WebP, srcset 400/800/1200, `sizes`) aplicată pe imaginile mari de conținut (hero-uri, echipă, blog).
6. **Verificare** — script care compară dimensiunea reală a fiecărei imagini din `public/` cu cea declarată în HTML/schema (eșec la nepotrivire) și raport Playwright: bytes descărcați la încărcarea inițială pe Acasă, înainte/după, plus mărimea bundle-ului imagini din build.

## Tehnic
- Regulă nouă în AGENTS.md: dimensiunile declarate (OG, icons, logo schema) trebuie să fie egale cu cele reale, verificate de script.
- Nu raportez câștiguri de trafic real; doar bytes măsurați local.

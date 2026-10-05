# Eroare CI: verify:images cere `magick` pe GitHub Actions

## Cauza
Eroarea vine dintr-o versiune veche a `scripts/verify-images.ts` care apelează comanda externă `magick identify` — ImageMagick nu există pe runnerul GitHub, de unde `spawnSync magick ENOENT`.

În proiectul curent scriptul a fost deja rescris să folosească biblioteca `sharp` (declarată în package.json), fără comenzi externe. Nicio referință la `magick` nu mai există local. Deci codul de pe GitHub este mai vechi decât cel din Lovable — fixul există, dar nu a ajuns în repository.

## Pași
1. Sincronizez proiectul cu GitHub (push al stării curente, care include verify-images.ts pe bază de sharp și workflow-ul CI).
2. Verific că pe branch-ul principal scriptul nu mai conține `magick`.
3. CI rulează din nou: pasul „Image sizes match declarations" trebuie să treacă fără ImageMagick.

## Notă
Dacă proiectul nu este conectat la GitHub din Lovable, conectarea se face din interfață (butonul GitHub), apoi push-ul se poate face de acolo.

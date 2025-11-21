# Scripts pentru generare automată Sitemap

## generate-sitemap.ts

Script automat pentru generarea fișierului `public/sitemap.xml` bazat pe configurația de rute din `src/config/routes.ts`.

### Instalare dependințe necesare

```bash
npm install --save-dev ts-node @types/node
```

### Cum să rulezi scriptul

```bash
npx ts-node scripts/generate-sitemap.ts
```

### Când să regenerezi sitemap-ul

Trebuie să rulezi acest script ori de câte ori:
- ✅ Adaugi o nouă pagină/rută în aplicație
- ✅ Modifici URL-ul unei pagini existente
- ✅ Schimbi prioritățile sau frecvențele de actualizare
- ✅ Înainte de deploy în producție

### Integrare automată în build process

Pentru a rula scriptul automat la fiecare build, adaugă în `package.json`:

```json
{
  "scripts": {
    "generate-sitemap": "ts-node scripts/generate-sitemap.ts",
    "prebuild": "npm run generate-sitemap",
    "build": "vite build"
  }
}
```

Astfel, sitemap-ul va fi regenerat automat înainte de fiecare build de producție.

### Configurare rute

Toate rutele sunt definite în `src/config/routes.ts`. Pentru a adăuga o nouă pagină:

1. Adaugă componenta în `src/config/routes.ts`
2. Configurează `priority` și `changefreq`
3. Rulează `npm run generate-sitemap`

### Avantaje sistem automat

✅ **Zero mentenanță manuală** - sitemap-ul se generează automat din cod  
✅ **Sincronizare perfectă** - rutele din App și sitemap sunt mereu identice  
✅ **SEO metadata centralizat** - priorități și frecvențe într-un singur loc  
✅ **Lazy loading** - performanță îmbunătățită prin încărcare diferită  
✅ **Type safety** - TypeScript previne erorile de configurare  

# Reparare hartă „Locații în apropierea clinicii"

## Cauza confirmată
Fundalul hărții vine de la serverul de tile-uri CartoDB Voyager. Verificat direct: pentru zona Piatra Neamț (mai multe niveluri de zoom și stiluri CartoDB), serverul returnează acum imagini PNG aproape complet albe (~16 culori unice, medie RGB 247,247,246). Pinurile și popup-urile sunt generate de codul nostru și funcționează — de aceea se văd doar ele. Tile-urile OpenStreetMap standard pentru exact aceeași zonă au conținut real (testat).

## Ce se schimbă
În `src/components/AttractionMap.tsx`, stratul de fundal al hărții se înlocuiește de la CartoDB Voyager la OpenStreetMap standard (`https://tile.openstreetmap.org/{z}/{x}/{y}.png`), cu atribuirea OSM corespunzătoare. Pinurile, popup-urile cu poze, butonul de centrare pe clinică și legenda rămân neschimbate.

## Verificare
- Deschid homepage-ul în browser automat, accept cookie-urile, derulez la secțiune și fotografiez doar harta: trebuie să se vadă străzile orașului, nu fundal gri.
- Verific că tile-urile se încarcă cu status 200 și că nu apar erori în consolă.

## Detalii tehnice
- O singură modificare: URL-ul `L.tileLayer(...)` + textul de atribuire din `AttractionMap.tsx` (liniile 134-136).
- OpenStreetMap permite utilizarea tile-urilor cu atribuire; traficul unui site de prezentare local se încadrează în politica lor de utilizare.

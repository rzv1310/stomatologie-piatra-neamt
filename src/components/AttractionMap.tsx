import { useEffect, useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import telegondolaPiatraNeamt from '@/assets/telegondola-piatra-neamt.jpg';
import turnulStefanCelMare from '@/assets/turnul-stefan-cel-mare-piatra-neamt.webp';
import teatrulTineretului from '@/assets/teatrul-tineretului-piatra-neamt.png';
import garaPiatraNeamt from '@/assets/gara-piatra-neamt.png';
import muzeuIstorie from '@/assets/muzeu-istorie-piatra-neamt.jpg';
import clinicLocation from '@/assets/clinic-location-street-view.png';

// Coordonatele pentru locații din Piatra Neamț
const locations = {
  clinic: {
    coords: [46.9310, 26.3697] as [number, number],
    name: "MedStom",
    description: "Clinică de stomatologie în Piatra Neamț",
    distance: "",
    googleMapsUrl: "https://maps.app.goo.gl/gVUQRZTgJe7eAo9m7",
    image: clinicLocation
  },
  gara: {
    coords: [46.9274, 26.3615] as [number, number],
    name: "Gara Piatra Neamț",
    description: "Stație de tren",
    distance: "~4 min cu mașina",
    googleMapsUrl: "https://maps.app.goo.gl/WKbsjG9kXRmetVoc8",
    image: garaPiatraNeamt
  },
  telegondola: {
    coords: [46.9264, 26.3613] as [number, number],
    name: "Stația Telegondolei",
    description: "Atracție turistică",
    distance: "~20 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/PDLWsWxuW16u7NHf8",
    image: telegondolaPiatraNeamt
  },
  teatru: {
    coords: [46.9322, 26.368] as [number, number],
    name: "Teatrul Tineretului",
    description: "Teatru",
    distance: "~7 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/cuaVP9FMH3YdoN7B9",
    image: teatrulTineretului
  },
  curtea: {
    coords: [46.93333, 26.36806] as [number, number],
    name: "Curtea Domnească",
    description: "Monument istoric",
    distance: "~8 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/zZzQRZTgJe7eAo9m7"
  },
  turn: {
    coords: [46.93333, 26.36806] as [number, number],
    name: "Turnul lui Ștefan cel Mare",
    description: "Monument istoric - Face parte din Curtea Domnească",
    distance: "~8 min de mers\n~2 min cu mașina",
    googleMapsUrl: "https://maps.app.goo.gl/udGY8igXWrfXzL2G8",
    image: turnulStefanCelMare
  },
  muzeu: {
    coords: [46.9283, 26.3694] as [number, number],
    name: "Muzeul de Istorie și Arheologie Piatra-Neamț",
    description: "Muzeu istoric",
    distance: "~3 min cu mașina",
    googleMapsUrl: "https://maps.app.goo.gl/msDyGD73KMtg5JJKA",
    image: muzeuIstorie
  }
};

// Iconuri personalizate pentru markere
const clinicIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const attractionIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const AttractionMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Inițializare hartă
    const map = L.map(mapContainerRef.current, {
      scrollWheelZoom: false
    }).setView(locations.clinic.coords, 14);

    // Adăugare TileLayer CartoDB Voyager
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);

    // Adăugare marker pentru clinică
    const clinicMarker = L.marker(locations.clinic.coords, { icon: clinicIcon }).addTo(map);
    
    const clinicImageHtml = (locations.clinic as any).image 
      ? `<img src="${(locations.clinic as any).image}" alt="${locations.clinic.name}" class="w-full h-32 object-cover rounded-md mb-2" />`
      : '';
    
    clinicMarker.bindPopup(`
      <div class="p-2 min-w-[200px]">
        ${clinicImageHtml}
        <h4 class="font-bold text-lg mb-1">${locations.clinic.name}</h4>
        <p class="text-sm text-gray-600 mb-2">${locations.clinic.description}</p>
        <a 
          href="${locations.clinic.googleMapsUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 text-primary hover:underline text-sm"
        >
          Navigare Google Maps
        </a>
      </div>
    `);

    // Adăugare markere pentru atracții
    Object.entries(locations).forEach(([key, location]) => {
      if (key === 'clinic') return;
      
      const marker = L.marker(location.coords, { icon: attractionIcon }).addTo(map);
      
      const imageHtml = (location as any).image 
        ? `<img src="${(location as any).image}" alt="${location.name}" class="w-full h-32 object-cover rounded-md mb-2" />`
        : '';
      
      marker.bindPopup(`
        <div class="p-2 min-w-[200px]">
          ${imageHtml}
          <h4 class="font-bold text-base mb-1">${location.name}</h4>
          <p class="text-sm text-gray-600">${location.description}</p>
          ${location.distance ? `<p class="text-sm font-medium text-primary mt-1">${location.distance}</p>` : ''}
          <a 
            href="${location.googleMapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2 block"
          >
            Navigare Google Maps
          </a>
        </div>
      `, {
        maxWidth: 250
      });
    });

    mapRef.current = map;

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-heading">Locații în apropierea clinicii</h3>
      </div>
      
      <div className="rounded-lg overflow-hidden shadow-lg border border-border h-[400px] md:h-[500px]">
        <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-muted-foreground">Clinica Medstom</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <span className="text-muted-foreground">Atracții turistice</span>
        </div>
      </div>
    </div>
  );
};

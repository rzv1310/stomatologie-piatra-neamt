import { useEffect, useRef } from 'react';
import { MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import telegondolaPiatraNeamt from '@/assets/telegondola-piatra-neamt.jpg';
import turnulStefanCelMare from '@/assets/turnul-stefan-cel-mare-piatra-neamt.webp';
import teatrulTineretului from '@/assets/teatrul-tineretului-piatra-neamt.png';
import garaPiatraNeamt from '@/assets/gara-piatra-neamt.png';
import muzeuIstorie from '@/assets/muzeu-istorie-piatra-neamt.jpg';
import clinicLocation from '@/assets/clinic-location-street-view.png';
import shoppingCityPiatraNeamt from '@/assets/shopping-city-piatra-neamt.png';

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
    coords: [46.92752, 26.36079] as [number, number],
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
  },
  shoppingCity: {
    coords: [46.934774, 26.347928] as [number, number],
    name: "Shopping City Piatra-Neamț",
    description: "Mall / Centru comercial",
    distance: "~7 min cu mașina",
    googleMapsUrl: "https://maps.app.goo.gl/UeDDP7eGr3AipPSR6",
    image: shoppingCityPiatraNeamt
  }
};

// Iconuri personalizate pentru markere
const orangeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 41" width="25" height="41">
  <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 9.4 12.5 28.5 12.5 28.5S25 21.9 25 12.5C25 5.6 19.4 0 12.5 0z" fill="#ff6b35" stroke="#d45527" stroke-width="1.5"/>
  <circle cx="12.5" cy="12.5" r="6" fill="white" opacity="0.9"/>
</svg>
`;

const clinicIcon = L.icon({
  iconUrl: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(orangeSvg),
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

  const centerOnClinic = () => {
    if (mapRef.current) {
      mapRef.current.setView(locations.clinic.coords, 14, {
        animate: true,
        duration: 1
      });
    }
  };

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
        ? `
          <div style="position: relative; height: 180px; overflow: hidden;">
            <img 
              src="${(locations.clinic as any).image}" 
              alt="${locations.clinic.name}" 
              style="width: 100%; height: 100%; object-fit: cover;"
            />
            <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 60px; background: linear-gradient(to top, rgba(255,107,53,0.6), transparent);"></div>
          </div>
        `
        : `<div style="background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%); height: 140px; display: flex; align-items: center; justify-content: center; font-size: 48px;">🦷</div>`;
    
    clinicMarker.bindPopup(`
      <div style="overflow: hidden;">
        ${clinicImageHtml}
        <div style="padding: 16px;">
          <h4 style="font-weight: 700; font-size: 18px; margin: 0 0 8px 0; color: hsl(var(--heading-color));">${locations.clinic.name}</h4>
          <p style="font-size: 14px; color: hsl(var(--text-color)); margin: 0 0 12px 0; line-height: 1.5;">${locations.clinic.description}</p>
          <a 
            href="${locations.clinic.googleMapsUrl}"
            target="_blank"
            rel="noopener noreferrer"
            style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #ff6b35 0%, #f97316 100%); color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; width: 100%; transition: transform 0.2s; min-height: 44px;"
            onmouseover="this.style.transform='translateY(-2px)'"
            onmouseout="this.style.transform='translateY(0)'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
            Navigare
          </a>
        </div>
      </div>
    `, {
      maxWidth: 280
    });

    // Adăugare markere pentru atracții
    Object.entries(locations).forEach(([key, location]) => {
      if (key === 'clinic') return;
      
      const marker = L.marker(location.coords, { icon: attractionIcon }).addTo(map);
      
      const getCategoryBadge = (desc: string) => {
        if (desc.includes('Monument')) return { icon: '🏛️', text: 'Monument istoric' };
        if (desc.includes('Muzeu')) return { icon: '🏛️', text: 'Muzeu' };
        if (desc.includes('Teatru')) return { icon: '🎭', text: 'Cultură' };
        if (desc.includes('Stație')) return { icon: '🚂', text: 'Transport' };
        if (desc.includes('Atracție')) return { icon: '🎢', text: 'Atracție turistică' };
        if (desc.includes('Mall') || desc.includes('Centru comercial')) return { icon: '🛒', text: 'Shopping' };
        return { icon: '📍', text: 'Locație' };
      };

      const badge = getCategoryBadge(location.description);
      
      const imageHtml = (location as any).image 
        ? `
          <div style="position: relative; height: 160px; overflow: hidden;">
            <img 
              src="${(location as any).image}" 
              alt="${location.name}" 
              style="width: 100%; height: 100%; object-fit: cover;"
            />
            <div style="position: absolute; top: 12px; right: 12px; background: rgba(59, 130, 246, 0.95); color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; backdrop-filter: blur(8px); display: flex; align-items: center; gap: 4px;">
              <span>${badge.icon}</span>
              <span>${badge.text}</span>
            </div>
          </div>
        `
        : `<div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); height: 140px; display: flex; align-items: center; justify-content: center; font-size: 48px;">${badge.icon}</div>`;
      
      const distanceIcon = location.distance.includes('mers') ? '🚶' : '🚗';
      const distanceHtml = location.distance 
        ? `
          <div style="border-top: 1px solid hsl(var(--border)); padding-top: 12px; margin-top: 12px;">
            <div style="display: flex; align-items: center; gap: 6px; font-size: 13px; color: hsl(var(--primary)); font-weight: 600;">
              <span style="font-size: 16px;">${distanceIcon}</span>
              <span>${location.distance}</span>
            </div>
          </div>
        `
        : '';
      
      marker.bindPopup(`
        <div style="overflow: hidden;">
          ${imageHtml}
          <div style="padding: 16px;">
            <h4 style="font-weight: 700; font-size: 16px; margin: 0 0 6px 0; color: hsl(var(--heading-color)); line-height: 1.3;">${location.name}</h4>
            <p style="font-size: 13px; color: hsl(var(--muted-foreground)); margin: 0; line-height: 1.5;">${location.description}</p>
            ${distanceHtml}
            <a 
              href="${location.googleMapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; width: 100%; margin-top: 12px; transition: transform 0.2s; min-height: 44px;"
              onmouseover="this.style.transform='translateY(-2px)'"
              onmouseout="this.style.transform='translateY(0)'"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>
              Navigare
            </a>
          </div>
        </div>
      `, {
        maxWidth: 280
      });
    });

    mapRef.current = map;

    // Închide popup-urile când se dă click în afara hărții
    const handleClickOutside = (event: MouseEvent) => {
      if (mapContainerRef.current && !mapContainerRef.current.contains(event.target as Node)) {
        map.closePopup();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
      
      <div className="rounded-lg overflow-hidden shadow-lg border border-border h-[400px] md:h-[500px] relative">
        <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
        <Button
          onClick={centerOnClinic}
          size="icon"
          className="absolute top-4 left-16 z-[1000] shadow-lg bg-orange-500 hover:bg-orange-600 text-white"
          title="Centrează la clinică"
        >
          <Home className="h-4 w-4" />
        </Button>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
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

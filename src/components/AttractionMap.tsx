import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation } from 'lucide-react';

// Coordonatele pentru locații din Piatra Neamț
const locations = {
  clinic: {
    coords: [46.9310, 26.3697] as [number, number],
    name: "Clinica Medstom",
    description: "Clinica dentară",
    distance: "",
    googleMapsUrl: "https://maps.app.goo.gl/gVUQRZTgJe7eAo9m7"
  },
  gara: {
    coords: [46.9354, 26.3719] as [number, number],
    name: "Gara Piatra Neamț",
    description: "Stație de tren",
    distance: "~15 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/xYzQRZTgJe7eAo9m7"
  },
  telegondola: {
    coords: [46.9264, 26.3613] as [number, number],
    name: "Stația Telegondolei",
    description: "Atracție turistică",
    distance: "~15 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/8eYsT1brcL1PDwvh9"
  },
  teatru: {
    coords: [46.9275, 26.3714] as [number, number],
    name: "Teatrul Tineretului",
    description: "Teatru",
    distance: "~7 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/yZzQRZTgJe7eAo9m7"
  },
  curtea: {
    coords: [46.9283, 26.3732] as [number, number],
    name: "Curtea Domnească",
    description: "Monument istoric",
    distance: "~7 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/zZzQRZTgJe7eAo9m7"
  },
  turn: {
    coords: [46.9289, 26.3741] as [number, number],
    name: "Turnul lui Ștefan cel Mare",
    description: "Monument istoric",
    distance: "~7 min de mers",
    googleMapsUrl: "https://maps.app.goo.gl/aR1BQTax727fJ9BV8"
  }
};

// Iconuri personalizate pentru markere
const clinicIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const attractionIcon = new Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export const AttractionMap = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-bold text-heading">Locații în apropierea clinicii</h3>
      </div>
      
      <div className="rounded-lg overflow-hidden shadow-lg border border-border h-[400px] md:h-[500px]">
        <MapContainer 
          center={locations.clinic.coords} 
          zoom={14} 
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Marker position={locations.clinic.coords} icon={clinicIcon}>
            <Popup>
              <div className="p-2">
                <h4 className="font-bold text-lg mb-1">{locations.clinic.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{locations.clinic.description}</p>
                <a 
                  href={locations.clinic.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
                >
                  <Navigation className="w-3 h-3" />
                  Navigare Google Maps
                </a>
              </div>
            </Popup>
          </Marker>

          {Object.entries(locations).map(([key, location]) => {
            if (key === 'clinic') return null;
            return (
              <Marker key={key} position={location.coords} icon={attractionIcon}>
                <Popup>
                  <div className="p-2">
                    <h4 className="font-bold text-base mb-1">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                    {location.distance && (
                      <p className="text-sm font-medium text-primary mt-1">{location.distance}</p>
                    )}
                    <a 
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2"
                    >
                      <Navigation className="w-3 h-3" />
                      Navigare Google Maps
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
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

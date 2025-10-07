import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    // Initialize map - Great Wall Apartments, Beijing Road, Mlolongo
    mapInstance.current = L.map(mapContainer.current).setView([-1.3835403058632503, 36.93942379891467], 16);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(mapInstance.current);

    // Custom marker icon
    const customIcon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add marker for Great Wall Apartments
    const marker = L.marker([-1.3835403058632503, 36.93942379891467], { icon: customIcon }).addTo(mapInstance.current);
    
    // Add popup
    marker.bindPopup(`
      <div style="padding: 8px;">
        <h3 style="font-weight: bold; margin-bottom: 4px;">System One Ltd</h3>
        <p style="font-size: 14px; margin: 0;">
          Great Wall Apartments<br />
          Beijing Road off Mombasa Road<br />
          Nairobi, Kenya
        </p>
      </div>
    `);

    // Cleanup
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;

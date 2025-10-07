import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [36.8895, -1.3179], // Great Wall Apartments, Beijing Road, Nairobi
      zoom: 15,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add marker for Great Wall Apartments
    new mapboxgl.Marker({ color: '#0066CC' })
      .setLngLat([36.8895, -1.3179])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            '<div style="padding: 8px;"><h3 style="font-weight: bold; margin-bottom: 4px;">System One Ltd</h3><p style="font-size: 14px;">Great Wall Apartments<br/>Beijing Road off Mombasa Road<br/>Nairobi, Kenya</p></div>'
          )
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="relative w-full h-96">
      {!mapboxToken ? (
        <div className="bg-white border border-border rounded-xl p-6">
          <h3 className="font-semibold text-dark-grey mb-3">Enter Mapbox Token</h3>
          <p className="text-sm text-professional-grey mb-4">
            To display the map, please enter your Mapbox public token. 
            Get one at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <input
            type="text"
            placeholder="pk.eyJ..."
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-3"
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        </div>
      ) : (
        <div ref={mapContainer} className="absolute inset-0 rounded-xl shadow-lg" />
      )}
    </div>
  );
};

export default Map;

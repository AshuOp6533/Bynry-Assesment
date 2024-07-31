import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = ({ address }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [address.longitude, address.latitude],
      zoom: 14,
    });

    new mapboxgl.Marker().setLngLat([address.longitude, address.latitude]).addTo(map);

    return () => map.remove();
  }, [address]);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
};

export default Map;

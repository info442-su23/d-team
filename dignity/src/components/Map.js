import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 47.604232774105725, 
  lng: -122.32661497671403,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0",
  });

  const [map, setMap] = React.useState(null); // eslint-disable-line no-unused-vars

  const onLoad = React.useCallback(function callback(mapInstance) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    mapInstance.fitBounds(bounds);

    // Store the map instance in the state variable
    setMap(mapInstance);
  }, [setMap]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, [setMap]);

  const onMarkerClick = () => {
    console.log('Click!')
  }

  const onMarkerHover = () => {
    console.log('Hover!')
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} onClick={onMarkerClick} onMouseOver={onMarkerHover} />
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Map);

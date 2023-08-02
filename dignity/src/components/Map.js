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

const EXAMPLE_MARKERS = [
  {id: 0, location:"location1", center:{lat: 47.604232774105725, lng: -122.32661497671403,}},
  {id: 1, location:"location2", center:{lat: 47.6231640436591, lng: -122.30482894308822}},
  {id: 2, location:"location3", center:{lat: 47.58712669696925, lng: -122.32873333900736}} 
];

const onMarkerClick = () => {
  console.log('Click!')
}

const onMarkerHover = () => {
  console.log('Hover!')
}

/*export function Marker(prop) {
  const marker = prop.marker;
  const center = marker.center;
  return (
    <Marker position={center} onClick={onMarkerClick} onMouseOver={onMarkerHover} />
  )
}*/

export function MarkerList(prop) {
  const markers = prop.markers;
  const markerList = markers.map((marker) => {
    console.log(marker);
    return (
        <Marker position={marker.center} key={marker.id.toString() } onClick={onMarkerClick} onMouseOver={onMarkerHover}/>
    );  
  });
  console.log(markerList);
  return(
      <section className="markers">
        { markerList };
      </section>
  );
}

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(mapInstance) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    mapInstance.fitBounds(bounds);

    // Store the map instance in the state variable
    setMap(mapInstance);
    setMap(map)
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerList markers={EXAMPLE_MARKERS} /> 
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Map);

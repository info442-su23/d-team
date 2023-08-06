import React from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 47.604232774105725, 
  lng: -122.32661497671403,
};

const EXAMPLE_MARKERS = [
  {id: 0, location:"location1", center:{lat: 47.604232774105725, lng: -122.32661497671403, volunteers: 24}},
  {id: 1, location:"location2", center:{lat: 47.6231640436591, lng: -122.30482894308822, volunteers: 14}},
  {id: 2, location:"location3", center:{lat: 47.58712669696925, lng: -122.32873333900736, volunteers: 10}} 
];

/*Geocode.setApiKey("AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0");
Geocode.fromAddress("4541 19th Ave NE, Seattle, WA 98105").then(
  (response) => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  (error) => {
    console.error(error);
  }
);*/

/*export function Marker(prop) {
  const marker = prop.marker;
  const center = marker.center;
  return (
    <Marker position={center} onClick={onMarkerClick} onMouseOver={onMarkerHover} />
  )
}*/


function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0",
  });

  const [map, setMap] = React.useState(null); // eslint-disable-line no-unused-vars

  const [activeMarker, setActiveMarker] = React.useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  
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

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount} 
      onClick={() => setActiveMarker(null)}
    >
      {EXAMPLE_MARKERS.map(({ location, id, center }) => (
        <Marker
          key={id}
          position={center}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{location}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
  ) : <></>;
}

export default React.memo(Map);

/*export function MarkerList(prop) {
  const markers = prop.markers;
  const markerList = markers.map((marker) => {
    //console.log(marker);
    const location = marker.location;
    const position = marker.center;
    const id = marker.id.toString();
    return (
        <Marker 
          title={location} 
          position={position} 
          key={id} 
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{location}</div>
            </InfoWindow>
          ) : null}
        </Marker> 
    );  
  });
  //console.log(markerList);
  return(
      <section className="markers">
        { markerList };
      </section>
  );
}*/
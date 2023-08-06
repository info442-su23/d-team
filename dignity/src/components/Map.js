import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
//import Geocode from "react-geocode";

const center = {
  lat: 47.604232774105725, 
  lng: -122.32661497671403
};

const EXAMPLE_MARKERS = [
  {id: 0, location:"location1", center:{lat: 47.604232774105725, lng: -122.32661497671403}, volunteers: 24},
  {id: 1, location:"location2", center:{lat: 47.6231640436591, lng: -122.30482894308822}, volunteers: 20},
  {id: 2, location:"location3", center:{lat: 47.58712669696925, lng: -122.32873333900736}, volunteers: 16} 
];

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return marker;
    }
    setActiveMarker(marker);
  };
  
  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "50vw", height: "50vh" }}
    >
      {EXAMPLE_MARKERS.map(({ id, location, center, volunteers }) => (
        <MarkerF
          key={id}
          position={center}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
            {loggedIn ? (
              <section>
                <div>
                  <b>{location}</b>
                </div>
                <div>
                  {center.lat}, {center.lng}
                </div>
                <div>
                  Volunteers Needed: {volunteers}
                </div>
              </section>
            ) : (
              <div>
                  Log In
              </div>
              
            )}
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default Map;

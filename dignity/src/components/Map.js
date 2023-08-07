import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
import Geocode from "react-geocode";
import useGoogleSheetsData from "../index";

const center = {
    lat: 47.604232774105725, 
    lng: -122.32661497671403
};


const EXAMPLE_MARKERS = [
  {id: 0, location:"ROOTS Young Adult Shelter", address: "4541 19th Ave NE, Seattle, WA 98105", volunteers: 24},
  {id: 1, location:"New Horizons Ministries", address: "2709 3rd Ave Seattle, WA 98121 United States", volunteers: 20},
  {id: 2, location:"University District Food Bank", address: "5017 Roosevelt Way NE Seattle, WA 98105", volunteers: 16} 
];


function Map({ loggedIn, setLoggedIn }) {
    setLoggedIn(true);
    console.log(loggedIn);
  
    const [activeMarker, setActiveMarker] = useState(null);

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
              <section>
                <button type="submit" style={{ marginTop: '8px' }}>Sign in</button>
                <div>You need to sign in to volunteer!</div>
              </section>
        
            )}
            </InfoWindowF>
          ) : null}
        </MarkerF>
      ))}
    </GoogleMap>
  );
}

export default Map;
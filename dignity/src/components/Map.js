import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
//import Geocode from "react-geocode";
//import useGoogleSheetsData from "../index";
import useGoogleSheetsData from "..";

const center = {
    lat: 47.604232774105725, 
    lng: -122.32661497671403
};

const EXAMPLE_MARKERS = [
  {id: 0, location:"ROOTS Young Adult Shelter", center:{lat: 47.604232774105725, lng: -122.32661497671403}, volunteers: 24},
  {id: 1, location:"New Horizons Ministries", center:{lat: 47.6231640436591, lng: -122.30482894308822}, volunteers: 20},
  {id: 2, location:"University District Food Bank", center:{lat: 47.58712669696925, lng: -122.32873333900736}, volunteers: 16} 
];

export function Map({ loggedIn, selectedPage, showSignIn, setShowSignIn }) {

  const handleSignInClick = () => {
      setShowSignIn(true);
      console.log(showSignIn);
  };

  //setLoggedIn(true);

  const [activeMarker, setActiveMarker] = useState(null);

  const [markers, setMarkers] = useState(EXAMPLE_MARKERS);

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

  const handleFilter = (search) => {
    console.log(markers);
    let filteredMarkers= markers.filter(marker => marker.location.toLowerCase().includes(search));
    console.log(filteredMarkers);
    setMarkers(filteredMarkers);
  }

  return (
    <GoogleMap
      //onLoad={handleOnLoad}
      zoom={12}
      center={center}
      onClick={() => setActiveMarker(null)}
      //onClick={() => handleFilter("food".toLowerCase())}
      mapContainerStyle={{ width: "50vw", height: "50vh" }}
    >
      {markers.map(({ id, location, center, volunteers }) => (
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
                <div>You need to sign in to volunteer!</div>
                <button onClick={handleSignInClick} className={`login ${selectedPage === 'LogIn' ? 'active' : ''}`}>Log In</button>
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
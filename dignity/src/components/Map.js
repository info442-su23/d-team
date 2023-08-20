import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
//import { MapPage } from "./MapPage";
//import { OnClick } from "./OnClick";
import { Filter } from "./Filter";
//import useGoogleSheetsData from "../index";
//import useGoogleSheetsData from "..";

const center = {
    lat: 47.604232774105725, 
    lng: -122.32661497671403
};

export function Map({ markers, loggedIn, selectedPage, showSignIn, setShowSignIn, filterCallback, resetFilters }) {

  /*useEffect(() => {
    this.map.controls[window.google.maps.ControlPosition.TOP_CENTER].push();
  })*/

  const handleSignInClick = () => {
      setShowSignIn(true);
      console.log(showSignIn);
  };

  const [showFilter, setShowFilter] = useState(false);
  const [activeMarker, setActiveMarker] = useState(null);

  console.log(markers);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
        return marker;
    }
    setActiveMarker(marker);
  };

  return (
    <div>
      {/*<MapPage/>*/}
      {showFilter ? (
        <div className="filter">
          <div className="filter-popup">      
            <Filter
              setShowFilter={setShowFilter}
              filterCallback={filterCallback}
              resetFilters={resetFilters}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="filter-button-wrapper">
            <button className="filter-button" onClick={() => setShowFilter(true)}>Filter</button>
          </div>
          <GoogleMap
            zoom={12}
            center={center}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "90vw", height: "65vh", margin: "auto"}}
            options={{disableDefaultUI: "true"}}
          >
          {markers.map((marker) => ( // steven: for every marker, use the data to construct a marker element
            <MarkerF
              key={marker.id}
              position={marker.center}
              onClick={() => handleActiveMarker(marker.id)}
            >
              {activeMarker === marker.id ? (
                <InfoWindowF className="onClick" onCloseClick={() => setActiveMarker(null)}>
                {loggedIn ? ( // steven: if logged in, display marker info, otherwise display log in button
                  /*<OnClick 
                    Organization_Name={marker.Organization_Name}
                    Address={marker.Address}
                    Date_Start={marker.Date_Start}
                    Time_Start={marker.Time_Start}
                    Time_End={marker.Time_End}
                    Type={marker.Type}
                    Volunteers={marker.Volunteers}
                    Details={marker.Description}
                  >
                  </OnClick>*/
                  <div>
                    <h1>{marker.Organization_Name}</h1>
                    <div>{marker.Address}</div>
                    <div>Location Type: {marker.Type}</div>
                    <div></div>
                    <div>Time: {marker.Date_Start}, {marker.Time_Start} - {marker.Time_End}</div>
                    <div>Volunteers Needed: {marker.Volunteers}</div>
                    <h2>Details:</h2>
                    <div>{marker.Description}</div>
                    {/*<div>
                      <a href="https://rootsinfo.org/volunteernow">Sign Up</a>
                    </div>
                    <div>
                      <a href="https://goo.gl/maps/SVg26U4cqRvsCT6i7">See in Google Maps</a>
                    </div>*/}
                  </div>                  
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
        </div>
      )}
    </div>
  );
}

export default Map;

      
      
      
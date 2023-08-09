import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
import { MapPage } from "./MapPage";
import { OnClick } from "./OnClick";
//import useGoogleSheetsData from "../index";
//import useGoogleSheetsData from "..";

const center = {
    lat: 47.604232774105725, 
    lng: -122.32661497671403
};

const EXAMPLE_MARKERS = 
[
  {
      "id": 0,
      "center": {lat: 47.6171505, lng: -122.3495706},
      "Address": "4541 19th Ave NE, Seattle, WA 98105",
      "Type": "Shelter",
      "Organization_Name": "ROOTS Young Adult Shelter ",
      "Volunteers": "10",
      "Date_Start": "8/17/2023",
      "Virtual": "No",
      "Time_Start": "8:00:00 PM",
      "Time_End": "11:00:00 PM"
  },
  {
      "id": 1,
      "center": {lat: 47.6624217, lng: -122.3075431},
      "Address": "4541 19th Ave NE, Seattle, WA 98105",
      "Type": "Shelter",
      "Organization_Name": "ROOTS Young Adult Shelter",
      "Volunteers": "5",
      "Date_Start": "8/16/2023",
      "Virtual": "No",
      "Time_Start": "6:45:00 AM",
      "Time_End": "8:30:00 AM"
  },
  {
      "id": 2,
      "center": {lat: 47.6655387, lng: -122.3178395},
      "Address": "2709 3rd Ave Seattle, WA 98121 United States",
      "Type": "Food Bank",
      "Organization_Name": "New Horizons Ministries",
      "Volunteers": "20",
      "Date_Start": "8/17/2023",
      "Virtual": "No",
      "Time_Start": "11:00:00 AM",
      "Time_End": "2:00:00 PM"
  },
  {
      "id": 3,
      "center": {lat: 47.6655387, lng: -122.3178395},
      "Address": "2709 3rd Ave Seattle, WA 98121 United States",
      "Type": "Shelter",
      "Organization_Name": "New Horizons Ministries",
      "Volunteers": "10",
      "Date_Start": "8/17/2023",
      "Virtual": "No",
      "Time_Start": "3:00:00 PM",
      "Time_End": "5:30:00 PM"
  },
  {
      "id": 4,
      "center": {lat: 47.6624217, lng: -122.3075431},
      "Address": "5017 Roosevelt Way NE Seattle, WA 98105",
      "Type": "Food Bank",
      "Organization_Name": "University District Food Bank",
      "Volunteers": "15",
      "Date_Start": "8/18/2023",
      "Virtual": "No",
      "Time_Start": "10:45:00 AM",
      "Time_End": "2:00:00 PM"
  },
  {
      "id": 5,
      "center": {lat: 47.6171505, lng: -122.3495706},
      "Address": "5017 Roosevelt Way NE Seattle, WA 98105",
      "Type": "Food Bank",
      "Organization_Name": "University District Food Bank",
      "Volunteers": "10",
      "Date_Start": "8/18/2023",
      "Virtual": "No",
      "Time_Start": "12:00:00 PM",
      "Time_End": "2:00:00 PM"
  }
];

// steven: example use of geocode to get coords
/*const convertToLatLong = async (address) => {
  console.log(address);
  Geocode.fromAddress(address).then(
    (response) => {
      const location = response.results[0].geometry.location
      const location2 = {  //steven: note here that you need to parse the string response from geocode into decimals
        lat: parseFloat(location.lat),
        lng: parseFloat(location.lng)
      }
      //console.log(location2);
      
    },
    (error) => {
      console.error(error);
    },
    
  )
}*/

/*let coords =  await Geocode.fromAddress("4541 19th Ave NE, Seattle, WA 98105");
console.log(coords.results[0].geometry.location);*/

export function Map({ markers, loggedIn, selectedPage, showSignIn, setShowSignIn }) {

  const handleSignInClick = () => {
      setShowSignIn(true);
      console.log(showSignIn);
  };

  //setLoggedIn(true);

  const [activeMarker, setActiveMarker] = useState(null);

  //console.log(markers);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
        return marker;
    }
    setActiveMarker(marker);
  };

  return (
      <div>
      <MapPage/>
      <GoogleMap
        //onLoad={handleOnLoad}
        zoom={12}
        center={center}
        onClick={() => setActiveMarker(null)}
        mapContainerStyle={{ width: "90vw", height: "90vh", margin: "auto"}}
        >
        {EXAMPLE_MARKERS.map((marker) => ( // steven: for every marker in EXAMPLE_MARKERS, use the data to construct a marker element
          <MarkerF
            key={marker.id}
            position={marker.center}
            onClick={() => handleActiveMarker(marker.id)}
          >
            {activeMarker === marker.id ? (
              <InfoWindowF className="onClick" onCloseClick={() => setActiveMarker(null)}>
              {loggedIn ? ( // steven: if logged in, display marker info, otherwise display log in button
                <OnClick 
                  Organization_Name={marker.Organization_Name}
                  Address={marker.Address}
                  Date_Start={marker.Date_Start}
                  Time_Start={marker.Time_Start}
                  Time_End={marker.Time_End}
                  Type={marker.Type}
                  Volunteers={marker.Volunteers}
                  Details={marker.Description}
                >
                </OnClick>
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
  );
}

export default Map;
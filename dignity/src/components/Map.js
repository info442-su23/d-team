import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from '@react-google-maps/api';
//import Geocode from "react-geocode";
//import useGoogleSheetsData from "../index";
//import useGoogleSheets from 'use-google-sheets';

const center = {
    lat: 47.604232774105725, 
    lng: -122.32661497671403
};

const EXAMPLE_MARKERS = [
  { Timestamp: "8/2/2023 14:55:00", Postion_Name: "Evening Volunteer", Organization_Name: "ROOTS Young Adult Shelter ", Address: "4541 19th Ave NE, Seattle, WA 98105", Virtual: "No", Opportunity_Type: "Shelter", Start_Time: "8:00:00 PM", End_Time: "11:00:00 PM", Volunteers: "10", "Donations needed?": "none", Details: "Evening Volunteers engage with guests to socialize and build community while working as part of a team to ensure the emotional and physical safety of the shelter space. Evening volunteers set up the shelter each night, hand out hygiene supplies and bedding, and supervise guest activities such as computer time and smoke breaks. Most importantly, Evening Volunteers spend time with guests chatting over dinner, playing board games, and watching TV together. Evening Volunteers provide guests with stability and support while helping ensure our shelter runs smoothly.", Email: "roots@gmail.com", Start_Date: "8/17/2023" }, 
  { Timestamp: "8/2/2023 14:56:59", Postion_Name: "Morning Volunteer", Organization_Name: "ROOTS Young Adult Shelter", Address: "4541 19th Ave NE, Seattle, WA 98105", Virtual: "No", Opportunity_Type: "Shelter", Start_Time: "6:45:00 AM", End_Time: "8:30:00 AM", Volunteers: "5", "Donations needed?": "none", Details: "Morning Volunteers work as part of a team to engage with guests, hand out hygiene supplies, assist with laundry, help guests retrieve supplies from their cubbies, help clean up shelter, enforce program rules, and ensure the emotional and physical safety of the space. Morning Volunteers build connections with their community and help our guests begin their day on a positive note.", Email: "roots@gmail.com", Start_Date: "8/16/2023" }, 
  { Timestamp: "8/3/2023 13:45:27", Postion_Name: "Lunch Helper", Organization_Name: "New Horizons Ministries", Address: "2709 3rd Ave Seattle, WA 98121 United States", Virtual: "No", Opportunity_Type: "Food Bank", Start_Time: "11:00:00 AM", End_Time: "2:00:00 PM", Volunteers: "20", "Donations needed?": "none", Details: "New Horizons is looking for small groups (2 - 3 people) or individuals to come in once a week, Monday - Thursday between 2:00pm - 4:00pm to prepare and serve lunch for 30 young adults. Lunch menus and cooking instructions will be scheduled by the kitchen coordinator. Groups or individuals will work directly with the Kitchen and Volunteer Coordinators.\n\nVolunteers will be required to obtain a Washington State Food Handler's Card that will be kept on file. A link to the website will be provided to volunteers by the volunteer coordinator. Volunteers will be given a kitchen orientation and a detailed list of lunch preparation and serving duties by the kitchen coordinator.\n\nWearing a mask is optional in the facility. We are currently requiring volunteers who are in the facility longer than 15 minutes to provide proof of vaccination.\n\nIf you have any questions, please reach out to our Volunteer Coordinator, Rodney Scott (rodneys@nhmin.org or call 206.374.0866) so we can provide you more information on this volunteer opportunity.\n\nThank you for your interest in supporting New Horizons!", Email: "rodneys@nhmin.org", Start_Date: "8/17/2023" },     
  { Timestamp: "8/3/2023 13:49:37", Postion_Name: "Day Program Shift", Organization_Name: "New Horizons Ministries", Address: "2709 3rd Ave Seattle, WA 98121 United States", Virtual: "No", Opportunity_Type: "Shelter", Start_Time: "3:00:00 PM", End_Time: "5:30:00 PM", Volunteers: "10", "Donations needed?": "none", Details: "Direct Service Volunteers interact directly with youth and young adults in the shelter. DST Volunteers will have the opportunity to participate in multiple activities including arts and crafts, games, employment services, karaoke singing, and dinner with young adults. DST Volunteers will go through a 1 1/2 hour Direct Service Volunteer Training / Orientation before volunteering in the shelter. Volunteers must pass a background check. DST Volunteers will work directly with Day Program Staff.", Email: "info@nhmin.org", Start_Date: "8/17/2023" }, 
  { Timestamp: "8/3/2023 14:28:20", Postion_Name: "Front House Volunteer", Organization_Name: "University District Food Bank", Address: "5017 Roosevelt Way NE Seattle, WA 98105", Virtual: "No", Opportunity_Type: "Food Bank", Start_Time: "10:45:00 AM", End_Time: "2:00:00 PM", Volunteers: "15", "Donations needed?": "peanut or other nut butters (especially crunchy)\nshelf stable milk and milk alternatives (rice, soy, oat, etc)\ncanned fruit (we never have enough)\ncanned chicken, tuna, and salmon\nsoups and stews\ncereal\ncooking oil\ndried spices and herbs\nbaby formula and diapers (especially sizes 4-6)", Details: "Greeter: Manages the line of customers that are waiting to come into the food bank. Welcomes them, answers any questions, and allows a certain number of customers in to shop to allow for capacity, gives sheets to those who want someone to shop for them, hand out sandwiches and to-go bags.\n\nCheck in volunteer: Checks in customers into our intake database, gives them a shopping card, and answers any questions customers have. This role is sitting and working with a computer.\n\nCheck-out volunteer: Helps bag up customer groceries and check limits that are allowed based on their shopping cards, double bagging bags, and sanitizing. This role is standing.\n\nStocker: Goes back and forth between the warehouse (Back of house) area and the shopping store and stocks items that are low.", Email: "volunteer@udistrictfoodbank.org", Start_Date: "8/18/2023" }, 
  { Timestamp: "8/3/2023 15:58:35", Postion_Name: "Back of House Volunteer", Organization_Name: "University District Food Bank", Address: "5017 Roosevelt Way NE Seattle, WA 98105", Virtual: "No", Opportunity_Type: "Food Bank", Start_Time: "12:00:00 PM", End_Time: "2:00:00 PM", Volunteers: "10", "Donations needed?": "peanut or other nut butters (especially crunchy)\nshelf stable milk and milk alternatives (rice, soy, oat, etc)\ncanned fruit (we never have enough)\ncanned chicken, tuna, and salmon\nsoups and stews\ncereal\ncooking oil\ndried spices and herbs\nbaby formula and diapers (especially sizes 4-6)", Details: "Includes: Sorting pallets of donations including produce, deli, dairy and other items. Repackaging bulk items; Receiving donations; Breaking down and recycling cardboard; Bagging up produce like apples, potatoes and onions; Clean-up of warehouse; Sanitizing work spaces; Double bagging paper bags.", Email: "volunteer@udistrictfoodbank.org", Start_Date: "8/18/2023" } 
];

export function Map({ loggedIn, selectedPage, showSignIn, setShowSignIn }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const [markers, setMarkers] = useState(EXAMPLE_MARKERS);
  const handleSignInClick = () => {
      setShowSignIn(true);
      console.log(showSignIn);
  };
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
        return marker;
    }
    setActiveMarker(marker);
  };

  /* Issue #50; Complete but bugged due to 'Too many re-renders. React limits the number of renders to prevent an infinite loop'
  const GoogleSheets = () => {
    const REACT_APP_GOOGLE_API_KEY='AIzaSyChIHqUkiNjFKAgnoBYEWYz04UoSFnTHtw';
    const REACT_APP_SHEET_ID='1RimXeXxItN-lCw-NTtGfyT0Y7fGVGU2a4ed8tEBH050';
    const { data, loading, error } = useGoogleSheets({
      apiKey: REACT_APP_GOOGLE_API_KEY,
      sheetId: REACT_APP_SHEET_ID,
    });
    if (!loading && !error) {
      console.log(data[0].data);
    }
  };

	GoogleSheets();
  */

  const handleFilter = (search) => {
    console.log(markers);
    let filteredMarkers= markers.filter(marker => marker.location.toLowerCase().includes(search));
    console.log(filteredMarkers);
    setMarkers(filteredMarkers);
  }
  
  return (
    //Issue 
    <GoogleMap
      zoom={12}
      center={center}
      onClick={() => setActiveMarker(null)}
      mapContainerStyle={{ width: "50vw", height: "50vh" }}
    >
      {markers.map(({ id, location, center, volunteers }) => (
        //
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
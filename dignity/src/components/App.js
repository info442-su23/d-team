import "../App.css";
import { Routes, Route, useNavigate } from 'react-router-dom';
import React, { useState, useEffect }  from 'react';
import Navbar from "./Navbar";
import HomePage from "./HomePage"
import Profile from "./Profile";
import Map from "./Map";
import Creator from "./Creator";
import { useLoadScript } from "@react-google-maps/api";
import Footer from "./Footer";
import useGoogleSheets from 'use-google-sheets';
import Geocode from "react-geocode";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isWaiverFormComplete, setIsWaiverFormComplete] = useState(false);
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState("Home");
    const [markers, setMarkers] = useState([]);

    // load google sheets data
    const { data, loading, error } = useGoogleSheets({
      apiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0", 
      sheetId: "1RimXeXxItN-lCw-NTtGfyT0Y7fGVGU2a4ed8tEBH050",
    });    

    Geocode.setApiKey("AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0");
    
    if(loading) {
      console.log("Loading");
    }

    if(error) {
      console.error("Error");
    }

    // load the api to the google maps api
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0" 
    });

    //sign in handlers
    const handleOptionClick = (page) => {
        setSelectedPage(page);
    };

    const handleSignInClick = () => {
        setShowSignIn(true);
        //console.log(showSignIn);
    };

    const handleSignInClose = () => {
        setShowSignIn(false);
        //console.log(showSignIn);
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setLoggedIn(false);
        navigate('/HomePage');
    };

    //set the marker info to the google sheets data
    useEffect(() => {
      if(data.length !== 0 ) {
        const locations = data[0].data;
        processLocations(locations);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    function processLocations(locations) {
      let processedLocations = 
          locations.map((location, index) =>   
          ({
            id: index,
            Address: location['Location Address'],
            Type: location['Select opportunity type'],
            Organization_Name: location['Organization Name'],
            Volunteers: location['Number of volunteers needed?'],
            Date_Start: location['Select start date'],
            Virtual: location['Is this a virtual opportunity?'],
            Time_Start: location['Select start time'],
            Time_End: location['Select end time'],
            Description: location['Please provide a description of this position\'s responsibilities and other useful details for volunteers.']
          }),
        )        
        processedLocations.forEach((location, index) => {
          let coords = getCoords(location['Address']);
          coords.then(function(result) {
            location.center = result;
          });
        })
        setMarkers(processedLocations);
    }

    function getCoords(address) {
      return Geocode.fromAddress(address).then((response) => {
        //console.log(response.results[0].geometry.location);
        return response.results[0].geometry.location;
      })
    }
    
    function filterCallback(type, virtual, zipCode) {
      if(data.length !== 0 ) {
        const locations = data[0].data;
        processLocations(locations);
        console.log(markers);
        //console.log(markers);
        let filteredLocations = markers.filter(marker => marker.Type === type && marker.Virtual === virtual && marker.Address.includes(zipCode));
        console.log(filteredLocations);
        setMarkers(filteredLocations);
      }
    }

    /*function resetFilters() {
      if(data.length !== 0 ) {
        const locations = data[0].data;
        processLocations(locations);
        console.log("test")
      }
    }*/

    const handleLoginSuccess = (username, email, password) => {
        setUsername(username);
        setEmail(email);
        setPassword(password);
        setLoggedIn(true);
        setShowSignIn(false);
        localStorage.setItem('userToken', JSON.stringify(true));
    };

    const handleWaiverFormComplete = () => {
        setIsWaiverFormComplete(true);
        localStorage.setItem('isWaiverFormComplete', JSON.stringify(true));
      };
    
    useEffect(() => {
      const storedIsWaiverFormComplete = JSON.parse(localStorage.getItem('isWaiverFormComplete'));
      if (storedIsWaiverFormComplete) {
        setIsWaiverFormComplete(true);
      }
    }, []);

    return (
        <div className="App">
            <Navbar 
              loggedIn={loggedIn} 
              setLoggedIn={setLoggedIn} 
              showSignIn={showSignIn} 
              setShowSignIn={setShowSignIn} 
              users={users} setUsers={setUsers} 
              onLoginSuccess={handleLoginSuccess} 
              selectedPage={selectedPage} 
              setSelectedPage={setSelectedPage} 
              handleSignInClick={handleSignInClick} 
              handleSigninClose={handleSignInClose} 
              handleOptionClick={handleOptionClick} 
              handleLogout={handleLogout}
            />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/Profile" element={
                      <Profile 
                        loggedIn={loggedIn} 
                        username={username} 
                        email={email} 
                        password={password} 
                        isWaiverFormComplete={isWaiverFormComplete}
                        setIsWaiverFormComplete={setIsWaiverFormComplete} 
                        handleWaiverFormComplete={handleWaiverFormComplete} 

                      />
                    } />
                    <Route path="/Map" element={isLoaded ? 
                      <Map
                        markers={markers} //we pass in the markers with the google sheets data here
                        loggedIn={loggedIn} 
                        setLoggedIn={setLoggedIn} 
                        showSignIn={showSignIn} 
                        setShowSignIn={setShowSignIn} 
                        users={users} setUsers={setUsers} 
                        onLoginSuccess={handleLoginSuccess} 
                        selectedPage={selectedPage} 
                        setSelectedPage={setSelectedPage} 
                        handleSignInClick={handleSignInClick} 
                        handleSigninClose={handleSignInClose}
                        filterCallback={filterCallback}
                      /> : null} />
                    <Route path="/Creator" element={<Creator />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
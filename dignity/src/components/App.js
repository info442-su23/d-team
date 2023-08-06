import "../App.css";
import React, { useState }  from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Map from "./Map";
import Creator from "./Creator";
import { useLoadScript } from "@react-google-maps/api";

const App = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0" 
    });

    const [testLogin, setTestLogin] = useState(true);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/Map" element={isLoaded ? <Map loggedIn={ testLogin } setLoggedIn={setTestLogin}/> : null} />
                <Route path="/Creator" element={<Creator />} />
            </Routes>
        </div>
    );
};

export default App;

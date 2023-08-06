import "../App.css";
import React, { useState, useEffect }  from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import HomePage from "./HomePage"
import Profile from "./Profile";
import Map from "./Map";
import Creator from "./Creator";
import { useLoadScript } from "@react-google-maps/api";

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isWaiverFormComplete, setIsWaiverFormComplete] = useState(false);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0" 
    });

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
            <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} showSignIn={showSignIn} setShowSignIn={setShowSignIn} users={users} setUsers={setUsers} onLoginSuccess={handleLoginSuccess} />
            <div>
                <Routes>
                    <Route path="/HomePage" element={<HomePage />} />
                    <Route path="/Profile" element={<Profile loggedIn={loggedIn} username={username} email={email} password={password} isWaiverFormComplete={isWaiverFormComplete}setIsWaiverFormComplete={setIsWaiverFormComplete} handleWaiverFormComplete={handleWaiverFormComplete} />} />
                    <Route path="/Map" element={isLoaded ? <Map loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> : null} />
                    <Route path="/Creator" element={<Creator />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

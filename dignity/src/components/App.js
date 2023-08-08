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
    
    const handleOptionClick = (page) => {
        setSelectedPage(page);
    };

    const handleSignInClick = () => {
        setShowSignIn(true);
        console.log(showSignIn);
    };

    const handleSignInClose = () => {
        setShowSignIn(false);
        console.log(showSignIn);
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setLoggedIn(false);
        navigate('/HomePage');
    };

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
                      /> : null} />
                    <Route path="/Creator" element={<Creator />} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;
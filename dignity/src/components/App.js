import "../App.css";
<<<<<<< Updated upstream
import React, { useState }  from 'react';
import { Routes, Route } from 'react-router-dom';
=======
import React, { useState, useEffect }  from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
>>>>>>> Stashed changes
import Navbar from "./Navbar";
import Map from "./Map";
import Creator from "./Creator";
import { useLoadScript } from "@react-google-maps/api";

const App = () => {
<<<<<<< Updated upstream
=======
    const [loggedIn, setLoggedIn] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isWaiverFormComplete, setIsWaiverFormComplete] = useState(false);
    const [selectedPage, setSelectedPage] = useState("Home");
    const navigate = useNavigate();

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


>>>>>>> Stashed changes
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCptULJKSbbS6Oad0nFWiHEImiMkPrpDC0" 
    });

    const [testLogin, setTestLogin] = useState(true);

    return (
        <div className="App">
<<<<<<< Updated upstream
            <Navbar />
            <Routes>
                <Route path="/Map" element={isLoaded ? <Map loggedIn={ testLogin } setLoggedIn={setTestLogin}/> : null} />
                <Route path="/Creator" element={<Creator />} />
            </Routes>
=======
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
                    <Route path="/HomePage" element={<HomePage />} />
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
            </div>
>>>>>>> Stashed changes
        </div>
    );
};

export default App;

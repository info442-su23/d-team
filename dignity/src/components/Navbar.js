import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';

export default function Navbar() {
    const [selectedPage, setSelectedPage] = useState("Home");
    const [showSignIn, setShowSignIn] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState([]);

    const handleOptionClick = (page) => {
        setSelectedPage(page);
    };

    const handleSignInClick = () => {
        setShowSignIn(true);
    };

    const handleSignInClose = () => {
        setShowSignIn(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        setLoggedIn(false);
    };

    return (
        <div className="Navbar">
            <div className="Dignity">DIGNITY</div>
            <div className="Logo">
            </div>
            <div className="nav-links">
                <div
                    className={selectedPage === 'Home' ? 'active' : ''}
                    onClick={() => handleOptionClick('Home')}
                >
                    Home
                </div>
                <div
                    className={selectedPage === 'VolunteerMap' ? 'active' : ''}
                    onClick={() => handleOptionClick('VolunteerMap')}
                >
                    <Link to={'/Map'}>Volunteer Map</Link>
                </div>
                <div
                    className={selectedPage === 'Creator' ? 'active' : ''}
                    onClick={() => handleOptionClick('Creator')}
                >
                    <Link to={'/Creator'}>Create Opportunity</Link>
                </div>
                {loggedIn ? (
                    <div
                        onClick={handleLogout}
                        className={`logout ${selectedPage === 'LogOut' ? 'active' : ''}`}
                    >
                        Log Out
                    </div>
                ) : (
                    <div
                        onClick={handleSignInClick}
                        className={`login ${selectedPage === 'LogIn' ? 'active' : ''}`}
                    >
                        Log In
                    </div>
                )}
            </div>
            
            {showSignIn && <SignIn onClose={handleSignInClose} setLoggedIn={setLoggedIn} users={users} setUsers={setUsers} />}
        </div>
    )
}
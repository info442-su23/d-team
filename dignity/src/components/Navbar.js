import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignIn from './SignIn';

export default function Navbar({ loggedIn, setLoggedIn, showSignIn, setShowSignIn, users, setUsers, onLoginSuccess }) {
    const navigate = useNavigate();
    const [selectedPage, setSelectedPage] = useState("Home");

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
        navigate('/HomePage');
    };

    return (
        <div className="Navbar" style={{ width: '100%', height: 75, background: '#32668C', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', overflowX: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="Logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="Help" style={{ width: 32, height: 34.01, position: 'relative' }}>
                        <div className="Vector" style={{ width: 8.01, height: 13.17, left: 4.99, top: 20.83, position: 'absolute', border: '1px white solid' }}></div>
                        <div className="Vector" style={{ width: 8, height: 20, left: 0, top: 14.01, position: 'absolute', border: '1px white solid' }}></div>
                        <div className="Vector" style={{ width: 22, height: 22, left: 5, top: 0, position: 'absolute', border: '1px white solid' }}></div>
                        <div className="Vector" style={{ width: 0, height: 8, left: 16, top: 6.01, position: 'absolute', border: '1px white solid' }}></div>
                        <div className="Vector" style={{ width: 8, height: 0, left: 12, top: 10.01, position: 'absolute', border: '1px white solid' }}></div>
                        <div className="Vector" style={{ width: 8.01, height: 13.17, left: 19, top: 20.83, position: 'absolute', border: '1px white solid' }}></div>
                        <div className="Vector" style={{ width: 8, height: 20, left: 24, top: 14.01, position: 'absolute', border: '1px white solid' }}></div>
                    </div>
                </div>
                <div className="Dignity" style={{ color: 'white', fontSize: 24, fontWeight: '700', marginLeft: 10 }}>DIGNITY</div>
            </div>
            <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 30, color: 'white', fontSize: 20, fontWeight: '700' }}>
                <div className={selectedPage === 'HomePage' ? 'active' : ''} onClick={() => handleOptionClick('HomePage')}>
                    <Link to={'/HomePage'}>Home</Link>
                </div>
                <div className={selectedPage === 'Profile' ? 'active' : ''} onClick={() => handleOptionClick('Profile')}>
                    <Link to={'/Profile'}>Profile</Link>
                </div>
                <div className={selectedPage === 'VolunteerMap' ? 'active' : ''} onClick={() => handleOptionClick('VolunteerMap')}>
                    <Link to={'/Map'}>Volunteer Map</Link>
                </div>
                <div className={selectedPage === 'Creator' ? 'active' : ''} onClick={() => handleOptionClick('Creator')}>
                    <Link to={'/Creator'}>Create Opportunity</Link>
                </div>
                {loggedIn ? (
                    <div onClick={handleLogout} className={`logout ${selectedPage === 'LogOut' ? 'active' : ''}`}>Log Out</div>
                ) : (
                    <div onClick={handleSignInClick} className={`login ${selectedPage === 'LogIn' ? 'active' : ''}`}>Log In</div>
                )}
            </div>
            {showSignIn && <SignIn onClose={handleSignInClose} setLoggedIn={setLoggedIn} users={users} setUsers={setUsers} onLoginSuccess={onLoginSuccess} />}
        </div>
    );
}
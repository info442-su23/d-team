import React, {useState} from 'react';

export default function Navbar() {
    const [selectedPage, setSelectedPage] = useState("Home");

    const handleOptionClick = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className="Navbar" style={{ width: '100%', height: 75, position: 'relative', background: '#32668C' }}>
            <div className="Logo" style={{ width: 32, height: 34.01, left: 53, top: 15, position: 'absolute', justifyContent: 'center', alignItems: 'center', gap: 2, display: 'inline-flex' }}>
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
            <div className="nav-links" style={{ display: 'flex', width: '100%', position: 'relative', alignItems: 'space-between', justifyContent: 'flex-end', flexWrap: 'wrap', gap: 30, top: 20, right: 20, color: 'white', fontSize: 20, fontWeight: '700' }}>
                <nav>
                    <div className={selectedPage === 'Home' ? 'active' : ''} onClick={() => handleOptionClick('Home')}>Home</div>
                    <div className={selectedPage === 'VolunteerMap' ? 'active' : ''} onClick={() => handleOptionClick('VolunteerMap')}>Volunteer Map</div>
                    <div className={selectedPage === 'Creator' ? 'active' : ''} onClick={() => handleOptionClick('Creator')}>Create Opportunity</div>
                    <div className={selectedPage === 'LogIn' ? 'active' : ''} onClick={() => handleOptionClick('LogIn')}>Log In</div>
                </nav>
            </div>
            <div className="Dignity" style={{ width: 143, height: 22, left: 97, top: 20, position: 'absolute', color: 'white', fontSize: 24, fontWeight: '700' }}>DIGNITY</div>
        </div>
    )
}

import React, { useState, useEffect } from 'react';

export default function Profile({ loggedIn, username, password, email, isWaiverFormComplete, setIsWaiverFormComplete, handleWaiverFormComplete }) {
    const prefixes = ['Mr.', 'Miss.', 'Mrs.', 'Ms.', 'Sir.', 'Dr.'];

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 130 }, (_, index) => currentYear - index);

    const usStates = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Washington D.C.'
    ];

    const [showWaiverForm, setShowWaiverForm] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [waiverFormData, setWaiverFormData] = useState({
        prefix: '',
        firstName: '',
        middleName: '',
        lastName: '',
        month: '',
        day: '',
        year: '',
        ssn: '',
        licenseNo: '',
        stateIssued: '',
        address: ''
    });

    const handleWaiverFormClick = () => {
        setShowWaiverForm(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWaiverFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSave = () => {
        localStorage.setItem('waiverFormData', JSON.stringify(waiverFormData));
        setShowWaiverForm(false);
        setError(false);
        setErrorMessage('');
    }

    const handleNameKeyDown = (e) => {
        const keyCode = e.which || e.keyCode;
        const inputValue = e.key;
        if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ-\s']$/.test(inputValue) && keyCode !== 8 && keyCode !== 46 && keyCode !== 9 && keyCode !== 20 && !e.shiftKey) {
            e.preventDefault();
        }
    };

    const handleSSNKeyDown = (e) => {
        const keyCode = e.which || e.keyCode;
        const currentValue = e.target.value;
        if ((keyCode < 48 || keyCode > 57 || currentValue.length >= 9) && keyCode !== 8 && keyCode !== 46 && keyCode !== 9 && keyCode !== 20 && !e.shiftKey) {
            e.preventDefault();
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (
            !waiverFormData.firstName ||
            !waiverFormData.lastName ||
            !waiverFormData.month ||
            !waiverFormData.day ||
            !waiverFormData.year ||
            !waiverFormData.ssn ||
            !waiverFormData.licenseNo ||
            !waiverFormData.stateIssued ||
            !waiverFormData.address
        ) {
            setError(true);
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        if (!/^\d{9}$/.test(waiverFormData.ssn)) {
            setError(true);
            setErrorMessage('Invalid input format for SSN.');
            return;
        }
    
        const fullName = `${waiverFormData.prefix} ${waiverFormData.firstName} ${waiverFormData.middleName} ${waiverFormData.lastName}`;
    
        const birthDate = `${waiverFormData.month}/${waiverFormData.day}/${waiverFormData.year}`;
    
        const volunteerInfo = {
            fullName,
            birthDate,
            socialSecurityNo: waiverFormData.ssn,
            driversLicenseNo: waiverFormData.licenseNo,
            stateIssued: waiverFormData.stateIssued,
            address: waiverFormData.address,
        };
    
        console.log('Volunteer Information:', volunteerInfo);
        setIsWaiverFormComplete(true);
        handleWaiverFormComplete();
    
        setWaiverFormData({
            prefix: '',
            firstName: '',
            middleName: '',
            lastName: '',
            month: '',
            day: '',
            year: '',
            ssn: '',
            licenseNo: '',
            stateIssued: '',
            address: '',
        });
        setError(false);
        setShowWaiverForm(false);
    };

    useEffect(() => {
        const storedIsWaiverFormComplete = JSON.parse(localStorage.getItem('isWaiverFormComplete'));
        if (storedIsWaiverFormComplete !== null) {
          setIsWaiverFormComplete(storedIsWaiverFormComplete);
        }
      }, [setIsWaiverFormComplete]);

    useEffect(() => {
        localStorage.setItem('isWaiverFormComplete', JSON.stringify(isWaiverFormComplete));
    }, [isWaiverFormComplete]);

    useEffect(() => {
        const newRun = localStorage.getItem('newRun');

        if (newRun) {
            setWaiverFormData({
                prefix: '',
                firstName: '',
                middleName: '',
                lastName: '',
                month: '',
                day: '',
                year: '',
                ssn: '',
                licenseNo: '',
                stateIssued: '',
                address: '',
            });
            setError(false);
            setShowWaiverForm(false);
            setIsWaiverFormComplete(false);
            localStorage.removeItem('newRun');
        } 
        else {
            const savedWaiverFormData = JSON.parse(localStorage.getItem('waiverFormData'));
            if (savedWaiverFormData) {
                setWaiverFormData(savedWaiverFormData);
            }
        }
    }, [setIsWaiverFormComplete]);

    useEffect(() => {
        localStorage.setItem('newRun', 'true');
    }, []);

    return (
        <div className="profile">
            {loggedIn && (
                <div className="div">
                <div className="ellipse" />
                <div className="volunteer">{`@${username}`}</div>
                <p className="email">
                    Email: {email}
                    <br />
                    <br />
                    Password: {password}
                    <br />
                    <br />
                    Phone Number: 7606889160
                    <br />
                    <br />
                    Address: 123 University Way Seattle, Wa 98105
                </p>
                <div className="overlap-group">
                    <p className="instructions">Before Attending A Volunteer Opportunity, Fill Out The Waiver Below</p>
                    {!isWaiverFormComplete ? (
                    <div className="waiver-form" onClick={handleWaiverFormClick}>
                        https://www.waiverform.com/2432hsidofiu
                    </div>
                    ) : (
                    <div className="waiver-form-disabled">
                        https://www.waiverform.com/2432hsidofiu (Completed)
                    </div>
                    )}
                    <div className="rectangle" />
                    {isWaiverFormComplete && (
                    <div className="tick-icon">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#4f9dd5"
                        width="24px"
                        height="24px"
                        >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                    </div>
                    )}
                    <div className="text-wrapper">Mark Complete</div>
                </div>
                <div className="text-wrapper-2">Edit Profile</div>
                </div>
            )}

            {showWaiverForm && (
                <div className="waiver-form-popup">
                    <div className="waiver-form-container">
                        <h2>Volunteer Waiver Form</h2>
                        <form onSubmit={handleFormSubmit}>

                            {/* First Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="prefix">Prefix</label>
                                    <select id="prefix" name="prefix" value={waiverFormData.prefix} onChange={handleInputChange}>
                                        <option value="">Select Prefix</option>
                                        {prefixes.map((prefix) => (
                                        <option key={prefix} value={prefix}>
                                            {prefix}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" value={waiverFormData.firstName} onChange={handleInputChange} onKeyDown={handleNameKeyDown} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="middleName">Middle Name</label>
                                    <input type="text" id="middleName" name="middleName" value={waiverFormData.middleName} onChange={handleInputChange} onKeyDown={handleNameKeyDown} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" value={waiverFormData.lastName} onChange={handleInputChange} onKeyDown={handleNameKeyDown} />
                                </div>
                            </div>

                            {/* Second Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="month">Month</label>
                                    <select id="month" name="month" value={waiverFormData.month} onChange={handleInputChange}>
                                        <option value="">Select Month</option>
                                        {months.map((month, index) => (
                                        <option key={index} value={month}>
                                            {month}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="day">Day</label>
                                    <select id="day" name="day" value={waiverFormData.day} onChange={handleInputChange}>
                                        <option value="">Select Day</option>
                                        {days.map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="year">Year</label>
                                    <select id="year" name="year" value={waiverFormData.year} onChange={handleInputChange}>
                                        <option value="">Select Year</option>
                                        {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="ssn">Social Security No.</label>
                                    <input type="text" id="ssn" name="ssn" value={waiverFormData.ssn} onChange={handleInputChange} onKeyDown={handleSSNKeyDown} />
                                </div>
                            </div>

                            {/* Third Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="licenseNo">Driver's License No.</label>
                                    <input type="text" id="licenseNo" name="licenseNo" value={waiverFormData.licenseNo} onChange={handleInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="stateIssued">State Issued</label>
                                    <select id="stateIssued" name="stateIssued" value={waiverFormData.stateIssued} onChange={handleInputChange}>
                                        <option value="">Select State</option>
                                        {usStates.map((state) => (
                                            <option key={state} value={state}>
                                            {state}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Fourth Row */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" id="address" name="address" value={waiverFormData.address} onChange={handleInputChange} />
                                </div>
                            </div>

                            {error && <p className="error">{errorMessage}</p>}

                            {/* Buttons */}
                            <div className="button-group">
                                <button type="button" className="save-button" onClick={handleFormSave}>Save</button>
                                <button type="submit" className="submit-button" onClick={handleFormSubmit}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
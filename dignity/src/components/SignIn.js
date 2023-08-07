import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn ({ onClose, onLoginSuccess, setLoggedIn, users, setUsers }) {
    const navigate = useNavigate();
    const [signInMode, setSignInMode] = useState(true);
    const [error, setError] = useState(false);
    const [newUser, setNewUser] = useState(null); // eslint-disable-line no-unused-vars
    const [errorMessage, setErrorMessage] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [forgotPasswordError, setForgotPasswordError] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, [setUsers]);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const toggleMode = () => {
        setSignInMode(prevMode => !prevMode);
        setError(false);
        setErrorMessage('');
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(true);
        setError(false);
        setErrorMessage('');
        setForgotPasswordError(false);
        setNewPassword('');
        setConfirmPassword('');
        setForgotPasswordEmail('');
    };
    
    const handleCloseForgotPassword = () => {
        setShowForgotPassword(false);
    };
    
    const handleForgotPasswordSubmit = (event) => {
        event.preventDefault();
    
        if (newPassword !== confirmPassword) {
            setForgotPasswordError(true);
            setErrorMessage('The new passwords entered must match');
            return;
        }
    
        const userWithEmail = users.find(user => user.email === forgotPasswordEmail);
    
        if (!userWithEmail) {
            setForgotPasswordError(true);
            setErrorMessage('User with the provided email not found');
            return;
        }
    
        userWithEmail.password = newPassword;
        setUsers(prevUsers => [...prevUsers]);
    
        setLoggedIn(true);
        onClose();
        navigate('/');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const email = signInMode ? null : event.target.email.value; 

        if (!signInMode && (!username || !password || !email)) {
            setError(true);
            setErrorMessage('Username/password/email cannot be empty');
            return;
        }

        if (signInMode) {
            // Sign In mode
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                onLoginSuccess(username, user.email, user.password);

                setLoggedIn(true);
                onClose();
                navigate('/');
            } 
            else {
                setError(true);
                setErrorMessage('Username/password is incorrect');
            }
        } 
        else {
            // Create Account mode
            const newUser = { username, password, email };
            setUsers(prevUsers => [...prevUsers, newUser]);
            setNewUser(newUser);

            onLoginSuccess(username, email, password);

            setLoggedIn(true);
            onClose();
            navigate('/');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal" style={{ width: '300px', height: '540px' }}>
                {showForgotPassword ? (
                <>
                    <h2 style={{ fontSize: '30px' }}>Create New Password</h2>
                    <div className="form-container">
                        <form onSubmit={handleForgotPasswordSubmit}>
                            <div className="form-group">
                                <label htmlFor="forgotPasswordEmail" style={{ marginBottom: '8px', display: 'block' }}>Email</label>
                                <input type="email" id="forgotPasswordEmail" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="newPassword" style={{ marginBottom: '8px', display: 'block' }}>Enter new password</label>
                                <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword" style={{ marginBottom: '8px', display: 'block' }}>Re-enter new password</label>
                                <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
            
                            {forgotPasswordError && <p className="error">{errorMessage}</p>}
            
                            <button type="submit" style={{ marginTop: '8px' }}>Submit</button>
                        </form>
                    </div>
                    <button className="close-button" onClick={handleCloseForgotPassword} style={{ marginTop: '8px' }}>Close</button>
                </>
                ) : (
                <>
                    <h2 style={{ fontSize: '30px' }}>{signInMode ? 'Sign In' : 'Create Account'}</h2>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username" style={{ marginBottom: '8px', display: 'block' }}>Username</label>
                                <input type="text" id="username" name="username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" style={{ marginTop: '3px', marginBottom: '8px', display: 'block' }}>Password</label>
                                <input type="password" id="password" name="password"/>
                            </div>
            
                            {/* Additional field for create account mode */}
                            {!signInMode && (
                            <div className="form-group">
                                <label htmlFor="email" style={{ marginTop: '3px', marginBottom: '8px', display: 'block' }}>Email</label>
                                <input type="email" id="email" name="email"/>
                            </div>
                            )}
            
                            {error && <p className="error">{errorMessage}</p>}
            
                            <button type="submit" style={{ marginTop: '8px' }}>{signInMode ? 'Sign In' : 'Create Account'}</button>
                            <div className="modal-links">
                                {signInMode && (
                                    <p>
                                        <a href="#!" onClick={(e) => { e.preventDefault(); handleForgotPasswordClick(); }}>Forgot Password?</a>
                                    </p>
                                )}
                                {signInMode ? (
                                    <p>
                                        Don't have an account? <a href="#!" onClick={toggleMode}>Create Account</a>
                                    </p>
                                ) : (
                                    <p>
                                        Already have an account? <a href="#!" onClick={toggleMode}>Sign In</a>
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                    <button className="close-button" onClick={onClose} style={{ marginTop: '8px' }}>Close</button>
                </>
                )}
            </div>
        </div>
    );
}
import React, { useState } from 'react';
import '../../../style/aim.css'; 

const AimSignIn = ({ closeAim }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savePassword, setSavePassword] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);

    const handleSignIn = () => {
        console.log('Signing in:', username, password);
        // Implement your sign-in logic here
        closeAim();
    };

    return (
        <div className="aim-signin-container">
            <div className="aim-logo">
                {/* Insert AIM logo here */}
            </div>
            <div className="aim-input-container">
                <input
                    type="text"
                    placeholder="Screen Name"
                    value={username}
                    className="aim-input" // Add class for styling
                    onChange={(e) => setUsername(e.target.value)}
                />
                <a href="#" className="aim-link">Get a Screen Name</a> {/* Styling for link */}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="aim-input" // Add class for styling
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#" className="aim-link">Forgot Password?</a> {/* Styling for link */}
                
                <div className="aim-checkbox-container"> {/* Container for custom checkbox styling */}
                    <label className="aim-checkbox">
                        <input
                            type="checkbox"
                            checked={savePassword}
                            onChange={(e) => setSavePassword(e.target.checked)}
                        />
                        Save password
                    </label>
                    <label className="aim-checkbox">
                        <input
                            type="checkbox"
                            checked={autoLogin}
                            onChange={(e) => setAutoLogin(e.target.checked)}
                        />
                        Auto-login
                    </label>
                </div>

                <div className="aim-buttons-container"> 
                    <button className="aim-signon-btn" onClick={handleSignIn}>Sign On</button> 
                    <button className="aim-cancel-btn" onClick={closeAim}>Cancel</button> 
                </div>

                <div className="aim-links-container"> 
                    <a href="#" className="aim-link">Help</a> 
                    <a href="#" className="aim-link">Setup</a> 
                </div>

                <div className="aim-version">
                    Version: 5.9.3702
                </div>
            </div>
        </div>
    );
};

export default AimSignIn;

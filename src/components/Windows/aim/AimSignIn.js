import React, { useState } from 'react';
import '../../../style/aim.css'; 
import aimSignInImg from '../../../assets/aim/aim-sign-in.png'; 
import keyImg from '../../../assets/aim/aim-key.svg';

const AimSignIn = ({ closeAim, openAimLoader }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savePassword, setSavePassword] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);

    const handleSignIn = () => {
        openAimLoader();
        closeAim();
    };

    return (
        <div className="aim-signin-container">
            <div className="aim-logo-banner">
                <img src={aimSignInImg} alt="AIM Logo" className="aim-logo" />
            </div>
            <hr className="aim-hr" />
            <div className="aim-signin-form">
                <div className="aim-key-container">
                    <label className="aim-label screen-name-label">ScreenName</label>
                    <img src={keyImg} alt="Key" className="aim-key" />
                </div>
                <input
                    type="text"
                    placeholder="Screen Name"
                    value={username}
                    className="aim-input"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <a href="#" className="aim-link">Get a Screen Name</a>
                <label className="aim-label password-label">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    className="aim-input"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#" className="aim-link">Forgot Password?</a>
                
                <div className="aim-checkbox-container">
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
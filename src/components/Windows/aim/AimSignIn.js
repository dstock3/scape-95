import React, { useState } from 'react';
import '../../../style/aim.css'; 

const AimSignIn = ({ closeAim }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [savePassword, setSavePassword] = useState(false);
    const [autoLogin, setAutoLogin] = useState(false);

    const handleSignIn = () => {
        // Sign-in logic
        console.log('Signing in:', username, password);
        closeAim();
    };

    return (
        <div className="aim-signin-container">
            <div className="aim-logo">
                {/* AIM logo here */}
            </div>
            <div className="aim-input-container">
                <input
                    type="text"
                    placeholder="Screen Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <div className="aim-get-screen-name">
                    <a href="#">Get a Screen Name</a>
                </div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="aim-forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="aim-checkboxes">
                    <label>
                        <input
                            type="checkbox"
                            checked={savePassword}
                            onChange={(e) => setSavePassword(e.target.checked)}
                        />
                        Save password
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={autoLogin}
                            onChange={(e) => setAutoLogin(e.target.checked)}
                        />
                        Auto-login
                    </label>
                </div>
                <div className="aim-buttons">
                    <button onClick={handleSignIn}>Sign On</button>
                    <button onClick={closeAim}>Cancel</button>
                </div>
                <div className="aim-links">
                    <a href="#">Help</a>
                    <a href="#">Setup</a>
                </div>
                <div className="aim-version">
                    Version: 5.9.3702
                </div>
            </div>
        </div>
    );
};

export default AimSignIn;
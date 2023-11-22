import React, { useState } from 'react';
import '../../../style/aim.css'

const AimSignIn = ({ closeAim }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // sign-in logic
        console.log('Signing in:', username, password);
        closeAim();
    };

    return (
        <div className="aim-signin-container">
            <div className="aim-logo">
                {/* logo here */}
            </div>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={closeAim}>Cancel</button>
        </div>
    );
};

export default AimSignIn;

import React, { useState, useEffect } from 'react';
import '../../../style/aim.css'; 
import aimSignInImg from '../../../assets/aim/aim-sign-in.png'; 

const AimLoader = ({ closeAimLoader, openAimClient }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      openAimClient();
      closeAimLoader();
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="aim-loader-container">
        <div className="aim-logo-banner">
            <img src={aimSignInImg} alt="AIM Logo" className="aim-logo" />
        </div>
        <hr className="aim-hr" />
        {isLoading ? (
            <div>Loading AIM...</div>
            ) : (
            <div>AIM loaded successfully!</div>
        )}
        <div className="aim-buttons-container">
            <button className="aim-cancel-btn" onClick={closeAimLoader}>Cancel</button>
        </div>
    </div>
  );
};

export default AimLoader;

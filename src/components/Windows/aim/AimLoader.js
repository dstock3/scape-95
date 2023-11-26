import React, { useState, useEffect } from 'react';
import '../../../style/aim.css'; 
import aimSignInImg from '../../../assets/aim/aim-sign-in.png'; 

const AimLoader = ({ closeAimLoader, openAimClient }) => {
  const [loadingStep, setLoadingStep] = useState(1);

  useEffect(() => {
    const totalLoadingTime = 5000; 
    const steps = 3; 
    const stepDuration = totalLoadingTime / steps;

    const timers = [
      setTimeout(() => setLoadingStep(2), stepDuration), 
      setTimeout(() => setLoadingStep(3), stepDuration * 2), 
      setTimeout(() => {
        setLoadingStep(0); 
        openAimClient();
        closeAimLoader();
      }, totalLoadingTime)
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const renderLoadingMessage = () => {
    switch (loadingStep) {
      case 1: return "Connecting...";
      case 2: return "Verifying name and password...";
      case 3: return "Starting Services...";
      default: return "AIM loaded successfully!";
    }
  };

  return (
    <div className="aim-loader-container">
        <div className="aim-logo-banner">
            <img src={aimSignInImg} alt="AIM Logo" className="aim-logo" />
        </div>
        <hr className="aim-hr" />
        <div className="aim-loading-message">{renderLoadingMessage()}</div>
        <div className="aim-buttons-container">
            <button className="aim-cancel-btn" onClick={closeAimLoader}>Cancel</button>
        </div>
    </div>
  );
};

export default AimLoader;
import React from 'react';
import '../../../style/clippy.css'

const Clippy = () => {
  return (
    <div className="clippy">
      <div className="clippy-head">
        <div className="clippy-eye clippy-eye-left"></div>
        <div className="clippy-eye clippy-eye-right"></div>
      </div>
      <div className="clippy-body"></div>
      <div className="clippy-arm clippy-arm-left"></div>
      <div className="clippy-arm clippy-arm-right"></div>
      <div className="clippy-leg clippy-leg-left"></div>
      <div className="clippy-leg clippy-leg-right"></div>
      <div className="clippy-message">Hi! Need help?</div>
    </div>
  );
};

export default Clippy;

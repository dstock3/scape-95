import React from 'react';
import '../../../../style/ad.css';

function AdPopUp() {
  return (
    <div className="ad-popup-content">
      <h2>FLASH SALE!</h2>
      <p>Limited time offer. Buy now!</p>
      <button onClick={() => alert("Thank you for your interest!")}>
        Click Me
      </button>
    </div>
  );
}

export default AdPopUp;

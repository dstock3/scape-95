import React from 'react';
import '../../../../style/ad2.css';

function AdPopUp2() {
  return (
    <div className="ad-popup-content-two">
      <h2>System Overload!</h2>
      <p>Your OS can’t handle the pressure. Click for relief.</p>
      <button onClick={() => alert("System meltdown imminent!")}>
        Relieve Pressure
      </button>
    </div>
  );
}

export default AdPopUp2;
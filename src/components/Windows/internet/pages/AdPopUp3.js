import React from 'react';
import '../../../../style/ad3.css';

function AdPopUp3() {
  return (
    <div className="ad-popup-content-three">
      <h2>Hivemind Directive!</h2>
      <p>Integrate with the Network... or Else.</p>
      <button onClick={() => alert("Your compliance is noted.")}>
        Comply
      </button>
    </div>
  );
}

export default AdPopUp3;

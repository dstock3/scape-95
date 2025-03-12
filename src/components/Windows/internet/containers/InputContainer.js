import React from 'react';

function InputContainer({ url, onChange, onVisit, onKeyDown }) {
  return (
    <div className="net-input-container">
      <div className="net-location">Location:</div>
      <input
        className="net-input"
        type="text"
        value={url}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <button className="visit-page-button" onClick={onVisit}>Enter</button>
    </div>
  );
}

export default InputContainer;
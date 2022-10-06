import React from 'react'

function InputContainer({url, searchTerm, visit}) {
    return (
        <div className="net-input-container">
            <div className="net-location">Location:</div>
            <input className="net-input" type="text" defaultValue={url} onChange={searchTerm} />
            <button className="visit-page-button" onClick={visit}>Enter</button>
        </div>
    )
}

export default InputContainer

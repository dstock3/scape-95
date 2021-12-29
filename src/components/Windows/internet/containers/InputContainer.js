import React from 'react'

function InputContainer(props) {
    return (
        <div className="net-input-container">
            <div className="net-location">Location:</div>
            <input className="net-input" type="text" defaultValue={props.url} onChange={props.searchTerm} />
            <button className="visit-page-button" onClick={props.visit}>Enter</button>
        </div>
    )
}

export default InputContainer

import React from 'react'

const ErrorMsg = ({msg}) => {
    const handleConfirm = () => {

    }

    return (
        <div className="error-msg">
            <div className="error-msg-subcontainer">
                <img className="error-icon" alt="error-icon" src="#"></img>

                <div className="error-contents">{msg}</div>
            </div>

            <button className="error-msg-confirm" onClick={handleConfirm}>OK</button>
        </div>
    )
}

export default ErrorMsg
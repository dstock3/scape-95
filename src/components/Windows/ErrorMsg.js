import React from 'react'
import '../../style/error-msg.css'
import errorIcon from '../../assets/icons/error.png'

const ErrorMsg = ({msg, close}) => {

    return (
        <div className="error-msg">
            <div className="error-msg-subcontainer">
                <img className="error-icon" alt="error-icon" src={errorIcon}></img>

                <div className="error-contents">{msg}</div>
            </div>

            <button className="error-msg-confirm" onClick={()=>close()}>
                <div>OK</div>
            </button>
        </div>
    )
}

export default ErrorMsg
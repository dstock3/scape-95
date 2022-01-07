import React from 'react'
import '../../style/run-error.css'
import runErrorIcon from '../../assets/icons/error.png'

function RunError(props) {
    const confirm = () => {
        props.openRun()
        props.close()
    }
    
    return (
        <div className="run-error">
            <div className="run-error-container">
                <img className="run-error-icon" src={runErrorIcon} alt="run icon"></img>
                <div className="run-error-prompt">Cannot find the file '{props.term}' (or one of its components). Make sure the path and filename are correct and that all required libraries are available.</div>
            </div>

            <button className="run-error-button" onClick={confirm}>
                <div className="inner-run-error">OK</div>
            </button>
        </div>
    )
}

export default React.memo(RunError)

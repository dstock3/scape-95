import React from 'react'
import BasicWindow from './BasicWindow'
import '../../style/run-error.css'
import runErrorIcon from '../../assets/icons/run.png'

function RunError(props) {
    const handleSubmit = e => {
        props.closeRunError()
    }
    return (
        <form className="run-error" onSubmit={handleSubmit}>
            <div className="run-error-container">
                <img className="run-error-icon" src={runErrorIcon} alt="run icon"></img>
                <div className="run-error-prompt">Cannot find the file '{props.term}' (or one of its components). Make sure the path and filename are correct and that all required libraries are available.</div>
            </div>

            <button className="run-error-button" type="submit">
                <div className="inner-run-error">OK</div>
            </button>
        </form>
    )
}

export default RunError

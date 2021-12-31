import React, { useState } from 'react'
import runIcon from '../../assets/icons/run.png'
import '../../style/run.css'

function Run(props) {
    const handleSubmit = e => {
        e.preventDefault();
        let match = false
        let openApps
        for (let prop in props.openApps) {
            if (props.runInput.value === prop) {
                match = true
                openApps = props.openApps[prop]
            }
        }

        if (match) {
            openApps()
            props.closeRun()
        } else {
            props.throwError(props.runInput.value)
            props.closeRun()
        }
    }

    return (
        <form className="run" onSubmit={handleSubmit}>
            <div className="run-prompt-container">
                <img className="win-run-icon" src={runIcon} alt="run icon"></img>
                <div className="run-prompt">Type the name of a program, folder, or document, and Windows will open it for you.</div>
            </div>

            <div className="run-input-container">
                <label className="run-text">Open: </label>
                <input type="text" value={props.runInput.value} onChange={e => props.runInput.setter(e.target.value)} className="run-input"></input>
            </div>

            <div className="run-button-container">
                <button type="submit">OK</button>
                <button onClick={props.closeRun}>Cancel</button>
                <button>Browse...</button>
            </div>
        </form>
    )
}

export default Run

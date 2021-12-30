import React, { useState } from 'react'
import '../../style/run.css'

function Run(props) {
    const [runInput, setRunInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (runInput === "command") {
            props.runCli()
        }
    }

    return (
        <form className="run" onSubmit={handleSubmit}>
            <div className="run-prompt">
                <label className="run-text">Run: </label>
                <input type="text" value={runInput} onChange={e => setRunInput(e.target.value)} className="run-input"></input>
            </div>
        </form>
    )
}

export default Run

import React, { useState } from 'react'
import '../../style/terminal.css'

function Terminal() {
    const [input, setInput] = useState(null)
    const [dir, setDir] = useState(`C:\\scape-95>`)
    return (
        <div className="terminal">
            <div className="line-item">
                <div className="line-input">
                    <div className="dir">{dir}</div>                    
                    <div className="caret"></div>
                    <input className="terminal-input">
                        
                    </input>
                </div>
            </div>
        </div>
    )
}

export default Terminal

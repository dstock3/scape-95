import React, { useState } from 'react'
import '../../style/terminal.css'

function Terminal() {
    const [input, setInput] = useState(null)
    const [dir, setDir] = useState(`C:\\SCAPE-95>`)
    return (
        <div className="terminal">
            <div className="copy-95">
                <div className="restricted">Scape(R) 1995</div>
                
                <div className="copyright">(C)ScapeNet Corp 1981-1999.</div>
            </div>
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

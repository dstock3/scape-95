import React, { useState } from 'react'
import '../../style/terminal.css'

function Terminal(props) {
    const [dir, setDir] = useState(`C:\\SCAPE-95>`)
    const [dirInput, setDirInput] = useState("")
    const [dirArray, setDirArray] = useState([])

    const handleSubmit = e => {
        e.preventDefault();

        for (let prop in props.openApps) {
            if (dirInput === prop) {
                props.openApps[prop]()
            }
        }
        setDirArray([...dirArray, dirInput])
        console.log(dirArray)
    }

    return (
        <div className="terminal">
            <div className="copy-95">
                <div className="restricted">Scape(R) 1995</div>
                
                <div className="copyright">(C)ScapeNet Corp 1981-1999.</div>
            </div>
            <div className="line-item">
                <form className="line-input" onSubmit={handleSubmit}>
                    <label className="dir">{dir}</label>   
                    <span className="caret"></span>                 
                    
                    <input className="terminal-input" value={dirInput} onChange={e => setDirInput(e.target.value)} > 
                    </input>
                </form>
            </div>
        </div>
    )
}

export default Terminal

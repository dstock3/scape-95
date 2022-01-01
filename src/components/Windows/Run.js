import React, { useState, useEffect } from 'react'
import runIcon from '../../assets/icons/run.png'
import HelpMsg from './HelpMsg'
import '../../style/run.css'

function Run(props) {
    const runWindow = document.querySelector(".run")

    const [span, setSpan] = useState({ok: "", cancel: "", browse: ""})
    const [helpMsg, setHelpMsg] = useState({ok: false, cancel: false, browse: false})
    
    useEffect(()=> {
        let tips = Array.from(document.querySelectorAll(".tip"))

        if (props.helpPrompt) {
            let runButtons = Array.from(document.getElementsByClassName("run-button"))
            for (let i = 0; i < runButtons.length; i++) {
                runButtons[i].style.cursor = "help"
            }
            runWindow.style.cursor = "help"
        } 
    }, [props.helpPrompt])
    

    const closeWindow = () => {
        if (!props.helpPrompt) {
            props.closeRun()
            setSpan({...span, cancel: ""})
        } else {
            setSpan({...span, cancel: "visible"})
            //props.setHelp(false)
        }
    }

    const runProgram = e => {
        if (!props.helpPrompt) {
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
                closeWindow()
            } else {
                props.throwError(props.runInput.value)
                closeWindow()
            }

            setSpan({...span, ok: ""})  
        } else {
            setSpan({...span, ok: "visible"})
            //props.setHelp(false)
        }
    }

    const browse = () => {
        if (!props.helpPrompt) {
            setSpan({...span, browse: ""})            
        } else {
            setSpan({...span, browse: "visible"})
            //props.setHelp(false)
        }
    }

    useEffect(()=> {
        if (helpMsg) {
            props.setHelp(false)
        }
    
    }, [helpMsg])

    return (
        <div className="run">
            <div className="run-prompt-container">
                <img className="win-run-icon" src={runIcon} alt="run icon"></img>
                <div className="run-prompt">Type the name of a program, folder, or document, and Windows will open it for you.</div>
            </div>

            <div className="run-input-container">
                <label className="run-text">Open: </label>
                <input type="text" value={props.runInput.value} onChange={e => props.runInput.setter(e.target.value)} className="run-input"></input>
            </div>

            <div className="run-button-container">
                <button onClick={runProgram} className="run-button tip">
                    OK
                    <HelpMsg setMsgState={()=>setHelpMsg({...helpMsg, ok: true})} span={span.ok} content={"Closes this dialog box and saves any changes you have made."}/>
                </button>

                <button onClick={closeWindow} className="run-button tip">
                    Cancel
                    <HelpMsg setMsgState={()=>setHelpMsg({...helpMsg, cancel: true})} span={span.cancel} content={"Closes this dialog box without saving any changes you have made."}/>
                </button>

                <button onClick={browse} className="run-button tip" >
                    Browse...
                    <HelpMsg setMsgState={()=>setHelpMsg({...helpMsg, browse: true})} span={span.browse} content={"Click this to browse through folders to find the file you want."}/>
                </button>
            </div>
        </div>
    )
}

export default Run

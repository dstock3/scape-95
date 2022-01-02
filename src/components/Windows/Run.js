import React, { useState, useEffect } from 'react'
import runIcon from '../../assets/icons/run.png'
import HelpMsg from './HelpMsg'
import '../../style/run.css'

function Run(props) {
    

    const [span, setSpan] = useState({ok: "", cancel: "", browse: "", input: ""})
    const [helpMsg, setHelpMsg] = useState({ok: false, cancel: false, browse: false, input: false})
    
    useEffect(()=> {
        let runWindow = document.querySelector(".run")
        let runButtons = Array.from(document.getElementsByClassName("run-button"))
        let runInput = document.querySelector(".run-input")

        if (props.helpPrompt) {

            for (let i = 0; i < runButtons.length; i++) {
                runButtons[i].style.cursor = "help"
            }
            runWindow.style.cursor = "help"
            runInput.style.cursor = "help"
        } else {
            if (runButtons) {
                for (let i = 0; i < runButtons.length; i++) {
                    runButtons[i].style.cursor = "default"
                }
            } 

            if (runInput) {
                runWindow.style.cursor = "default"
                runInput.style.cursor = "text"
            }
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

    const [inputHelp, setInputHelp] = useState({content: null}) 

    const clickInput = () => {
        if (props.helpPrompt) {
            setSpan({...span, input: "visible"})
        }
    }

    return (
        <div className="run">
            <div className="run-prompt-container">
                <img className="win-run-icon" src={runIcon} alt="run icon"></img>
                <div className="run-prompt">Type the name of a program, folder, or document, and Windows will open it for you.</div>
            </div>

            <div className="run-input-container">
                <label className="run-text">Open: </label>

                <input onClick={clickInput} type="text" value={props.runInput.value} onChange={e => props.runInput.setter(e.target.value)} className="run-input"></input>
                { inputHelp.content }

                <div className="tip">
                    <HelpMsg helpState={props.helpPrompt} setHelp={props.setHelp} setMsgState={()=>setHelpMsg({...helpMsg, input: true})} helpId="run-input-help" span={span.input} content={"Provides a place for you to type the location and filename of the program you want to run. If you are unsure of the program's location or filename, click Browse. You can also make a temporary network connection by typing the path to a shared computer in this box."}/>
                </div>
            </div>
            

            <div className="run-button-container">
                <button onClick={runProgram} className="run-button tip">
                    OK
                    <HelpMsg helpState={props.helpPrompt} setHelp={props.setHelp} helpId="run-program-help" setMsgState={()=>setHelpMsg({...helpMsg, ok: true})} span={span.ok} content={"Closes this dialog box and saves any changes you have made."}/>
                </button>

                <button onClick={closeWindow} className="run-button tip">
                    Cancel
                    <HelpMsg helpState={props.helpPrompt} setHelp={props.setHelp} helpId="close-run-help" setMsgState={()=>setHelpMsg({...helpMsg, cancel: true})} span={span.cancel} content={"Closes this dialog box without saving any changes you have made."}/>
                </button>

                <button onClick={browse} className="run-button tip" >
                    Browse...
                    <HelpMsg helpState={props.helpPrompt} setHelp={props.setHelp} helpId="run-browse-help" setMsgState={()=>setHelpMsg({...helpMsg, browse: true})} span={span.browse} content={"Click this to browse through folders to find the file you want."}/>
                </button>
            </div>
        </div>
    )
}

export default Run

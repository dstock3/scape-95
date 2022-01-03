import React, { useState, useEffect } from 'react'
import runIcon from '../../assets/icons/run.png'
import HelpMsg from './HelpMsg'
import '../../style/run.css'

function Run(props) {
    const [span, setSpan] = useState({ok: "", cancel: "", browse: "", input: ""})
    const [helpMsg, setHelpMsg] = useState({ok: false, cancel: false, browse: false, input: false})

    useEffect(()=> {

    }, [props.helpPrompt])

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
    



    const setOk = () => {
        setHelpMsg({...helpMsg, ok: true})
    }

    const setCancel = () => {
        setHelpMsg({...helpMsg, cancel: true})
    }

    const setBrowse = () => {
        setHelpMsg({...helpMsg, browse: true})
    }

    const setInput = () => {
        setHelpMsg({...helpMsg, input: true})
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
            setOk()
        }
    }

    const closeWindow = () => {
        if (!props.helpPrompt) {
            props.closeRun()
            setSpan({...span, cancel: ""})
        } else {
            setSpan({...span, cancel: "visible"})
            setCancel()
        }
    }

    const browse = () => {
        if (!props.helpPrompt) {
            setSpan({...span, browse: ""})            
        } else {
            setSpan({...span, browse: "visible"})
            setBrowse()
        }
    }

    const [inputHelp, setInputHelp] = useState({content: null}) 

    const clickInput = () => {
        if (props.helpPrompt) {
            setSpan({...span, input: "visible"})
            setInput()
        }
    }

    if (!props.helpPrompt) {
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
                </div>
    
                <div className="master-button-container">
                    <div className="run-button-container">
                        <button onClick={runProgram} className="run-button">
                            OK
                        </button>
                    </div>
                    <div className="run-button-container">
                        <button onClick={closeWindow} className="run-button">
                            Cancel
                        </button>
                    </div>
                    <div className="run-button-container">
                        <button onClick={browse} className="run-button" >
                            Browse...
                        </button>
                    </div>
                </div>
            </div>
        )
    } else {
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
                        <HelpMsg optionState={helpMsg.input} setFalse={()=>setHelpMsg({...helpMsg, input: false})} setHelp={props.setHelp} helpId="run-input-help" spanSet={()=>setSpan({...span, input: ""})} span={span.input} content={"Provides a place for you to type the location and filename of the program you want to run. If you are unsure of the program's location or filename, click Browse. You can also make a temporary network connection by typing the path to a shared computer in this box."}/>
                    </div>
                </div>

                <div className="master-button-container">
                    <div className="run-button-container">
                        <button onClick={runProgram} className="run-button tip">
                            OK
                        </button>
                        <div className="tip">
                            <HelpMsg optionState={helpMsg.ok} setFalse={()=>setHelpMsg({...helpMsg, ok: false})} setHelp={props.setHelp} helpId="run-program-help" spanSet={()=>setSpan({...span, ok: ""})} span={span.ok} content={"Closes this dialog box and saves any changes you have made."}/>
                        </div>
                    </div>
                    <div className="run-button-container">
                        <button onClick={closeWindow} className="run-button tip">
                            Cancel
                        </button>
                        <div className="tip">
                            <HelpMsg optionState={helpMsg.cancel} setFalse={()=> setHelpMsg({...helpMsg, cancel: false})} setHelp={props.setHelp} helpId="close-run-help" spanSet={()=>setSpan({...span, cancel: ""})} span={span.cancel} content={"Closes this dialog box without saving any changes you have made."}/>
                        </div>
                    </div>
                    <div className="run-button-container">
                        <button onClick={browse} className="run-button tip" >
                            Browse...
                        </button>
                        <div className="tip">
                            <HelpMsg optionState={helpMsg.browse} setFalse={()=>setHelpMsg({...helpMsg, browse: false})} setHelp={props.setHelp} helpId="run-browse-help" spanSet={()=>setSpan({...span, browse: ""})} span={span.browse} content={"Click this to browse through folders to find the file you want."}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Run

import React, { useState, useEffect } from 'react'
import runIcon from '../../assets/icons/run.png'
import HelpMsg from './HelpMsg'
import '../../style/run.css'

function Run({helpPrompt, openApps, runInput, throwError, closeRun, setHelp  }) {
    const [span, setSpan] = useState({ok: "", cancel: "", browse: "", input: ""})
    const [helpMsg, setHelpMsg] = useState({ok: false, cancel: false, browse: false, input: false})

    let runWindow = document.querySelector(".run")
    let runButtons = Array.from(document.getElementsByClassName("run-button"))
    let runInputElement = document.querySelector(".run-input")
    let window = document.querySelector("#run-window")
    
    useEffect(()=> {
        window.style.zIndex = 500
        
    }, [])
    
    useEffect(()=> {

        if (helpPrompt) {
            for (let i = 0; i < runButtons.length; i++) {
                runButtons[i].style.cursor = "help"
            }
            runWindow.style.cursor = "help"
            runInputElement.style.cursor = "help"
        } else {
            if (runButtons) {
                for (let i = 0; i < runButtons.length; i++) {
                    runButtons[i].style.cursor = "default"
                }
            }

            if (runInputElement) {
                runWindow.style.cursor = "default"
                runInputElement.style.cursor = "text"
            }
        }
    }, [helpPrompt])
    
    const setOk = () => {
        if (!(helpMsg.cancel || helpMsg.browse || helpMsg.input)) {
            setHelpMsg({...helpMsg, ok: true})
        }
    }

    const setCancel = () => {
        if (!(helpMsg.ok || helpMsg.browse || helpMsg.input)) {
            setHelpMsg({...helpMsg, cancel: true})
        }
    }

    const setBrowse = () => {
        if (!(helpMsg.ok || helpMsg.cancel || helpMsg.input)) {
            setHelpMsg({...helpMsg, browse: true})
        }
    }

    const setInput = () => {
        if (!(helpMsg.ok || helpMsg.cancel || helpMsg.browse)) {
            setHelpMsg({...helpMsg, input: true})
        }
    }

    const runProgram = () => {
        if (!helpPrompt) {
            let match = false
            
            for (let prop in openApps) {
                if (runInput.value === prop) {
                    match = true
                    openApps = openApps[prop]
                }
            }
            
            if (match) {
                openApps()
                closeWindow()
            } else {
                throwError(runInput.value)
                closeWindow()
            }
            setSpan({...span, ok: ""})  
        } else {
            setSpan({...span, ok: "visible"})
            setOk()
        }
    }

    const closeWindow = () => {
        if (!helpPrompt) {
            closeRun()
            setSpan({...span, cancel: ""})
        } else {
            setSpan({...span, cancel: "visible"})
            setCancel()
        }
    }

    const browse = () => {
        if (!helpPrompt) {
            setSpan({...span, browse: ""})            
        } else {
            setSpan({...span, browse: "visible"})
            setBrowse()
        }
    }

    const clickInput = () => {
        if (helpPrompt) {
            setSpan({...span, input: "visible"})
            setInput()
        }
    }

    useEffect(()=> {
        let runWindow = document.querySelector(".run")

        function enterEvent(e) {
            if (e.key === "Enter") {
                runProgram()
            }
        }

        runWindow.addEventListener("keypress", enterEvent)

        return () => {
            runWindow.removeEventListener("keypress", enterEvent)
        }
    })

    return (
        <div className="run">
            <div className="run-prompt-container">
                <img className="win-run-icon" src={runIcon} alt="run icon"></img>
                <div className="run-prompt">Type the name of a program, folder, or document, and Windows will open it for you.</div>
            </div>

            <div className="run-input-container">
                <label className="run-text">Open: </label>

                <input onClick={clickInput} type="text" value={runInput.value} onChange={e => runInput.setter(e.target.value)} className="run-input"></input>

                {
                    helpPrompt && helpMsg.input ? 
                        <div className="tip">
                            <HelpMsg optionState={helpMsg.input} setFalse={()=>setHelpMsg({...helpMsg, input: false})} setHelp={setHelp} helpId="run-input-help" spanSet={()=>setSpan({...span, input: ""})} span={span.input} content={"Provides a place for you to type the location and filename of the program you want to run. If you are unsure of the program's location or filename, click Browse. You can also make a temporary network connection by typing the path to a shared computer in this box."}/>
                        </div> : null
                }
            </div>

            <div className="master-button-container">
                <div className="run-button-container">
                    <button onClick={runProgram} className="run-button tip">
                        OK
                    </button>
                    {
                        helpPrompt && helpMsg.ok ?
                            <div className="tip">
                                <HelpMsg optionState={helpMsg.ok} setFalse={()=>setHelpMsg({...helpMsg, ok: false})} setHelp={setHelp} helpId="run-program-help" spanSet={()=>setSpan({...span, ok: ""})} span={span.ok} content={"Closes this dialog box and saves any changes you have made."}/>
                            </div> : null
                    }
                </div>
                <div className="run-button-container">
                    <button onClick={closeWindow} className="run-button tip">
                        Cancel
                    </button>
                    {
                        helpPrompt && helpMsg.cancel ?
                            <div className="tip">
                                <HelpMsg optionState={helpMsg.cancel} setFalse={()=> setHelpMsg({...helpMsg, cancel: false})} setHelp={setHelp} helpId="close-run-help" spanSet={()=>setSpan({...span, cancel: ""})} span={span.cancel} content={"Closes this dialog box without saving any changes you have made."}/>
                            </div> : null
                    }
                </div>
                <div className="run-button-container">
                    <button onClick={browse} className="run-button tip" >
                        Browse...
                    </button>
                    {
                        helpPrompt  && helpMsg.browse ?
                            <div className="tip">
                                <HelpMsg optionState={helpMsg.browse} setFalse={()=>setHelpMsg({...helpMsg, browse: false})} setHelp={setHelp} helpId="run-browse-help" spanSet={()=>setSpan({...span, browse: ""})} span={span.browse} content={"Click this to browse through folders to find the file you want."}/>
                            </div> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Run)

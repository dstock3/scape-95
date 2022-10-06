import React, { useState } from 'react'
import shutdownIcon from '../../assets/icons/shutdown-menu-icon.png'

function Shutdown({closeButton}) {
    const [option, setOption] = useState("shutdown")

    const handleConfirm = () => {
        let body = document.querySelector("body")
        let main = document.querySelector(".main")
        let modal = document.querySelector("#shutdown-modal")
        //Shutdown procedure
        if (option === "shutdown") {
            body.style.backgroundColor = "black"
            body.style.transition = "all 0.25s ease-out"
            body.style.opacity = 1
            body.style.zIndex = 1000
            main.style.opacity = 0
            modal.remove()

        }
        //need to mimic restart and logout procedures
    }

    const optionSelected = (opt) => {
        if (opt === option) {
            return "shutdown-selected"
        }
    }

    return (
        <div className="system-menu">
            <div className="shutdown-container">
                <img src={shutdownIcon} className="shutdown-icon" alt="shutdown icon"></img>

                <div className="shutdown-prompt">
                    <div className="shutdown-query">Are you sure you want to:</div>
                    <form className="shutdown-options">
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "shutdown"}
                                onChange={()=> {
                                    setOption("shutdown")
                                    }}
                                />
                            <label className={`shutdown-text ${optionSelected("shutdown")}`}>Shutdown the computer?</label>
                        </div>
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "restart"}
                                onChange={()=> {
                                    setOption("restart")
                                    }}
                                />
                            <label className={`shutdown-text ${optionSelected("restart")}`}>Restart the computer?</label>
                        </div>
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "cli"}
                                onChange={()=> {
                                    setOption("cli")
                                    }} 
                                />
                            <label className={`shutdown-text ${optionSelected("cli")}`}>Restart the computer in Scape-CLI mode?</label>
                        </div>
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "log"}
                                onChange={()=> {
                                    setOption("log")
                                    }} 
                                />
                            <label className={`shutdown-text ${optionSelected("log")}`}>Close all programs and log on as a different user?</label>
                        </div>
                    </form>
                    <div className="shutdown-buttons">
                        <button className="shutdown-button" onClick={handleConfirm}>Yes</button>
                        <button className="shutdown-button" onClick={closeButton}>No</button>
                        <button className="shutdown-button">Help</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default React.memo(Shutdown)

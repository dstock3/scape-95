import React, { useState } from 'react'
import shutdownIcon from '../../assets/icons/shutdown-menu-icon.png'

function Shutdown(props) {
    const [option, setOption] = useState("shutdown")

    const handleConfirm = () => {
        console.log(option)
        //Add functionality here to mimic shutdown procedure
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
                        <button className="shutdown-button" onClick={props.closeButton}>No</button>
                        <button className="shutdown-button">Help</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default React.memo(Shutdown)

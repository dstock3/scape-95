import React, { useState } from 'react'
import shutdownIcon from '../../assets/icons/shutdown-menu-icon.png'

function Shutdown(props) {
    const [option, setOption] = useState("shutdown")

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
                                onClick={()=> {
                                    setOption("shutdown")
                                    }} 
                                />
                            <label className="shutdown-text">Shutdown the computer?</label>
                        </div>
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "restart"}
                                onClick={()=> {
                                    setOption("restart")
                                    }} 
                                />
                            <label className="shutdown-text">Restart the computer?</label>
                        </div>
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "cli"}
                                onClick={()=> {
                                    setOption("cli")
                                    }} 
                                />
                            <label className="shutdown-text">Restart the computer in Scape-CLI mode?</label>
                        </div>
                        <div className="options-container">
                            <input 
                                type="radio" 
                                value={option} 
                                checked={option === "log"}
                                onClick={()=> {
                                    setOption("log")
                                    }} 
                                />
                            <label className="shutdown-text">Close all programs and log on as a different user?</label>
                        </div>
                    </form>
                    <div className="shutdown-buttons">
                        <button className="shutdown-button">Yes</button>
                        <button className="shutdown-button" onClick={props.closeButton}>No</button>
                        <button className="shutdown-button">Help</button>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default Shutdown

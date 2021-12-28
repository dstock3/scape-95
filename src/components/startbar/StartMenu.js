import React from 'react'
import docIcon from "../../assets/doc.png"
import runIcon from "../../assets/run.png"
import settingsIcon from "../../assets/settings.png"

import suspendIcon from "../../assets/suspend.png"
import findIcon from "../../assets/find.png"
import helpIcon from "../../assets/help.png"
import programsIcon from "../../assets/programs.png"
import shutdownIcon from "../../assets/shutdown.png"


import '../../style/start.css'

function StartMenu(props) {
    if (props.canStart) {
        return (
            <div className="start-menu">
                <div className="start-title-container">
                    <div className="start-title">
                        Scape 95
                    </div>
                </div>
                
                <div className="start-option-list">
                    <div className="start-options-top">
                        <div className="start-option-container">
                            <div className="start-option">
                                <img src={programsIcon} alt="programs icon" className="start-item-icon"></img>
                                <div className="start-item">Programs</div>
                            </div>
                            <div className="start-option-arrow">▶</div>
                        </div>

                        <div className="start-option-container">
                            <div className="start-option">
                                <img src={docIcon} alt="dummy-alt" className="start-item-icon"></img>
                                <div className="start-item">Documents</div>
                            </div>
                            <div className="start-option-arrow">▶</div>
                        </div>

                        <div className="start-option-container">
                            <div className="start-option">
                                <img src={settingsIcon} alt="settings icon" className="start-item-icon"></img>
                                <div className="start-item">Settings</div>
                            </div>
                            <div className="start-option-arrow">▶</div>
                        </div>

                        <div className="start-option-container">
                            <div className="start-option">
                                <img src={findIcon} alt="find icon" className="start-item-icon"></img>
                                <div className="start-item">Find</div>
                            </div>
                            <div className="start-option-arrow">▶</div>
                        </div>
                        <div className="start-option-container">
                            <div className="start-option">
                                <img src={helpIcon} alt="help icon" className="start-item-icon"></img>
                                <div className="start-item">Help</div>
                            </div>
                            <div className="start-option-arrow">▶</div>
                        </div>
                        <div className="start-option-container">
                            <div className="start-option">
                                <img src={runIcon} alt="suspend icon" className="start-item-icon"></img>
                                <div className="start-item">Run...</div>
                            </div>
                            <div className="start-option-arrow">▶</div>
                        </div>
                    </div>


                    <div className="start-options-bottom">
                        <div className="start-option-container" id="suspend">
                            <div className="start-option">
                                <img src={suspendIcon} alt="suspend icon" className="start-item-icon"></img>
                                <div className="start-item">Suspend</div>
                            </div>
                        </div>
                        <div className="start-option-container" id="shutdown">
                            <div className="start-option">
                                <img src={shutdownIcon} alt="dummy-alt" className="start-item-icon"></img>
                                <div className="start-item">Shut Down...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default StartMenu

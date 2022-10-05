import React, { useState, useContext } from 'react'
import '../../style/start.css'
import { StartContext } from '../Main'
import controlIcon from '../../assets/icons/control.png'
import printerIcon from '../../assets/icons/print.png'
import taskbarIcon from '../../assets/icons/taskbar.png'

const SettingsMenu = ({isClicked, canStart, setStart}) => {
    const openApps = useContext(StartContext)

    const [progStyle, setProgStyle] = useState({
        position: "absolute",
        left: "16.9%",
        bottom: "465%",
        borderLeft: "1px black solid",
        zIndex: "4",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    const openNewApp = (openApp) => {
        openApp()
        setStart({...canStart, isStarted: false})
    }

    if (isClicked) {
        return (
            <div className="start-menu" style={progStyle}>
                <div className="start-option-container">
                    <div className="start-option">
                        <img src={controlIcon} alt="control panel icon" className="start-item-icon"></img>
                        <div className="start-item"><span style={{textDecoration: "underline"}}>C</span>ontrol Panel</div>
                    </div>
                </div>
                <div className="start-option-container">
                    <div className="start-option">
                        <img src={printerIcon} alt="printers icon" className="start-item-icon"></img>
                        <div className="start-item"><span style={{textDecoration: "underline"}}>P</span>rinter</div>
                    </div>
                </div>
                <div className="start-option-container">
                    <div className="start-option">
                        <img src={taskbarIcon} alt="taskbar icon" className="start-item-icon"></img>
                        <div className="start-item"><span style={{textDecoration: "underline"}}>T</span>askbar</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null

    }

}

export default SettingsMenu
import React, { useState, useContext } from 'react'
import '../../style/start.css'
import {StartContext} from '../Main'
import aimIcon from '../../assets/icons/aim.png'

const OnlineServices = ({isClicked, canStart, setStart}) => {
    const [progStyle, setProgStyle] = useState({
        position: "absolute",
        left: "33.5%",
        bottom: "825%",
        borderLeft: "1px black solid",
        zIndex: "5",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    const openApps = useContext(StartContext)
    
    const openNewApp = (openApp) => {
        openApp()
        setStart({...canStart, isStarted: false})
    }

    if (isClicked) {
        return (
            <div className="start-menu" style={progStyle}>
                <div className="start-option-container">
                    <div className="start-option instant-messenger-icon" onClick={()=> openNewApp(openApps.aim)}>
                        <img src={aimIcon} alt="instant messenger icon" className="start-item-icon" id="instant-messenger-icon"></img>
                        <div className="start-item">AOL Instant Messenger</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default OnlineServices
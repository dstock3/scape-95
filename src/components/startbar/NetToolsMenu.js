import React, { useState, useContext } from 'react'
import '../../style/start.css'
import {StartContext} from '../Main'
import netIcon from '../../assets/icons/internet.png'

const NetToolsMenu = ({isClicked, canStart, setStart}) => {
    const openApps = useContext(StartContext)

    const openNewApp = (openApp) => {
        openApp()
        setStart({...canStart, isStarted: false})
    }

    const [progStyle, setProgStyle] = useState({
        position: "absolute",
        left: "16.9%",
        bottom: "900%",
        borderLeft: "1px black solid",
        zIndex: "4",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    if (isClicked) {
        return (
            <div className="start-menu" style={progStyle}>
                <div className="start-option-container">
                    <div className="start-option">
                        <img src={netIcon} alt="internet tools icon" className="start-item-icon"></img>
                        <div className="start-item">Internet</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

export default NetToolsMenu
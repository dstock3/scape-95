import React, { useState, useContext } from 'react'
import '../../style/start.css'
import { StartContext } from '../Main'

const SettingsMenu = (props) => {
    const openApps = useContext(StartContext)

    const [progStyle, setProgStyle] = useState({
        position: "absolute",
        left: "16.9%",
        bottom: "775%",
        borderLeft: "1px black solid",
        zIndex: "4",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    const openNewApp = (openApp) => {
        openApp()
        props.setStart({...props.canStart, isStarted: false})
    }

    if (props.isClicked) {
        return (
            <div>SettingsMenu</div>
        )
    } else {
        return null

    }

}

export default SettingsMenu
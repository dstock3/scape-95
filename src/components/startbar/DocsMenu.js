import React, { useState, useContext } from 'react'
import '../../style/start.css'
import { StartContext } from '../Main'
import docsIcon from '../../assets/icons/note.png'

const DocsMenu = (props) => {
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
            <div className="start-menu" style={progStyle}>
                <div className="start-option-container" onClick={()=> openNewApp(openApps.readMe)}>
                    <div className="start-option">
                        <img src={docsIcon} alt="accessories icon" className="start-item-icon"></img>
                        <div className="start-item">readme.txt</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default DocsMenu
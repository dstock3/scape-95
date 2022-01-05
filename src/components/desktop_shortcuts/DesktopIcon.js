import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = (props) => {
    const [border, setBorder] = useState("")
    const [imageScreen, setScreen ] = useState("")

    const clickHandler = () => {
        setBorder("active-border-shortcut")
        setScreen("screen-active")
    }

    const offClick = () => {
        setBorder("")
        setScreen("")
    }

    return (
        <div className="shortcut" onMouseLeave={offClick} onClick={clickHandler} onDoubleClick={props.open} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <div className={`screen ${imageScreen}`}>
                <img className="desktop-icon" draggable={false} id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            </div>

            <div className={`folder-name ${border}`}>{props.shortcut}</div>
        </div>
    )
}

export default DesktopIcon
import React, { useState } from 'react'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = ({open, shortcut, shortcutId, shortcutIconId, imgSrc}) => {
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
        <div className="shortcut" onMouseLeave={offClick} onClick={clickHandler} onDoubleClick={open} id={shortcutId} draggable="true" onDragStart={newDrag}>
            <div className={`screen ${imageScreen}`}>
                <img className="desktop-icon" draggable={false} id={shortcutIconId} src={imgSrc} alt={shortcut}></img>
            </div>

            <div className={`folder-name ${border}`}>{shortcut}</div>
        </div>
    )
}

export default React.memo(DesktopIcon)
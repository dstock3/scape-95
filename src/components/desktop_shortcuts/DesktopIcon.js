import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import BasicWindow from '../Windows/BasicWindow'

const DesktopIcon = (props) => {
    const [newShortcut, setShortcut] = useState({shortcut: props.shortcutId, isClicked: false, isRightClicked: false})
    
    const openWindow = () => {
        setShortcut({ ...newShortcut, isClicked: true})
    }

    return (
        <>
            <div className="shortcut" onDoubleClick={openWindow} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
                <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
                <div className="folder-name">{props.shortcut}</div>
            </div>
            <BasicWindow isClicked={(newShortcut.isClicked)} winTitle={props.shortcut} winId={props.shortcutId + "-window"} />
        </>
    )
}

export default DesktopIcon
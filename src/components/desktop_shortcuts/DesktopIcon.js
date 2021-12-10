import React, { useState } from 'react'
import { newDrag } from '../../DragFunctions'
import BasicWindow from '../Windows/BasicWindow'

const DesktopIcon = (props) => {
    const [newShortcut, setShortcut] = useState({shortcut: props.shortcutId, isClicked: false, isRightClicked: false})

    return (
        <div className="shortcut" onDoubleClick={() => setShortcut({...newShortcut, isClicked: true})} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}</div>
            <BasicWindow isClicked={(newShortcut.isClicked)} winTitle={props.shortcut} winId={props.shortcutId + "-window"}/>
        </div>
    )
}

export default DesktopIcon
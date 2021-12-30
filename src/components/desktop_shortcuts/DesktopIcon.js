import React, { useState } from 'react'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = (props) => {

    return (
        <div className="shortcut" onDoubleClick={props.open} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" draggable={false} id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}</div>
        </div>
    )
}

export default DesktopIcon
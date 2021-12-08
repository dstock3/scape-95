import React, { useState, useEffect } from 'react'
import BasicWindow from '../Windows.js/BasicWindow'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = (props) => {
    let [newShortcut, setShortcut] = useState({shortcut: props.shortcutId, isOpen: false, isClicked: false, isRightClicked: false, contents: props.contents})

    /*

    useEffect(() => {
        const openWindow = () => {
            if (isClicked) {
                return (
                    <BasicWindow />
                )
            }
        }
        document.addEventListener("dblclick", openWindow);
    }) */

    return (
        <div className="shortcut" onDoubleClick={() => setShortcut({...newShortcut, isClicked: true})} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}{console.log(newShortcut)}</div>
        </div>
    )
}

export default DesktopIcon
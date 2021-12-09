import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = (props) => {
    const [newShortcut, setShortcut] = useState({shortcut: props.shortcutId, isOpen: false, isClicked: false, isRightClicked: false, contents: props.contents})

    useEffect(() => {
        if (newShortcut.isClicked) {
            /*
            const app = document.getElementsByClassName("App")[0];
            const newElement = document.createElement("div");
            newElement.classList.add("basic-window")
            newElement.innerHTML = newShortcut.shortcut
            app.appendChild(newElement)   
            */
        }
    }, [newShortcut])

    return (
        <div className="shortcut" onDoubleClick={() => setShortcut({...newShortcut, isClicked: true})} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}</div>
        </div>
    )
}

export default DesktopIcon
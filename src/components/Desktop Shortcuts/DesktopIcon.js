import React, { useState, useEffect } from 'react'
import BasicWindow from '../Windows/BasicWindow'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = (props) => {
    let [isClicked, setIsClicked] = useState(false)

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
        <div className="shortcut" onDoubleClick={() => setIsClicked(prevClicked => prevClicked = !prevClicked)} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}{console.log(isClicked)}</div>
        </div>
    )
}

export default DesktopIcon
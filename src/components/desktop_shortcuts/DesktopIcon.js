import React, { useState } from 'react'
import { newDrag } from '../../DragFunctions'


const DesktopIcon = (props) => {
    /*
    useEffect(() => {
        newController.winParent = document.getElementById(props.shortcutId).parentElement

        let closeButtons = Array.from(document.getElementsByClassName("close"))

        for (let i = 0; i < closeButtons.length; i++) {
            let close = closeButtons[i];
            let newWindow = close.parentElement.parentElement.parentElement;

            function closeSet() {
                let winButtons = Array.from(document.getElementsByClassName("min-win-button"))
                for (let y = 0; y < winButtons.length; y++) {
                    if (props.shortcut === winButtons[y].innerHTML) {
                        winButtons[y].remove()
                    }

                    if (newWindow.id === props.shortcutId + "-window")  {
                        if (newWindow.parentElement !== newController.winParent) {
                            newWindow.classList.add("hidden")
                            newController.winParent.appendChild(newWindow)
                            newWindow.remove()
                        } else {
                            //closeWindow()
                            newWindow.remove()
                        }
                    }
                }
            }

            close.addEventListener("click", closeSet)
        }
    }) */

    return (
        <div className="shortcut" onDoubleClick={props.open} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}</div>
        </div>
    )
}

export default DesktopIcon
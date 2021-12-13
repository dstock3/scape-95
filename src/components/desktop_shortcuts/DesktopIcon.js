import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import BasicWindow from '../Windows/BasicWindow'

const DesktopIcon = (props) => {
    const [newShortcut, setShortcut] = useState({isClicked: false, isRightClicked: false})
    
    const openWindow = () => {
        setShortcut({ ...newShortcut, isClicked: true})
    }

    const closeWindow = () => {
        setShortcut({...newShortcut, isClicked: false})
    }

    useEffect(() => {
        let closeButtons = Array.from(document.getElementsByClassName("close"))
        
        for (let i = 0; i < closeButtons.length; i++) {
            let close = closeButtons[i];
            let newWindow = close.parentElement.parentElement.parentElement;
            if (newWindow.id === props.shortcutId + "-window") {
                console.log(`added event for ${props.shortcutId}`)
                close.addEventListener("click", closeWindow)
            }
        }

        return () => {
            for (let i = 0; i < closeButtons.length; i++) {
                closeButtons[i].removeEventListener("click", closeWindow);
            }
        }
    })

    return (
        <>
            <div className="shortcut" onDoubleClick={openWindow} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
                <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
                <div className="folder-name">{props.shortcut}</div>
            </div>
            <BasicWindow isClicked={(newShortcut.isClicked)} winTitle={props.shortcut} winId={props.shortcutId + "-window"} contents={props.contents}/>
        </>
    )
}

export default DesktopIcon
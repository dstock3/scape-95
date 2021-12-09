import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'

function BasicWindow(props) {
    const [win, setWin] = useState({isMax: false, isMin: false, isOpen: true})

    useEffect(() => {
        let currentWindow = document.getElementById(props.winId);
        let main = document.querySelector(".main")
        let maxHeight = main.offsetHeight
        let maxWidth = main.offsetWidth
        let minHeight = "350px"
        let minWidth = "350px"

        if (!win.isOpen) {
            currentWindow.remove()  
        } else if (win.isMax) {
            main.appendChild(currentWindow)
            currentWindow.style.position = "fixed";
            currentWindow.style.left ="0";
            currentWindow.style.top ="0";
            currentWindow.style.height = maxHeight + "px";
            currentWindow.style.width = maxWidth + "px";
        } else if (!win.isMax) {
            let col = document.getElementById("four");
            currentWindow.style.position = "relative";
            col.firstChild.appendChild(currentWindow)
            currentWindow.style.height = minHeight;
            currentWindow.style.width = minWidth;
        }
    })

    const maxToggle = () => {
        if (win.isMax) {
            setWin({ ...win, isMin: false, isMax: false })
        } else {
            setWin({ ...win, isMin: false, isMax: true })
        }
    }

    return (
        <div className="basic-window" id={props.winId} draggable="true" onDragStart={newDrag}>
            <div className="window-top">
                <div className="window-title">{props.winTitle}</div>
                <div className="window-buttons">
                    <button className="min" onClick={() => setWin({ ...win, isMin: true, isMax: false })}>-</button>
                    <button className="max" onClick={maxToggle}>❑</button>
                    <button className="close" onClick={() => setWin({ ...win, isOpen: false, isMin: false, isMax: false })}>X</button>
                </div>
            </div>
            <div className="window-body">
                {props.contents}                
            </div>
        </div>
    )
}

export default BasicWindow

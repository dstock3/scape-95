import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'

function BasicWindow(props) {
    const [win, setWin] = useState({
        isMax: false, 
        isMin: false, 
        isOpen: true, 
        isDraggable: true,
        style: {
            position: "relative",
            height: "350px",
            width: "350px"
        }
    })

    useEffect(() => {
        if (props.isClicked) {
            let currentWindow = document.getElementById(props.winId);

            if (!win.isOpen && currentWindow) {
                currentWindow.remove();
            } 
            
            /*else if (!win.isMax) {
                let col = document.getElementById("four");
                col.firstChild.appendChild(currentWindow)
            }*/
        }
    })

    const maxToggle = () => {
        let main = document.querySelector(".main")
        let maxHeight = main.offsetHeight
        let maxWidth = main.offsetWidth

        if (win.isMax) {
            setWin({ ...win, 
                isMin: false, 
                isMax: false, 
                isDraggable: true,
                style: {
                    position: "relative",
                    height: "350px",
                    width: "350px",
                    zIndex: 1
                }

            })
        } else {
            setWin({ ...win, 
                isMin: false, 
                isMax: true, 
                isDraggable: false,
                style: {
                    position: "fixed",
                    height: maxHeight + "px",
                    width: maxWidth + "px",
                    left: "0",
                    top: "0",
                    zIndex: 2
                }

            })
        }
    }

    const closeWindow = () => {
        setWin({ ...win, isOpen: false, isMin: false, isMax: false })
    }

    if (props.isClicked) {
        return (
            <div className="basic-window" id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                <div className="window-top">
                    <div className="window-title">{props.winTitle}</div>
                    <div className="window-buttons">
                        <button className="min" onClick={() => setWin({ ...win, isMin: true, isMax: false })}>-</button>
                        <button className="max" onClick={maxToggle}>❑</button>
                        <button className="close" onClick={closeWindow}>X</button>
                    </div>
                </div>
                <div className="window-body">
                    {props.contents}                
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default BasicWindow

import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import MinWindow from '../startbar/MinWindow'

function BasicWindow(props) {
    const [win, setWin] = useState({
        isMax: false, 
        isMin: false, 
        isOpen: true, 
        isDraggable: true,
        style: {
            position: "relative",
            left: "45%",
            top: "15%",
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

            /*
            else if (!win.isMax) {
                let col = document.getElementById("four");
                col.firstChild.appendChild(currentWindow)
            }*/
        }
    })

    useEffect(() => {

    }, [win.isMin])

    const styleController = () => {
        const main = document.querySelector(".main")
        const maxHeight = main.offsetHeight
        const maxWidth = main.offsetWidth

        const defaultStyle = {
            position: "relative",
            left: "45%",
            top: "15%",
            height: "350px",
            width: "350px",
            zIndex: 1
        }
    
        const maxStyle = {
            position: "fixed",
            height: maxHeight + "px",
            width: maxWidth + "px",
            left: "0",
            top: "0",
            zIndex: 2
        }
        return { defaultStyle, maxStyle }
    }

    const maxToggle = () => {
        const newStyle = styleController()
        if (win.isMax) {
            setWin({ ...win, 
                isMin: false, 
                isMax: false, 
                isDraggable: true,
                style: newStyle.defaultStyle,
            })
        } else {
            setWin({ ...win, 
                isMin: false, 
                isMax: true, 
                isDraggable: false,
                style: newStyle.maxStyle
            })
        }
    }

    const closeWindow = () => {
        setWin({ ...win, isOpen: false, isMin: false, isMax: false })
    }

    const minWindow = () => {
        setWin({ ...win, isOpen: false, isMin: true, isMax: false })
    }

    const passMin = () => {
        if (win.isMin) {
            return props.winTitle
        } else {
            return null
        }
    }

    const minValue = passMin()

    if (props.isClicked) {
        return (
            <>
                <div className="basic-window" id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top">
                        <div className="window-title">{props.winTitle}</div>
                        <div className="window-buttons">
                            <button className="min" onClick={minWindow}>-</button>
                            <button className="max" onClick={maxToggle}>❑</button>
                            <button className="close" onClick={closeWindow}>X</button>
                        </div>
                    </div>
                    <div className="window-body">
                        {props.contents}             
                    </div>

                </div>
                
                <MinWindow winItem={minValue}/>

            </>
        )
    } else {
        return null
    }
}

export default BasicWindow

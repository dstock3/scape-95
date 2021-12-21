import React, { useState } from 'react'
import { newDrag } from '../../DragFunctions'
import '../../style/window.css'
import WindowsButtons from './WindowsButtons'

function BasicWindow(props) {
    const [win, setWin] = useState({
        isMax: false, 
        isDraggable: true,
        isSelected: true,
        style: {
            position: "relative",
            left: "0",
            top: "0",
            height: "500px",
            width: "700px",
        }
    })

    const styleController = () => {
        const main = document.querySelector(".main")
        
        let maxHeight
        if (props.winId === "net-window") {
            maxHeight = main.offsetHeight - 145
        } else {
            maxHeight = main.offsetHeight
        }

        const maxWidth = main.offsetWidth

        const defaultStyle = {
            position: "relative",
            left: "0",
            top: "0",
            height: "500px",
            width: "700px",
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

    if (props.isClicked) {
        return (
            <>
                <div className="basic-window" id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onDoubleClick={maxToggle}>
                        <div className="window-title">{props.winTitle}</div>
                        <WindowsButtons min={props.min} max={maxToggle} close={props.close} />
                    </div>
                    <div className="window-body">
                        {props.contents}             
                    </div>
                </div>
            </>
        )
    } else {
        return null
    }
}

export default BasicWindow

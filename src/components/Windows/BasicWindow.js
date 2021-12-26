import React, { useState, useEffect } from 'react'
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
            height: "600px",
            width: "800px",
        }
    })

    const [isHidden, setHidden] = useState(props.minState)

    useEffect(() => {
        if (props.minState) {
            setHidden("hidden")
        } else {
            setHidden("")
        }
    }, [props.minState])

    const [isClosed, setClosed] = useState(false)
    
    const closeSet = () => {
        setClosed(true)
        props.close()
    }

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
            height: "600px",
            width: "800px",
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
                <div className={`basic-window ${isHidden}`} id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onDoubleClick={maxToggle}>
                        <div className="window-title">{props.winTitle}</div>
                        <WindowsButtons min={props.min} max={maxToggle} close={closeSet} />
                    </div>
                    <div className="window-body">
                        {props.contents}             
                    </div>
                </div>
            </>
        )
    } else if (!props.isClicked) {
        return(
            <div className={`basic-window hidden`} id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>

            </div>
        )
    } else if (isClosed) {
        return null
    }
}

export default BasicWindow

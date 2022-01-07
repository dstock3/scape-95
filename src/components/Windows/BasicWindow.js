import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import '../../style/window.css'
import WindowsButtons from './WindowsButtons'

function BasicWindow(props) {
    console.log("Basic Window", props.winId)
    let defaultWidth
    let defaultHeight

    if (props.size) {
        defaultWidth = props.size.width
        defaultHeight = props.size.height
    } else {
        defaultWidth = "650px"
        defaultHeight ="650px"
    }

    const [win, setWin] = useState({
        isMax: false, 
        isDraggable: false,
        isSelected: true,
        style: {
            position: "relative",
            right: "550px",
            bottom: "500px",
            minHeight: defaultHeight,
            minWidth: defaultHeight,
        },
        bodyStyle: {
            height: parseInt(defaultHeight.replace("px", "") - 25)
        }
    })

    const [isHidden, setHidden] = useState("hidden")
    const [isMoved, setMoved] = useState(false)

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
        let maxHeight = main.offsetHeight - 40
        const maxWidth = main.offsetWidth

        const defaultStyle = {
            position: "relative",
            left: "0",
            top: "350px",
            bottom: "0",
            minHeight: defaultHeight,
            minWidth: defaultWidth,
            zIndex: 1,
        }

        const maxStyle = {
            position: "fixed",
            minHeight: maxHeight + "px",
            minWidth: maxWidth + "px",
            left: "0",
            top: "0",
            zIndex: 2
        }

        const defaultBody = {
            height: parseInt(defaultHeight.replace("px", "") - 25) + "px"
        }

        const maxBody = {
            height: main.offsetHeight - 15
        }

        return { defaultStyle, maxStyle, defaultBody, maxBody }
    }

    const maxToggle = () => {
        const newStyle = styleController()
        if (win.isMax) {
            setWin({ ...win, 
                isMin: false, 
                isMax: false, 
                isDraggable: false,
                style: newStyle.defaultStyle,
                bodyStyle: newStyle.defaultBody
            })
        } else {
            setWin({ ...win, 
                isMin: false, 
                isMax: true, 
                isDraggable: false,
                style: newStyle.maxStyle,
                bodyStyle: newStyle.maxBody
            })
        }
    }

    useEffect(()=> {
        let window = document.getElementById(props.winId)
        if (win.isMax) {
            window.classList.add("max")
            window.classList.remove("def")
        } else {
            window.classList.add("def")
            window.classList.remove("max")
        }
    }, [win.isMax])

    const setDraggableTrue = () => {
        if (!win.isMax) {
            setWin({...win, isDraggable: true})
            setMoved(true)
        }
    }

    useEffect(()=> {
        let win = document.querySelector(`#${props.winId}`)
        if (isMoved) {
            function dragSet() {
                win.style.position = "relative"
                win.style.left = "0"
                win.style.top = "350px"
                win.style.bottom = "0"
            }
            if (win) {
                win.addEventListener("dragend", dragSet)

                return () => {
                    win.removeEventListener("dragend", dragSet)
                }
            }
        }

    }, [isMoved])

    if (props.isClicked) {
        return (
            <>
                <div className={`basic-window ${isHidden}`} id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onMouseEnter={setDraggableTrue} onMouseLeave={()=> setWin({...win, isDraggable: false})} onDoubleClick={maxToggle}>
                        <div className="window-title">{props.winTitle}</div>
                        <WindowsButtons min={props.min} max={maxToggle} close={closeSet} />
                    </div>
                    <div className="window-body" style={win.bodyStyle}>
                        {props.contents}             
                    </div>
                </div>
            </>
        )
    } else if (!props.isClicked) {
        return(
            <div className={`basic-window hidden`} id={props.winId} draggable={false} onDragStart={newDrag} style={{height: "0", width: "0"}}>

            </div>
        )
    } else if (isClosed) {
        return null
    }
}

export default React.memo(BasicWindow)

import React, { useState, useEffect, useRef } from 'react'
import { newDrag } from '../../DragFunctions'
import '../../style/window.css'
import WindowsButtons from './WindowsButtons'

function BasicWindow({size, winId, minState, close, isClicked, min, winTitle, contents}) {
    let defaultWidth
    let defaultHeight

    if (size) {
        defaultWidth = size.width
        defaultHeight = size.height
    } else {
        defaultWidth = "650px"
        defaultHeight ="650px"
    }

    const [isMoved, setMoved] = useState(false)
    const parentRef = useRef(false)

    useEffect(()=> {
        let win = document.getElementById(winId)
        parentRef.current = win.parentElement

    }, [])

    let defStyle = useRef({
        position: "relative",
        right: "550px",
        bottom: "500px",
        minHeight: defaultHeight,
        minWidth: defaultHeight,
    })

    const [win, setWin] = useState({
        isMax: false, 
        isDraggable: false,
        isSelected: true,
        style: defStyle.current,
        bodyStyle: {
            height: parseInt(defaultHeight.replace("px", "") - 25)
        }
    })

    const [isHidden, setHidden] = useState("hidden")

    useEffect(() => {
        if (minState) {
            setHidden("hidden")
        } else {
            setHidden("")
        }
    }, [minState])

    const [isClosed, setClosed] = useState(false)
    
    const closeSet = () => {
        setClosed(true)
        close()
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

        const selectStyle = {
            position: "relative",
            right: "550px",
            bottom: "500px",
            minHeight: defaultHeight,
            minWidth: defaultHeight,
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

        return { defaultStyle, maxStyle, defaultBody, selectStyle, maxBody }
    }

    const maxToggle = () => {
        const newStyle = styleController()
        if (win.isMax) {
            if (isMoved) {
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
                    isMax: false, 
                    isDraggable: false,
                    style: newStyle.selectStyle,
                    bodyStyle: newStyle.defaultBody
                })
            }
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
        let window = document.getElementById(winId)
        if (parentRef.current !== window.parentElement) {
            setMoved(true)
        }

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
        }
    }

    useEffect(()=> {
        let win = document.querySelector(`#${winId}`)

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
        
    })

    if (isClicked) {
        return (
            <>
                <div className={`basic-window ${isHidden}`} id={winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onMouseEnter={setDraggableTrue} onMouseLeave={()=> setWin({...win, isDraggable: false})} onDoubleClick={maxToggle}>
                        <div className="window-title">{winTitle}</div>
                        <WindowsButtons min={min} max={maxToggle} close={closeSet} />
                    </div>
                    <div className="window-body" style={win.bodyStyle}>
                        {contents}             
                    </div>
                </div>
            </>
        )
    } else if (!isClicked) {
        return(
            <div className={`basic-window hidden`} id={winId} draggable={false} onDragStart={newDrag} style={{height: "0", width: "0"}}>

            </div>
        )
    } else if (isClosed) {
        return null
    }
}

export default React.memo(BasicWindow)

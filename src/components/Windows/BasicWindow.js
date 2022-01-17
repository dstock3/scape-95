import React, { useState, useEffect, useRef, useReducer } from 'react'
import { newDrag } from '../../DragFunctions'
import '../../style/window.css'
import WindowsButtons from './WindowsButtons'


const ACTIONS = {
    MAX: 'max',
    DEF: 'def',
    DRAG: 'drag',
    NODRAG:"nodrag",
    MOVE: "move",
    NOMOVE: "nomove"
}

function reducer(win, action) {
    const main = document.querySelector(".main")
    let maxHeight = main.offsetHeight - 40
    const maxWidth = main.offsetWidth
    let mql = window.matchMedia('(max-width: 800px)');
    
    let defaultWidth
    let defaultHeight
    
    if (win.size) {
        defaultWidth = win.size.width
        defaultHeight = win.size.height
    } else {
        defaultWidth = "650px"
        defaultHeight ="650px"
    }
    
    let defaultStyle
    if (mql.matches) {
        console.log("match")
        defaultStyle = {
            position: "absolute",
            left: "0",
            top: "0",
            minHeight: maxHeight + "px",
            minWidth: maxWidth + "px",
            zIndex: 1,
        }
    } else {
        defaultStyle = {
            position: "relative",
            left: "0",
            top: "350px",
            bottom: "0",
            minHeight: defaultHeight,
            minWidth: defaultWidth,
            zIndex: 1,
        }
    }

    let selectStyle = {
        position: "relative",
        right: "550px",
        bottom: "500px",
        minHeight: defaultHeight,
        minWidth: defaultHeight,
    }

    let maxStyle = {
        position: "fixed",
        minHeight: maxHeight + "px",
        minWidth: maxWidth + "px",
        left: "0",
        top: "0",
        zIndex: 2
    }

    let defaultBody = {
        height: parseInt(defaultHeight.replace("px", "") - 25) + "px"
    }

    let maxBody = {
        height: main.offsetHeight - 15
    }

    switch(action.type) {
        case ACTIONS.MAX :
            return {
                isMoved: false,
                isMax: true, 
                isDraggable: false,
                isSelected: true,
                style: maxStyle,
                bodyStyle: maxBody
            }
        case ACTIONS.DEF :
            return {
                isMax: false, 
                isDraggable: false,
                style: defaultStyle,
                bodyStyle: defaultBody
            }
        case ACTIONS.SEL :
            return {
                isMax: false, 
                isDraggable: false,
                style: selectStyle,
                bodyStyle: defaultBody
            }
        case ACTIONS.DRAG :
            return {
                isDraggable: true,
            }
        case ACTIONS.NODRAG :
            return {
                isDraggable: false,
            }
        case ACTIONS.MOVE :
            return {
                isMoved: true,
            }
        case ACTIONS.NOMOVE :
            return {
                isMoved: false,
            }

        default:
            return win

    }
}

function BasicWindow(props) {
    
    let defaultWidth
    let defaultHeight
    
    if (props.size) {
        defaultWidth = props.size.width
        defaultHeight = props.size.height
    } else {
        defaultWidth = "650px"
        defaultHeight ="650px"
    }

    const [win, dispatch] = useReducer(reducer, {
        mql: window.matchMedia('(max-width: 800px)'),
        size: props.size,
        isMax: false, 
        isDraggable: false,
        isSelected: true,
        style: {
            isMoved: false,
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

    const parentRef = useRef(false)

    useEffect(()=> {
        let win = document.getElementById(props.winId)
        parentRef.current = win.parentElement

    }, [])
    


    const [isHidden, setHidden] = useState("hidden")

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
    
    const maxToggle = () => {
        if (win.isMax) {
            if (win.isMoved) {
                dispatch({ type: ACTIONS.DEF })

            } else {
                dispatch({ type: ACTIONS.SEL })
            }
        } else {
            dispatch({ type: ACTIONS.MAX })
        }
    }

    useEffect(()=> {
        let window = document.getElementById(props.winId)
        if (parentRef.current !== window.parentElement) {
            dispatch({ type: ACTIONS.MOVE })
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
            dispatch({ type: ACTIONS.DRAG })
        }
    }

    useEffect(()=> {
        let win = document.querySelector(`#${props.winId}`)

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

    if (props.isClicked) {
        return (
            <>
                <div className={`basic-window ${isHidden}`} id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onMouseEnter={setDraggableTrue} onMouseLeave={()=> dispatch({ type: ACTIONS.NODRAG })} onDoubleClick={maxToggle}>
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

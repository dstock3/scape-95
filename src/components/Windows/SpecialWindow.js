import React, { useState, useEffect } from 'react'
import '../../style/window.css'
import { newDrag } from '../../DragFunctions'

function SpecialWindow(props) {
    console.log("Special Window ", props.winId)
    useEffect(()=> {
        const main = document.querySelector(".main")
        if (props.isClicked && props.fade) {
            main.style.opacity = ".25"
            main.style.background = "rgb(128, 128, 128)"
        } else {
            main.style.opacity = "1"
            main.style.background = null
        }

    }, [props.isClicked])

    const [win, setWin] = useState({
        isDraggable: false,
        style: {
            position: "relative",
            minHeight: props.size.height,
            minWidth:  props.size.width,
            left: props.position.left,
            top: props.position.top
        },
        bodyStyle: {
            height: props.size.height
        },
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
        if (props.closeState) {
            setClosed(true)
            props.close()
        }
    }
    let buttonStyle
    if (!props.closeState) {
        buttonStyle = {
            color: "rgb(112, 112, 112)",
            fontWeight: "bold"
        }
    }

    const setDraggableTrue = () => {
        if (props.canDrag) {
            setWin({...win, isDraggable: true})
        }
    }
    
    if (props.isClicked) {
        return (
            <>
                <div className={`special-window ${isHidden}`} id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onMouseEnter={setDraggableTrue} onMouseLeave={()=> setWin({...win, isDraggable: false})}>
                        <div className="window-title">{props.winTitle}</div>
                        <div className="window-buttons" style={{width: "fit-content", marginRight: "1px"}}>
                            {props.help}
                            {props.minMax}
                            <button className="windows-button close" onClick={closeSet} style={buttonStyle}>X</button>
                        </div>
                    </div>
                    <div className="window-body" style={win.bodyStyle}>
                        {props.contents}             
                    </div>
                </div>
            </>
        )
    } else if (!props.isClicked) {
        return(
            <div className={`special-window hidden`} id={props.winId} draggable="false" style={win.style}>

            </div>
        )
    } else if (isClosed) {
        return null
    }
}

export default React.memo(SpecialWindow)

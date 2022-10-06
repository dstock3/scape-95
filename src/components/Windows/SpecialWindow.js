import React, { useState, useEffect } from 'react'
import '../../style/window.css'
import { newDrag } from '../../DragFunctions'

function SpecialWindow({isClicked, fade, size, position, minState, closeState, close, canDrag, winId, winTitle, help, minMax, contents}) {
    useEffect(()=> {
        const main = document.querySelector(".main")
        if (isClicked && fade) {
            main.style.opacity = ".25"
            main.style.background = "rgb(128, 128, 128)"
        } 
    }, [isClicked])

    const [win, setWin] = useState({
        isDraggable: false,
        style: {
            position: "relative",
            minHeight: size.height,
            minWidth:  size.width,
            left: position.left,
            bottom: position.bottom,
            right: position.right,
        },
        bodyStyle: {
            height: size.height
        },
    })

    const [isHidden, setHidden] = useState(minState)

    useEffect(() => {
        if (minState) {
            setHidden("hidden")
        } else {
            setHidden("")
        }
    }, [minState])

    const [isClosed, setClosed] = useState(false)
    
    const closeSet = () => {
        if (closeState) {
            setClosed(true)
            close()
        }
    }
    let buttonStyle
    if (!closeState) {
        buttonStyle = {
            color: "rgb(112, 112, 112)",
            fontWeight: "bold"
        }
    }

    const setDraggableTrue = () => {
        if (canDrag) {
            setWin({...win, isDraggable: true})
        }
    }
    
    if (isClicked) {
        return (
            <>
                <div className={`special-window ${isHidden}`} id={winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top" onMouseEnter={setDraggableTrue} onMouseLeave={()=> setWin({...win, isDraggable: false})}>
                        <div className="window-title">{winTitle}</div>
                        <div className="window-buttons" style={{width: "fit-content", marginRight: "1px"}}>
                            {help}
                            {minMax}
                            <button className="windows-button close" onClick={closeSet} style={buttonStyle}>X</button>
                        </div>
                    </div>
                    <div className="window-body" style={win.bodyStyle}>
                        {contents}             
                    </div>
                </div>
            </>
        )
    } else if (!isClicked) {
        return(
            <div className={`special-window hidden`} id={winId} draggable="false" style={win.style}>

            </div>
        )
    } else if (isClosed) {
        return null
    }
}

export default React.memo(SpecialWindow)

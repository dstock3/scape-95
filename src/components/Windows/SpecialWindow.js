import React, { useState, useEffect } from 'react'
import '../../style/window.css'

function SpecialWindow(props) {

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
    
    if (props.isClicked) {
        return (
            <>
                <div className={`special-window ${isHidden}`} id={props.winId} draggable="false" style={win.style}>
                    <div className="window-top">
                        <div className="window-title">{props.winTitle}</div>
                        <div className="window-buttons" style={{width: "fit-content", marginRight: "1px"}}>
                            {props.help}
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

export default SpecialWindow
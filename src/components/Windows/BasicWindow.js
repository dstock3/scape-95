import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import { newController } from '../Main'

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

    const [minWin, setMinWin] = useState([])

    const setMinWinArray = () => {
        for (let i = 0; i < newController.minWindows.length; i++) {
            setMinWin([ ...minWin, {
                id: i,
                value: newController.minWindows[i],
            }])
        }
    }

    useEffect(() => {
        if (props.isClicked) {
            let currentWindow = document.getElementById(props.winId);

            if (win.isMin && currentWindow) {
                currentWindow.classList.add("hidden")
            } else if (!win.isOpen) {
                currentWindow.remove()
            } else {
                currentWindow.classList.remove("hidden")
            }

            /*
            else if (!win.isMax) {
                let col = document.getElementById("four");
                col.firstChild.appendChild(currentWindow)
            }*/
        }
    })

    useEffect(() => {
        const winButtons = Array.from(document.getElementsByClassName("min-win-button"))
        const startBar = document.querySelector(".bar-body")
        const buttonObjArray = []

        for (let i = 0; i < winButtons.length; i++) {
            let newButtonObj = { element: winButtons[i], contents: winButtons[i].innerHTML, key: i }
            buttonObjArray.push(newButtonObj)
            
        }

        for (let i = 0; i < buttonObjArray.length; i++) {
            for (let y = 0; y < buttonObjArray.length; y++) {
                if ((buttonObjArray[y].contents === buttonObjArray[i].contents) &&(buttonObjArray[y].key !== buttonObjArray[i].key)) {
                    buttonObjArray[y].element.remove()
                    buttonObjArray.splice(y, 1)
                }
            }
        }

        for (let i = 0; i < buttonObjArray.length; i++) {
            startBar.appendChild(buttonObjArray[i].element)
        }
    })

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

    const openWindow = () => {
        setWin({ ...win, isOpen: true, isMin: false, isMax: false })
    }

    const closeWindow = () => {
        setWin({ ...win, isOpen: false, isMin: false, isMax: false })
    }

    const minWindow = () => {
        setWin({ ...win, isOpen: true, isMin: true, isMax: false })
    }

    const passMin = () => {
        if (win.isMin) {
            return props.winTitle
        } else {
            return null
        }
    }

    const minValue = passMin()

    useEffect(() => {
        if (minValue) {
            newController.minWindows.push(minValue)
            setMinWinArray()
        }
    }, [minValue])

    if (props.isClicked) {
        return (
            <>
                <div className="basic-window" id={props.winId} draggable={win.isDraggable} onDragStart={newDrag} style={win.style}>
                    <div className="window-top">
                        <div className="window-title">{props.winTitle}</div>
                        <div className="window-buttons">
                            <button className="min" id={`min-${props.winId}`}onClick={minWindow}>-</button>
                            <button className="max" onClick={maxToggle}>❑</button>
                            <button className="close" onClick={closeWindow}>X</button>
                        </div>
                    </div>
                    <div className="window-body">
                        {props.contents}             
                    </div>
                </div>
                <div className="min-win">
                    {minWin.map(minWindow => (
                        <div className="min-win-button" onClick={openWindow} key={minWindow.id} >{minWindow.value}</div>
                    ))}
                </div>
            </>
        )
    } else {
        return null
    }
}

export default BasicWindow

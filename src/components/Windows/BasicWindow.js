import React, { useState, useEffect } from 'react'
import { newDrag } from '../../DragFunctions'
import { newController } from '../Main'
import '../../style/window.css'
import WindowsButtons from './WindowsButtons'

function BasicWindow(props) {
    const [win, setWin] = useState({
        isMax: false, 
        isMin: false, 
        isDraggable: true,
        isSelected: true,
        style: {
            position: "relative",
            left: "0",
            top: "0",
            height: "500px",
            width: "900px",
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
    /*
    useEffect(() => {
        let winButtons = Array.from(document.getElementsByClassName("min-win-button"))
        let startBar = document.querySelector(".bar-body")
        let buttonObjArray = []
        let currentWindow = document.getElementById(props.winId);

        if (props.isClicked && currentWindow) {
            for (let i = 0; i < winButtons.length; i++) {
                if (winButtons[i].innerHTML !== props.winTitle) {
                    winButtons[i].classList.remove("selected");
                }
            }
            if (win.isMin) {
                currentWindow.classList.add("hidden")
                for (let i = 0; i < winButtons.length; i++) {
                    if (winButtons[i].innerHTML === props.winTitle) {
                        winButtons[i].classList.remove("selected")
                    }
                }
            } else {
                for (let i = 0; i < winButtons.length; i++) {
                    if (winButtons[i].innerHTML === props.winTitle) {
                        winButtons[i].classList.add("selected")
                    }
                }
                currentWindow.classList.remove("hidden")
            }
        }

        for (let i = 0; i < winButtons.length; i++) {
            let newButtonObj = { element: winButtons[i], contents: winButtons[i].innerHTML, key: i }
            buttonObjArray.push(newButtonObj)
        }

        for (let i = 0; i < buttonObjArray.length; i++) {
            for (let y = 0; y < buttonObjArray.length; y++) {
                if ((buttonObjArray[y].contents === buttonObjArray[i].contents) && (buttonObjArray[y].key !== buttonObjArray[i].key)) {
                    buttonObjArray[y].element.remove()
                    buttonObjArray.splice(y, 1)
                }
            }
        }

        if (!props.isClicked) {
            for (let i = 0; i < buttonObjArray.length; i++) {
                if (buttonObjArray[i].contents === props.winTitle) {
                    buttonObjArray[i].element.remove()
                    buttonObjArray.splice(i, 1)
                }
            }
        }
        function selectEffect() {
            for (let i = 0; i < buttonObjArray.length; i++) {
                if (buttonObjArray[i].element.classList.contains("selected")) {
                    buttonObjArray[i].element.classList.remove("selected")
                }
            }
        }

        for (let i = 0; i < buttonObjArray.length; i++) {
            startBar.appendChild(buttonObjArray[i].element)
            if (!buttonObjArray[i].element.classList.contains("selected")) {
                buttonObjArray[i].element.addEventListener("click", selectEffect)
            }
        }

        return () => {
            for (let i = 0; i < buttonObjArray.length; i++) {
                buttonObjArray[i].element.removeEventListener("click", selectEffect)
            }
        }
    }) */

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
            width: "900px",
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

    const minWindow = () => {
        setWin({ ...win, isMin: true, isMax: false, isSelected: false })
    }

    const minValue = (() => {
        if (props.isClicked) {
            return props.winTitle
        } else {
            return null
        }
    })()

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
                    <div className="window-top" onDoubleClick={maxToggle}>
                        <div className="window-title">{props.winTitle}</div>
                        <WindowsButtons min={minWindow} max={maxToggle} close={props.close} />
                    </div>
                    <div className="window-body">
                        {props.contents}             
                    </div>
                </div>
                <div className="min-win">
                    {minWin.map(minWindow => (
                        <div className="min-win-button" onClick={props.open} key={minWindow.id} >{minWindow.value}</div>
                    ))}
                </div>
            </>
        )
    } else {
        return null
    }
}

export default BasicWindow

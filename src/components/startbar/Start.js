import React, {useState, useEffect} from 'react'
import Clock from './Clock'
import StartMenu from './StartMenu'

const Start = (props) => {
    const [start, setStart] = useState({isStarted: false})
    /*
    useEffect(() => {
        newController.winParent = document.getElementById(props.shortcutId).parentElement

        let closeButtons = Array.from(document.getElementsByClassName("close"))

        for (let i = 0; i < closeButtons.length; i++) {
            let close = closeButtons[i];
            let newWindow = close.parentElement.parentElement.parentElement;

            function closeSet() {
                let winButtons = Array.from(document.getElementsByClassName("min-win-button"))
                for (let y = 0; y < winButtons.length; y++) {
                    if (props.shortcut === winButtons[y].innerHTML) {
                        winButtons[y].remove()
                    }

                    if (newWindow.id === props.shortcutId + "-window")  {
                        if (newWindow.parentElement !== newController.winParent) {
                            newWindow.classList.add("hidden")
                            newController.winParent.appendChild(newWindow)
                            newWindow.remove()
                        } else {
                            //closeWindow()
                            newWindow.remove()
                        }
                    }
                }
            }

            close.addEventListener("click", closeSet)
        }
    }) */
    
    useEffect(() => {
        let offStart = document.querySelector(".col-container")
        if (start.isStarted) {
            offStart.addEventListener("click", startToggle)
        }
        return () => {
            offStart.removeEventListener("click", startToggle)
        }
    })

    const startToggle = () => {
        if (start.isStarted) {
            setStart({ ...start, isStarted: false })
        } else {
            setStart({ ...start, isStarted: true })
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
            if (props.isMin) {
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
    })*/

    return (
        <div className="start-bar">
            <div className="start-button" onClick={startToggle}>
                Start
            </div>
            <StartMenu canStart={start.isStarted} />
            <div className="bar-body">
                <div className="min-win">
                    {props.windows.map(window => (
                        <div className={`min-win-button ${window.className}`} onClick={window.open} key={window.id} >{window.value}</div>
                    ))}
                </div>
            </div>
            <Clock />
        </div>
    )
}

export default Start

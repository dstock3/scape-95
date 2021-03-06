import React, {useState, useEffect} from 'react'
import Clock from './Clock'
import StartMenu from './StartMenu'
import windowsIcon from "../../assets/icons/windows.png"

const Start = (props) => {
    const [start, setStart] = useState({isStarted: false})
    const [isBorder, setBorder] = useState("")

    useEffect(() => {
        let offStart = document.querySelector(".col-container")
        if (start.isStarted) {
            offStart.addEventListener("click", startToggle)
        }
        return () => {
            offStart.removeEventListener("click", startToggle)
        }
    })

    useEffect(() => {
        let startButton = document.querySelector(".start-button")
        if (start.isStarted) {
            startButton.classList.add("started")
        } else {
            startButton.classList.remove("started")
        }
    }, [start])

    const startToggle = () => {
        if (start.isStarted) {
            setStart({ ...start, isStarted: false })
            setBorder("")
        } else {
            setStart({ ...start, isStarted: true })
            setBorder("active-border")
        }
    }

    useEffect(()=> {
        let runWindow = document.getElementById("run-window")
        if (runWindow) {
            if (!runWindow.classList.contains("hidden")) {
                setStart({ ...start, isStarted: false })
                setBorder("")
            }
        }
    }, [start.isStarted])

    const openAppCloseMenu = (openApp) => {
        setStart({ ...start, isStarted: false })
        setBorder("")
        openApp()
    }

    useEffect(()=> {
        if (!start.isStarted) {
            setBorder("")
        }
        
    }, [start.isStarted])

    return (
        <div className="start-bar"> 
            <div className="start-button" onClick={startToggle}>
                <div className={`start-border ${isBorder}`}>
                    <img src={windowsIcon} className="windows-icon" alt="windows icon"></img>

                    <div className="start-text">Start</div>
                </div>
            </div>
            <StartMenu canStart={start.isStarted} setStart={setStart} setFalse={()=>setStart({ ...start, isStarted: false })}/>
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

import React, {useState, useEffect, useContext} from 'react'
import Clock from './Clock'
import StartMenu from './StartMenu'
import windowsIcon from "../../assets/icons/windows.png"
import aimIcon from '../../assets/icons/aim.png'
import {StartContext} from '../Main'

const Start = ({ windows }) => {
    const [start, setStart] = useState({isStarted: false})
    const [isBorder, setBorder] = useState("")
    const openApps = useContext(StartContext)

    const openNewApp = (openApp) => {
        openApp()
        setStart({...start, isStarted: false})
    }

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
                    {windows.map(window => (
                        <div className={`min-win-button ${window.className}`} onClick={window.open} key={window.id} >{window.value}</div>
                    ))}
                </div>
            </div>

            <div className="side-icon-container">
                <div className="instant-messenger-side-icon" onClick={()=>openNewApp(openApps.aim)}>
                    <img src={aimIcon} alt="instant messenger icon" className="aim-icon"></img> 
                </div>

                <Clock />
            </div>
        </div>
    )
}

export default Start

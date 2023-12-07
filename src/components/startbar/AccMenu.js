import React, { useState, useContext } from 'react'
import {StartContext} from '../Main'
import defIcon from '../../assets/icons/programs.png'
import calcIcon from '../../assets/icons/calc.png'
import noteIcon from '../../assets/icons/notepad.png'
import '../../style/start.css'
import GamesMenu from './GamesMenu'
import NetToolsMenu from './NetToolsMenu'

function AccMenu({isClicked, canStart, setStart}) {
    const [games, setGames] = useState({isClicked: false})
    const [netTools, setNetTools] = useState({isClicked: false})
    const [media, setMedia] = useState({isClicked: false})

    const [accStyle, setAccStyle] = useState({
        position: "absolute",
        left: "33.5%",
        bottom: "950%",
        borderLeft: "1px black solid",
        zIndex: "5",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    const openApps = useContext(StartContext)

    const openNewApp = (openApp) => {
        openApp()
        setStart({...canStart, isStarted: false})
    }

    const openGames = () => {
        setGames({...games, isClicked: true})
        setNetTools({...netTools, isClicked: false})
        setMedia({...media, isClicked: false})
    }

    const openNetTools = () => {
        setNetTools({...netTools, isClicked: true})
        setGames({...games, isClicked: false})
        setMedia({...media, isClicked: false})
    }

    const openMedia = () => {
        setMedia({...media, isClicked: true})
        setGames({...games, isClicked: false})
        setGames({...games, isClicked: false})
    }

    if (isClicked) {
        return (
            <>
                <GamesMenu isClicked={games.isClicked} canStart={canStart} setStart={setStart}/>
                <NetToolsMenu isClicked={netTools.isClicked} canStart={canStart} setStart={setStart}/>
                <div className="start-menu" style={accStyle}>
                    <div className="start-option-container" onClick={openGames}>
                        <div className="start-option">
                            <img src={defIcon} alt="games icon" className="start-item-icon"></img>
                            <div className="start-item"><span style={{textDecoration: "underline"}}>G</span>ames</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>
                    <div className="start-option-container" onClick={openNetTools}>
                        <div className="start-option">
                            <img src={defIcon} alt="internet tools icon" className="start-item-icon"></img>
                            <div className="start-item"><span style={{textDecoration: "underline"}}>I</span>nternet Tools</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>
                    <div className="start-option-container" onClick={openMedia}>
                        <div className="start-option">
                            <img src={defIcon} alt="multimedia icon" className="start-item-icon"></img>
                            <div className="start-item"><span style={{textDecoration: "underline"}}>M</span>ultimedia</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>
                    <div className="start-option-container">
                        <div className="start-option" onClick={()=> openNewApp(openApps.calc)}>
                            <img src={calcIcon} id="calc-icon" alt="calculator icon" className="start-item-icon"></img>
                            <div className="start-item" id="calc-start-text">Calculator</div>
                        </div>
                    </div>
                    <div className="start-option-container">
                        <div className="start-option" onClick={()=> openNewApp(openApps.notepad)}>
                            <img src={noteIcon} id="note-icon" alt="notepad icon" className="start-item-icon"></img>
                            <div className="start-item">Notepad</div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return null
    }

}

export default AccMenu

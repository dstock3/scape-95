import React, { useState } from 'react'
import {StartContext} from '../Main'
import defIcon from '../../assets/icons/programs.png'
import calcIcon from '../../assets/icons/calc.png'
import '../../style/start.css'
import GamesMenu from './GamesMenu'

function AccMenu(props) {
    const [games, setGames] = useState({isClicked: false})
    const [netTools, setNetTools] = useState({isClicked: false})
    const [media, setMedia] = useState({isClicked: false})

    const [accStyle, setAccStyle] = useState({
        position: "absolute",
        left: "33.5%",
        bottom: "1000%",
        borderLeft: "1px black solid",
        zIndex: "5",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })
    const openNewApp = (openApp) => {
        openApp()
        props.setStart({...props.canStart, isStarted: false})
    }

    const openGames = () => {
        setGames({...games, isClicked: true})
    }

    const openNetTools = () => {
        setNetTools({...netTools, isClicked: true})
    }

    const openMedia = () => {
        setMedia({...media, isClicked: true})
    }

    if (props.isClicked) {
        return (
            <StartContext.Consumer>
                {
                    openApps => {
                        return (
                            <>
                                <GamesMenu isClicked={games.isClicked} canStart={props.canStart} setStart={props.setStart}/>
                                <div className="start-menu" style={accStyle}>
                                    <div className="start-option-container" onClick={openGames}>
                                        <div className="start-option">
                                            <img src={defIcon} alt="games icon" className="start-item-icon"></img>
                                            <div className="start-item">Games</div>
                                        </div>
                                        <div className="start-option-arrow">▶</div>
                                    </div>
                                    <div className="start-option-container" onClick={openNetTools}>
                                        <div className="start-option">
                                            <img src={defIcon} alt="internet tools icon" className="start-item-icon"></img>
                                            <div className="start-item">Internet Tools</div>
                                        </div>
                                        <div className="start-option-arrow">▶</div>
                                    </div>
                                    <div className="start-option-container" onClick={openMedia}>
                                        <div className="start-option">
                                            <img src={defIcon} alt="multimedia icon" className="start-item-icon"></img>
                                            <div className="start-item">Multimedia</div>
                                        </div>
                                        <div className="start-option-arrow">▶</div>
                                    </div>
                                    <div className="start-option-container">
                                        <div className="start-option" onClick={()=> openNewApp(openApps.calc)}>
                                            <img src={calcIcon} id="calc-icon" alt="calculator icon" className="start-item-icon"></img>
                                            <div className="start-item" id="calc-start-text">Calculator</div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                }
            </StartContext.Consumer>
        )
    } else {
        return null
    }

}

export default AccMenu

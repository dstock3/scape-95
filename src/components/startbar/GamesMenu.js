import React, {useState, useContext} from 'react'
import {StartContext} from '../Main'
import '../../style/start.css'
import mineIcon from '../../assets/icons/mine.png'

function GamesMenu({isClicked, canStart, setStart}) {
    const [accStyle, setAccStyle] = useState({
        position: "absolute",
        left: "50%",
        bottom: "1450%",
        borderLeft: "1px black solid",
        zIndex: "6",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    const openApps = useContext(StartContext)

    const openNewApp = (openApp) => {
        openApp()
        setStart({...canStart, isStarted: false})
    }

    if (isClicked) {
        return (
            <div className="start-menu" id="new-games" style={accStyle}>
                <div className="start-option-container">
                    <div className="start-option" onClick={()=>openNewApp(openApps.mine)}>
                        <img src={mineIcon} alt="mine icon" id="mine-icon" className="start-item-icon"></img>
                        <div className="start-item">Minesweeper</div>
                    </div>
                </div>
            </div>   
        )
    } else {
        return null
    }
}

export default GamesMenu

import React, {useState, useContext} from 'react'
import {StartContext} from '../Main'
import '../../style/start.css'
import defIcon from '../../assets/icons/programs.png'

function GamesMenu(props) {
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
        props.setStart({...props.canStart, isStarted: false})
    }

    if (props.isClicked) {
        return (
            <div className="start-menu" id="new-games" style={accStyle}>
                <div className="start-option-container">
                    <div className="start-option" onClick={()=>openNewApp(openApps.mine)}>
                        <img src={defIcon} alt="mine icon" className="start-item-icon"></img>
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

import React, { useState, useContext } from 'react'
import '../../style/start.css'
import accIcon from '../../assets/icons/programs.png'
import netIcon from '../../assets/icons/internet.png'
import dosIcon from '../../assets/icons/dos.png'
import {StartContext} from '../Main'
import Start from './Start'
import AccMenu from './AccMenu'

function ProgramsMenu(props) {
    const [acc, setAcc] = useState({isClicked: false})

    const openApps = useContext(StartContext)

    const openAcc = () => {
        setAcc({...acc, isClicked: true})
    }

    const [progStyle, setProgStyle] = useState({
        position: "absolute",
        left: "16.9%",
        bottom: "450%",
        borderLeft: "1px black solid",
        zIndex: "4",
        height: "fit-content",
        flexDirection: "column",
        margin: "none",
    })

    const openNewApp = (openApp) => {
        openApp()
        props.setStart({...props.canStart, isStarted: false})
    }

    if (props.isClicked) {
        return(
            <>
                <AccMenu isClicked={acc.isClicked} canStart={props.canStart} setStart={props.setStart} />

                <div className="start-menu" style={progStyle}>
                    <div className="start-option-container" onClick={openAcc}>
                        <div className="start-option">
                            <img src={accIcon} alt="accessories icon" className="start-item-icon"></img>
                            <div className="start-item"><span style={{textDecoration: "underline"}}>A</span>ccessories</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>
                    <div className="start-option-container">
                        <div className="start-option" /*onClick={openAccessories}*/>
                            <img src={accIcon} alt="online icon" className="start-item-icon"></img>
                            <div className="start-item"><span style={{textDecoration: "underline"}}>O</span>nline Services</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                        {/*<Accessories isClicked={acc.isClicked}/>*/}
                    </div>
                    <div className="start-option-container">
                        <div className="start-option" /*onClick={openAccessories}*/>
                            <img src={accIcon} alt="startup icon" className="start-item-icon"></img>
                            <div className="start-item"><span style={{textDecoration: "underline"}}>S</span>tart Up</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                        {/*<Accessories isClicked={acc.isClicked}/>*/}
                    </div>             
                    <div className="start-option-container" onClick={()=> openNewApp(openApps.internet)}>
                        <div className="start-option">
                            <img src={netIcon} id="online-programs-icon" alt="internet icon" className="start-item-icon"></img>
                            <div className="start-item" id="net-item">Internet</div>
                        </div>
                    </div>
                    <div className="start-option-container" onClick={()=> openNewApp(openApps.terminal)}>
                        <div className="start-option">
                            <img src={dosIcon} id="cli-programs-icon" alt="internet icon" className="start-item-icon"></img>
                            <div className="start-item">CLI-Prompt</div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return null
    }
}

export default ProgramsMenu

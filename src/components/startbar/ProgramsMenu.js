import React, { useState } from 'react'
import '../../style/start.css'
import accIcon from '../../assets/icons/programs.png'
import netIcon from '../../assets/icons/internet.png'
import dosIcon from '../../assets/icons/dos.png'
import {StartContext} from '../Main'
import Start from './Start'

function ProgramsMenu(props) {
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
        return (
            <>
                <div className="start-menu" style={progStyle}>
                    <div className="start-option-container">
                        <div className="start-option" /*onClick={openAccessories}*/>
                            <img src={accIcon} alt="accessories icon" className="start-item-icon"></img>
                            <div className="start-item">Accessories</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                        {/*<Accessories isClicked={acc.isClicked}/>*/}
                    </div>
                    <div className="start-option-container">
                        <div className="start-option" /*onClick={openAccessories}*/>
                            <img src={accIcon} alt="online icon" className="start-item-icon"></img>
                            <div className="start-item">Online Services</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                        {/*<Accessories isClicked={acc.isClicked}/>*/}
                    </div>
                    <div className="start-option-container">
                        <div className="start-option" /*onClick={openAccessories}*/>
                            <img src={accIcon} alt="startup icon" className="start-item-icon"></img>
                            <div className="start-item">Start Up</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                        {/*<Accessories isClicked={acc.isClicked}/>*/}
                    </div>
                    <StartContext.Consumer>
                        { 
                            openApps => {
                                return(
                                    <>
                                        <div className="start-option-container">
                                            <div className="start-option" onClick={()=> openNewApp(openApps.internet)}>
                                                <img src={netIcon} id="online-programs-icon" alt="internet icon" className="start-item-icon"></img>
                                                <div className="start-item" id="net-item">Internet</div>
                                            </div>
                                            
                                            
                                        </div>
                                        <div className="start-option-container">
                                            <div className="start-option" onClick={()=> openNewApp(openApps.terminal)}>
                                                <img src={dosIcon} id="cli-programs-icon" alt="internet icon" className="start-item-icon"></img>
                                                <div className="start-item">CLI-Prompt</div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        }
                    </StartContext.Consumer>
                </div>
            </>
        )
    } else {
        return null
    }
}

export default ProgramsMenu
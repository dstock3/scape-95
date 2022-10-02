import React, { useState, useEffect, useContext } from 'react'
import docIcon from "../../assets/icons/doc.png"
import runIcon from "../../assets/icons/run.png"
import settingsIcon from "../../assets/icons/settings.png"
import suspendIcon from "../../assets/icons/suspend.png"
import findIcon from "../../assets/icons/find.png"
import helpIcon from "../../assets/icons/help.png"
import programsIcon from "../../assets/icons/programs.png"
import shutdownIcon from "../../assets/icons/shutdown.png"
import '../../style/start.css'
import ProgramsMenu from './ProgramsMenu'
import {StartContext} from '../Main'
import DocsMenu from './DocsMenu'
import SettingsMenu from './SettingsMenu'

function StartMenu(props) {
    const [programs, setPrograms] = useState({isClicked: false})
    const [docs, setDocs] = useState({isClicked: false})
    const [settings, setSettings] = useState({isClicked: false})

    const openPrograms = () => {
        setPrograms({...programs, isClicked: true})
        setDocs({...docs, isClicked: false})
        setSettings({...settings, isClicked: false})
    }

    const openDocs = () => {
        setDocs({...docs, isClicked: true})
        setPrograms({...programs, isClicked: false})
        setSettings({...settings, isClicked: false})
    }

    const openSettings = () => {
        setSettings({...settings, isClicked: true})
        setPrograms({...programs, isClicked: false})
        setDocs({...docs, isClicked: false})
    }

    useEffect(()=> {
        if (programs.isClicked) {
            setDocs({...docs, isClicked: false})
        }
    }, [programs])

    useEffect(()=> {
        if (docs.isClicked) {
            setPrograms({...programs, isClicked: false})
        }
    }, [docs])

    useEffect(()=> {
        if (!props.canStart) {
            setPrograms({...programs, isClicked: false})
            setDocs({...docs, isClicked: false})

        }
    }, [props.canStart])

    const openApps = useContext(StartContext)
    
    if (props.canStart) {
        return (         
            <>
                <ProgramsMenu isClicked={programs.isClicked} canStart={props.canStart} setStart={props.setStart}/>
                <DocsMenu isClicked={docs.isClicked} canStart={props.canStart} setStart={props.setStart}/>
                <SettingsMenu isClicked={settings.isClicked} canStart={props.canStart} setStart={props.setStart}/>
                <div className="start-menu">
                    <div className="start-title-container">
                        <div className="start-title">
                            Scape 95
                        </div>
                    </div>
                    
                    <div className="start-option-list">
                        <div className="start-options-top">
                            <div className="start-option-container" onClick={openPrograms}>
                                <div className="start-option">
                                    <img src={programsIcon} alt="programs icon" className="start-item-icon"></img>
                                    <div className="start-item"><span style={{textDecoration: "underline"}}>P</span>rograms</div>
                                </div>
                                <div className="start-option-arrow">▶</div>
                            </div>

                            <div className="start-option-container" onClick={openDocs}>
                                <div className="start-option">
                                    <img src={docIcon} alt="dummy-alt" className="start-item-icon"></img>
                                    <div className="start-item"><span style={{textDecoration: "underline"}}>D</span>ocuments</div>
                                </div>
                                <div className="start-option-arrow">▶</div>
                            </div>

                            <div className="start-option-container" onClick={openSettings}>
                                <div className="start-option">
                                    <img src={settingsIcon} alt="settings icon" className="start-item-icon"></img>
                                    <div className="start-item"><span style={{textDecoration: "underline"}}>S</span>ettings</div>
                                </div>
                                <div className="start-option-arrow">▶</div>
                            </div>

                            <div className="start-option-container">
                                <div className="start-option">
                                    <img src={findIcon} alt="find icon" className="start-item-icon"></img>
                                    <div className="start-item"><span style={{textDecoration: "underline"}}>F</span>ind</div>
                                </div>
                                <div className="start-option-arrow">▶</div>
                            </div>
                            <div className="start-option-container">
                                <div className="start-option">
                                    <img src={helpIcon} alt="help icon" className="start-item-icon"></img>
                                    <div className="start-item"><span style={{textDecoration: "underline"}}>H</span>elp</div>
                                </div>
                            </div>
                            <div className="start-option-container" onClick={()=> {
                                openApps.run()
                                props.setFalse()
                                }
                            } >
                                <div className="start-option">
                                    <img src={runIcon} alt="suspend icon" className="start-item-icon"></img>
                                    <div className="start-item"><span style={{textDecoration: "underline"}}>R</span>un...</div>
                                </div>
                            </div>
                        </div>

                        <div className="start-options-bottom">
                            <div className="start-dec-line"></div>
                            <div className="start-option-container" id="suspend">
                                <div className="start-option">
                                    <img src={suspendIcon} alt="suspend icon" className="start-item-icon"></img>
                                    <div className="start-item">S<span style={{textDecoration: "underline"}}>u</span>spend</div>
                                </div>
                            </div>
                            <div className="start-option-container" onClick={()=> {
                                openApps.shutdown()
                                props.setFalse()
                                }
                            } id="shutdown">
                                <div className="start-option">
                                    <img src={shutdownIcon} alt="dummy-alt" className="start-item-icon"></img>
                                    <div className="start-item">Sh<span style={{textDecoration: "underline"}}>u</span>t Down...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>   
        )
    } else {
        return null
    }
}

export default React.memo(StartMenu)

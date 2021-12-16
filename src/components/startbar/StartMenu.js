import React from 'react'
import defaultIcon from "../desktop_shortcuts/mycomputer.png"
import '../../style/start.css'

function StartMenu(props) {
    if (props.canStart) {
        return (
            <div className="start-menu">
                <div className="start-title-container">
                    <div className="start-title">
                        Scape 95
                    </div>
                </div>
                
                <div className="start-options-list">
                    <div className="start-options-container">
                        <img src={defaultIcon} alt="dummy-alt" className="start-item-icon"></img>
                        <div className="start-item">Programs ▶</div>
                    </div>

                    <div className="start-options-container">
                        <img src={defaultIcon} alt="dummy-alt" className="start-item-icon"></img>
                        <div className="start-item">Favorites ▶</div> 
                    </div>

                    <div className="start-options-container">
                        <img src={defaultIcon} alt="dummy-alt" className="start-item-icon"></img>
                        <div className="start-item">Documents ▶</div>
                    </div>

                    <div className="start-options-container" id="shutdown">
                        <img src={defaultIcon} alt="dummy-alt" className="start-item-icon"></img>
                        <div className="start-item">Shut Down...</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default StartMenu

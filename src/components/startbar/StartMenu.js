import React from 'react'
import docIcon from "../../assets/documents.png"
import compIcon from "../../assets/mycomputer.png"
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
                
                <div className="start-option-list">
                    <div className="start-option-container">
                        <div className="start-option">
                            <img src={docIcon} alt="dummy-alt" className="start-item-icon"></img>
                            <div className="start-item">Programs</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>

                    <div className="start-option-container">
                        <div className="start-option">
                            <img src={docIcon} alt="dummy-alt" className="start-item-icon"></img>
                            <div className="start-item">Favorites</div> 
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>

                    <div className="start-option-container">
                        <div className="start-option">
                            <img src={docIcon} alt="dummy-alt" className="start-item-icon"></img>
                            <div className="start-item">Documents</div>
                        </div>
                        <div className="start-option-arrow">▶</div>
                    </div>

                    <div className="start-option-container" id="shutdown">
                        <div className="start-option">
                            <img src={compIcon} alt="dummy-alt" className="start-item-icon"></img>
                            <div className="start-item">Shut Down...</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default StartMenu

import React from 'react'

function StartMenu(props) {
    if (props.canStart) {
        return (
            <div className="start-menu">
                <div className="start-title">
                    Scape 95
                </div>
                <div className="start-options">
                    <ul className="start-list">
                        <li className="start-item">Programs</li>
                        <li className="start-item">Favorites</li>
                        <li className="start-item">Documents</li>
                        <li className="start-item">Shut Down</li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default StartMenu

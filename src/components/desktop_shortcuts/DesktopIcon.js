import React from 'react'

function DesktopIcon(props) {
    return (
        <div className="shortcut">
            <img className="desktop-icon" id={props.shortcutId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}</div>
        </div>
    )
}

export default DesktopIcon
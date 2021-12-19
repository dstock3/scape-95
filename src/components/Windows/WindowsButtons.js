import React from 'react'

function WindowsButtons(props) {
    return (
        <div className="window-buttons">
            <button className="windows-button min" onClick={props.min}>-</button>
            <button className="windows-button max" onClick={props.max}>❑</button>
            <button className="windows-button close" onClick={props.close}>X</button>
        </div>
    )
}

export default WindowsButtons

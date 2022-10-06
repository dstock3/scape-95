import React from 'react'

function WindowsButtons({min, max, close}) {
    return (
        <div className="window-buttons">
            <button className="windows-button min" onClick={min}>-</button>
            <button className="windows-button max" onClick={max}>❑</button>
            <button className="windows-button close" onClick={close}>X</button>
        </div>
    )
}

export default WindowsButtons

import React from 'react'
import '../../style/notepad.css'

function NotePad() {

    return (
        <div className="notepad-container">
            <div className="notepad-options">
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>F</span>ile</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>E</span>dit</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>F</span>ormat</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>V</span>iew</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>H</span>elp</button>
            </div>
            <textarea>
                This is a note pad
            </textarea>
        </div>
    )
}

export default NotePad

import React from 'react'
import '../../style/notepad.css'

function NotePad() {
    const noteStyle = {
        height: "100%",
        width: "100%",
        resize: "none",
        padding: "0",
        borderWidth: "0" 
    }
    return (
        <div className="notepad-container">
            <div className="notepad-options">
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>F</span>ile</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>E</span>dit</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>F</span>ormat</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>V</span>iew</button>
                <button className="notepad-option"><span style={{textDecoration: "underline"}}>H</span>elp</button>
            </div>
            <textarea style={noteStyle}>
                This is a note pad
            </textarea>
        </div>
    )
}

export default NotePad

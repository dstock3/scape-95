import React from 'react'

function NotePad() {
    const noteStyle = {
        height: "100%",
        width: "100%",
        resize: "none",
        padding: "0",
        borderWidth: "0" 
    }
    return (
        <textarea style={noteStyle}></textarea>
    )
}

export default NotePad

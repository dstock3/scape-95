import React from 'react'

function NotePad() {
    const noteStyle = {
        height: "100%",
        width: "99%",
        resize: "none"
    }
    return (
        <textarea style={noteStyle} rows="30" cols="40"></textarea>
    )
}

export default NotePad

import React from 'react'

function HelpButton(props) {
    return <button className="windows-button help" onClick={props.helpPrompt} style={{fontWeight: "bold"}}>?</button>
}

export default HelpButton

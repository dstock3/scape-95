import React from 'react'

function HelpButton({helpPrompt}) {
    return <button className="windows-button help" onClick={helpPrompt} style={{fontWeight: "bold"}}>?</button>
}

export default HelpButton

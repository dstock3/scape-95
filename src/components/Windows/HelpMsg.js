import React from 'react'

function HelpMsg({setHelp, setFalse, optionState, helpId, span, content}) {
    const clickHandler = () => {
        setHelp(false)
        setFalse()   
    }

    if (optionState) {
        return(
            <span onClick={clickHandler} id={helpId} className={`tip-text ${span}`}>{content}</span>
        )
    } return null
}

export default React.memo(HelpMsg)

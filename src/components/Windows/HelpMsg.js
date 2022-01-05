import React from 'react'

function HelpMsg(props) {
    console.log("rendering")
    const clickHandler = () => {
        props.setHelp(false)
        props.setFalse()   
    }

    if (props.optionState) {
        return(
            <span onClick={clickHandler} id={props.helpId} className={`tip-text ${props.span}`}>{props.content}</span>
        )
    } return null
}

export default HelpMsg

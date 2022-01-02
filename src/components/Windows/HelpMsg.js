import React, { useState, useEffect } from 'react'

function HelpMsg(props) {
    const [msgState, setMsgState] = useState(true)

    const clickHandler = () => {
        props.setHelp(false)
        setMsgState(false)
    }

    if (props.helpState && msgState) {
        return(
            <span onClick={clickHandler} id={props.helpId} className={`tip-text ${props.span}`}>{props.content}</span>
        )
    } return null

}

export default HelpMsg

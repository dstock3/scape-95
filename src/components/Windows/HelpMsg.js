import React from 'react'

function HelpMsg(props) {
    return <span onClick={props.setMsgState} id={props.helpId} className={`tip-text ${props.span}`}>{props.content}</span>
}

export default HelpMsg

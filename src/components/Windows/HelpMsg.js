import React, { useEffect } from 'react'

function HelpMsg(props) {
    useEffect(()=> {

    }, [props.helpState])

    const clickHandler = () => {
        props.setHelp(false)
        props.setMsgState()

    }
    if (props.helpState) {
        return(
            <span onClick={clickHandler} id={props.helpId} className={`tip-text ${props.span}`}>{props.content}</span>
        )
    } return null

}

export default HelpMsg

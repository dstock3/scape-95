import React from 'react'

function MinMaxSpec(props) {
    return (
        <>
            <button className="windows-button min" onClick={props.min}>-</button>
            <button className="windows-button max" onClick={props.max}>❑</button>
        </>
    )
}

export default MinMaxSpec

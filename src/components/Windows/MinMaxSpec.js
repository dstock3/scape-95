import React from 'react'

function MinMaxSpec({min, max}) {
    return (
        <>
            <button className="windows-button min" onClick={min}>-</button>
            <button className="windows-button max" onClick={max}>❑</button>
        </>
    )
}

export default MinMaxSpec

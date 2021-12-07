import React from 'react'
import Clock from './Clock'
import StartButton from './StartButton'

function Start() {
    return (
        <div className="start-bar">
            <StartButton />
            <Clock />
        </div>
    )
}

export default Start

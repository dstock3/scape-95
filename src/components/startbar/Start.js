import React from 'react'
import Clock from './Clock'
import StartButton from './StartButton'

const Start = props => {
    return (
        <div className="start-bar">
            <StartButton />
            <Clock />
        </div>
    )
}

export default Start

import React, {useState, useEffect} from 'react'
import Clock from './Clock'
import StartMenu from './StartMenu'

const Start = () => {
    const [start, setStart] = useState({isStarted: false})

    useEffect(() => {
        

    })

    const startToggle = () => {
        if (start.isStarted) {
            setStart({ ...start, isStarted: false })
        } else {
            setStart({ ...start, isStarted: true })
        }
    }

    return (
        <div className="start-bar">
            <div className="start-button" onClick={startToggle}>
                Start
            </div>
            <StartMenu canStart={start.isStarted} />

            <Clock />
        </div>
    )
}

export default Start

import React, { useState, useEffect } from 'react'
import { newController } from '../Main'

function MinWindow(props) {
    const [minWin, setMinWin] = useState([])

    const setMinWinArray = () => {
        for (let i = 0; i < newController.minWindows.length; i++) {
            setMinWin([ ...minWin, {
                id: i,
                value: newController.minWindows[i],
            }])
        }
    }
    useEffect(() => {
        const winButtons = Array.from(document.getElementsByClassName("min-win-button"))
        const startBar = document.querySelector(".bar-body")

        for (let i = 0; i < winButtons.length; i++) {
            startBar.appendChild(winButtons[i])
        }
    })

    useEffect(() => {
        if (props.winItem) {
            newController.minWindows.push(props.winItem)
            setMinWinArray()
        }
    }, [props.winItem])

    return (
        <div className="min-win">
            {minWin.map(minWindow => (
                <div className="min-win-button" key={minWindow.id}>{minWindow.value}</div>
            ))}
        </div>
    )
}

export default MinWindow

import React, { useState, useEffect } from 'react'

const formatTime = () =>{
    let time = new Date().getTime(); 
    let date = new Date(time); 
    let hours = date.getHours();
    let min = date.getMinutes();
    let ampm
    
    if (hours >= 12) {
        ampm = 'pm'
    } else {
        ampm = 'am'
    };

    hours = hours % 12;
    if (!hours) { hours = 12 }
    if (min < 10) { min = '0'+ min }
    let curTime = hours + ':' + min + ' ' + ampm;
    return curTime;
}

const Clock = () => {
    const [clock, setClock] = useState(formatTime())

    useEffect(() => {
        setInterval(() => {
            setClock(formatTime());
        }, 1000)
    });

    return (
        <div className="clock">
            {clock}
        </div>
    )
}

export default Clock

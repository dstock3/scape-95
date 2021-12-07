import React from 'react'

const formatTime = (newDate) =>{
    let hours = newDate.getHours();
    let min = newDate.getMinutes();
    let ampm
    
    if (hours >= 12) {
        ampm = 'pm'
    } else {
        ampm = 'am'
    };

    hours = hours % 12;
    if (!hours) { hours = 12 }
    if (min < 10) { min = '0'+ min }
    let time = hours + ':' + min + ' ' + ampm;
    return time;
}

const Clock = () => {
    const time = new Date().getTime(); 
    const date = new Date(time); 
    let newTime = formatTime(date)
    return (
        <div className="clock">
            {newTime}
        </div>
    )
}

export default Clock

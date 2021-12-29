import React from 'react'
import { letDrop, newDrop } from '../DragFunctions'

function Col(props) {
    return (
        <div className="col" id={props.colId}>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotOne}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotTwo}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotThree}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotFour}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotFive}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotSix}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotSeven}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotEight}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotNine}</div>
            <div className="slot" onDrop={newDrop} onDragOver={letDrop}>{props.slotTen}</div>
    </div>
    )
}

export default Col

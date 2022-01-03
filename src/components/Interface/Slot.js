import React from 'react'
import { letDrop, newDrop } from '../../DragFunctions'

function Slot(props) {
    return (
        <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
            {props.content}
        </div>
    )
}

export default Slot

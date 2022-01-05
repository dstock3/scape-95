import React from 'react'
import { letDrop, newDrop } from '../../DragFunctions'

function Slot(props) {
    console.log("Slot", props.content)
    return (
        <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
            {props.content}
        </div>
    )
}

export default React.memo(Slot)

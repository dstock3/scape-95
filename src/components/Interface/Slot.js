import React from 'react'
import { letDrop, newDrop } from '../../DragFunctions'

function Slot({content}) {
    return (
        <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
            {content}
        </div>
    )
}

export default React.memo(Slot)

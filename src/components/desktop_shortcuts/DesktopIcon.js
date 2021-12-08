import React, {useState} from 'react'
import { newDrag } from '../../DragFunctions'

const DesktopIcon = (props) => {
    let [isClicked, setIsClicked] = useState(false)

    return (
        <div className="shortcut" onClick={() => setIsClicked(prevClicked => prevClicked = !prevClicked)} id={props.shortcutId} draggable="true" onDragStart={newDrag}>
            <img className="desktop-icon" id={props.shortcutIconId} src={props.imgSrc} alt={props.shortcut}></img>
            <div className="folder-name">{props.shortcut}{console.log(isClicked)}</div>
        </div>
    )
}

export default DesktopIcon
import React from 'react'
import Start from './startbar/Start'
import compIcon from "./desktop_shortcuts/mycomputer.png"
import binIcon from "./desktop_shortcuts/bin.png"
import docIcon from "./desktop_shortcuts/documents.png"
import DesktopIcon from './desktop_shortcuts/DesktopIcon'
import netIcon from "./desktop_shortcuts/internet.png"
import { letDrop, newDrop } from '../DragFunctions'

function Main() {
    
    return (
        <div className="main" onDrop={newDrop} onDragOver={letDrop}>
            <div className="col" id="one" onDrop={newDrop} onDragOver={letDrop}>
                <DesktopIcon shortcutId={"doc"} shortcutIconId={"doc-icon"} imgSrc={docIcon} shortcut={"My Documents"} />
                <DesktopIcon shortcutId={"comp"} shortcutIconId={"comp-icon"} imgSrc={compIcon} shortcut={"My Computer"}/>
                <DesktopIcon shortcutId={"bin"} shortcutIconId={"bin-icon"} imgSrc={binIcon} shortcut={"Recycle Bin"}/>
                <DesktopIcon shortcutId={"net"} shortcutIconId={"net-icon"} imgSrc={netIcon} shortcut={"Internet"}/>
            </div>

            <div className="col" id="two" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="three" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="four" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="five" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="six" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="seven" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="eight" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="nine" onDrop={newDrop} onDragOver={letDrop}>
            </div>

            <div className="col" id="ten" onDrop={newDrop} onDragOver={letDrop}>
            </div>
            
            <div className="bottom">
                <Start />
            </div>

        </div>
    )
}

export default Main

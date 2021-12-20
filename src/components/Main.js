import React from 'react'
import Start from './startbar/Start'
import compIcon from "../assets/mycomputer.png"
import binIcon from "../assets/bin.png"
import docIcon from "../assets/documents.png"
import DesktopIcon from './desktop_shortcuts/DesktopIcon'
import netIcon from "../assets/internet.png"
import { letDrop, newDrop } from '../DragFunctions'
import { Controller } from '../Controller'
import Internet from './Windows/internet/Internet'
import '../style/main.css'


const newController = Controller()

function Main() {

    return (
        <div className="main">
            <div className="col-container">
                <div className="col" id="col-one">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon shortcutId={"comp"} shortcutIconId={"comp-icon"} imgSrc={compIcon} shortcut={"My Computer"}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon shortcutId={"doc"} shortcutIconId={"doc-icon"} imgSrc={docIcon} shortcut={"My Documents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon shortcutId={"bin"} shortcutIconId={"bin-icon"} imgSrc={binIcon} shortcut={"Recycle Bin"}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon shortcutId={"net"} shortcutIconId={"net-icon"} imgSrc={netIcon} shortcut={"Internet"} contents={<Internet />}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="two">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="three">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="four">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="five">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="six">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="seven">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="eight">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="nine">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>

                <div className="col" id="ten">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>
                <div className="col" id="eleven">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>
                <div className="col" id="twelve">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>
                <div className="col" id="thirteen">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>
                <div className="col" id="fourteen">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}></div>
                </div>
            </div>
            
            <div className="bottom">
                <Start />
            </div>

        </div>
    )
}
export { newController }
export default Main


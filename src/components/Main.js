import React, { useState } from 'react'
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
import BasicWindow from './Windows/BasicWindow'


const newController = Controller()

function Main() {
    const [win, setWin] = useState({isClicked: false, isRightClicked: false})

    const openWindow = () => {
        setWin({ ...win, isClicked: true})
    }

    const closeWindow = () => {
        setWin({...win, isClicked: false})
    }

    return (
        <div className="main">
            <div className="col-container">
                <div className="col" id="col-one">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openWindow} shortcutId={"comp"} shortcutIconId={"comp-icon"} imgSrc={compIcon} shortcut={"My Computer"}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openWindow} shortcutId={"doc"} shortcutIconId={"doc-icon"} imgSrc={docIcon} shortcut={"My Documents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openWindow} shortcutId={"bin"} shortcutIconId={"bin-icon"} imgSrc={binIcon} shortcut={"Recycle Bin"}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openWindow} shortcutId={"net"} shortcutIconId={"net-icon"} imgSrc={netIcon} shortcut={"Internet"} contents={<Internet />}/>
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
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(win.isClicked)} winTitle={"My Computer"} winId={"comp-window"} close={closeWindow}contents={"contents"}/>
                        <BasicWindow isClicked={(win.isClicked)} winTitle={"My Documents"} winId={"doc-window"} close={closeWindow}contents={"contents"}/>
                        <BasicWindow isClicked={(win.isClicked)} winTitle={"Recycle Bin"} winId={"bin-window"} close={closeWindow}contents={"contents"}/>
                        <BasicWindow isClicked={(win.isClicked)} winTitle={"Internet"} winId={"net-window"} close={closeWindow}contents={<Internet />} />
                        
                    </div>
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


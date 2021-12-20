import React, { useState } from 'react'
import Start from './startbar/Start'
import compIcon from "../assets/mycomputer.png"
import binIcon from "../assets/bin.png"
import docIcon from "../assets/documents.png"
import DesktopIcon from './desktop_shortcuts/DesktopIcon'
import netIcon from "../assets/internet.png"
import { letDrop, newDrop } from '../DragFunctions'
import Internet from './Windows/internet/Internet'
import '../style/main.css'
import BasicWindow from './Windows/BasicWindow'

function Main() {
    const [comp, setComp] = useState({shortcut: "My Computer", shortcutId: "comp", isClicked: false, isRightClicked: false, isMin: false})
    const [doc, setDoc] = useState({shortcut: "My Documents", shortcutId: "doc", isClicked: false, isRightClicked: false, isMin: false})
    const [bin, setBin] = useState({shortcut: "Recycle Bin", shortcutId: "bin", isClicked: false, isRightClicked: false, isMin: false})
    const [net, setNet] = useState({shortcut: "Internet", shortcutId: "net", isClicked: false, isRightClicked: false, isMin: false})
    
    const openComp = () => {
        setComp({ ...comp, isClicked: true})
    }

    const closeComp = () => {
        setComp({...comp, isClicked: false})
    }

    const minComp = () => {
        setComp({ ...comp, isMin: true})
    }

    const openDoc = () => {
        setDoc({ ...doc, isClicked: true})
    }

    const closeDoc = () => {
        setDoc({...doc, isClicked: false})
    }

    const minDoc = () => {
        setDoc({ ...comp, isMin: true})
    }

    const openNet = () => {
        setNet({ ...net, isClicked: true})
    }

    const closeNet = () => {
        setNet({...net, isClicked: false})
    }

    const minNet = () => {
        setNet({ ...comp, isMin: true})
    }

    const openBin = () => {
        setBin({ ...bin, isClicked: true})
    }

    const closeBin = () => {
        setBin({...bin, isClicked: false})
    }

    const minBin = () => {
        setBin({ ...comp, isMin: true})
    }

    let winArray = [
        { winState: comp, openMethod: openComp }, 
        { winState: doc, openMethod: openDoc }, 
        { winState: bin, openMethod: openBin }, 
        { winState: net, openMethod: openNet }
    ]

    return (
        <div className="main">
            <div className="col-container">
                <div className="col" id="one">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openComp} shortcutId={comp.shortcutId} shortcutIconId={"comp-icon"} imgSrc={compIcon} shortcut={comp.shortcut}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openDoc} shortcutId={doc.shortcutId} shortcutIconId={"doc-icon"} imgSrc={docIcon} shortcut={doc.shortcut} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openBin} shortcutId={bin.shortcutId} shortcutIconId={"bin-icon"} imgSrc={binIcon} shortcut={bin.shortcut}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openNet} shortcutId={net.shortcutId} shortcutIconId={"net-icon"} imgSrc={netIcon} shortcut={net.shortcut} contents={<Internet />}/>
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
                        <BasicWindow isClicked={(comp.isClicked)} open={openComp} winTitle={"My Computer"} winId={"comp-window"} min={minComp} close={closeComp} contents={"contents"}/>
                        <BasicWindow isClicked={(doc.isClicked)} open={openDoc}winTitle={"My Documents"} winId={"doc-window"} min={minDoc} close={closeDoc} contents={"contents"}/>
                        <BasicWindow isClicked={(bin.isClicked)} open={openBin} winTitle={"Recycle Bin"} winId={"bin-window"} close={closeBin} min={minBin} contents={"contents"}/>
                        <BasicWindow isClicked={(net.isClicked)} open={openNet}winTitle={"Internet"} winId={"net-window"} close={closeNet} min={minNet} contents={<Internet />} />
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
                <Start windows={winArray} />
            </div>

        </div>
    )
}

export default Main
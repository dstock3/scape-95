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
    const [minWin, setMinWin] = useState([])

    const selectController = (obj) => {
        let newArray = minWin
        let check = false
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].value === obj.value) {
                newArray.splice(i, 1, obj)
                check = true 
            } else {
                newArray[i].className = ""
            }
        }
        if (!check) {
            newArray.push(obj)
        }
        
        return newArray
    }

    const minHelper = (shortcutValue) => {
        let newArray = minWin
        for (let i = 0; i < newArray.length; i++) {
            if ((newArray[i].value === shortcutValue) && (newArray[i].className === "selected")) {
                newArray[i].className = ""
            }
        }
        return newArray
    }

    const closeHelper = (shortcutValue) => {
        let newArray = minWin
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].value === shortcutValue) {
                newArray.splice(i, 1)
            }
        }
        return newArray
    }

    const openComp = () => {
        setComp({ ...comp, isClicked: true, isMin: false})
        let compObj = {
            id: 0,
            value: comp.shortcut,
            open: openComp,
            className: "selected"
        }
        setMinWin(selectController(compObj)) 
    }

    const closeComp = () => {
        setComp({...comp, isClicked: false, isMin: false})
        setMinWin(closeHelper(comp.shortcut));
    }

    const minComp = () => {
        setComp({ ...comp, isClicked: true, isMin: true})
        setMinWin(minHelper(comp.shortcut))
    }

    const openDoc = () => {
        setDoc({ ...doc, isClicked: true, isMin: false})
        let docObj =  {
            id: 1,
            value: doc.shortcut,
            open: openDoc,
            className: "selected"
        }
        setMinWin(selectController(docObj))

    }

    const closeDoc = () => {
        setDoc({...doc, isClicked: false, isMin: false})
        setMinWin(closeHelper(doc.shortcut));
    }

    const minDoc = () => {
        setDoc({ ...doc, isClicked: true, isMin: true})
        setMinWin(minHelper(doc.shortcut))
    }

    const openNet = () => {
        setNet({ ...net, isClicked: true, isMin: false})
        let newObj = {
            id: 2,
            value: net.shortcut,
            open: openNet,
            className: "selected"
        }
        setMinWin(selectController(newObj))
    }

    const closeNet = () => {
        setNet({...net, isClicked: false, isMin: false})
        setMinWin(closeHelper(net.shortcut));
    }

    const minNet = () => {
        setNet({ ...net, isClicked: true, isMin: true})
        setMinWin(minHelper(net.shortcut))
    }

    const openBin = () => {
        setBin({ ...bin, isClicked: true, isMin: false})
        let binObj = {
            id: 3,
            value: bin.shortcut,
            open: openBin,
            className: "selected"
        }
        setMinWin(selectController(binObj))
    }

    const closeBin = () => {
        setBin({...bin, isClicked: false, isMin: false})
        setMinWin(closeHelper(bin.shortcut));
    }

    const minBin = () => {
        setBin({ ...bin, isClicked: true, isMin: true})
        setMinWin(minHelper(bin.shortcut))
    }

    return (
        <div className="main">
            <div className="col-container">
                <div className="col" id="one">
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openComp} shortcutId={comp.shortcutId} shortcutIconId={`${comp.shortcutId}-icon`} imgSrc={compIcon} shortcut={comp.shortcut}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openDoc} shortcutId={doc.shortcutId} shortcutIconId={`${doc.shortcutId}-icon`} imgSrc={docIcon} shortcut={doc.shortcut} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openBin} shortcutId={bin.shortcutId} shortcutIconId={`${bin.shortcutId}-icon`} imgSrc={binIcon} shortcut={bin.shortcut}/>
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <DesktopIcon open={openNet} shortcutId={net.shortcutId} shortcutIconId={`${net.shortcutId}-icon`} imgSrc={netIcon} shortcut={net.shortcut} contents={<Internet />}/>
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
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(comp.isClicked)} open={openComp} winTitle={comp.shortcut} winId={`${comp.shortcutId}-window`} min={minComp} minState={comp.isMin} close={closeComp} contents={"contents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(doc.isClicked)} open={openDoc}winTitle={doc.shortcut} winId={`${doc.shortcutId}-window`} min={minDoc} minState={doc.isMin} close={closeDoc} contents={"contents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(bin.isClicked)} open={openBin} winTitle={bin.shortcut} winId={`${bin.shortcutId}-window`} min={minBin} minState={bin.isMin} close={closeBin} contents={"contents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(net.isClicked)} open={openNet} winTitle={net.shortcut} winId={`${net.shortcutId}-window`} min={minNet} minState={net.isMin} close={closeNet} contents={<Internet />} />
                    </div>
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
                <Start windows={minWin} />
            </div>

        </div>
    )
}

export default Main
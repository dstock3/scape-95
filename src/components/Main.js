import React, { useState, useEffect } from 'react'
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

    const openComp = () => {
        setComp({ ...comp, isClicked: true, isMin: false})
        setMinWin([ ...minWin, {
            id: 0,
            value: comp.shortcut,
            open: openComp,
            className: "selected"
        }])

    }

    const closeComp = () => {
        setComp({...comp, isClicked: false, isMin: false})
        setMinWin(minWin => minWin.filter(winButton => winButton.value !== comp.shortcut));
    }

    const minComp = () => {
        setComp({ ...comp, isClicked: false, isMin: true})
        setMinWin([ ...minWin, {
            id: 4,
            value: comp.shortcut,
            open: openComp,
            className: ""
        }])
    }

    const openDoc = () => {
        setDoc({ ...doc, isClicked: true, isMin: false})
        setMinWin([ ...minWin, {
            id: 1,
            value: doc.shortcut,
            open: openDoc,
            className: "selected"
        }])
    }

    const closeDoc = () => {
        setDoc({...doc, isClicked: false, isMin: false})
        setMinWin(minWin => minWin.filter(winButton => winButton.value !== doc.shortcut));
    }

    const minDoc = () => {
        setDoc({ ...doc, isClicked: false, isMin: true})
        setMinWin([ ...minWin, {
            id: 5,
            value: doc.shortcut,
            open: openDoc,
            className: ""
        }])
    }

    const openNet = () => {
        setNet({ ...net, isClicked: true, isMin: false})
        setMinWin([ ...minWin, {
            id: 2,
            value: net.shortcut,
            open: openNet,
            className: "selected"
        }])
    }

    const closeNet = () => {
        setNet({...net, isClicked: false, isMin: false})
        setMinWin(minWin => minWin.filter(winButton => winButton.value !== net.shortcut));
    }

    const minNet = () => {
        setNet({ ...net, isClicked: false, isMin: true})
        setMinWin([ ...minWin, {
            id: 6,
            value: net.shortcut,
            open: openNet,
            className: ""
        }])
    }

    const openBin = () => {
        setBin({ ...bin, isClicked: true, isMin: false})
        setMinWin([ ...minWin, {
            id: 3,
            value: bin.shortcut,
            open: openBin,
            className: "selected"
        }])
    }

    const closeBin = () => {
        setBin({...bin, isClicked: false, isMin: false})
        setMinWin(minWin => minWin.filter(winButton => winButton.value !== bin.shortcut));
    }

    const minBin = () => {
        setBin({ ...bin, isClicked: false, isMin: true})
        setMinWin([ ...minWin, {
            id: 7,
            value: bin.shortcut,
            open: openBin,
            className: ""
        }])
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
                        <BasicWindow isClicked={(comp.isClicked)} open={openComp} winTitle={comp.shortcut} winId={`${comp.shortcutId}-window`} min={minComp} close={closeComp} contents={"contents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(doc.isClicked)} open={openDoc}winTitle={doc.shortcut} winId={`${doc.shortcutId}-window`} min={minDoc} close={closeDoc} contents={"contents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(bin.isClicked)} open={openBin} winTitle={bin.shortcut} winId={`${bin.shortcutId}-window`} min={minBin} close={closeBin} contents={"contents"} />
                    </div>
                    <div className="slot" onDrop={newDrop} onDragOver={letDrop}>
                        <BasicWindow isClicked={(net.isClicked)} open={openNet}winTitle={net.shortcut} winId={`${net.shortcutId}-window`} min={minNet} close={closeNet} contents={<Internet />} />
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
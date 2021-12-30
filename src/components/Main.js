import React, { useState } from 'react'
import Start from './startbar/Start'
import compIcon from "../assets/icons/mycomputer.png"
import binIcon from "../assets/icons/bin.png"
import docIcon from "../assets/icons/documents.png"
import DesktopIcon from './desktop_shortcuts/DesktopIcon'
import netIcon from "../assets/icons/internet.png"
import { letDrop, newDrop } from '../DragFunctions'
import Internet from './Windows/internet/Internet'
import '../style/main.css'
import BasicWindow from './Windows/BasicWindow'
import Col from '../components/Interface/Col'
import Terminal from './Windows/Terminal'
import Run from './Windows/Run'



function Main() {
    const [comp, setComp] = useState({shortcut: "My Computer", shortcutId: "comp", isClicked: false, isRightClicked: false, isMin: false})
    const [doc, setDoc] = useState({shortcut: "My Documents", shortcutId: "doc", isClicked: false, isRightClicked: false, isMin: false})
    const [bin, setBin] = useState({shortcut: "Recycle Bin", shortcutId: "bin", isClicked: false, isRightClicked: false, isMin: false})
    const [net, setNet] = useState({shortcut: "Internet", shortcutId: "net", isClicked: false, isRightClicked: false, isMin: false})
    const [cli, setCli] = useState({shortcut: "Scape-CLI Prompt", shortcutId: "cli", isClicked: false, isRightClicked: false, isMin: false })
    const [run, setRun] = useState({shortcut: "Run", shortcutId: "run", isClicked: false, isRightClicked: false, isMin: false })
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

    const openRun = () => {
        setRun({ ...run, isClicked: true, isMin: false})
        let runObj = {
            id: 4,
            value: run.shortcut,
            open: openRun,
            className: "selected"
        }
        setMinWin(selectController(runObj))
    }

    const closeRun = () => {
        setRun({...run, isClicked: false, isMin: false})
        setMinWin(closeHelper(run.shortcut));
    }

    const minRun = () => {
        setRun({ ...run, isClicked: true, isMin: true})
        setMinWin(minHelper(run.shortcut))
    }

    const openCli = () => {
        setCli({ ...cli, isClicked: true, isMin: false})
        let cliObj = {
            id: 5,
            value: cli.shortcut,
            open: openCli,
            className: "selected"
        }
        setMinWin(selectController(cliObj))
    }

    const closeCli = () => {
        setCli({...cli, isClicked: false, isMin: false})
        setMinWin(closeHelper(cli.shortcut));
    }

    const minCli = () => {
        setCli({ ...cli, isClicked: true, isMin: true})
        setMinWin(minHelper(cli.shortcut))
    }

    const openApps = {
        command: openCli,
        browser: openNet
    }

    return (
        <div className="main">
            <div className="col-container">
                <Col colId="one"
                    slotOne={
                        <DesktopIcon open={openComp} shortcutId={comp.shortcutId} shortcutIconId={`${comp.shortcutId}-icon`} imgSrc={compIcon} shortcut={comp.shortcut}/>
                    }

                    slotTwo={
                        <DesktopIcon open={openDoc} shortcutId={doc.shortcutId} shortcutIconId={`${doc.shortcutId}-icon`} imgSrc={docIcon} shortcut={doc.shortcut} />
                    }

                    slotThree={
                        <DesktopIcon open={openBin} shortcutId={bin.shortcutId} shortcutIconId={`${bin.shortcutId}-icon`} imgSrc={binIcon} shortcut={bin.shortcut}/>
                    }
                    slotFour={
                        <DesktopIcon open={openNet} shortcutId={net.shortcutId} shortcutIconId={`${net.shortcutId}-icon`} imgSrc={netIcon} shortcut={net.shortcut} contents={<Internet />}/>
                    }
                />
                
                <Col colId="two"
                    slotFour={
                        <BasicWindow isClicked={(run.isClicked)} open={openRun} winTitle={run.shortcut} winId={`${run.shortcutId}-window`} min={minRun} minState={run.isMin} close={closeRun} contents={
                            <Run openApps={openApps}/>
                        } />
                    } 
                />
               

                <Col colId="three" />

                <Col colId="four" />

                <Col colId="five" 
                    slotOne={
                        <BasicWindow isClicked={(comp.isClicked)} open={openComp} winTitle={comp.shortcut} winId={`${comp.shortcutId}-window`} min={minComp} minState={comp.isMin} close={closeComp} contents={"contents"} />
                    }
                    slotTwo={
                        <BasicWindow isClicked={(doc.isClicked)} open={openDoc}winTitle={doc.shortcut} winId={`${doc.shortcutId}-window`} min={minDoc} minState={doc.isMin} close={closeDoc} contents={"contents"} />
                    }
                    slotThree={
                        <BasicWindow isClicked={(bin.isClicked)} open={openBin} winTitle={bin.shortcut} winId={`${bin.shortcutId}-window`} min={minBin} minState={bin.isMin} close={closeBin} contents={"contents"} />
                    }
                    slotFour={
                        <BasicWindow isClicked={(net.isClicked)} open={openNet} winTitle={net.shortcut} winId={`${net.shortcutId}-window`} min={minNet} minState={net.isMin} close={closeNet} contents={<Internet />} />
                    }
                    slotFive={
                        <BasicWindow isClicked={cli.isClicked} open={openCli} winTitle={cli.shortcut} winId={'cli'} min={minCli} minState={cli.isMin} close={closeCli} contents={
                            <Terminal openApps={openApps}/>
                        } />
                    }
                />

                <Col colId="six" />

                <Col colId="seven" />

                <Col colId="eight" />

                <Col colId="nine" />

                <Col colId="ten" />

                <Col colId="eleven" />

                <Col colId="twelve" />

                <Col colId="thirteen" />

                <Col colId="fourteen" />
            </div>
            
            <div className="bottom">
                <Start windows={minWin} openRun={openRun} />
            </div>

        </div>
    )
}

export default Main
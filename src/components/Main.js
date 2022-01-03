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
import RunError from './Windows/RunError'
import SpecialWindow from './Windows/SpecialWindow'
import HelpButton from './Windows/HelpButton'
import Shutdown from './Windows/Shutdown'
import ShutdownPortal from './ShutdownPortal'

const StartContext = React.createContext()

function Main() {
    const [comp, setComp] = useState({shortcut: "My Computer", shortcutId: "comp", isClicked: false, isRightClicked: false, isMin: false})
    const [doc, setDoc] = useState({shortcut: "My Documents", shortcutId: "doc", isClicked: false, isRightClicked: false, isMin: false})
    const [bin, setBin] = useState({shortcut: "Recycle Bin", shortcutId: "bin", isClicked: false, isRightClicked: false, isMin: false})
    const [net, setNet] = useState({shortcut: "Internet", shortcutId: "net", isClicked: false, isRightClicked: false, isMin: false})
    const [cli, setCli] = useState({shortcut: "Scape-CLI Prompt", shortcutId: "cli", isClicked: false, isRightClicked: false, isMin: false })
    const [run, setRun] = useState({shortcut: "Run", shortcutId: "run", isClicked: false })
    const [runError, setRunError] = useState({shortcut: "Run Error", shortcutId: "run-error", isClicked: false })
    const [shutdown, setShutdown] = useState({shortcut: "Shut Down Windows", shortcutId: "shutdown", isClicked: false})
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

    const [runInput, setRunInput] = useState("")

    const openRun = () => {
        setRun({ ...run, isClicked: true, isMin: false})
    }

    const closeRun = () => {
        setRun({...run, isClicked: false, isMin: false})
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

    const openRunError = () => {
        setRunError({...runError, shortcut: runInput, isClicked: true})
    }

    const closeRunError = () => {
        setRunError({...runError, isClicked: false})
    }

    const openApps = {
        command: openCli,
        browser: openNet,
        comp: openComp,
        docs: openDoc,
        bin: openBin,
    }

    const [help, setHelp] = useState(false)

    const openShutdown = () => {
        setShutdown({...shutdown, isClicked: true})
    }

    const closeShutdown = () => {
        setShutdown({...shutdown, isClicked: false})
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
                    
                    slotSix={
                        <SpecialWindow isClicked={run.isClicked} winTitle={run.shortcut} winId={`${run.shortcutId}-window`} close={closeRun} size={{width: "400px", height: "175px"}} position={{left: "130px", top: "310px"}} help={<HelpButton helpPrompt={()=>setHelp(true)}/>} contents={
                            <Run helpPrompt={help} setHelp={setHelp} closeRun={closeRun} openApps={openApps} runInput={{value: runInput, setter: setRunInput}} throwError={openRunError} />
                        } />
                    }
                />
                
                <Col colId="two" />
               
                <Col colId="three" />

                <Col colId="four" />

                <Col colId="five" 
                    slotOne={
                        <BasicWindow isClicked={comp.isClicked} open={openComp} winTitle={comp.shortcut} winId={`${comp.shortcutId}-window`} min={minComp} minState={comp.isMin} close={closeComp} contents={"contents"} />
                    }

                    slotTwo={
                        <BasicWindow isClicked={doc.isClicked} open={openDoc} winTitle={doc.shortcut} winId={`${doc.shortcutId}-window`} min={minDoc} minState={doc.isMin} close={closeDoc} contents={"contents"} />
                    }

                    slotThree={
                        <BasicWindow isClicked={bin.isClicked} open={openBin} winTitle={bin.shortcut} winId={`${bin.shortcutId}-window`} min={minBin} minState={bin.isMin} close={closeBin} contents={"contents"} />
                    }

                />

                <Col colId="six" 
                    slotOne={
                        <BasicWindow isClicked={cli.isClicked} open={openCli} winTitle={cli.shortcut} winId={'cli'} min={minCli} minState={cli.isMin} close={closeCli} contents={
                            <Terminal openApps={openApps}/>
                        } />
                    }

                    slotTwo={
                        <BasicWindow isClicked={net.isClicked} open={openNet} winTitle={net.shortcut} winId={`${net.shortcutId}-window`} min={minNet} minState={net.isMin} close={closeNet} contents={<Internet />} />
                    }
                />

                <Col colId="seven" 
                    slotTwo={
                        <SpecialWindow isClicked={runError.isClicked} winTitle={runError.shortcut} winId={`${runError.shortcutId}-window`} position={{left: "75px", top: "250px"}} size={{width: "750px", height: "125px"}} closeState={false} contents={
                            <RunError openRun={openRun} term={runInput} close={closeRunError} />
                        } />
                    }

                    slotThree={
                        <ShutdownPortal window={
                            <SpecialWindow isClicked={shutdown.isClicked} winTitle={shutdown.shortcut} winId={`${shutdown.shortcutId}-window`} position={{left: "0", top: "0"}} size={{width: "425px", height: "233px"}} closeState={true} close={closeShutdown} fade={true}contents={
                                <Shutdown  closeButton={closeShutdown} />
                            } />
                        }/>
                    }

                />

                <Col colId="eight" />

                <Col colId="nine" />

                <Col colId="ten" />

                <Col colId="eleven" />

                <Col colId="twelve" />

                <Col colId="thirteen" />

                <Col colId="fourteen" />
            </div>
            
            <StartContext.Provider value={{shutdown: openShutdown, run: openRun, internet: openNet, terminal: openCli}}>
                <div className="bottom">
                    <Start windows={minWin} />
                </div>
            </StartContext.Provider>

        </div>
    )
}
export {StartContext}
export default Main
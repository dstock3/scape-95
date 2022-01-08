/* eslint-disable default-case */
import React, { useState, useCallback } from 'react'
import Start from './startbar/Start'
import compIcon from "../assets/icons/mycomputer.png"
import binIcon from "../assets/icons/bin.png"
import docIcon from "../assets/icons/documents.png"
import DesktopIcon from './desktop_shortcuts/DesktopIcon'
import netIcon from "../assets/icons/internet.png"
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
import Calc from './Accessories/Calc'
import MinMaxSpec from './Windows/MinMaxSpec'
import flopIcon from '../assets/icons/flop.png'
import printIcon from '../assets/icons/print.png'
import driveIcon from '../assets/icons/drive.png'
import controlIcon from '../assets/icons/control.png'

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
    const [minesweeper, setMinesweeper] = useState({shortcut: "Minesweeper", shortcutId: "mine", isClicked: false, isRightClicked: false, isMin: false})
    const [calc, setCalc] = useState({shortcut: "Calculator", shortcutId: "calc", isClicked: false, isRightClicked: false, isMin: false})

    const [flop, setFlop] = useState({shortcut: "3 1/2 Floppy (A:)", shortcutId: "flop", isClicked: false, isRightClicked: false, isMin: false})
    const [driveC, setDriveC] = useState({shortcut: "(C:)", shortcutId: "driveC", isClicked: false, isRightClicked: false, isMin: false})
    const [control, setControl] = useState({shortcut: "Control Panel", shortcutId: "control", isClicked: false, isRightClicked: false, isMin: false})
    const [print, setPrint] = useState({shortcut: "Printers", shortcutId: "print", isClicked: false, isRightClicked: false, isMin: false})

    const [minWin, setMinWin] = useState([])
    
    const selectController = useCallback((obj) => {
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
    }, [minWin])

    const minHelper = useCallback((shortcutValue) => {
        let newArray = minWin
        for (let i = 0; i < newArray.length; i++) {
            if ((newArray[i].value === shortcutValue) && (newArray[i].className === "selected")) {
                newArray[i].className = ""
            }
        }
        return newArray
    }, [minWin])

    const closeHelper = useCallback((shortcutValue) => {
        let newArray = minWin
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i].value === shortcutValue) {
                newArray.splice(i, 1)
            }
        }
        return newArray
    }, [minWin])

    const openComp = useCallback(() => {
        setComp({ ...comp, isClicked: true, isMin: false})
        let compObj = {
            id: 0,
            value: comp.shortcut,
            open: openComp,
            className: "selected"
        }
        setMinWin(selectController(compObj)) 
    }, [comp, minWin])

    const closeComp = useCallback(() => {
        setComp({...comp, isClicked: false, isMin: false})
        setMinWin(closeHelper(comp.shortcut));
    }, [comp, minWin])

    const minComp = useCallback(() => {
        setComp({ ...comp, isClicked: true, isMin: true})
        setMinWin(minHelper(comp.shortcut))
    }, [comp, minWin])

    const openDoc = useCallback(() => {
        setDoc({ ...doc, isClicked: true, isMin: false})
        let docObj =  {
            id: 1,
            value: doc.shortcut,
            open: openDoc,
            className: "selected"
        }
        setMinWin(selectController(docObj))

    }, [doc, minWin])

    const closeDoc =  useCallback(() => {
        setDoc({...doc, isClicked: false, isMin: false})
        setMinWin(closeHelper(doc.shortcut));
    }, [doc, minWin])

    const minDoc = useCallback(() => {
        setDoc({ ...doc, isClicked: true, isMin: true})
        setMinWin(minHelper(doc.shortcut))
    }, [doc, minWin])

    const openNet = useCallback(() => {
        setNet({ ...net, isClicked: true, isMin: false})
        let newObj = {
            id: 2,
            value: net.shortcut,
            open: openNet,
            className: "selected"
        }
        setMinWin(selectController(newObj))
    }, [net, minWin])

    const closeNet = useCallback(() => {
        setNet({...net, isClicked: false, isMin: false})
        setMinWin(closeHelper(net.shortcut));
    }, [net, minWin])

    const minNet = useCallback(() => {
        setNet({ ...net, isClicked: true, isMin: true})
        setMinWin(minHelper(net.shortcut))
    }, [net, minWin])

    const openBin = useCallback(() => {
        setBin({ ...bin, isClicked: true, isMin: false})
        let binObj = {
            id: 3,
            value: bin.shortcut,
            open: openBin,
            className: "selected"
        }
        setMinWin(selectController(binObj))
    }, [bin, minWin])

    const closeBin = useCallback(() => {
        setBin({...bin, isClicked: false, isMin: false})
        setMinWin(closeHelper(bin.shortcut));
    }, [bin, minWin])

    const minBin = useCallback(() => {
        setBin({ ...bin, isClicked: true, isMin: true})
        setMinWin(minHelper(bin.shortcut))
    }, [bin, minWin])

    const [runInput, setRunInput] = useState("")

    const openRun = useCallback(() => {
        setRun({ ...run, isClicked: true, isMin: false})
    }, [run])

    const closeRun = useCallback(() => {
        setRun({...run, isClicked: false, isMin: false})
    }, [run])

    const openCli = useCallback(() => {
        setCli({ ...cli, isClicked: true, isMin: false})
        
        let cliObj = {
            id: 5,
            value: cli.shortcut,
            open: openCli,
            className: "selected"
        }
        setMinWin(selectController(cliObj)) 
    }, [cli, minWin])

    const closeCli = useCallback(() => {
        setCli({...cli, isClicked: false, isMin: false})
        setMinWin(closeHelper(cli.shortcut));
    }, [cli, minWin])

    const minCli = useCallback(() => {
        setCli({ ...cli, isClicked: true, isMin: true})
        setMinWin(minHelper(cli.shortcut))
    }, [cli, minWin])

    const openMine = useCallback(() => {
        setMinesweeper({...minesweeper, isClicked: true, isMin: false})

        let mineObj = {
            id: 6,
            value: minesweeper.shortcut,
            open: openMine,
            className: "selected"
        }
        setMinWin(selectController(mineObj)) 
    }, [minesweeper, minWin])

    const closeMine = useCallback(() => {
        setMinesweeper({...minesweeper, isClicked: false, isMin: false})
        setMinWin(closeHelper(minesweeper.shortcut));
    }, [minesweeper, minWin])

    const minMine = useCallback(() => {
        setMinesweeper({ ...minesweeper, isClicked: true, isMin: true})
        setMinWin(minHelper(minesweeper.shortcut))
    }, [minesweeper, minWin])

    const openCalc = useCallback(() => {
        setCalc({...calc, isClicked: true, isMin: false})

        let calcObj = {
            id: 7,
            value: calc.shortcut,
            open: openCalc,
            className: "selected"
        }
        setMinWin(selectController(calcObj)) 
    }, [calc, minWin])

    const closeCalc = useCallback(() => {
        setCalc({...calc, isClicked: false, isMin: false})
        setMinWin(closeHelper(calc.shortcut));  
    }, [calc, minWin])

    const minCalc = useCallback(() => {
        setCalc({ ...calc, isClicked: true, isMin: true})
        setMinWin(minHelper(calc.shortcut))
    }, [calc, minWin])

    const openRunError = useCallback(() => {
        setRunError({...runError, shortcut: runInput, isClicked: true})
    }, [runError, runInput])

    const closeRunError = useCallback(() => {
        setRunError({...runError, isClicked: false})
    }, [runError])

    const openApps = {
        command: openCli,
        browser: openNet,
        comp: openComp,
        docs: openDoc,
        bin: openBin,
        calc: openCalc
    }

    const [help, setHelp] = useState(false)

    const openShutdown = useCallback(() => {
        setShutdown({...shutdown, isClicked: true})
    }, [shutdown])

    const closeShutdown = useCallback(() => {
        setShutdown({...shutdown, isClicked: false})
    }, [shutdown])

    const openFlop = useCallback(() => {
        setFlop({ ...flop, isClicked: true, isMin: false})
        let flopObj = {
            id: 0,
            value: comp.shortcut,
            open: openFlop,
            className: "selected"
        }
        setMinWin(selectController(flopObj)) 
    }, [flop, minWin])

    const closeFlop = useCallback(() => {
        setFlop({...flop, isClicked: false, isMin: false})
        setMinWin(closeHelper(flop.shortcut));
    }, [flop, minWin])

    const minFlop = useCallback(() => {
        setFlop({ ...flop, isClicked: true, isMin: true})
        setMinWin(minHelper(flop.shortcut))
    }, [flop, minWin])

    const openDrive = useCallback(() => {
        setDriveC({ ...driveC, isClicked: true, isMin: false})
        let driveObj = {
            id: 0,
            value: comp.shortcut,
            open: openDrive,
            className: "selected"
        }
        setMinWin(selectController(driveObj)) 
    }, [driveC, minWin])

    const closeDrive = useCallback(() => {
        setDriveC({...driveC, isClicked: false, isMin: false})
        setMinWin(closeHelper(driveC.shortcut));
    }, [driveC, minWin])

    const minDrive = useCallback(() => {
        setComp({ ...driveC, isClicked: true, isMin: true})
        setMinWin(minHelper(driveC.shortcut))
    }, [driveC, minWin])

    const openControl = useCallback(() => {
        setControl({ ...control, isClicked: true, isMin: false})
        let controlObj = {
            id: 0,
            value: control.shortcut,
            open: openControl,
            className: "selected"
        }
        setMinWin(selectController(controlObj)) 
    }, [control, minWin])

    const closeControl = useCallback(() => {
        setControl({...control, isClicked: false, isMin: false})
        setMinWin(closeHelper(control.shortcut));
    }, [control, minWin])

    const minControl = useCallback(() => {
        setComp({ ...control, isClicked: true, isMin: true})
        setMinWin(minHelper(control.shortcut))
    }, [control, minWin])

    const openPrint = useCallback(() => {
        setPrint({ ...print, isClicked: true, isMin: false})
        let printObj = {
            id: 0,
            value: print.shortcut,
            open: openPrint,
            className: "selected"
        }
        setMinWin(selectController(printObj)) 
    }, [print, minWin])

    const closePrint = useCallback(() => {
        setPrint({...print, isClicked: false, isMin: false})
        setMinWin(closeHelper(print.shortcut));
    }, [print, minWin])

    const minPrint = useCallback(() => {
        setPrint({ ...print, isClicked: true, isMin: true})
        setMinWin(minHelper(print.shortcut))
    }, [print, minWin])

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
                
                <Col colId="two" />
                <Col colId="three" />
                <Col colId="four" />
                <Col colId="five"/>
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
            <Col colId="end" isConcealed="true"
                slotOne={
                    <SpecialWindow isClicked={runError.isClicked} winTitle={runError.shortcut} winId={`${runError.shortcutId}-window`} position={{left: "600px", bottom: "525px"}} size={{width: "750px", height: "125px"}} closeState={false} contents={
                        <RunError openRun={openRun} term={runInput} close={closeRunError} />
                    } />
                }

                slotTwo={
                    <SpecialWindow isClicked={calc.isClicked} winTitle={calc.shortcut} winId={`${calc.shortcutId}-window`} position={{left: "0px", bottom: "525px"}} size={{width: "375px", height: "300px"}} canDrag={true} closeState={true} minMax={<MinMaxSpec min={minCalc}/>} close={closeCalc} contents={
                        <Calc />
                    } />
                }

                slotThree={
                    shutdown.isClicked ? 
                    <ShutdownPortal window={
                        <SpecialWindow isClicked={shutdown.isClicked} winTitle={shutdown.shortcut} winId={`${shutdown.shortcutId}-window`} position={{left: "0", top: "0"}} size={{width: "425px", height: "233px"}} closeState={true} close={closeShutdown} fade={true}contents={
                            <Shutdown closeButton={closeShutdown} />
                        } />
                    }/> : null
                }
                slotFour={
                    <BasicWindow isClicked={cli.isClicked} open={openCli} winTitle={cli.shortcut} winId={'cli'} min={minCli} minState={cli.isMin} close={closeCli} contents={
                        <Terminal openApps={openApps}/>
                    } />
                }

                slotFive={
                    <BasicWindow isClicked={net.isClicked} open={openNet} winTitle={net.shortcut} winId={`${net.shortcutId}-window`} min={minNet} minState={net.isMin} close={closeNet} contents={<Internet />} />
                }

                slotSix={
                    <BasicWindow isClicked={comp.isClicked} open={openComp} winTitle={comp.shortcut} winId={`${comp.shortcutId}-window`} min={minComp} minState={comp.isMin} close={closeComp} contents={
                        <div className="win-container">
                            <DesktopIcon open={openFlop} shortcutId={flop.shortcutId} shortcutIconId={`${flop.shortcutId}-icon`} imgSrc={flopIcon} shortcut={flop.shortcut} contents={"contents"}/>

                            <DesktopIcon open={openDrive} shortcutId={driveC.shortcutId} shortcutIconId={`${driveC.shortcutId}-icon`} imgSrc={driveIcon} shortcut={driveC.shortcut} contents={"contents"}/>

                            <DesktopIcon open={openControl} shortcutId={control.shortcutId} shortcutIconId={`${control.shortcutId}-icon`} imgSrc={controlIcon} shortcut={control.shortcut} contents={"contents"}/>
                            
                            <DesktopIcon open={openPrint} shortcutId={print.shortcutId} shortcutIconId={`${print.shortcutId}-icon`} imgSrc={printIcon} shortcut={print.shortcut} contents={"contents"}/>
                        </div>
                    } />
                }
                
                slotEight={
                    <BasicWindow isClicked={doc.isClicked} open={openDoc} winTitle={doc.shortcut} winId={`${doc.shortcutId}-window`} min={minDoc} minState={doc.isMin} close={closeDoc} contents={"contents"} />
                }

                slotNine={
                    <BasicWindow isClicked={bin.isClicked} open={openBin} winTitle={bin.shortcut} winId={`${bin.shortcutId}-window`} min={minBin} minState={bin.isMin} close={closeBin} contents={"contents"} />
                }

                slotTen={
                    <SpecialWindow isClicked={run.isClicked} winTitle={run.shortcut} winId={`${run.shortcutId}-window`} close={closeRun} size={{width: "400px", height: "175px"}} position={{left: "-1125px", bottom: "150px"}} help={<HelpButton helpPrompt={()=>setHelp(true)}/>} contents={
                        <Run helpPrompt={help} setHelp={setHelp} closeRun={closeRun} openApps={openApps} runInput={{value: runInput, setter: setRunInput}} throwError={openRunError} />
                    } />
                }
            />

            <StartContext.Provider value={{calc: openCalc, mine: openMine, shutdown: openShutdown, run: openRun, internet: openNet, terminal: openCli}}>
                <div className="bottom">
                    <div className="dec-bottom-line"></div>
                    <Start windows={minWin} />
                </div>
            </StartContext.Provider>

        </div>
    )
}
export {StartContext}
export default Main
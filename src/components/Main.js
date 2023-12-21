/* eslint-disable default-case */
import React, { useEffect, useState } from 'react'
import Start from './startbar/Start'
import compIcon from "../assets/icons/mycomputer.png"
import binIcon from "../assets/icons/bin.png"
import docIcon from "../assets/icons/docFull.png"
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
import useWindow from '../Hooks/useWindow'
import noteIcon from '../assets/icons/note.png'
import HidCol from './Interface/HidCol'
import NotePad from './Windows/NotePad'
import ReadMe from '../assets/text/ReadMe'
import Minesweeper from './Accessories/Games/Minesweeper/Minesweeper'
import ErrorMsg from './Windows/ErrorMsg'
import AimSignIn from './Windows/aim/AimSignIn'
import AimClient from './Windows/aim/AimClient'
import aimIcon from "../assets/icons/aim.png"; 
import AimLoader from './Windows/aim/AimLoader'
import AimWindow from './Windows/aim/AimWindow'

export const StartContext = React.createContext()

function Main({setStartup}) {
    const [minWin, setMinWin] = useState([])
    const [comp, setComp, openComp, closeComp, minComp] = useWindow(minWin, setMinWin, 1, "My Computer", "comp")
    const [doc, setDoc, openDoc, closeDoc, minDoc] = useWindow(minWin, setMinWin, 2, "My Documents", "doc")
    const [bin, setBin, openBin, closeBin, minBin] = useWindow(minWin, setMinWin, 3, "Recycle Bin", "bin")
    const [net, setNet, openNet, closeNet, minNet] = useWindow(minWin, setMinWin, 4, "Internet", "net")
    const [cli, setCli, openCli, closeCli, minCli] = useWindow(minWin, setMinWin, 5, "Scape-CLI Prompt", "cli")
    const [flop, setFlop, openFlop, closeFlop, minFlop] = useWindow(minWin, setMinWin, 6, "3 1/2 Floppy (A:)", "flop")
    const [driveC, setDriveC, openDrive, closeDrive, minDrive] = useWindow(minWin, setMinWin, 7, "(C:)",  "driveC")
    const [control, setControl, openControl, closeControl, minControl] = useWindow(minWin, 8, setMinWin,  "Control Panel", "control")
    const [print, setPrint, openPrint, closePrint, minPrint] = useWindow(minWin, setMinWin, 9, "Printers", "print")
    const [run, setRun, openRun, closeRun, minRun] = useWindow(minWin, setMinWin, 10, "Run", "run")
    const [runError, setRunError, openRunError, closeRunError, minRunError] = useWindow(minWin, setMinWin, 11, "Run Error", "run-error")
    const [shutdown, setShutdown, openShutdown, closeShutdown, minShutdown] = useWindow(minWin, setMinWin, 12, "Shut Down Windows", "shutdown")
    const [minesweeper, setMinesweeper, openMine, closeMine, minMine] = useWindow(minWin, setMinWin, 13, "Minesweeper", "mine")
    const [mineInst, setMineInst] = useState(0)
    const [calc, setCalc, openCalc, closeCalc, minCalc] = useWindow(minWin, setMinWin, 14, "Calculator", "calc")
    const [read, setRead, openRead, closeRead, minRead] = useWindow(minWin, setMinWin, 15, "readme.txt", "read")
    const [notepad, setNotes, openNotes, closeNotes, minNotes] = useWindow(minWin, setMinWin, 16, "Notepad",  "notepad")
    const [misc, setMisc, openMisc, closeMisc, minMisc] = useWindow(minWin, setMinWin, 17, "misc.txt", "misc")
    const [err, setErr, openErr, closeErr, minErr] = useWindow(minWin, setMinWin, 18, "Error", "err")
    const [aim, setAim, openAim, closeAim, minAim] = useWindow(minWin, setMinWin, 19, "Aim", "aim")
    const [aimLoader, setAimLoader, openAimLoader, closeAimLoader, minAimLoader] = useWindow(minWin, setMinWin, 20, "AIM-Loader", "aim-loader")
    const [aimClient, setAimClient, openAimClient, closeAimClient, minAimClient] = useWindow(minWin, setMinWin, 21, "AIM-Client", "aim-client")
    const [aimWindow, setAimWindow, openAimWindow, closeAimWindow, minAimWindow] = useWindow(minWin, setMinWin, 22, "AIM", "aim-window")
    const [runInput, setRunInput] = useState("")

    const openApps = {
        command: openCli,
        cmd: openCli,
        browser: openNet,
        connect: openNet,
        comp: openComp,
        "open my computer": openComp,
        docs: openDoc,
        "open my documents": openDoc,
        bin: openBin,
        "open recycling bin": openBin,
        calc: openCalc,
        readMe: openRead
    }

    const [help, setHelp] = useState(false)

    useEffect(()=> {
        const main = document.querySelector(".main")
        if (!shutdown.isClicked) {
            main.style.opacity = "1"
            main.style.background = "rgb(176,196,222)"
        }
    }, [shutdown])

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
            <HidCol colId="end" isConcealed="true"
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
                        <SpecialWindow isClicked={shutdown.isClicked} winTitle={shutdown.shortcut} winId={`${shutdown.shortcutId}-window`} position={{left: "0", top: "0"}} size={{width: "425px", height: "233px"}} closeState={true} close={closeShutdown} fade={true} contents={
                            <Shutdown setStartup={setStartup} closeButton={closeShutdown} />
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
                            <DesktopIcon open={openFlop} shortcutId={flop.shortcutId} shortcutIconId={`${flop.shortcutId}-icon`} imgSrc={flopIcon} shortcut={flop.shortcut} contents={""}/>

                            <DesktopIcon open={openDrive} shortcutId={driveC.shortcutId} shortcutIconId={`${driveC.shortcutId}-icon`} imgSrc={driveIcon} shortcut={driveC.shortcut} contents={""}/>

                            <DesktopIcon open={openControl} shortcutId={control.shortcutId} shortcutIconId={`${control.shortcutId}-icon`} imgSrc={controlIcon} shortcut={control.shortcut} contents={""}/>

                            <DesktopIcon open={openErr} shortcutId={print.shortcutId} shortcutIconId={`${print.shortcutId}-icon`} imgSrc={printIcon} shortcut={print.shortcut} contents={""}/>

                            {/*
                            <DesktopIcon open={openPrint} shortcutId={print.shortcutId} shortcutIconId={`${print.shortcutId}-icon`} imgSrc={printIcon} shortcut={print.shortcut} contents={""}/>
                            */}
                        </div>
                    } />
                }
                
                slotEight={
                    <BasicWindow isClicked={doc.isClicked} open={openDoc} winTitle={doc.shortcut} winId={`${doc.shortcutId}-window`} min={minDoc} minState={doc.isMin} close={closeDoc} contents={
                        <div className="win-container">
                            <DesktopIcon open={openRead} shortcutId={read.shortcutId} shortcutIconId={`${read.shortcutId}-icon`} imgSrc={noteIcon} shortcut={read.shortcut} contents={""}/>
                        </div>
                    } />
                }

                slotNine={
                    <BasicWindow isClicked={bin.isClicked} open={openBin} winTitle={bin.shortcut} winId={`${bin.shortcutId}-window`} min={minBin} minState={bin.isMin} close={closeBin} contents={
                        <div className="win-container">
                            <DesktopIcon open={openMisc} shortcutId={misc.shortcutId} shortcutIconId={`${misc.shortcutId}-icon`} imgSrc={noteIcon} shortcut={misc.shortcut} contents={""}/>
                        </div>
                    } />
                }

                slotTen={
                    <SpecialWindow isClicked={run.isClicked} winTitle={run.shortcut} winId={`${run.shortcutId}-window`} close={closeRun} size={{width: "400px", height: "175px"}} position={{left: "-1125px", bottom: "150px"}} help={<HelpButton helpPrompt={()=>setHelp(true)}/>} contents={
                        <Run helpPrompt={help} setHelp={setHelp} closeRun={closeRun} openApps={openApps} runInput={{value: runInput, setter: setRunInput}} throwError={openRunError} />
                    } />
                }

                slotEleven={
                    <BasicWindow isClicked={read.isClicked} open={openRead} winTitle={read.shortcut} winId={`${read.shortcutId}-window`} min={minRead} minState={read.isMin} close={closeRead} contents={
                        <ReadMe />
                    } />
                }

                slotTwelve={
                    <BasicWindow isClicked={notepad.isClicked} open={openNotes} winTitle={notepad.shortcut} winId={`${read.shortcutId}-window`} min={minNotes} minState={notepad.isMin} close={closeNotes} contents={
                        <NotePad />
                    } />
                }

                slotThirteen={
                    <BasicWindow isClicked={minesweeper.isClicked} open={openMine} winTitle={minesweeper.shortcut} winId={`${minesweeper.shortcutId}-window`} min={minMine} minState={minesweeper.isMin} close={closeMine} size={{width: "275px", height: "275px"}} contents={
                        <Minesweeper mineInst={mineInst} setMineInst={setMineInst} key={new Date().getTime()}/>
                    } />
                }

                slotFourteen={
                    <SpecialWindow isClicked={err.isClicked} winTitle={"Desktop"} winId={`${err.shortcutId}-window`} close={closeErr} size={{width: "350px", height: "125px"}} position={{left: "-750px", bottom: "450px"}} contents={
                        <ErrorMsg msg="The properties for this item are not available." close={closeErr} />
                    } />
                }
                
                slotFifteen={
                    <SpecialWindow isClicked={aim.isClicked} open={openAim} winTitle={"Sign On"} winId={`${aim.shortcutId}-window`} close={closeAim} size={{ width: "250px", height: "515px" }} position={{ left: "-250px", bottom: "650px" }} contents={
                        <AimSignIn closeAim={closeAim} openAimLoader={openAimLoader} />
                    } />
                }

                slotSixteen={
                    <SpecialWindow isClicked={aimLoader.isClicked} open={openAimLoader} winTitle={"AIM-Loader"} winId={`${aimLoader.shortcutId}-window`} close={closeAimLoader} size={{ width: "250px", height: "325px" }} position={{ left: "-500px", bottom: "750px" }} contents={
                        <AimLoader closeAimLoader={closeAimLoader} openAimClient={openAimClient} />
                    } />
                }
                
                slotSeventeen={
                    <BasicWindow isClicked={aimClient.isClicked} open={openAimClient} winTitle={aimClient.shortcut} winId={`${aimClient.shortcutId}-window`} close={closeAimClient} size={{ width: "200px", height: "525px" }} position={{ left: "-700px", bottom: "500px" }} contents={
                        <AimClient openAimWindow={openAimWindow} closeAimLoader={closeAimLoader} />
                    } />
                }

                slotEighteen={
                    <BasicWindow isClicked={aimWindow.isClicked} open={openAimWindow} winTitle={aimWindow.shortcut} winId={`${aimWindow.shortcutId}-window`} close={closeAimWindow} size={{ width: "550px", height: "375px" }} position={{ left: "-1700px", bottom: "500px" }} contents={
                        <AimWindow />
                    } />
                }
            />

            <StartContext.Provider value={{calc: openCalc, mine: openMine, shutdown: openShutdown, run: openRun, internet: openNet, terminal: openCli, notepad: openNotes, readMe: openRead, aim: openAim }}>
                <div className="bottom">
                    <div className="dec-bottom-line"></div>
                    <Start windows={minWin}  />
                </div>
            </StartContext.Provider>
        </div>
    )
}

export default Main
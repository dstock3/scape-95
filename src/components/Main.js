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
import WordProcessor from './Applications/WordProcessor/WordProcessor';
import wordProcIcon from '../assets/icons/wordProcessor.png';

export const StartContext = React.createContext()

function Main({ setStartup }) {
  const [minWin, setMinWin] = useState([]);
  const [mineInst, setMineInst] = useState(0);
  const [runInput, setRunInput] = useState("");
  const [help, setHelp] = useState(false);

  const windowHooks = [
    useWindow(minWin, setMinWin, 1, "My Computer", "comp"),
    useWindow(minWin, setMinWin, 2, "My Documents", "doc"),
    useWindow(minWin, setMinWin, 3, "Recycle Bin", "bin"),
    useWindow(minWin, setMinWin, 4, "Internet", "net"),
    useWindow(minWin, setMinWin, 5, "Scape-CLI Prompt", "cli"),
    useWindow(minWin, setMinWin, 6, "3 1/2 Floppy (A:)", "flop"),
    useWindow(minWin, setMinWin, 7, "(C:)", "driveC"),
    useWindow(minWin, setMinWin, 8, "Control Panel", "control"),
    useWindow(minWin, setMinWin, 9, "Printers", "print"),
    useWindow(minWin, setMinWin, 10, "Run", "run"),
    useWindow(minWin, setMinWin, 11, "Run Error", "runError"),
    useWindow(minWin, setMinWin, 12, "Shut Down Windows", "shutdown"),
    useWindow(minWin, setMinWin, 13, "Minesweeper", "minesweeper"),
    useWindow(minWin, setMinWin, 14, "Calculator", "calc"),
    useWindow(minWin, setMinWin, 15, "readme.txt", "read"),
    useWindow(minWin, setMinWin, 16, "Notepad", "notepad"),
    useWindow(minWin, setMinWin, 17, "misc.txt", "misc"),
    useWindow(minWin, setMinWin, 18, "Error", "err"),
    useWindow(minWin, setMinWin, 19, "Aim", "aim"),
    useWindow(minWin, setMinWin, 20, "AIM-Loader", "aimLoader"),
    useWindow(minWin, setMinWin, 21, "AIM-Client", "aimClient"),
    useWindow(minWin, setMinWin, 22, "AIM", "aimWindow"),
    useWindow(minWin, setMinWin, 23, "Word Processor", "wordProc")
  ];

  const windows = {
    comp: { state: windowHooks[0][0], setState: windowHooks[0][1], open: windowHooks[0][2], close: windowHooks[0][3], minState: windowHooks[0][4], title: "My Computer" },
    doc: { state: windowHooks[1][0], setState: windowHooks[1][1], open: windowHooks[1][2], close: windowHooks[1][3], minState: windowHooks[1][4], title: "My Documents" },
    bin: { state: windowHooks[2][0], setState: windowHooks[2][1], open: windowHooks[2][2], close: windowHooks[2][3], minState: windowHooks[2][4], title: "Recycle Bin" },
    net: { state: windowHooks[3][0], setState: windowHooks[3][1], open: windowHooks[3][2], close: windowHooks[3][3], minState: windowHooks[3][4], title: "Internet" },
    cli: { state: windowHooks[4][0], setState: windowHooks[4][1], open: windowHooks[4][2], close: windowHooks[4][3], minState: windowHooks[4][4], title: "Scape-CLI Prompt" },
    flop: { state: windowHooks[5][0], setState: windowHooks[5][1], open: windowHooks[5][2], close: windowHooks[5][3], minState: windowHooks[5][4], title: "3 1/2 Floppy (A:)" },
    driveC: { state: windowHooks[6][0], setState: windowHooks[6][1], open: windowHooks[6][2], close: windowHooks[6][3], minState: windowHooks[6][4], title: "(C:)" },
    control: { state: windowHooks[7][0], setState: windowHooks[7][1], open: windowHooks[7][2], close: windowHooks[7][3], minState: windowHooks[7][4], title: "Control Panel" },
    print: { state: windowHooks[8][0], setState: windowHooks[8][1], open: windowHooks[8][2], close: windowHooks[8][3], minState: windowHooks[8][4], title: "Printers" },
    run: { state: windowHooks[9][0], setState: windowHooks[9][1], open: windowHooks[9][2], close: windowHooks[9][3], minState: windowHooks[9][4], title: "Run" },
    runError: { state: windowHooks[10][0], setState: windowHooks[10][1], open: windowHooks[10][2], close: windowHooks[10][3], minState: windowHooks[10][4], title: "Run Error" },
    shutdown: { state: windowHooks[11][0], setState: windowHooks[11][1], open: windowHooks[11][2], close: windowHooks[11][3], minState: windowHooks[11][4], title: "Shut Down Windows" },
    minesweeper: { state: windowHooks[12][0], setState: windowHooks[12][1], open: windowHooks[12][2], close: windowHooks[12][3], minState: windowHooks[12][4], title: "Minesweeper" },
    calc: { state: windowHooks[13][0], setState: windowHooks[13][1], open: windowHooks[13][2], close: windowHooks[13][3], minState: windowHooks[13][4], title: "Calculator" },
    read: { state: windowHooks[14][0], setState: windowHooks[14][1], open: windowHooks[14][2], close: windowHooks[14][3], minState: windowHooks[14][4], title: "readme.txt" },
    notepad: { state: windowHooks[15][0], setState: windowHooks[15][1], open: windowHooks[15][2], close: windowHooks[15][3], minState: windowHooks[15][4], title: "Notepad" },
    misc: { state: windowHooks[16][0], setState: windowHooks[16][1], open: windowHooks[16][2], close: windowHooks[16][3], minState: windowHooks[16][4], title: "misc.txt" },
    err: { state: windowHooks[17][0], setState: windowHooks[17][1], open: windowHooks[17][2], close: windowHooks[17][3], minState: windowHooks[17][4], title: "Error" },
    aim: { state: windowHooks[18][0], setState: windowHooks[18][1], open: windowHooks[18][2], close: windowHooks[18][3], minState: windowHooks[18][4], title: "Aim" },
    aimLoader: { state: windowHooks[19][0], setState: windowHooks[19][1], open: windowHooks[19][2], close: windowHooks[19][3], minState: windowHooks[19][4], title: "AIM-Loader" },
    aimClient: { state: windowHooks[20][0], setState: windowHooks[20][1], open: windowHooks[20][2], close: windowHooks[20][3], minState: windowHooks[20][4], title: "AIM-Client" },
    aimWindow: { state: windowHooks[21][0], setState: windowHooks[21][1], open: windowHooks[21][2], close: windowHooks[21][3], minState: windowHooks[21][4], title: "AIM" },
    wordProc: { state: windowHooks[22][0], setState: windowHooks[22][1], open: windowHooks[22][2], close: windowHooks[22][3], minState: windowHooks[22][4], title: "Word Processor" },
  };

  const openApps = {
    command: windows.cli.open,
    cmd: windows.cli.open,
    browser: windows.net.open,
    connect: windows.net.open,
    comp: windows.comp.open,
    "open my computer": windows.comp.open,
    docs: windows.doc.open,
    "open my documents": windows.doc.open,
    bin: windows.bin.open,
    "open recycling bin": windows.bin.open,
    calc: windows.calc.open,
    readMe: windows.read.open,
    word: windows.wordProc.open,
  };

  useEffect(() => {
    const mainElem = document.querySelector(".main");
    if (!windows.shutdown.state.isClicked) {
      mainElem.style.opacity = "1";
      mainElem.style.background = "rgb(176,196,222)";
    }
  }, [windows.shutdown.state.isClicked]);

  return (
    <div className="main">
      <div className="col-container">
        <Col
          colId="one"
          slotOne={
            <DesktopIcon
              open={windows.comp.open}
              shortcutId={windows.comp.state.shortcutId}
              shortcutIconId={`${windows.comp.state.shortcutId}-icon`}
              imgSrc={compIcon}
              shortcut={windows.comp.state.shortcut}
            />
          }
          slotTwo={
            <DesktopIcon
              open={windows.doc.open}
              shortcutId={windows.doc.state.shortcutId}
              shortcutIconId={`${windows.doc.state.shortcutId}-icon`}
              imgSrc={docIcon}
              shortcut={windows.doc.state.shortcut}
            />
          }
          slotThree={
            <DesktopIcon
              open={windows.bin.open}
              shortcutId={windows.bin.state.shortcutId}
              shortcutIconId={`${windows.bin.state.shortcutId}-icon`}
              imgSrc={binIcon}
              shortcut={windows.bin.state.shortcut}
            />
          }
          slotFour={
            <DesktopIcon
              open={windows.net.open}
              shortcutId={windows.net.state.shortcutId}
              shortcutIconId={`${windows.net.state.shortcutId}-icon`}
              imgSrc={netIcon}
              shortcut={windows.net.state.shortcut}
              contents={<Internet />}
            />
          }
        />

        <Col 
          colId="two"
          slotOne={
            <DesktopIcon
              open={windows.wordProc.open}
              shortcutId={windows.wordProc.state.shortcutId}
              shortcutIconId={`${windows.wordProc.state.shortcutId}-icon`}
              imgSrc={wordProcIcon}
              shortcut={windows.wordProc.state.shortcut}
            />
          }
        />
        <Col colId="three" />
        <Col colId="four" />
        <Col colId="five" />
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

      <HidCol
        colId="end"
        isConcealed="true"
        slotOne={
          <SpecialWindow
            isClicked={windows.runError.state.isClicked}
            winTitle={windows.runError.state.shortcut}
            winId={`${windows.runError.state.shortcutId}-window`}
            position={{ left: "600px", bottom: "525px" }}
            size={{ width: "750px", height: "125px" }}
            closeState={false}
            contents={
              <RunError
                openRun={windows.run.open}
                term={runInput}
                close={windows.runError.close}
              />
            }
          />
        }
        slotTwo={
          <SpecialWindow
            isClicked={windows.calc.state.isClicked}
            winTitle={windows.calc.state.shortcut}
            winId={`${windows.calc.state.shortcutId}-window`}
            position={{ left: "0px", bottom: "525px" }}
            size={{ width: "375px", height: "300px" }}
            canDrag={true}
            closeState={true}
            minMax={<MinMaxSpec min={windows.calc.minState} />}
            close={windows.calc.close}
            contents={<Calc />}
          />
        }
        slotThree={
          windows.shutdown.state.isClicked ? (
            <ShutdownPortal
              window={
                <SpecialWindow
                  isClicked={windows.shutdown.state.isClicked}
                  winTitle={windows.shutdown.state.shortcut}
                  winId={`${windows.shutdown.state.shortcutId}-window`}
                  position={{ left: "0", top: "0" }}
                  size={{ width: "425px", height: "233px" }}
                  closeState={true}
                  close={windows.shutdown.close}
                  fade={true}
                  contents={
                    <Shutdown setStartup={setStartup} closeButton={windows.shutdown.close} />
                  }
                />
              }
            />
          ) : null
        }
        slotFour={
          <BasicWindow
            isClicked={windows.cli.state.isClicked}
            open={windows.cli.open}
            winTitle={windows.cli.state.shortcut}
            winId={'cli'}
            min={windows.cli.minState}
            minState={windows.cli.state.isMin}
            close={windows.cli.close}
            contents={<Terminal openApps={openApps} closeCli={windows.cli.close} />}
          />
        }
        slotFive={
          <BasicWindow
            isClicked={windows.net.state.isClicked}
            open={windows.net.open}
            winTitle={windows.net.state.shortcut}
            winId={`${windows.net.state.shortcutId}-window`}
            min={windows.net.minState}
            minState={windows.net.state.isMin}
            close={windows.net.close}
            contents={<Internet />}
          />
        }
        slotSix={
          <BasicWindow
            isClicked={windows.comp.state.isClicked}
            open={windows.comp.open}
            winTitle={windows.comp.state.shortcut}
            winId={`${windows.comp.state.shortcutId}-window`}
            min={windows.comp.minState}
            minState={windows.comp.state.isMin}
            close={windows.comp.close}
            contents={
              <div className="win-container">
                <DesktopIcon
                  open={windows.flop.open}
                  shortcutId={windows.flop.state.shortcutId}
                  shortcutIconId={`${windows.flop.state.shortcutId}-icon`}
                  imgSrc={flopIcon}
                  shortcut={windows.flop.state.shortcut}
                  contents={""}
                />
                <DesktopIcon
                  open={windows.driveC.open}
                  shortcutId={windows.driveC.state.shortcutId}
                  shortcutIconId={`${windows.driveC.state.shortcutId}-icon`}
                  imgSrc={driveIcon}
                  shortcut={windows.driveC.state.shortcut}
                  contents={""}
                />
                <DesktopIcon
                  open={windows.control.open}
                  shortcutId={windows.control.state.shortcutId}
                  shortcutIconId={`${windows.control.state.shortcutId}-icon`}
                  imgSrc={controlIcon}
                  shortcut={windows.control.state.shortcut}
                  contents={""}
                />
                <DesktopIcon
                  open={windows.err.open}
                  shortcutId={windows.print.state.shortcutId}
                  shortcutIconId={`${windows.print.state.shortcutId}-icon`}
                  imgSrc={printIcon}
                  shortcut={windows.print.state.shortcut}
                  contents={""}
                />
              </div>
            }
          />
        }
        slotEight={
          <BasicWindow
            isClicked={windows.doc.state.isClicked}
            open={windows.doc.open}
            winTitle={windows.doc.state.shortcut}
            winId={`${windows.doc.state.shortcutId}-window`}
            min={windows.doc.minState}
            minState={windows.doc.state.isMin}
            close={windows.doc.close}
            contents={
              <div className="win-container">
                <DesktopIcon
                  open={windows.read.open}
                  shortcutId={windows.read.state.shortcutId}
                  shortcutIconId={`${windows.read.state.shortcutId}-icon`}
                  imgSrc={noteIcon}
                  shortcut={windows.read.state.shortcut}
                  contents={""}
                />
              </div>
            }
          />
        }
        slotNine={
          <BasicWindow
            isClicked={windows.bin.state.isClicked}
            open={windows.bin.open}
            winTitle={windows.bin.state.shortcut}
            winId={`${windows.bin.state.shortcutId}-window`}
            min={windows.bin.minState}
            minState={windows.bin.state.isMin}
            close={windows.bin.close}
            contents={
              <div className="win-container">
                <DesktopIcon
                  open={windows.misc.open}
                  shortcutId={windows.misc.state.shortcutId}
                  shortcutIconId={`${windows.misc.state.shortcutId}-icon`}
                  imgSrc={noteIcon}
                  shortcut={windows.misc.state.shortcut}
                  contents={""}
                />
              </div>
            }
          />
        }
        slotTen={
          <SpecialWindow
            isClicked={windows.run.state.isClicked}
            winTitle={windows.run.state.shortcut}
            winId={`${windows.run.state.shortcutId}-window`}
            close={windows.run.close}
            size={{ width: "400px", height: "175px" }}
            position={{ left: "-1125px", bottom: "150px" }}
            help={<HelpButton helpPrompt={() => setHelp(true)} />}
            contents={
              <Run
                helpPrompt={help}
                setHelp={setHelp}
                closeRun={windows.run.close}
                openApps={openApps}
                runInput={{ value: runInput, setter: setRunInput }}
                throwError={windows.runError.open}
              />
            }
          />
        }
        slotEleven={
          <BasicWindow
            isClicked={windows.read.state.isClicked}
            open={windows.read.open}
            winTitle={windows.read.state.shortcut}
            winId={`${windows.read.state.shortcutId}-window`}
            min={windows.read.minState}
            minState={windows.read.state.isMin}
            close={windows.read.close}
            contents={<ReadMe />}
          />
        }
        slotTwelve={
          <BasicWindow
            isClicked={windows.notepad.state.isClicked}
            open={windows.notepad.open}
            winTitle={windows.notepad.state.shortcut}
            winId={`${windows.read.state.shortcutId}-window`}
            min={windows.notepad.minState}
            minState={windows.notepad.state.isMin}
            close={windows.notepad.close}
            contents={<NotePad />}
          />
        }
        slotThirteen={
          <BasicWindow
            isClicked={windows.minesweeper.state.isClicked}
            open={windows.minesweeper.open}
            winTitle={windows.minesweeper.state.shortcut}
            winId={`${windows.minesweeper.state.shortcutId}-window`}
            min={windows.minesweeper.minState}
            minState={windows.minesweeper.state.isMin}
            close={windows.minesweeper.close}
            size={{ width: "275px", height: "275px" }}
            contents={
              <Minesweeper
                mineInst={mineInst}
                setMineInst={setMineInst}
                key={new Date().getTime()}
              />
            }
          />
        }
        slotFourteen={
          <SpecialWindow
            isClicked={windows.err.state.isClicked}
            winTitle={"Desktop"}
            winId={`${windows.err.state.shortcutId}-window`}
            close={windows.err.close}
            size={{ width: "350px", height: "125px" }}
            position={{ left: "-750px", bottom: "450px" }}
            contents={
              <ErrorMsg
                msg="The properties for this item are not available."
                close={windows.err.close}
              />
            }
          />
        }
        slotFifteen={
          <SpecialWindow
            isClicked={windows.aim.state.isClicked}
            open={windows.aim.open}
            winTitle={"Sign On"}
            winId={`${windows.aim.state.shortcutId}-window`}
            close={windows.aim.close}
            size={{ width: "250px", height: "515px" }}
            position={{ left: "-250px", bottom: "650px" }}
            contents={
              <AimSignIn
                closeAim={windows.aim.close}
                openAimLoader={windows.aimLoader.open}
              />
            }
          />
        }
        slotSixteen={
          <SpecialWindow
            isClicked={windows.aimLoader.state.isClicked}
            open={windows.aimLoader.open}
            winTitle={"AIM-Loader"}
            winId={`${windows.aimLoader.state.shortcutId}-window`}
            close={windows.aimLoader.close}
            size={{ width: "250px", height: "325px" }}
            position={{ left: "-500px", bottom: "750px" }}
            contents={
              <AimLoader
                closeAimLoader={windows.aimLoader.close}
                openAimClient={windows.aimClient.open}
              />
            }
          />
        }
        slotSeventeen={
          <BasicWindow
            isClicked={windows.aimClient.state.isClicked}
            open={windows.aimClient.open}
            winTitle={windows.aimClient.state.shortcut}
            winId={`${windows.aimClient.state.shortcutId}-window`}
            close={windows.aimClient.close}
            size={{ width: "200px", height: "525px" }}
            position={{ left: "-700px", bottom: "500px" }}
            contents={
              <AimClient
                openAimWindow={windows.aimWindow.open}
                closeAimLoader={windows.aimLoader.close}
              />
            }
          />
        }
        slotEighteen={
          <BasicWindow
            isClicked={windows.aimWindow.state.isClicked}
            open={windows.aimWindow.open}
            winTitle={windows.aimWindow.state.shortcut}
            winId={`${windows.aimWindow.state.shortcutId}-window`}
            close={windows.aimWindow.close}
            size={{ width: "550px", height: "425px" }}
            position={{ left: "-1700px", bottom: "500px" }}
            contents={<AimWindow />}
          />
        }
        slotNineteen={
          <BasicWindow
            isClicked={windows.wordProc.state.isClicked}
            open={windows.wordProc.open}
            winTitle={windows.wordProc.state.shortcut}
            winId={`${windows.wordProc.state.shortcutId}-window`}
            min={windows.wordProc.minState}
            minState={windows.wordProc.state.isMin}
            close={windows.wordProc.close}
            contents={<WordProcessor />}
          />
        }
      />

      <StartContext.Provider
        value={{
          calc: windows.calc.open,
          mine: windows.minesweeper.open,
          shutdown: windows.shutdown.open,
          run: windows.run.open,
          internet: windows.net.open,
          terminal: windows.cli.open,
          notepad: windows.notepad.open,
          readMe: windows.read.open,
          aim: windows.aim.open,
          word: windows.wordProc.open,
        }}
      >
        <div className="bottom">
          <div className="dec-bottom-line"></div>
          <Start windows={minWin} />
        </div>
      </StartContext.Provider>
    </div>
  );
}

export default Main;

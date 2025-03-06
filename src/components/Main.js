/* eslint-disable default-case, react-hooks/rules-of-hooks */
import React, { useEffect, useState, useMemo, useRef } from 'react';
import Start from './startbar/Start';
import compIcon from "../assets/icons/mycomputer.png";
import binIcon from "../assets/icons/bin.png";
import docIcon from "../assets/icons/docFull.png";
import DesktopIcon from './desktop_shortcuts/DesktopIcon';
import netIcon from "../assets/icons/internet.png";
import Internet from './Windows/internet/Internet';
import '../style/main.css';
import BasicWindow from './Windows/BasicWindow';
import Col from '../components/Interface/Col';
import Terminal from './Windows/Terminal';
import Run from './Windows/Run';
import RunError from './Windows/RunError';
import SpecialWindow from './Windows/SpecialWindow';
import HelpButton from './Windows/HelpButton';
import Shutdown from './Windows/Shutdown';
import ShutdownPortal from './ShutdownPortal';
import Calc from './Accessories/Calc';
import MinMaxSpec from './Windows/MinMaxSpec';
import flopIcon from '../assets/icons/flop.png';
import printIcon from '../assets/icons/print.png';
import driveIcon from '../assets/icons/drive.png';
import controlIcon from '../assets/icons/control.png';
import useWindow from '../Hooks/useWindow';
import noteIcon from '../assets/icons/note.png';
import HidCol from './Interface/HidCol';
import NotePad from './Windows/NotePad';
import ReadMe from '../assets/text/ReadMe';
import Minesweeper from './Accessories/Games/Minesweeper/Minesweeper';
import ErrorMsg from './Windows/ErrorMsg';
import AimSignIn from './Windows/aim/AimSignIn';
import AimClient from './Windows/aim/AimClient';
import aimIcon from "../assets/icons/aim.png"; 
import AimLoader from './Windows/aim/AimLoader';
import AimWindow from './Windows/aim/AimWindow';
import WordProcessor from './Applications/WordProcessor/WordProcessor';

export const StartContext = React.createContext();

const windowDefinitions = [
  { key: "comp", id: 1, title: "My Computer" },
  { key: "doc", id: 2, title: "My Documents" },
  { key: "bin", id: 3, title: "Recycle Bin" },
  { key: "net", id: 4, title: "Internet" },
  { key: "cli", id: 5, title: "Scape-CLI Prompt" },
  { key: "flop", id: 6, title: "3 1/2 Floppy (A:)" },
  { key: "driveC", id: 7, title: "(C:)" },
  { key: "control", id: 8, title: "Control Panel" },
  { key: "print", id: 9, title: "Printers" },
  { key: "run", id: 10, title: "Run" },
  { key: "runError", id: 11, title: "Run Error" },
  { key: "shutdown", id: 12, title: "Shut Down Windows" },
  { key: "minesweeper", id: 13, title: "Minesweeper" },
  { key: "calc", id: 14, title: "Calculator" },
  { key: "read", id: 15, title: "readme.txt" },
  { key: "notepad", id: 16, title: "Notepad" },
  { key: "misc", id: 17, title: "misc.txt" },
  { key: "err", id: 18, title: "Error" },
  { key: "aim", id: 19, title: "Aim" },
  { key: "aimLoader", id: 20, title: "AIM-Loader" },
  { key: "aimClient", id: 21, title: "AIM-Client" },
  { key: "aimWindow", id: 22, title: "AIM" },
  { key: "wordProc", id: 23, title: "Word" },
];

function Main({ setStartup }) {
  const [minWin, setMinWin] = useState([]);
  const [mineInst, setMineInst] = useState(0);
  const [runInput, setRunInput] = useState("");
  const [help, setHelp] = useState(false);

  const windowHooks = [];
  for (let i = 0; i < windowDefinitions.length; i++) {
    const def = windowDefinitions[i];
    windowHooks.push(useWindow(minWin, setMinWin, def.id, def.title, def.key));
  }

  const windows = useMemo(() => {
    const map = {};
    windowDefinitions.forEach((def, index) => {
      const hook = windowHooks[index];
      map[def.key] = {
        state: hook[0],
        setState: hook[1],
        open: hook[2],
        close: hook[3],
        minState: hook[4],
        title: def.title,
      };
    });
    return map;
  }, [windowHooks]);

  const openApps = useMemo(() => ({
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
  }), [windows]);

  const mainRef = useRef(null);
  useEffect(() => {
    if (mainRef.current && !windows.shutdown.state.isClicked) {
      mainRef.current.style.opacity = "1";
      mainRef.current.style.background = "rgb(176,196,222)";
    }
  }, [windows.shutdown.state.isClicked]);

  const colIds = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"];

  return (
    <div className="main" ref={mainRef}>
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
        {colIds.slice(1).map(id => (
          <Col key={id} colId={id} />
        ))}
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




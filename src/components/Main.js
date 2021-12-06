import React from 'react'
import Start from './startbar/Start'
import compIcon from "./desktop_shortcuts/mycomputer.png"
import binIcon from "./desktop_shortcuts/bin.png"
import docIcon from "./desktop_shortcuts/documents.png"
import DesktopIcon from './desktop_shortcuts/DesktopIcon'

function Main() {
    return (
        <div className="main">
            <div className="left">
                <DesktopIcon shortcutId={"doc"} imgSrc={docIcon} shortcut={"My Documents"}/>
                <DesktopIcon shortcutId={"comp"} imgSrc={compIcon} shortcut={"My Computer"}/>
                <DesktopIcon shortcutId={"bin"} imgSrc={binIcon} shortcut={"Recycle Bin"}/>
            </div>

            <div className="bottom">
                <Start />
            </div>

        </div>
    )
}

export default Main

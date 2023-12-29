import React, { useState, useCallback } from 'react';
import '../../style/terminal.css';

function Terminal({ openApps, winState }) {
    const [dir, setDir] = useState(`C:\\SCAPE-95>`);
    const [dirInput, setDirInput] = useState("");
    const [dirArray, setDirArray] = useState([]);
    const [caret, setCaret] = useState("caret-active");

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        let check = false;
        for (let prop in openApps) {
            if (dirInput === prop) {
                check = true;
                openApps[prop]();
            } else if (dirInput === "cd ..") {
                check = true;
                setCaret("caret-active");
                setDir(`C:\\>`);
            } else if (dirInput === "cd") {
                check = true;
                setCaret("caret-active");
                setDir(`C:\\SCAPE-95>`);
            }
        }
        if (!check) {
            setCaret("caret-active");
            setDirArray([...dirArray, { key: (dirArray.length + 1), path: dir, content: dirInput }, { key: (dirArray.length + 2), path: "", content: "command not recognized" }]);
            setDirInput("");
        } else {
            setCaret("caret-active");
            setDirArray([...dirArray, { key: (dirArray.length + 1), path: dir, content: dirInput }]);
            setDirInput("");
        }
    }, [dirInput, openApps, dir, dirArray]);

    const changeHandler = useCallback((e) => {
        setCaret("caret-inactive");
        setDirInput(e.target.value);

        if (e.target.value === "") {
            setCaret("caret-active");
        }
    }, []);

    return (
        <div className={"terminal " + winState}>
            <div className="copy-95">
                <div className="restricted">Scape(R) 1995</div>
                <div className="copyright">(C)ScapeNet Corp 1981-1999.</div>
            </div>
            {dirArray.map(item => (
                <div className="line-input" key={item.key}>
                    <span className="dir">{item.path}</span>
                    <span>{item.content}</span>
                </div>
            ))}
            <div className="line-item">
                <form className="line-input" onSubmit={handleSubmit}>
                    <label className="dir">{dir}</label>
                    <span className={caret}></span>
                    <input autoFocus className="terminal-input" value={dirInput} onChange={changeHandler} />
                </form>
            </div>
        </div>
    );
}

export default Terminal;
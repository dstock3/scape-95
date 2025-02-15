import React, { useState, useCallback } from 'react';
import '../../style/terminal.css';

function Terminal({ openApps, winState, closeCli }) {
    const [dir, setDir] = useState(`C:\\SCAPE-95>`);
    const [dirInput, setDirInput] = useState("");
    const [dirArray, setDirArray] = useState([]);
    const [caret, setCaret] = useState("caret-active");

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const commands = {
            'cd ..': () => {
                setCaret("caret-active");
                setDir(`C:\\>`);
                return true;
            },
            'cd': () => {
                setCaret("caret-active");
                setDir(`C:\\SCAPE-95>`);
                return true;
            },
            'clear': () => {
                setDirArray([]);
                setCaret("caret-active");
                return false;
            },
            'exit': () => {
                closeCli();
                return false;
            }
        };
        
        let commandAdded = false;
        if (dirInput in openApps) {
            openApps[dirInput]();
            setCaret("caret-active");
            commandAdded = true;
        } else if (dirInput in commands) {
            commandAdded = commands[dirInput]();
        }
    
        if (commandAdded) {
            setDirArray(prevArray => [...prevArray, { key: prevArray.length + 1, path: dir, content: dirInput }]);
        } else if (dirInput !== 'clear') {
            setCaret("caret-active");
            setDirArray(prevArray => [...prevArray, 
                { key: prevArray.length + 1, path: dir, content: dirInput }, 
                { key: prevArray.length + 2, path: "", content: "command not recognized" }]);
        }
        setCaret("caret-active");
        setDirInput("");
    }, [dirInput, openApps, dir, closeCli]);
    
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

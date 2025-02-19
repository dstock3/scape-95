import React, { useState } from 'react';
import '../../../style/word-processor.css';
import Clippy from './Clippy';

const WordProcessor = () => {
  const [content, setContent] = useState("-");
  const [font, setFont] = useState("Times New Roman");
  const [fontSize, setFontSize] = useState("10");
  const [line, setLine] = useState(1);
  const [col, setCol] = useState(1);
  const [showClippy, setShowClippy] = useState(false);

  const fontOptions = [
    "Times New Roman",
    "Arial",
    "Courier New",
    "Verdana",
    "Georgia",
    "Palatino",
    "Garamond",
    "Comic Sans MS",
    "Impact",
    "Lucida Console",
    "Tahoma",
    "Trebuchet MS",
    "Helvetica",
    "Calibri",
    "Cambria",
    "Book Antiqua",
    "Candara",
    "Century Gothic",
    "Franklin Gothic Medium",
    "Gill Sans",
    "Lucida Sans Unicode",
  ];

  const fontSizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="wp-container">
      <div className="wp-title-bar">
        <div className="wp-title">Word - Document1</div>
        <div className="wp-window-controls">
          <button className="wp-control-button">_</button>
          <button className="wp-control-button">□</button>
          <button className="wp-control-button">X</button>
        </div>
      </div>

      <div className="wp-menu-bar">
        <ul className="wp-menu">
          <li className="wp-menu-item"><span>F</span>ile</li>
          <li className="wp-menu-item"><span>E</span>dit</li>
          <li className="wp-menu-item"><span>V</span>iew</li>
          <li className="wp-menu-item"><span>I</span>nsert</li>
          <li className="wp-menu-item"><span>F</span>ormat</li>
          <li className="wp-menu-item"><span>T</span>ools</li>
          <li className="wp-menu-item"><span>T</span>able</li>
          <li className="wp-menu-item"><span>W</span>indow</li>
          <li 
            className="wp-menu-item"
            onClick={() => setShowClippy(true)}
          >
            <span>H</span>elp
          </li>
        </ul>
      </div>

      <div className="wp-standard-toolbar">
        <button className="wp-btn" title="New Document">New</button>
        <button className="wp-btn" title="Open Document">Open</button>
        <button className="wp-btn" title="Save Document">Save</button>
        <button className="wp-btn" title="Print">Print</button>
        <button className="wp-btn" title="Spell Check">Spell</button>
        <button className="wp-btn" title="Cut">Cut</button>
        <button className="wp-btn" title="Copy">Copy</button>
        <button className="wp-btn" title="Paste">Paste</button>
        <button className="wp-btn" title="Undo">Undo</button>
        <button className="wp-btn" title="Redo">Redo</button>
        <button className="wp-btn" title="Insert Hyperlink">Link</button>
      </div>

      <div className="wp-formatting-toolbar">
        <select
          className="wp-select"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          {fontOptions.map((f) => (
            <option key={f} value={f}>
              {f}
            </option>
          ))}
        </select>
        <select
          className="wp-select"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        >
          {fontSizes.map((size) => (
            <option key={size} value={size}>
              {size} pt
            </option>
          ))}
        </select>
        <button className="wp-btn" title="Bold"><b>B</b></button>
        <button className="wp-btn" title="Italic"><i>I</i></button>
        <button className="wp-btn" title="Underline"><u>U</u></button>
        <button className="wp-btn" title="Align Left">L</button>
        <button className="wp-btn" title="Center">C</button>
        <button className="wp-btn" title="Align Right">R</button>
        <button className="wp-btn" title="Justify">J</button>
        <button className="wp-btn" title="Bullet List">•</button>
        <button className="wp-btn" title="Numbered List">1.</button>
        <button className="wp-btn" title="Increase Indent">→</button>
        <button className="wp-btn" title="Decrease Indent">←</button>
      </div>

      <div className="wp-ruler">
        <div className="wp-ruler-scale">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="wp-ruler-mark">{i}</div>
          ))}
        </div>
        <div className="wp-ruler-marker" style={{ left: "1in" }}></div>
      </div>

      <div className="wp-editor-container">
        <textarea
          className="wp-editor"
          value={content}
          onChange={handleChange}
          spellCheck="false"
          style={{ fontFamily: font, fontSize: `${fontSize}pt` }}
        />
        {showClippy && <Clippy />}
      </div>

      <div className="wp-status-bar">
        <span>Page 1, Section 1</span>
        <span>1/1</span>
        <span>At 1"</span>
        <span>Ln {line}, Col {col}</span>
        <span>REC MARK EXT OVR WPH</span>
      </div>
    </div>
  );
};

export default WordProcessor;

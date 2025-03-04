import React, { useState, useRef, useEffect } from 'react';
import '../../../style/word-processor.css';
import Clippy from './Clippy';
import wordIcon from '../../../assets/icons/wordProcessor.png';
import Ruler from './Ruler';

const WordProcessor = () => {
  const [font, setFont] = useState("Times New Roman");
  const [fontSize, setFontSize] = useState("10");
  const [line, setLine] = useState(1);
  const [col, setCol] = useState(1);
  const [showClippy, setShowClippy] = useState(false);

  const editorRef = useRef(null);

  const updateCaretPosition = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0 && editorRef.current) {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(editorRef.current);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      const text = preCaretRange.toString();
      const lines = text.split('\n');
      setLine(lines.length);
      setCol(lines[lines.length - 1].length + 1); 
    }
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      if (editorRef.current && document.activeElement === editorRef.current) {
        updateCaretPosition();
      }
    };
    document.addEventListener('selectionchange', handleSelectionChange);
    return () =>
      document.removeEventListener('selectionchange', handleSelectionChange);
  }, []);

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    updateCaretPosition();
  };

  const handleFontChange = (e) => {
    const selectedFont = e.target.value;
    setFont(selectedFont);
    handleCommand('fontName', selectedFont);
  };

  const handleFontSizeChange = (e) => {
    const selectedSize = e.target.value;
    setFontSize(selectedSize);
    handleCommand('fontSize', 3);
  };

  const saveDocument = () => {
    if (editorRef.current) {
      localStorage.setItem('wordProcessorContent', editorRef.current.innerHTML);
      alert("Document saved.");
    }
  };

  const loadDocument = () => {
    if (editorRef.current) {
      const saved = localStorage.getItem('wordProcessorContent');
      editorRef.current.innerHTML = saved || "";
      alert("Document loaded.");
    }
  };

  const clearDocument = () => {
    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }
  };

  const fontOptions = [
    "Times New Roman", "Arial", "Courier New", "Verdana", "Georgia",
    "Palatino", "Garamond", "Comic Sans MS", "Impact", "Lucida Console",
    "Tahoma", "Trebuchet MS", "Helvetica", "Calibri", "Cambria",
    "Book Antiqua", "Candara", "Century Gothic", "Franklin Gothic Medium",
    "Gill Sans", "Lucida Sans Unicode"
  ];

  const fontSizes = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  return (
    <div className="wp-container">
      <div className="wp-title-bar">
        <div className="wp-subcontainer">
          <img src={wordIcon} className="wp-icon" alt="word icon" />
          <div className="wp-menu-bar">
            <ul className="wp-menu">
              <li className="wp-menu-item" onClick={saveDocument}><span>F</span>ile</li>
              <li className="wp-menu-item" onClick={clearDocument}><span>N</span>ew</li>
              <li className="wp-menu-item" onClick={loadDocument}><span>O</span>pen</li>
              <li className="wp-menu-item" onClick={() => setShowClippy(true)}><span>H</span>elp</li>
            </ul>
          </div>
        </div>
        <div className="wp-window-controls">
          <button className="wp-control-button">_</button>
          <button className="wp-control-button">□</button>
          <button className="wp-control-button">X</button>
        </div>
      </div>

      <div className="wp-standard-toolbar">
        <button className="wp-btn" title="New Document" onClick={clearDocument}>New</button>
        <button className="wp-btn" title="Open Document" onClick={loadDocument}>Open</button>
        <button className="wp-btn" title="Save Document" onClick={saveDocument}>Save</button>
        <button className="wp-btn" title="Print" onClick={() => window.print()}>Print</button>
        <button className="wp-btn" title="Undo" onClick={() => handleCommand('undo')}>Undo</button>
        <button className="wp-btn" title="Redo" onClick={() => handleCommand('redo')}>Redo</button>
      </div>

      <div className="wp-formatting-toolbar">
        <select className="wp-select" value={font} onChange={handleFontChange}>
          {fontOptions.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
        <select className="wp-select" value={fontSize} onChange={handleFontSizeChange}>
          {fontSizes.map((size) => (
            <option key={size} value={size}>{size} pt</option>
          ))}
        </select>
        <button className="wp-btn" title="Bold" onClick={() => handleCommand('bold')}><b>B</b></button>
        <button className="wp-btn" title="Italic" onClick={() => handleCommand('italic')}><i>I</i></button>
        <button className="wp-btn" title="Underline" onClick={() => handleCommand('underline')}><u>U</u></button>
        <button className="wp-btn" title="Align Left" onClick={() => handleCommand('justifyLeft')}>L</button>
        <button className="wp-btn" title="Center" onClick={() => handleCommand('justifyCenter')}>C</button>
        <button className="wp-btn" title="Align Right" onClick={() => handleCommand('justifyRight')}>R</button>
        <button className="wp-btn" title="Justify" onClick={() => handleCommand('justifyFull')}>J</button>
        <button className="wp-btn" title="Bullet List" onClick={() => handleCommand('insertUnorderedList')}>•</button>
        <button className="wp-btn" title="Numbered List" onClick={() => handleCommand('insertOrderedList')}>1.</button>
        <button className="wp-btn" title="Increase Indent" onClick={() => handleCommand('indent')}>→</button>
        <button className="wp-btn" title="Decrease Indent" onClick={() => handleCommand('outdent')}>←</button>
      </div>

      <Ruler />

      <div className="wp-editor-container">
        <div 
          className="wp-editor"
          contentEditable="true"
          suppressContentEditableWarning={true}
          ref={editorRef}
          onInput={updateCaretPosition}
        ></div>
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

import React, { useState } from 'react';
import '../../../style/word-processor.css';

const WordProcessor = () => {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="word-processor">
      <div className="wp-menu-bar">
        <ul className="wp-menu">
          <li className="wp-menu-item">File</li>
          <li className="wp-menu-item">Edit</li>
          <li className="wp-menu-item">View</li>
          <li className="wp-menu-item">Insert</li>
          <li className="wp-menu-item">Format</li>
          <li className="wp-menu-item">Tools</li>
          <li className="wp-menu-item">Help</li>
        </ul>
      </div>

      <div className="wp-toolbar">
        <button className="wp-button" title="Bold">B</button>
        <button className="wp-button" title="Italic">I</button>
        <button className="wp-button" title="Underline">U</button>
        <span className="wp-spacer"></span>
        <button className="wp-button" title="Align Left">L</button>
        <button className="wp-button" title="Center">C</button>
        <button className="wp-button" title="Align Right">R</button>
      </div>

      <textarea
        className="wp-editor"
        value={content}
        onChange={handleChange}
        spellCheck="false"
      />

      <div className="wp-status-bar">
        <span>Page 1</span>
        <span>
          Word Count:{" "}
          {content
            .split(/\s+/)
            .filter((word) => word !== "")
            .length}
        </span>
      </div>
    </div>
  );
};

export default WordProcessor;

import React from 'react';
import '../../../../style/grid.css'

const GridLayout = () => {
  return (
    <div className="outer-grid-container">
        <div className="grid-container">
            <header className="grid-header">
                <h1 className="grid-title">Header Content</h1>
            </header>
            <hr className="grid-divider"/>
            <div className="grid-item">
                <h2>Grid Item 1</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <a href="#" className="grid-link">More Info</a>
                <button className="grid-button">Click Me</button>
            </div>
            <hr className="grid-divider"/>
            <div className="grid-item">
                <h2>Grid Item 2</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <a href="#" className="grid-link">More Info</a>
                <button className="grid-button">Click Me</button>
            </div>
            <hr className="grid-divider"/>
            <div className="grid-item">
                <h2>Grid Item 3</h2>
                <p>Lorem ipsum dolor sit amet...</p>
                <a href="#" className="grid-link">More Info</a>
                <button className="grid-button">Click Me</button>
            </div>
            <hr className="grid-divider"/>
            <footer className="grid-footer">
                <p>Footer content goes here...</p>
            </footer>
        </div>
    </div>
  );
}

export default GridLayout;
import React from 'react';
import '../../../../style/grid.css';
import gridLayoutData from '../../../../assets/internet/content/gridLayout.json';

const GridLayout = () => {
  const { header, items, footer } = gridLayoutData.content;

  return (
    <div className="outer-grid-container">
      <div className="grid-container">
        <header className="grid-header">
          <h1 className="grid-title">{header}</h1>
        </header>
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <hr className="grid-divider"/>
            <div className="grid-item">
              <h2>{item.title}</h2>
              {item.body.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
              <button className="grid-button">{item.buttonText}</button>
            </div>
          </React.Fragment>
        ))}
        <hr className="grid-divider"/>
        <footer className="grid-footer">
          <p>{footer}</p>
        </footer>
      </div>
    </div>
  );
}

export default GridLayout;
import React, { useState, useRef, useMemo, useCallback } from 'react';
import '../../style/window.css';
import WindowsButtons from './WindowsButtons';

function BasicWindow({ 
  size = { width: "650px", height: "650px" }, 
  winId, 
  minState, 
  close, 
  isClicked, 
  min, 
  winTitle, 
  contents 
}) {
  const windowRef = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const windowStyle = useMemo(() => ({
    position: "fixed",
    top: isMaximized ? "0" : "50px", 
    left: isMaximized ? "0" : "50px", 
    width: isMaximized ? "100%" : size.width,
    height: isMaximized ? "100%" : size.height,
    zIndex: 2
  }), [isMaximized, size]);

  const windowBodyStyle = useMemo(() => ({
    height: isMaximized ? 'calc(100% - 25px)' : `calc(${size.height} - 25px)`,
  }), [isMaximized, size]);

  const handleMouseDown = useCallback((event) => {
    if (!isMaximized) {
      setDragStart({ x: event.clientX, y: event.clientY });
      setIsDragging(true);
    }
  }, [isMaximized]);

  const handleMouseMove = useCallback((event) => {
    if (isDragging) {
      const currentX = event.clientX;
      const currentY = event.clientY;
      const dx = currentX - dragStart.x;
      const dy = currentY - dragStart.y;

      if (windowRef.current) {
        const currentTop = windowRef.current.offsetTop;
        const currentLeft = windowRef.current.offsetLeft;
        windowRef.current.style.top = `${currentTop + dy}px`;
        windowRef.current.style.left = `${currentLeft + dx}px`;
      }
      setDragStart({ x: currentX, y: currentY });
    }
  }, [isDragging, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const toggleMaximize = useCallback(() => {
    setIsMaximized(prev => !prev);
  }, []);

  if (!isClicked) {
    return null;
  }

  return (
    <div 
      className={`basic-window ${minState ? 'hidden' : ''}`} 
      id={winId} 
      ref={windowRef} 
      style={windowStyle}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="window-top" onDoubleClick={toggleMaximize}>
        <div className="window-title">{winTitle}</div>
        <WindowsButtons min={min} max={toggleMaximize} close={close} />
      </div>
      <div className="window-body" style={windowBodyStyle}>
        {contents}
      </div>
    </div>
  );
}

export default React.memo(BasicWindow);

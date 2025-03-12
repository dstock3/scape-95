import React, { useState, useRef, useMemo, useCallback } from 'react';
import '../../style/window.css';
import WindowsButtons from './WindowsButtons';

function BasicWindow({
  position, 
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
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const windowStyle = useMemo(() => ({
    position: "fixed",
    left: position?.left ?? (isMaximized ? "0" : "50px"),
    top: position?.top ?? (isMaximized ? "0" : "50px"),
    width: isMaximized ? "100%" : size.width,
    height: isMaximized ? "100%" : size.height,
    zIndex: 2,
  }), [position, isMaximized, size]);

  const windowBodyStyle = useMemo(() => ({
    height: isMaximized ? 'calc(100% - 25px)' : `calc(${size.height} - 25px)`,
  }), [isMaximized, size]);

  const handleMouseMove = useCallback((event) => {
    if (windowRef.current) {
      const { x, y } = dragStartRef.current;
      const dx = event.clientX - x;
      const dy = event.clientY - y;
      windowRef.current.style.top = `${windowRef.current.offsetTop + dy}px`;
      windowRef.current.style.left = `${windowRef.current.offsetLeft + dx}px`;
      dragStartRef.current = { x: event.clientX, y: event.clientY };
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  const handleMouseDown = useCallback((event) => {
    if (!isMaximized) {
      dragStartRef.current = { x: event.clientX, y: event.clientY };
      setIsDragging(true);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
  }, [isMaximized, handleMouseMove, handleMouseUp]);

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

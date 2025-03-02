import React, { useState, useRef, useEffect } from 'react';
import '../../../style/word-processor.css';

const useContainerWidth = (ref) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return width;
};

const Ruler = () => {
  const rulerRef = useRef(null);
  const containerWidth = useContainerWidth(rulerRef);
  const numColumns = Math.ceil(containerWidth / 96);

  return (
    <div className="wp-ruler" ref={rulerRef}>
      <div 
        className="wp-ruler-scale"
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1in)` }}
      >
        {[...Array(numColumns)].map((_, i) => (
          <div key={i} className="wp-ruler-mark">{i}</div>
        ))}
      </div>
      <div className="wp-ruler-marker" style={{ left: "1in" }}></div>
    </div>
  );
};

export default Ruler;

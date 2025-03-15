import React, { useEffect, useState } from 'react';
import '../../../../style/net-loading.css';

const loadingMessages = [
  "Establishing Connection...",
  "Transferring Packets...",
  "Negotiating Protocols...",
  "Decrypting Content...",
  "Verifying Data Integrity...",
  "Rendering Page...",
  "Almost There..."
];

function NetLoading() {
    const [message, setMessage] = useState(loadingMessages[0]);
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      let idx = 0;
      setMessage(loadingMessages[idx]);
      const msgInterval = setInterval(() => {
        idx = Math.min(idx + 1, loadingMessages.length - 1);
        setMessage(loadingMessages[idx]);
      }, 1200);
  
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + Math.random() * 15, 100));
      }, 400);
  
      return () => {
        clearInterval(msgInterval);
        clearInterval(progressInterval);
      };
    }, []);
  
    return (
      <div className="net-loading-container">
        <span className="net-loading-message">{message}</span>
        <div className="net-loading-bar">
          <div className="net-loading-progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    );
  }
  
  export default NetLoading;
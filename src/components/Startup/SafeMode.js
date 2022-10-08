import React, { useEffect, useState } from 'react'
import '../../style/safe-mode.css'

const SafeMode = () => {
  const [select, setSelect] = useState(null)
  const [count, setCount] = useState(30)
  const [isActive, setIsActive] = useState(true)

  useEffect(()=> {
    let int = null;
    if (isActive) {
      if (count === 0) {
        setIsActive(false)
        /*need to pass a state setter to SafeMode which is then passed to main in order to initiate startup */
      }
      int = setInterval(()=> { setCount(count => count - 1);
      
      }, 1000)
    } else if (!isActive && count !== 0) {
      clearInterval(int)
    }
    return () => clearInterval(int)
  }, [isActive, count])

  return (
    <div className="safe-mode">
      <div className="safe-mode-menu">
        <h1 className="safe-mode-title">Scape 95 Startup Menu</h1>
        <div className="safe-mode-line"></div>
        <ul className="safe-mode-options">
            <li className="safe-mode-option">1. Normal</li>
            <li className="safe-mode-option">2. Logged (\BOOTLOG.TXT)</li>
            <li className="safe-mode-option">3. Safe Mode</li>
            <li className="safe-mode-option">4. Safe Mode with network support</li>
            <li className="safe-mode-option">5. Step-by-step confirmation</li>
            <li className="safe-mode-option">6. Command prompt only</li>
            <li className="safe-mode-option">7. Safe mode command prompt only</li>
        </ul>
        <div className="safe-mode-submenu">
          <div className="choice">Enter a choice: {select}</div>
          <div className="counter">Time remaining: {count}</div>
        </div>
        <div className="safe-mode-msg">
            Warning: Scape did not finish loading on the previous attempt. Choose Safe mode, to start Windows with a minimal set of drivers.
        </div>
      </div>
    </div>
  )
}

export default SafeMode
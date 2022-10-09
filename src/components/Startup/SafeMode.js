import React, { useEffect, useState } from 'react'
import '../../style/safe-mode.css'

const SafeMode = () => {
  const [select, setSelect] = useState(1)
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

  useEffect(()=> {
    const setClass = (selectedElement) => {
      let options = Array.from(document.getElementsByClassName("safe-mode-option"))

      for (let i = 0; i < options.length; i++) {
        let option = options[i]

        if (option.id !== selectedElement.id) {
          option.classList.remove("select")
        } else {
          option.classList.add("select")
        }
      }
    }

    for (let i = 0; i < 8; i++) {
      if (select === i) {
        let option = document.getElementById(`option-${i}`)
        setClass(option)
      }
    }
  }, [select])

  return (
    <div className="safe-mode">
      <div className="safe-mode-menu">
        <div className="safe-mode-head-container">
          <h1 className="safe-mode-title">Scape 95 Startup Menu</h1>
          <div className="safe-mode-line"></div>
          <div className="safe-mode-line"></div>
        </div>
        <ul className="safe-mode-options">
            <li className="safe-mode-option" id="option-1">1. 
              <span className="option-text">Normal</span>
            </li>
            <li className="safe-mode-option" id="option-2">2. 
              <span className="option-text">Logged (\BOOTLOG.TXT)</span>
            </li>
            <li className="safe-mode-option" id="option-3">3. 
              <span className="option-text">Safe Mode</span>
            </li>
            <li className="safe-mode-option" id="option-4">4. 
              <span className="option-text">Safe Mode with network support</span>
              </li>
            <li className="safe-mode-option" id="option-5">5. 
              <span className="option-text">Step-by-step confirmation</span>
            </li>
            <li className="safe-mode-option" id="option-6">6. 
              <span className="option-text">Command prompt only</span>
            </li>
            <li className="safe-mode-option" id="option-7">7. 
              <span className="option-text">Safe mode command prompt only</span>
            </li>
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
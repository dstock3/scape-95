import React, { useEffect, useState } from 'react'
import '../../style/safe-mode.css'

const SafeMode = ({startup, setStartup}) => {
  const [select, setSelect] = useState(1)
  const [count, setCount] = useState(30)
  const [isActive, setIsActive] = useState(false)

  useEffect(()=> {
    if (startup === 0) {
      setIsActive(true)
      let option = document.getElementById(`option-${select}`)
      setClass(option)
    }
  }, [startup])

  useEffect(()=> {
    let int = null;
    if (isActive) {
      if (count === 0) {
        setIsActive(false)
        setStartup(select)
      }
      int = setInterval(()=> { setCount(count => count - 1);
      }, 1000)
    } else if (!isActive && count !== 0) {
      clearInterval(int)
    }
    return () => clearInterval(int)
  }, [isActive, count])

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

  useEffect(()=> {
    document.addEventListener("keydown", keyEvent);
    for (let i = 0; i < 8; i++) {
      if (select === i) {
        let option = document.getElementById(`option-${i}`)
        setClass(option)
      }
    }
  }, [select])

  const setKeyBinding = (selectConfig) => {
    setSelect(selectConfig)
    document.removeEventListener("keydown", keyEvent);
  }

  const keyEvent = e => {
    if (e.key === "ArrowUp" && select > 1) {
      setKeyBinding(select - 1)
    } else if (e.key === "ArrowDown" && select < 7) {
      setKeyBinding(select + 1)
    } else if (e.key === "Enter") {
      setIsActive(false)
      setTimeout(() => {
        setStartup(select)
      }, "2000")
    }
  }

  if (startup === 0) {
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
  } else {
    return null
  }
}

export default SafeMode
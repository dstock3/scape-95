import React from 'react'
import '../../style/safe-mode.css'

const SafeMode = () => {
  return (
    <div className="safe-mode">
      <div className="safe-mode-menu">
        <h1 className="safe-mode-title">Scape 95 Startup Menu</h1>
          <ul className="safe-mode-options">
              <li className="safe-mode-option">1.</li>
              <li className="safe-mode-option">2.</li>
              <li className="safe-mode-option">3.</li>
          </ul>
          <div className="safe-mode-msg">
              Warning: Scape did not finish loading on the previous attempt. Choose Safe mode, to start Windows with a minimal set of drivers.
          </div>
      </div>
    </div>
  )
}

export default SafeMode
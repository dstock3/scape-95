import React, { useState } from 'react'
import '../../../../style/games/minesweeper.css'

const Minesweeper = () => {
    const [mineNum, setMineNum] = useState(10)

    return (
        <div className="minesweeper">
            <div className="top-lvl">
                <div className="mine-num">
                    {mineNum}
                </div>
                <div className="smiley">
                    {/* need to find smiley icon*/}
                </div>
                <div className="mine-timer">
                    
                </div>
            </div>
            <div className="mine-grid">

            </div>
        </div>
    )
}

export default Minesweeper


import React, { useEffect, useState } from 'react'
import '../../../../style/games/minesweeper.css'

const Minesweeper = () => {
    const [mineNum, setMineNum] = useState(10)
    const [width, setWidth] = useState(10)
    const [squares, setSquares] = useState([])
    
    
    useEffect(()=> {
        for (let i = 0; i < width*width; i++) {

            
            setSquares(squares => squares.concat(i))

        }
        console.log(squares)
    }, [])



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
                    {width.map

                    }
                </div>
            </div>
            <div className="mine-grid">

            </div>
        </div>
    )
}

export default Minesweeper


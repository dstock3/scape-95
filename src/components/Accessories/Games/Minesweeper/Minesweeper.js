import React, { useEffect, useState } from 'react'
import '../../../../style/games/minesweeper.css'

const Minesweeper = () => {
    const [mineNum, setMineNum] = useState(10)
    const [width, setWidth] = useState(10)
    const [squares, setSquares] = useState([])
    const [bombAmount, setBombAmount] = useState(20)
    const [bombsArray, setBombsArray] = useState([])
    const [emptyArray, setEmptyArray] = useState([])
    

    useEffect(()=> {
        for (let i = 0; i < bombAmount; i++) {
            setBombsArray(bombsArray => [...bombsArray, "bomb"]) 
        }

        let emptyArrayAmount = width*width-bombAmount

        for (let i = 0; i < emptyArrayAmount; i++) {
            setEmptyArray(emptyArray => [...emptyArray, "valid"]) 
        }
    }, [bombAmount])
    
    useEffect(()=> {
        for (let i = 0; i < width*width; i++) {
            setSquares(squares => [...squares, i]) 
        }
    }, [width])

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
            {squares.map((square, index) => (
                <div className="square" id={square} key={index}>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Minesweeper


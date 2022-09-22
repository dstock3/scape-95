import React, { useEffect, useState } from 'react'
import '../../../../style/games/minesweeper.css'

const Minesweeper = () => {
    const [mineNum, setMineNum] = useState(10)
    const [width, setWidth] = useState(10)
    const [squares, setSquares] = useState([])
    const [bombAmount, setBombAmount] = useState(20)
    const [bombsArray, setBombsArray] = useState([])
    const [emptyArray, setEmptyArray] = useState([])
    const [gameArray, setGameArray] = useState([])
    const [shuffled, setShuffled] = useState([])
    
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
        setGameArray(emptyArray.concat(bombsArray))
    }, [emptyArray])

    useEffect(()=> {
        if (gameArray.length > 0) {
            setShuffled(gameArray.sort(() => Math.random() -0.5))
        }
    }, [gameArray])

    useEffect(()=> {
        for (let i = 0; i < width*width; i++) {
            setSquares(squares => [...squares, i]) 
        }
    }, [width])

    useEffect(()=> {
        let squares = Array.from(document.getElementsByClassName("square"))
        console.log(squares)
        
        
        for (let i = 0; i < squares.length; i++) {
            let sum = 0
            const isLeft = (i % width === 0)
            const isRight = (i === width - 1)

            if (squares[i].classList.contains('valid')) {
                if (i > 0 && !isLeft && squares[i - 1].classList.contains('bomb')) sum ++
                if (i > 9 && !isRight && squares[i + 1 - width].classList.contains('bomb')) sum ++
                if (i > 10 && squares[i - width].classList.contains('bomb')) sum ++
                if (i > 11 && !isLeft && squares[i - 1 - width].classList.contains('bomb')) sum ++
                if (i < 98 && !isRight && squares[i + 1].classList.contains('bomb')) sum ++
                if (i < 90 && !isLeft && squares[i - 1 + width].classList.contains('bomb')) sum ++
                if (i < 88 && !isRight && squares[i + 1 + width].classList.contains('bomb')) sum ++
                if (i < 88 && !isRight && squares[i + width].classList.contains('bomb')) sum ++
                squares[i].setAttribute('data', sum)
                console.log(squares[i])
                
            }

        }

    }, [shuffled])

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
                    <div className={`square ${shuffled[index]}`} id={square} key={index}>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Minesweeper


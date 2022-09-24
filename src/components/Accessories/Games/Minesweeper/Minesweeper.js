import React, { useEffect, useState } from 'react'
import '../../../../style/games/minesweeper.css'
import bombPic from '../../../../assets/icons/mine.png'

const Minesweeper = () => {
    const [mineNum, setMineNum] = useState(10)
    const [width, setWidth] = useState(10)
    const [squares, setSquares] = useState([])
    const [bombAmount, setBombAmount] = useState(20)
    const [bombsArray, setBombsArray] = useState([])
    const [emptyArray, setEmptyArray] = useState([])
    const [gameArray, setGameArray] = useState([])
    const [shuffled, setShuffled] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const [losingMove, setLosingMove] = useState(null)
    

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
        if (isGameOver) {
            const losingSquare = document.getElementById(losingMove)
            const mine = document.createElement('img')
            mine.src = bombPic
            losingSquare.appendChild(mine)

        }

    }, [isGameOver])

    useEffect(()=> {
        let squares = Array.from(document.getElementsByClassName("square"))
        
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
            }
        }
    }, [shuffled])

    const handleClick = (squareId) => {
        let square = document.getElementById(squareId)
        click(square)
    }

    const click = (square) => {
        if (isGameOver || square.classList.contains('checked') || square.classList.contains('flag')) {
            console.log("skip")
        } else {
            if (square.classList.contains('bomb')) {
                setIsGameOver(true)
                setLosingMove(square.id)
                console.log('game over')
            } else {
                let sum = square.getAttribute('data')
                
                if (sum > 0) {
                    if (parseInt(sum) === 1) {
                        square.style.color = "blue"
                    } else if (parseInt(sum) === 2) {
                        square.style.color = "green"
                    } else if (parseInt(sum) === 3) {
                        square.style.color = "red"
                    }
                    square.classList.add("checked")
                    
                    
                    square.innerHTML = sum
                }
                checkSquare(square, square.id)
            } 
        }
        square.classList.add("checked")
    }

    const checkSquare = (square, squareId) => {
        const isLeft = (squareId % width === 0)
        const isRight = (squareId % width === width - 1)

        let squares = Array.from(document.getElementsByClassName("square"))
        /*
        
        function pass(thisSquare) {
            const newId = thisSquare.id
            const newSquare = document.getElementById(newId)
            click(newSquare)
        }

        setTimeout(()=> {
            if (squareId > 0 && !isLeft) {
                pass(squares[parseInt(squareId) -1])
            }
            if (squareId > 9 && !isRight) {
                pass(squares[parseInt(squareId) +1 -width])
            }
            if (squareId > 10) {
                pass(squares[parseInt(squareId -width)])
            }
            if (squareId > 11 && !isLeft) {
                pass(squares[parseInt(squareId) -1 - width])
            }
            if (squareId < 98 && !isRight) {
                pass(squares[parseInt(squareId) +1])
            }
            if (squareId < 90 && !isLeft) {
                pass(squares[parseInt(squareId) -1 + width])
            }
            if (squareId < 88 && !isRight) {
                pass(squares[parseInt(squareId) +1 + width])
            }
            if (squareId < 89) {
                pass(squares[parseInt(squareId) +width])
            }
        }, 10)
        */
    }

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
                    <div className={`square ${shuffled[index]}`} id={square} key={index} onClick={()=>handleClick(square)}>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Minesweeper


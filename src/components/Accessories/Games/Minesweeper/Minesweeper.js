import React, { useEffect, useState } from 'react'
import '../../../../style/games/minesweeper.css'
import bombPic from '../../../../assets/icons/mine.png'
import smiley from '../../../../assets/icons/minesmiley.png'

const Minesweeper = ({mineInst, setMineInst}) => {
    const [width, setWidth] = useState(10)
    const [squares, setSquares] = useState([])
    const [bombAmount, setBombAmount] = useState(10)
    const [bombsArray, setBombsArray] = useState([])
    const [emptyArray, setEmptyArray] = useState([])
    const [gameArray, setGameArray] = useState([])
    const [shuffled, setShuffled] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const [counter, setCounter] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [face, setFace] = useState(smiley)
    
    useEffect(()=> {
        if (!isGameOver) {
            for (let i = 0; i < bombAmount; i++) {
                setBombsArray(bombsArray => [...bombsArray, "bomb"]) 
            }
    
            let emptyArrayAmount = width*width-bombAmount
    
            for (let i = 0; i < emptyArrayAmount; i++) {
                setEmptyArray(emptyArray => [...emptyArray, "valid"]) 
            }  
        }
    }, [bombAmount, isGameOver])

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

    useEffect(()=> {
        let int = null;
        if (isActive) {
            int = setInterval(() => {
                setCounter(counter => counter + 1);
            }, 1000);

        } else if (!isActive && counter !== 0) {
            clearInterval(int);
          }
        return () => clearInterval(int);
    }, [isActive, counter])

    const handleClick = (squareId) => {
        setIsActive(true)
        let square = document.getElementById(squareId)
        click(square)
    }

    const resetGame = () => {
        setMineInst(mineInst + 1)
    }

    const click = (square) => {
        if (isGameOver || square.classList.contains('checked') || square.classList.contains('flag')) {
            console.log("skip")
        } else {
            if (square.classList.contains('bomb')) {
                setIsGameOver(true)
                setIsActive(false)
                setCounter(0)

                const losingSquare = document.getElementById(square.id)
                losingSquare.style.background = "red"
                
                let squares = Array.from(document.getElementsByClassName("square"))
                for (let i = 0; i < squares.length; i++) {
                    if (squares[i].classList.contains('bomb')) {
                        const mine = document.createElement('img')
                        mine.src = bombPic
                        squares[i].appendChild(mine)
                    }
                }
                
            } else {
                let sum = parseInt(square.getAttribute('data'))
                
                if (sum === 0) {
                    square.style.backgroundColor = "rgb(232, 231, 231)"
                    square.style.border = "solid 3px rgb(124, 124, 124)"
                }
                
                if (sum > 0) {
                    if (sum === 1) {
                        square.style.color = "blue"
                    } else if (sum === 2) {
                        square.style.color = "green"
                    } else if (sum === 3) {
                        square.style.color = "red"
                    } else if (sum === 4) {
                        square.style.color = "darkblue"
                    } else if (sum === 5) {
                        square.style.color = "darkred"
                    } else if (sum === 6) {
                        square.style.color = "teal"
                    } else if (sum === 7) {
                        square.style.color = "black"
                    } else if (sum === 8) {
                        square.style.color = "grey"
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
                    {bombAmount}
                </div>
                <div className="smiley" onClick={()=>resetGame()}>
                    <img src={face} alt="minesweeper smiley face"></img>
                </div>
                <div className="mine-timer">
                    {counter}
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

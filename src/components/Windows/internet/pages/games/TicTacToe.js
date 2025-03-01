import React, { useState, useEffect, useRef } from 'react'
import '../../../../../style/games/ticTacToe.css'

function TicTacToe() {
    const [playerScore, setPlayerScore] = useState(0)
    const [compScore, setCompScore] = useState(0)

    const [spaces, setSpaces] = useState({
        topLeft: null, 
        topMid: null, 
        topRight: null, 
        midLeft: null, 
        midMid: null, 
        midRight: null, 
        botLeft: null, 
        botMid: null, 
        botRight: null,
    })

    const [round, setRound] = useState(0)
    const [message, setMessage] = useState("Your Move!")
    const moveRef = useRef(false)
    const [messageButton, setMessageButton] = useState(null)
    const [tie, setTie] = useState(false)

    // Ref to store the timer for the computer move
    const compMoveTimerRef = useRef(null)

    const compMove = () => {
        if (tie) {
            return null 
        }
        let possibleMoves = []
        let compMoves = []
        let playerMoves = []
        
        for (let prop in spaces) {
            if (spaces[prop] !== "X" && spaces[prop] !== "O") {
                possibleMoves.push(prop)
            }
            if (spaces[prop] === "O") {
                compMoves.push(prop)
            }
            if (spaces[prop] === "X") {
                playerMoves.push(prop)
            }
        }

        let optimalMove = null
        if (possibleMoves.includes("midMid") && !playerMoves.includes("midMid")) {
            optimalMove = "midMid"
        }

        function moveController(array) {
            let moveResult;
            if (array.includes("topLeft") && array.includes("topMid")) {
                if (possibleMoves.includes("topRight")) return "topRight";        
            } else if (array.includes("topRight") && array.includes("topMid")) {
                if (possibleMoves.includes("topLeft")) return "topLeft";
            } else if (array.includes("topLeft") && array.includes("topRight")) {
                if (possibleMoves.includes("topMid")) return "topMid";
            } else if (array.includes("midLeft") && array.includes("midMid")) {
                if (possibleMoves.includes("midRight")) return "midRight";   
            } else if (array.includes("midRight") && array.includes("midMid")) {
                if (possibleMoves.includes("midLeft")) return "midLeft";   
            } else if (array.includes("botLeft") && array.includes("botMid")) {
                if (possibleMoves.includes("botRight")) return "botRight"; 
            } else if (array.includes("botRight") && array.includes("botMid")) {
                if (possibleMoves.includes("botLeft")) return "botLeft"; 
            } else if (array.includes("botRight") && array.includes("botLeft")) {
                if (possibleMoves.includes("botMid")) return "botMid"; 
            } else if (array.includes("topLeft") && array.includes("midMid")) {
                if (possibleMoves.includes("botRight")) return "botRight"; 
            } else if (array.includes("topRight") && array.includes("midMid")) {
                if (possibleMoves.includes("botLeft")) return "botLeft"; 
            } else if (array.includes("topRight") && array.includes("midRight")) {
                if (possibleMoves.includes("botRight")) return "botRight"; 
            } else if (array.includes("topRight") && array.includes("botRight")) {
                if (possibleMoves.includes("midRight")) return "midRight"; 
            } else if (array.includes("topLeft") && array.includes("midLeft")) {
                if (possibleMoves.includes("botLeft")) return "botLeft"; 
            } else if (array.includes("topLeft") && array.includes("botLeft")) {
                if (possibleMoves.includes("midLeft")) return "midLeft"; 
            } else if (array.includes("topMid") && array.includes("midMid")) {
                if (possibleMoves.includes("botMid")) return "botMid"; 
            } else if (array.includes("botMid") && array.includes("midMid")) {
                if (possibleMoves.includes("topMid")) return "topMid";   
            } else if (array.includes("botLeft") && array.includes("midMid")) {
                if (possibleMoves.includes("topRight")) return "topRight";
            } else if (array.includes("botLeft") && array.includes("midLeft")) {
                if (possibleMoves.includes("topLeft")) return "topLeft";
            } else if (array.includes("botRight") && array.includes("midMid")) {
                if (possibleMoves.includes("topLeft")) return "topLeft";
            }
            return false;
        }

        let offensiveMove = moveController(compMoves)
        let defensiveMove = moveController(playerMoves)

        if (optimalMove) {
            return optimalMove
        } else if (offensiveMove) {
            return offensiveMove
        } else if (defensiveMove) {
            return defensiveMove
        } else {
            let moveNum = Math.floor(Math.random() * possibleMoves.length)
            return possibleMoves[moveNum]
        }
    }

    // New useEffect to detect a tie by checking if all board spaces are filled
    useEffect(() => {
        const boardIsFull = Object.values(spaces).every(space => space !== null)
        if (boardIsFull && !win("X") && !win("O")) {
            setTie(true)
        }
    }, [spaces])

    // Effect for the computer move with proper timer cleanup and tie check
    useEffect(() => {
        if (moveRef.current && !win("X") && !win("O") && !tie) {
            setMessage("Your Opponent is Thinking...")
            const loadInterval = (Math.random() * (3 - 2) + 2) * 1000
            // Clear any existing timer before setting a new one
            if (compMoveTimerRef.current) {
                clearTimeout(compMoveTimerRef.current)
            }
            compMoveTimerRef.current = setTimeout(() => {
                let newMove = compMove()
                if (newMove) {
                    setSpaces(prevSpaces => ({ ...prevSpaces, [newMove]: "O" }))
                    win("O")
                }
                moveRef.current = false
                setMessage("Your Move!")
                compMoveTimerRef.current = null
            }, loadInterval)
        }
        return () => {
            if (compMoveTimerRef.current) {
                clearTimeout(compMoveTimerRef.current)
                compMoveTimerRef.current = null
            }
        }
    }, [spaces, tie])

    const reset = () => {
        setSpaces({
            topLeft: null, 
            topMid: null, 
            topRight: null, 
            midLeft: null, 
            midMid: null, 
            midRight: null, 
            botLeft: null, 
            botMid: null, 
            botRight: null,
        })
        setTie(false)
        setMessage("Your Move!")
        setMessageButton(null)
        setRound(0)
    }

    const win = (boardPiece) => {
        if ((spaces.topLeft === boardPiece && spaces.topMid === boardPiece && spaces.topRight === boardPiece) ||
            (spaces.midLeft === boardPiece && spaces.midMid === boardPiece && spaces.midRight === boardPiece) ||
            (spaces.botLeft === boardPiece && spaces.botMid === boardPiece && spaces.botRight === boardPiece) ||
            (spaces.topLeft === boardPiece && spaces.midLeft === boardPiece && spaces.botLeft === boardPiece) ||
            (spaces.topMid === boardPiece && spaces.midMid === boardPiece && spaces.botMid === boardPiece) ||
            (spaces.topRight === boardPiece && spaces.midRight === boardPiece && spaces.botRight === boardPiece) ||
            (spaces.topLeft === boardPiece && spaces.midMid === boardPiece && spaces.botRight === boardPiece) ||
            (spaces.topRight === boardPiece && spaces.midMid === boardPiece && spaces.botLeft === boardPiece)) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        const clickHere = document.getElementsByClassName("message-window")[0]
        const resetEvent = () => {
            reset()
            clickHere.removeEventListener('click', resetEvent)
        }
        // Only check for a win if enough moves have been played
        if (round > 1) {
            if (tie) {
                setMessage("It's a tie! Click Here to Play Again.")
                setMessageButton({ cursor: "pointer" })
                setRound(0)
                clickHere.addEventListener('click', resetEvent)
            } else if (win("X")) {
                setPlayerScore(prevScore => prevScore + 1)
                setMessage("You Won! Click Here to Play Again.")
                setMessageButton({ cursor: "pointer" })
                setRound(0)
                clickHere.addEventListener('click', resetEvent)
            } else if (win("O")) {
                setCompScore(prevScore => prevScore + 1)
                setMessage("The Computer Won! Click Here to Play Again.")
                setMessageButton({ cursor: "pointer" })
                setRound(0)
                clickHere.addEventListener('click', resetEvent)
            }
        }
    })

    const clickHandler = (position) => {
        // Remove tie check here since we now detect tie based on board fullness
        for (let prop in spaces) {
            if (prop === position) {
                if (spaces[prop] !== "O" && !win("X") && !win("O")) {
                    setSpaces({ ...spaces, [prop]: "X" })
                    setRound(prevRound => prevRound + 1)
                    moveRef.current = true
                }
            }
        }
    }

    useEffect(() => {
        let gameSpaces = Array.from(document.getElementsByClassName("space"))
        for (let i = 0; i < gameSpaces.length; i++) {
            if (gameSpaces[i].innerHTML === "O") {
                gameSpaces[i].classList.add("comp")
            }
            if (gameSpaces[i].innerHTML === "X") {
                gameSpaces[i].classList.add("player")
            }
        }
    })

    return (
        <div id="tic-tac-toe">
            <h1 className="head">Tic-Tac-Toe</h1>
            <div className="master-container">
                <div className="score" id="player-one">
                    <div className="player-head">Player One:</div>
                    <div className="score-number" id="player-one-score">{playerScore}</div>
                </div>
                <div className="main-container">
                    <div className="game-container">
                        <div className="space blank" id="position-0" onClick={() => clickHandler("topLeft")}>
                            {spaces.topLeft}
                        </div>
                        <div className="space blank" id="position-1" onClick={() => clickHandler("topMid")}>
                            {spaces.topMid}
                        </div>
                        <div className="space blank" id="position-2" onClick={() => clickHandler("topRight")}>
                            {spaces.topRight}
                        </div>
                        <div className="space blank" id="position-3" onClick={() => clickHandler("midLeft")}>
                            {spaces.midLeft}
                        </div>
                        <div className="space blank" id="position-4" onClick={() => clickHandler("midMid")}>
                            {spaces.midMid}
                        </div>
                        <div className="space blank" id="position-5" onClick={() => clickHandler("midRight")}>
                            {spaces.midRight}
                        </div>
                        <div className="space blank" id="position-6" onClick={() => clickHandler("botLeft")}>
                            {spaces.botLeft}
                        </div>
                        <div className="space blank" id="position-7" onClick={() => clickHandler("botMid")}>
                            {spaces.botMid}
                        </div>
                        <div className="space blank" id="position-8" onClick={() => clickHandler("botRight")}>
                            {spaces.botRight}
                        </div>
                    </div>
                </div>
                <div className="score" id="player-two">
                    <div className="player-head">Player Two:</div>
                    <div className="score-number" id="player-two-score">{compScore}</div>
                </div>    
            </div>
            <div className="message-window" style={messageButton}>{message}</div>
        </div>
    )
}

export default TicTacToe

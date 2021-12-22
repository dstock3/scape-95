import React, { useState, useEffect, useRef } from 'react'

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
    const [isStarted, setStart] = useState(false)
    const [message, setMessage] = useState(null)
    const moveRef = useRef(false)

    const compMove = () => {
        let newSpaceObj = spaces
        let possibleMoves = []
        
        for (let prop in newSpaceObj) {
            if ((newSpaceObj[prop] !== "X") && (newSpaceObj[prop] !== "O")) {
                possibleMoves.push(prop)
            }
        }

        let moveNum = Math.floor(Math.random() * ((possibleMoves.length - 1)  - 0) + 0);
        let newMove = possibleMoves[moveNum]
        return newMove
    }

    useEffect(() => {
        if (moveRef.current) {
            let newMove = compMove()
            for (let prop in spaces) {
                if (prop === newMove) {
                    setSpaces({...spaces, [prop]: "O"})
                    win("O")
                }
            }
            moveRef.current = false
        }
    }, [spaces])

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
    }

    const win = (boardPiece) => {
        let winner = false

        if ((spaces.topLeft === boardPiece) && (spaces.topMid === boardPiece) && (spaces.topRight === boardPiece)) { 
            winner = true;
            return winner 
        } else if ((spaces.midLeft === boardPiece) && (spaces.midMid === boardPiece) && (spaces.midRight === boardPiece)) { 
            winner = true;
            return winner 
        } else if ((spaces.botLeft === boardPiece) && (spaces.botMid === boardPiece) && (spaces.botRight === boardPiece)) { 
            winner = true;
            return winner
        } else if ((spaces.topLeft === boardPiece) && (spaces.midLeft === boardPiece) && (spaces.botLeft === boardPiece)) { 
            winner = true;
            return winner
        } else if ((spaces.topMid === boardPiece) && (spaces.midMid === boardPiece) && (spaces.botMid === boardPiece)) { 
            winner = true;
            return winner
        } else if ((spaces.topRight === boardPiece) && (spaces.midRight === boardPiece) && (spaces.botRight === boardPiece)) { 
            winner = true;
            return winner
        } else if ((spaces.topLeft === boardPiece) && (spaces.midMid === boardPiece) && (spaces.botRight === boardPiece)) { 
            winner = true;
            return winner
        } else if ((spaces.topRight === boardPiece) && (spaces.midMid === boardPiece) && (spaces.botLeft === boardPiece)) { 
            winner = true;
            return winner
        }
        
        return winner
    }

    useEffect(()=> {
        if (round > 2) {
            let winnerX = win("X")
            let winnerO = win("O")
            if (winnerX) {
                setPlayerScore(prevScore => prevScore + 1)
                setMessage("You Won!")
                setRound(0)
                reset()
            }
            if (winnerO) {
                setCompScore(prevScore => prevScore + 1)
                setMessage("The Computer Won!")
                setRound(0)
                reset()
            }
        }
    })

    const clickHandler = (position) => {
        for (let prop in spaces) {
            if (prop === position) {
                if (spaces[prop] !== "O") {
                    setSpaces({...spaces, [prop]: "X"})
                    setRound(prevRound => prevRound + 1)
                    moveRef.current = true
                }
            }
        }
    }

    useEffect(()=>{
        let gameSpaces = Array.from(document.getElementsByClassName("space"));
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
                    <div className="player-head">
                        Player One:
                    </div>
                    <div className="score-number" id="player-one-score">
                        {playerScore}
                    </div>
                </div>
                <div className="main-container">
                    <div className="game-container">
                        <div className="space blank" id="position-0" onClick={()=> clickHandler("topLeft")}>
                            {spaces.topLeft}
                        </div>

                        <div className="space blank" id="position-1" onClick={()=> clickHandler("topMid")}>
                            {spaces.topMid}
                        </div>

                        <div className="space blank" id="position-2" onClick={()=> clickHandler("topRight")}>
                            {spaces.topRight}
                        </div>

                        <div className="space blank" id="position-3" onClick={()=> clickHandler("midLeft")}>
                            {spaces.midLeft}
                        </div>

                        <div className="space blank" id="position-4" onClick={()=> clickHandler("midMid")}>
                            {spaces.midMid}
                        </div>

                        <div className="space blank" id="position-5" onClick={()=> clickHandler("midRight")}>
                            {spaces.midRight}
                        </div>

                        <div className="space blank" id="position-6" onClick={()=> clickHandler("botLeft")}>
                            {spaces.botLeft}
                        </div>

                        <div className="space blank" id="position-7" onClick={()=> clickHandler("botMid")}>
                            {spaces.botMid}
                        </div>

                        <div className="space blank" id="position-8" onClick={()=> clickHandler("botRight")}>
                            {spaces.botRight}
                        </div>
                    </div>
                </div>
                <div className="score" id="player-two">
                    <div className="player-head">
                        Player Two:
                    </div>
                    <div className="score-number" id="player-two-score">
                        {compScore}
                    </div>
                </div>    
            </div>
            <div className="message-window">{message}</div>
        </div>
    )
}

export default TicTacToe

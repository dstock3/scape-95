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

    const compMove = () => {
        if (tie) {
            return null 
        }
        let newSpaceObj = spaces
        let possibleMoves = []
        let compMoves = []
        let playerMoves = []
        
        for (let prop in newSpaceObj) {
            if ((newSpaceObj[prop] !== "X") && (newSpaceObj[prop] !== "O")) {
                possibleMoves.push(prop)
            }
            if (newSpaceObj[prop] === "O") {
                compMoves.push(prop)
            }
            if (newSpaceObj[prop] === "X") {
                playerMoves.push(prop)
            }
        }

        let optimalMove
        if ((possibleMoves.includes("midMid")) && (!playerMoves.includes("midMid"))) {
            optimalMove = "midMid"
        }

        function moveController(array) {
            let moveResult
            if (array.includes("topLeft") &&
                array.includes("topMid")) {
                if (possibleMoves.includes("topRight")) {
                    moveResult = "topRight"
                    return moveResult
                }        
            } else if (array.includes("topRight") &&
                array.includes("topMid")) {
                if (possibleMoves.includes("topLeft")) {
                    moveResult = "topLeft"
                    return moveResult
                }
            } else if (array.includes("topLeft") &&
                array.includes("topRight")) {
                if (possibleMoves.includes("topMid")) {
                    moveResult = "topMid"
                    return moveResult
                }
            } else if (array.includes("midLeft") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("midRight")) {
                    moveResult = "midRight"
                    return moveResult
                }   
            } else if (array.includes("midRight") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("midLeft")) {
                    moveResult = "midLeft"
                    return moveResult
                }   
            } else if (array.includes("botLeft") &&
                array.includes("botMid")) {
                if (possibleMoves.includes("botRight")) {
                    moveResult = "botRight"
                    return moveResult
                } 
            } else if (array.includes("botRight") &&
                array.includes("botMid")) {
                if (possibleMoves.includes("botLeft")) {
                    moveResult = "botLeft"
                    return moveResult
                } 
            } else if (array.includes("botRight") &&
                array.includes("botLeft")) {
                if (possibleMoves.includes("botMid")) {
                    moveResult = "botMid"
                    return moveResult
                } 
            } else if (array.includes("topLeft") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("botRight")) {
                    moveResult = "botRight"
                    return moveResult
                } 
            } else if (array.includes("topRight") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("botLeft")) {
                    moveResult = "botLeft"
                    return moveResult
                } 
            } else if (array.includes("topRight") &&
                array.includes("midRight")) {
                if (possibleMoves.includes("botRight")) {
                    moveResult = "botRight"
                    return moveResult
                } 
            } else if (array.includes("topRight") &&
                array.includes("botRight")) {
                if (possibleMoves.includes("midRight")) {
                    moveResult = "midRight"
                    return moveResult
                } 
            } else if (array.includes("topLeft") &&
                array.includes("midLeft")) {
                if (possibleMoves.includes("botLeft")) {
                    moveResult = "botLeft"
                    return moveResult
                } 
            } else if (array.includes("topLeft") &&
                array.includes("botLeft")) {
                if (possibleMoves.includes("midLeft")) {
                    moveResult = "midLeft"
                    return moveResult
                } 
            } else if (array.includes("topMid") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("botMid")) {
                    moveResult = "botMid"
                    return moveResult
                } 
            } else if (array.includes("botMid") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("topMid")) {
                    moveResult = "topMid"
                    return moveResult
                }   
            } else if (array.includes("botLeft") &&
                array.includes("midMid")) {
                if (possibleMoves.includes("topRight")) {
                    moveResult = "topRight"
                    return moveResult
                }
            } else if (array.includes("botLeft") &&
                array.includes("midLeft")) {
                    if (possibleMoves.includes("topLeft")) {
                        moveResult = "topLeft"
                        return moveResult
                    }
            } else if (array.includes("botRight") &&
                array.includes("midMid")) {
                    if (possibleMoves.includes("topLeft")) {
                        moveResult = "topLeft"
                        return moveResult
                    }
            } else {
                moveResult = false
                return moveResult
            }
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
            let moveNum = Math.floor(Math.random() * ((possibleMoves.length - 1)  - 0) + 0);
            let newMove = possibleMoves[moveNum]
            return newMove
        }
    }

    useEffect(() => {
        if ((round >= 5) && 
            (!(win("X") || (win("O"))))
        ) {
            setTie(true)
        }
        if (moveRef.current && (!(win("X") || win("O") || (tie)))) {
            setMessage("Your Opponent is Thinking...")
            let loadInterval = (Math.random() * (3 - 2) + 2) * 1000;
            setTimeout(() => {
                let newMove = compMove()
                for (let prop in spaces) {
                    if (prop === newMove) {
                        setSpaces({...spaces, [prop]: "O"})
                        win("O")
                    }
                }
                moveRef.current = false
                setMessage("Your Move!")
            }, loadInterval);
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
        setTie(false)
        setMessage("Your Move!")
        setMessageButton(null)
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
        let clickHere = document.getElementsByClassName("message-window")[0]
        
        let resetEvent = () => {
            reset()
            clickHere.removeEventListener('click', resetEvent);
        }
        console.log(round)
        if (round > 1) {
            let winnerX = win("X")
            let winnerO = win("O")

            if (tie) {
                setMessage("It's a tie! Click Here to Play Again.")
                setMessageButton({cursor: "pointer"})
                setRound(0)
                clickHere.addEventListener('click', resetEvent);
            }

            if (winnerX) {
                setPlayerScore(prevScore => prevScore + 1)
                setMessage("You Won! Click Here to Play Again.")
                setMessageButton({cursor: "pointer"})
                setRound(0)
                clickHere.addEventListener('click', resetEvent);
            }

            if (winnerO) {
                setCompScore(prevScore => prevScore + 1)
                setMessage("The Computer Won! Click Here to Play Again.")
                setMessageButton({cursor: "pointer"})
                setRound(0)
                clickHere.addEventListener('click', resetEvent);
            }
        }
    })

    const clickHandler = (position) => {
        if ((round === 5) && 
            (!(win("X") || (win("O"))))) {
            setTie(true)
        }
        for (let prop in spaces) {
            if (prop === position) {
                if (
                    (spaces[prop] !== "O") && 
                    (!(win("X") || (win("O"))))
                ) {
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
            <div className="message-window" style={messageButton}>{message}</div>
        </div>
    )
}

export default TicTacToe

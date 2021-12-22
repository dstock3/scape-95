import React, { useState, useEffect, useRef } from 'react'

function TicTacToe() {
    const [score, setScore] = useState({ playerCount: 0, computerCount: 0 })
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
    const moveRef = useRef(false)

    const compMove = () => {
        let newSpaceObj = spaces
        console.log(spaces)
        
        let possibleMoves = []
        
        for (let prop in newSpaceObj) {
            if ((newSpaceObj[prop] !== "X") && (newSpaceObj[prop] !== "O")) {
                possibleMoves.push(prop)
            }
        }
        console.log("possible moves " + possibleMoves)
        let moveNum = Math.floor(Math.random() * ((possibleMoves.length - 1)  - 0) + 0);
        
        let newMove = possibleMoves[moveNum]
        console.log("New move " + newMove)
        return newMove
    }

    useEffect(() => {
        if (moveRef.current) {
            let newMove = compMove()
            for (let prop in spaces) {
                if (prop === newMove) {
                    setSpaces({...spaces, [prop]: "O"})
                }
            }
            moveRef.current = false
        }
    }, [spaces])

    const clickHandler = (position) => {
        for (let prop in spaces) {
            if (prop === position) {
                setSpaces({...spaces, [prop]: "X"})
                setRound(prevRound => prevRound + 1)
                moveRef.current = true
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
                        {score.playerCount}
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
                        {score.computerCount}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe

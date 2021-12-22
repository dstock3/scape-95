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

    const compMove = () => {
        let newSpaceObj = spaces
        
        let possibleMoves = []
        
        for (let prop in newSpaceObj) {
            if ((newSpaceObj[prop] !== "x") && (newSpaceObj[prop] !== "O")) {
                possibleMoves.push(prop)
            }
        }
        console.log("possible moves " + possibleMoves)
        let moveNum = Math.floor(Math.random() * ((possibleMoves.length - 1)  - 0) + 0);
        
        let newMove = possibleMoves[moveNum]
        console.log("New move " + newMove)
        for (let prop in newSpaceObj) {
            if (prop === newMove) {
                newSpaceObj[prop] = "O"
            }
        }
        return newSpaceObj
        
    }
    const moveRef = useRef(null)

    useEffect(() => {
        if (isStarted) {
            console.log(round)
            moveRef.current = compMove()
            console.log(moveRef.current)
            
        }

        
    })

    const topLeftHandler = () => {
        setSpaces({ ...spaces, topLeft: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)

        
    }

    const topMidHandler = () => {
        setSpaces({ ...spaces, topMid: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

    const topRightHandler = () => {
        setSpaces({ ...spaces, topRight: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

    const midLeftHandler = () => {
        setSpaces({ ...spaces, midLeft: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)

    }

    const midMidHandler = () => {
        setSpaces({ ...spaces, midMid: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

    const midRightHandler = () => {
        setSpaces({ ...spaces, midRight: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

    const botLeftHandler = () => {
        setSpaces({ ...spaces, botLeft: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

    const botMidHandler = () => {
        setSpaces({ ...spaces, botMid: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

    const botRightHandler = () => {
        setSpaces({ ...spaces, botRight: "x"})
        setRound(prevRound => prevRound + 1)
        setStart(true)


    }

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
                        <div className="space blank" id="position-0" onClick={topLeftHandler}>
                            {spaces.topLeft}
                        </div>

                        <div className="space blank" id="position-1" onClick={topMidHandler}>
                            {spaces.topMid}
                        </div>

                        <div className="space blank" id="position-2" onClick={topRightHandler}>
                            {spaces.topRight}
                        </div>

                        <div className="space blank" id="position-3" onClick={midLeftHandler}>
                            {spaces.midLeft}
                        </div>

                        <div className="space blank" id="position-4" onClick={midMidHandler}>
                            {spaces.midMid}
                        </div>

                        <div className="space blank" id="position-5" onClick={midRightHandler}>
                            {spaces.midRight}
                        </div>

                        <div className="space blank" id="position-6" onClick={botLeftHandler}>
                            {spaces.botLeft}
                        </div>

                        <div className="space blank" id="position-7" onClick={botMidHandler}>
                            {spaces.botMid}
                        </div>

                        <div className="space blank" id="position-8" onClick={botRightHandler}>
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

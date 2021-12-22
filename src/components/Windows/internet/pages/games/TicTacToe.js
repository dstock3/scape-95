import React, { useState, useEffect } from 'react'

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

    const compMove = () => {
        let newSpaceObj = spaces
        let possibleMoves = []
        for (let prop in newSpaceObj) {
            if (newSpaceObj[prop] !== "x") {
                possibleMoves.push(prop)
            }
        }
        console.log(possibleMoves)
        /*
        let moveNum = Math.random() * ((possibleMoves.length - 1) - 1) + 1
        let newMove = possibleMoves[moveNum]
        console.log(newMove) */
    }

    const topLeftHandler = () => {
        setSpaces({ ...spaces, topLeft: "x"})
        compMove()
    }

    const topMidHandler = () => {
        setSpaces({ ...spaces, topMid: "x"})
        compMove()
    }

    const topRightHandler = () => {
        setSpaces({ ...spaces, topRight: "x"})
        compMove()
    }

    const midLeftHandler = () => {
        setSpaces({ ...spaces, midLeft: "x"})
        compMove()
    }

    const midMidHandler = () => {
        setSpaces({ ...spaces, midMid: "x"})
        compMove()
    }

    const midRightHandler = () => {
        setSpaces({ ...spaces, midRight: "x"})
        compMove()
    }

    const botLeftHandler = () => {
        setSpaces({ ...spaces, botLeft: "x"})
        compMove()
    }

    const botMidHandler = () => {
        setSpaces({ ...spaces, botMid: "x"})
        compMove()
    }

    const botRightHandler = () => {
        setSpaces({ ...spaces, botRight: "x"})
        compMove()
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

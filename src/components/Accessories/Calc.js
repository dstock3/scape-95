import React, {useState, useEffect} from 'react'
import '../../style/calc.css'

function Calc(props) {
    const [display, setDisplay] = useState(0)
    const [firstNum, setFirstNum] = useState(0)
    const [operator, setOperator] = useState()
    const [secondNum, setSecondNum] = useState(0)
    const [result, setResult] = useState()

    const displayNum = (num) => {
        if (!operator) {
            if (firstNum) {
                setFirstNum(prevResult => prevResult + `${num}`)
            } else {
                setFirstNum(num)
            }
        }

        if (operator) {
            if (secondNum) {
                setSecondNum(prevResult => prevResult + `${num}`)
            } else {
                setSecondNum(num)
            }
        }
    }

    useEffect(()=> {
        if (result) {
            setDisplay(result)
        } else if (secondNum) {
            setDisplay(secondNum)
        } else if (operator) {
            setDisplay(operator)
        } else if (firstNum) {
            setDisplay(firstNum)
        }
    })

    const newOp = (op) => {
        if (secondNum && !result) {
            performOp()
            setOperator(op)
            setFirstNum(result)
            setSecondNum()
            /*
            setDisplay(result)
            setResult()
            setSecondNum()
            setOperator(op)
            setDisplay(operator) */
        }
        if (result) {
            setFirstNum(result)
            setResult()
            setSecondNum()
            setDisplay(firstNum)
        }
        setOperator(op)
    }

    const back = () => {
        if (display) {
            setDisplay(prevResult => {
                let str = String(prevResult)
                let newStr = str.substring(0, str.length - 1)
                console.log(newStr)
                if (newStr === "") {
                    setDisplay(0)
                } else {
                    setDisplay(parseInt(newStr))
                }
                
                }
            )
        }
    }
    
    const performOp = () => {
        console.log(firstNum, operator, secondNum)
        if (operator === '+') {
            setResult(parseInt(firstNum) + parseInt(secondNum))
        }
        if (operator === "-") {
            setResult(parseInt(firstNum) - parseInt(secondNum))
        }
        if (operator === "*") {
            setResult(parseInt(firstNum) * parseInt(secondNum))
        }
        if (operator === '/') {
            setResult(parseInt(firstNum) / parseInt(secondNum))
        }
    }

    const sqrRoot = () => {
        let solution = Math.sqrt(display)
        setResult(solution)
    }

    const fract = () => {
        let newFract = 1 / display
        setResult(newFract)
    }

    const clear = () => {
        setDisplay(0)
        setFirstNum(0)
        setOperator(null)
        setSecondNum(0)
        setResult(null)
    }

    return (
        <div className="calc">
            <div className="display">
                <div className="num">
                    {display}
                </div>
            </div>
            <div className="spec-buttons-row">
                <div className="dec-square"></div>
                <div className="spec-button-container">
                    <button onClick={back}>Back</button>
                    <button>CE</button>
                    <button onClick={clear}>C</button>
                </div>
            </div>
            <div className="buttons">
                <div className="spec-buttons-col" style={{color: "red"}}>
                    <button>MC</button>
                    <button>MR</button>
                    <button>MS</button>
                    <button>M+</button>
                </div>
                <div className="button-container-main
                ">
                    <div className="num-buttons-col" style={{color: "blue"}}>
                        <button onClick={()=>displayNum(7)}>7</button>
                        <button onClick={()=>displayNum(4)}>4</button>
                        <button onClick={()=>displayNum(1)}>1</button>
                        <button onClick={()=>displayNum(0)}>0</button>
                    </div>
                    <div className="num-buttons-col" style={{color: "blue"}}>
                        <button onClick={()=>displayNum(8)}>8</button>
                        <button onClick={()=>displayNum(5)}>5</button>
                        <button onClick={()=>displayNum(2)}>2</button>
                        <button>+/-</button>
                    </div>
                    <div className="num-buttons-col" style={{color: "blue"}}>
                        <button onClick={()=>displayNum(9)}>9</button>
                        <button onClick={()=>displayNum(6)}>6</button>
                        <button onClick={()=>displayNum(3)}>3</button>
                        <button onClick={()=>displayNum('.')}>.</button>
                    </div>
                    <div className="op-buttons-col-one" style={{color: "red"}}>
                        <button onClick={()=>newOp("/")}>/</button>
                        <button onClick={()=>newOp("*")}>*</button>
                        <button onClick={()=>newOp("-")}>-</button>
                        <button onClick={()=>newOp("+")}>+</button>
                    </div>
                    <div className="op-buttons-col-two">
                        <button onClick={()=>sqrRoot()}>sqrt</button>
                        <button>%</button>
                        <button onClick={()=>fract()}>1/x</button>
                        <button id="equal" onClick={()=>performOp()}>=</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Calc

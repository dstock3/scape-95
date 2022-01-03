import React, {useState} from 'react'

function Calc(props) {
    const [result, setResult] = useState(0)
    const displayNum = (num) => {
        if (result) {
            setResult(prevResult => prevResult + `${num}`)
        } else {
            setResult(num)
        }
    }

    const back = () => {
        if (result) {
            setResult(prevResult => {
                let str = String(prevResult)
                let newStr = str.substring(0, str.length - 1)
                return parseInt(newStr)
                }
            )
        }
    }
    
    return (
        <div className="calc">
            <div className="display">
                {result}
            </div>
            <div className="spec-buttons-row">
                <div className="dec-square"></div>
                <button onClick={back}>Back</button>
                <button>CE</button>
                <button>C</button>
            </div>
            <div className="buttons">
                <div className="spec-buttons-col" style={{color: "red"}}>
                    <button>MC</button>
                    <button>MR</button>
                    <button>MS</button>
                    <button>M+</button>
                </div>
                <div className="num-buttons-col-one" style={{color: "blue"}}>
                    <button onClick={()=>displayNum(7)}>7</button>
                    <button onClick={()=>displayNum(4)}>4</button>
                    <button onClick={()=>displayNum(1)}>1</button>
                    <button onClick={()=>displayNum(0)}>0</button>
                </div>
                <div className="num-buttons-col-two" style={{color: "blue"}}>
                    <button onClick={()=>displayNum(8)}>8</button>
                    <button onClick={()=>displayNum(5)}>5</button>
                    <button onClick={()=>displayNum(2)}>2</button>
                    <button>+/-</button>
                </div>
                <div className="num-buttons-col-three" style={{color: "blue"}}>
                    <button onClick={()=>displayNum(9)}>9</button>
                    <button onClick={()=>displayNum(6)}>6</button>
                    <button onClick={()=>displayNum(3)}>3</button>
                    <button>.</button>
                </div>
                <div className="op-buttons-col-one" style={{color: "red"}}>
                    <button>/</button>
                    <button>*</button>
                    <button>-</button>
                    <button>+</button>
                </div>
                <div className="op-buttons-col-two">

                </div>
            </div>
            
        </div>
    )
}

export default Calc

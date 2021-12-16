import React, { useState } from 'react'
import Homepage from './Homepage'

function Internet() {
    const [page, setPage] = useState({current: <Homepage />, pageID: "homepage"})

    const setHome = () => {
        setPage({...page, current: <Homepage />, pageID: "homepage"})
    }
    
    const refresh = () => {
        setPage({...page, current: page.current, pageID: page.pageID})
    }
    
    return (
        <div className="internet">
            <div className="net-header">
                <div className="net-button-container">
                    <button onClick={setHome}>H</button>
                    <button>B</button>
                    <button>F</button>
                    <button onClick={refresh}>R</button>

                </div>
                <div className="net-input-container">
                    <div className="net-location">Location:</div>
                    <input className="net-input"></input>

                </div>
            </div>
            <div id={page.pageID}>
                {page.current}
            </div>
        </div>
    )
}

export default Internet

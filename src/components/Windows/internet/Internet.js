import React, { useState } from 'react'
import Homepage from './Homepage'
import NotFound from './NotFound'

function Internet() {
    const [pageList, setPageList] = useState([
        {component: <Homepage />, id: "homepage", url: "http://www.scape.net"},
        {component: <NotFound />, id: "not-found", url: ""},
    ])

    const [page, setPage] = useState({current: <Homepage />, pageID: "homepage", url: "http://www.scape.net"})

    const setHome = () => {
        setPage({...page, current: <Homepage />, pageID: "homepage", url: "http://www.scape.net"})
    }
    
    const refresh = () => {
        setPage({...page, current: page.current, pageID: page.pageID})
    }
    
    const findPage = e => {
        e.preventDefault();
        let match = false
        for (let i = 0; i < pageList.length; i++) {
            if (e.target.value === pageList[i].url) {
                match = true
                setPage({...page, current: pageList.component, pageID: pageList.id, url: pageList.url})
            }
        }
        if (!match) {
            setPage({...page, current: <NotFound />, pageID: "not-found", url: ""})
        }
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
                    <input className="net-input" type="text" value={page.url} onChange={findPage} />
                </div>
            </div>
            <div id={page.pageID}>
                {page.current}
            </div>
        </div>
    )
}

export default Internet

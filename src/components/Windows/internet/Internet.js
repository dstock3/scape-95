import React, { useState, useEffect } from 'react'
import Homepage from './Homepage'
import NotFound from './NotFound'
import NewPage from './NewPage'

function Internet() {
    const [pageList, setPageList] = useState([
        {component: <Homepage />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net"},
        {component: <NewPage />, title: "New Page", id: "newpage", url: "http://www.newpage.com"},
        {component: <NotFound />, title: "404 Not Found", id: "not-found", url: ""},
    ])

    const [page, setPage] = useState({current: <Homepage />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"})

    const [pageTerm, setPageTerm] = useState(null)

    useEffect(()=> {
        let netWindow = document.getElementById("net-window")
        let winTitle = netWindow.firstChild.firstChild
        winTitle.innerHTML = page.title

    }, [page])

    useEffect(()=> {
        let enterEvent = (e) => {
            if (e.key === 'Enter') {
                findPage()
            }
        }

        document.addEventListener('keypress', enterEvent);
    })

    const setHome = () => {
        setPage({...page, current: <Homepage />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"})
    }
    
    const refresh = () => {
        setPage({...page, current: page.current, title: page.title, pageID: page.pageID, url: page.url})
    }

    const searchPageTerm = e => {
        setPageTerm(e.target.value)

    }
    
    const findPage = () => {
        let match = false
        for (let i = 0; i < pageList.length; i++) {
            if (pageTerm === pageList[i].url) {
                match = true
                setPage({...page, current: pageList[i].component, title: pageList[i].title, pageID: pageList[i].id, url: pageList[i].url})
            }
        }
        if (!match) {
            setPage({...page, current: <NotFound />, title: "404 Not Found", pageID: "not-found", url: ""})
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
                    <input className="net-input" type="text" defaultValue={page.url} onChange={searchPageTerm} />
                </div>
            </div>
            <div className="net-page" id={page.pageID}>
                {page.current}
            </div>
        </div>
    )
}

export default Internet

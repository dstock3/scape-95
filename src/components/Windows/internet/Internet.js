import React, { useState, useEffect } from 'react'
import Homepage from './Homepage'
import NotFound from './NotFound'
import NewPage from './NewPage'
import '../../../style/net.css'

function Internet() {
    const [pageList, setPageList] = useState([
        {component: <Homepage />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net"},
        {component: <NewPage />, title: "New Page", id: "newpage", url: "http://www.newpage.com"},
        {component: <NotFound />, title: "404 Not Found", id: "not-found", url: ""},
    ])

    const homePage = {current: <Homepage />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"}

    const [page, setPage] = useState(homePage)

    const [pageTerm, setPageTerm] = useState("http://www.scape.net")

    const [prevPage, setPrevPage] = useState([])
    const [nextPage, setNextPage] = useState([])

    useEffect(()=> {
        let netWindow = document.getElementById("net-window")
        let winTitle = netWindow.firstChild.firstChild
        winTitle.innerHTML = page.title

        let netInput = document.querySelector(".net-input")
        netInput.value = page.url
    }, [page])

    useEffect(()=> {
        let enterEvent = (e) => {
            if (e.key === 'Enter') {
                findPage()
            }
        }

        document.addEventListener('keypress', enterEvent);
    })

    useEffect(()=> {
        let checkValue = pageTerm
        let link = `http://www.`
        if (!checkValue.includes(link)) {
            setPageTerm(`http://www.${pageTerm}`)
        }
    }, [pageTerm])

    const setHome = () => {
        setPrevPage([...prevPage, page])
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
                setPrevPage([...prevPage, page])
                setPage({...page, current: pageList[i].component, title: pageList[i].title, pageID: pageList[i].id, url: pageList[i].url})
            }
        }
        if (!match) {
            setPrevPage([...prevPage, page])
            setPage({...page, current: <NotFound />, title: "404 Not Found", pageID: "not-found", url: pageTerm}) 
        }
    }

    const goBack = () => {
        if (prevPage.length > 0) {
            setNextPage([...nextPage, page])
            setPage(prevPage[prevPage.length  - 1])
            /*
            setPrevPage((prevPage) => {
                prevPage.filter((_, i) => i !== prevPage.length - 1)
            })
            */
        }
    }

    const goForward = () => {
        if (nextPage.length > 0) {
            setPrevPage([...prevPage, page])
            setPage(nextPage[nextPage.length  - 1])
        }
    }
    
    return (
        <div className="internet">
            <div className="net-header">
                <div className="net-button-container">
                    <button onClick={setHome}>H</button>
                    <button onClick={goBack}>B</button>
                    <button onClick={goForward}>F</button>
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

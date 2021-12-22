import React, { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import NewPage from './pages/NewPage'
import NewPage2 from './pages/NewPage2'
import '../../../style/net.css'
import Loading from './pages/Loading'
import NetButtons from './NetButtons'
import WebGames from './pages/WebGames'

function Internet() {
    useEffect(()=> {
        let images = Array.from(document.getElementsByClassName("net-article-image"))
        for (let i = 0; i < images.length; i++) {
            if ((i === 0) || (i % 2 === 0)) {
                images[i].style.float = "left"
            } else {
                images[i].style.float = "right"
            }
        }
    })

    const [pageList, setPageList] = useState([
        {component: <Homepage colPosition="col-left" />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net"},
        {component: <WebGames colPosition="col-right" />, title: "Web Games", id: "games", url: "http://www.webgames.com"},
        {component: <NewPage colPosition="col-right"/>, title: "New Page", id: "newpage", url: "http://www.newpage.com"},
        {component: <NewPage2 />, title: "New Page 2", id: "newpage2", url: "http://www.newpage2.com"},
        {component: <NotFound />, title: "404 Not Found", id: "not-found", url: ""},
    ])

    const homePage = {current: <Homepage colPosition="col-left"/>, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"}

    const [page, setPage] = useState(homePage)

    const [pageTerm, setPageTerm] = useState("http://www.scape.net")

    const [prevPage, setPrevPage] = useState([])
    const [nextPage, setNextPage] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        if (!loading) {
            let netWindow = document.getElementById("net-window")
            let winTitle = netWindow.firstChild.firstChild
            winTitle.innerHTML = page.title
    
            let netInput = document.querySelector(".net-input")
            netInput.value = page.url
        }
    }, [page, loading])

    useEffect(()=> {

    }, [loading])

    useEffect(()=> {
        let enterEvent = (e) => {
            if (e.key === 'Enter') {
                findPage()
            }
        }

        document.addEventListener('keypress', enterEvent);
        return () => {
            document.removeEventListener('keypress', enterEvent);
        }
    })

    const handleVisit = () => {
        findPage()
    }

    useEffect(()=> {
        let checkValue = pageTerm
        let link = `http://www.`
        if (!checkValue.includes(link)) {
            setPageTerm(`http://www.${pageTerm}`)
        }
    }, [pageTerm])

    const isLoading = () => {
        setLoading(true)
        let loadInterval = (Math.random() * (3 - 2) + 2) * 1000;
        console.log(loadInterval)
        setInterval(() => {setLoading(false)}, loadInterval);
    }

    const setHome = () => {
        isLoading()
        setPrevPage([...prevPage, page])
        setPage({...page, current: <Homepage />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net"})
    }
    
    const refresh = () => {
        isLoading()
        setPage({...page, current: page.current, title: page.title, pageID: page.pageID, url: page.url})
    }

    const searchPageTerm = e => {
        setPageTerm(e.target.value)
    }

    const findPage = () => {
        isLoading()
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

    const setBack = () => {
        setPrevPage(prevPage => prevPage.filter(item => item !== prevPage[prevPage.length  - 1]));
    }

    const goBack = () => {
        isLoading()
        if (prevPage.length > 0) {
            setNextPage([...nextPage, page])
            setPage(prevPage[prevPage.length  - 1])
            setBack()
        }
    }

    const setForward = () => {
        setNextPage(nextPage => nextPage.filter(item => item !== nextPage[nextPage.length  - 1]));
    }

    const goForward = () => {
        isLoading()
        if (nextPage.length > 0) {
            setPrevPage([...prevPage, page])
            setPage(nextPage[nextPage.length  - 1])
            setForward()
        }
    }

    if (loading) {
        return (
            <div className="internet">
                <div className="net-header">
                    <NetButtons setHome={setHome} goBack={goBack} goForward={goForward} refresh={refresh}/>
    
                    <div className="net-input-container">
                        <div className="net-location">Location:</div>
                        <input className="net-input" type="text" defaultValue={page.url} onChange={searchPageTerm} />
                    </div>
                </div>
                <div className="net-page" id={page.pageID}>
                    <Loading />
                </div>
            </div>
        )
    } else {
        return (
            <div className="internet">
                <div className="net-header">
                    <NetButtons setHome={setHome} goBack={goBack} goForward={goForward} refresh={refresh}/>
    
                    <div className="net-input-container">
                        <div className="net-location">Location:</div>
                        <input className="net-input" type="text" defaultValue={page.url} onChange={searchPageTerm} />
                        <button className="visit-page-button" onClick={handleVisit}>Enter</button>
                    </div>
                </div>
                <div className="net-page" id={page.pageID}>
                    {page.current}
                </div>
            </div>
        )
    }
}

export default Internet

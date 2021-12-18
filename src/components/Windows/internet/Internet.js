import React, { useState, useEffect } from 'react'
import Homepage from './Homepage'
import NotFound from './NotFound'
import NewPage from './NewPage'
import NewPage2 from './NewPage2'
import '../../../style/net.css'
import refreshIcon from '../../../assets/internet/refresh.svg'
import homeIcon from '../../../assets/internet/home.svg'
import backIcon from '../../../assets/internet/back.svg'
import forwardIcon from '../../../assets/internet/forward.svg'

function Internet() {
    const [pageList, setPageList] = useState([
        {component: <Homepage />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net"},
        {component: <NewPage />, title: "New Page", id: "newpage", url: "http://www.newpage.com"},
        {component: <NewPage2 />, title: "New Page 2", id: "newpage2", url: "http://www.newpage2.com"},
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
        return () => {
            document.removeEventListener('keypress', enterEvent);
        }
    })

    useEffect(()=> {
        let checkValue = pageTerm
        let link = `http://www.`
        if (!checkValue.includes(link)) {
            setPageTerm(`http://www.${pageTerm}`)
        }
    }, [pageTerm])

    const setHome = () => {
        console.log("sethome " + prevPage)
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
        console.log("findpage " + prevPage)
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
        if (nextPage.length > 0) {
            setPrevPage([...prevPage, page])
            setPage(nextPage[nextPage.length  - 1])
            setForward()
        }
    }
    
    return (
        <div className="internet">
            <div className="net-header">
                <div className="net-button-container">
                    <button onClick={setHome}>
                        <img src={homeIcon} alt="home icon"></img>
                        <div className="net-button-label">Home</div>
                    </button>
                    <button onClick={goBack}>
                        <img src={backIcon} alt="back icon"></img>
                        <div className="net-button-label">Back</div>
                    </button>
                    <button onClick={goForward}>
                        <img src={forwardIcon} alt="forward icon"></img>
                        <div className="net-button-label">Forward</div>
                    </button>
                    <button onClick={refresh}>
                        <img src={refreshIcon} alt="refresh icon"></img>
                        <div className="net-button-label">Refresh</div>
                    </button>
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

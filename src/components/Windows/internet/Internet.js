import React, { useState, useEffect, useRef } from 'react'
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import NewPage from './pages/NewPage'
import NewPage2 from './pages/NewPage2'
import '../../../style/net.css'
import Loading from './pages/Loading'
import NetButtons from './containers/NetButtons'
import WebGames from './pages/WebGames'
import TicTacToe from './pages/games/TicTacToe'
import Bookmarks from './containers/Bookmarks'
import InputContainer from './containers/InputContainer'
import GridLayout from './pages/GridLayout'
import NewPage3 from './pages/NewPage3'

function Internet() {
  useEffect(() => {
    let images = Array.from(document.getElementsByClassName("net-article-image"))
    for (let i = 0; i < images.length; i++) {
      images[i].style.float = (i === 0 || i % 2 === 0) ? "left" : "right"
    }
  }, [])

  const [pageList, setPageList] = useState([
    { component: <Homepage colPosition="col-left" />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net" },
    { component: <WebGames />, title: "Web Games", id: "games", url: "http://www.webgames.com" },
    { component: <NewPage colPosition="col-right" />, title: "New Page", id: "newpage", url: "http://www.newpage.com" },
    { component: <NewPage2 />, title: "New Page 2", id: "newpage2", url: "http://www.newpage2.com" },
    { component: <NotFound />, title: "404 Not Found", id: "not-found", url: "" },
    { component: <TicTacToe />, title: "Tic-Tac-Toe", id: "tic-tac-toe", url: "http://www.webgames.com/tictactoe" },
    { component: <GridLayout />, title: "Grid Layout", id: "grid-layout", url: "http://www.gridlayout.com" },
    { component: <NewPage3 />, title: "New Page 3", id: "newpage3", url: "http://www.newpage3.com" }
  ])

  const bookmarks = [
    { component: <Homepage colPosition="col-left" />, title: "ScapeNet", id: "homepage", url: "http://www.scape.net" },
    { component: <WebGames />, title: "Web Games", id: "games", url: "http://www.webgames.com" },
    { component: <NewPage colPosition="col-right" />, title: "New Page", id: "newpage", url: "http://www.newpage.com" },
    { component: <NewPage2 />, title: "New Page 2", id: "newpage2", url: "http://www.newpage2.com" },
    { component: <TicTacToe />, title: "Tic-Tac-Toe", id: "tic-tac-toe", url: "http://www.webgames.com/tictactoe" },
    { component: <GridLayout />, title: "Grid Layout", id: "grid-layout", url: "http://www.gridlayout.com" },
    { component: <NewPage3 />, title: "New Page 3", id: "newpage3", url: "http://www.newpage3.com" }
  ]

  const homePage = { current: <Homepage colPosition="col-left" />, title: "ScapeNet", pageID: "homepage", url: "http://www.scape.net" }
  const ticTacToe = { current: <TicTacToe />, title: "Tic-Tac-Toe", pageID: "tic-tac-toe", url: "http://www.webgames.com/tictactoe" }

  const [page, setPage] = useState(homePage)
  const [pageTerm, setPageTerm] = useState("http://www.scape.net")
  const [prevPage, setPrevPage] = useState([])
  const [nextPage, setNextPage] = useState([])
  const [loading, setLoading] = useState(false)
  const [isMaxed, setIsMaxed] = useState(false)

  const timeoutRef = useRef(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const isLoading = () => {
    setLoading(true)
    const loadInterval = (Math.random() * (3 - 2) + 2) * 1000
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(() => {
      setLoading(false)
      timeoutRef.current = null
    }, loadInterval)
  }

  useEffect(() => {
    if (!loading) {
      let netWindow = document.getElementById("net-window")
      if (netWindow && netWindow.firstChild) {
        let winTitle = netWindow.firstChild.firstChild
        if (winTitle) {
          winTitle.innerHTML = page.title
        }
      }
      let netInput = document.querySelector(".net-input")
      if (netInput) {
        netInput.value = page.url
      }
    }
  }, [page, loading])

  useEffect(() => {
    let enterEvent = (e) => {
      if (e.key === 'Enter') {
        findPage()
      }
    }
    document.addEventListener('keypress', enterEvent)
    return () => {
      document.removeEventListener('keypress', enterEvent)
    }
  }, [])

  useEffect(() => {
    let checkValue = pageTerm
    let link = `http://www.`
    if (!checkValue.includes(link)) {
      setPageTerm(`http://www.${pageTerm}`)
    }
  }, [pageTerm])

  function setTic() {
    isLoading()
    setPrevPage([...prevPage, page])
    setPage(ticTacToe)
  }

  const handleVisit = () => {
    findPage()
  }

  const refresh = () => {
    isLoading()
    setPage({ ...page, current: page.current, title: page.title, pageID: page.pageID, url: page.url })
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
        setPage({ ...page, current: pageList[i].component, title: pageList[i].title, pageID: pageList[i].id, url: pageList[i].url })
      }
    }
    if (!match) {
      setPrevPage([...prevPage, page])
      setPage({ ...page, current: <NotFound />, title: "404 Not Found", pageID: "not-found", url: pageTerm })
    }
  }

  const setBack = () => {
    setPrevPage(prevPage => prevPage.filter(item => item !== prevPage[prevPage.length - 1]))
  }

  const goBack = () => {
    isLoading()
    if (prevPage.length > 0) {
      setNextPage([...nextPage, page])
      setPage(prevPage[prevPage.length - 1])
      setBack()
    }
  }

  const setForward = () => {
    setNextPage(nextPage => nextPage.filter(item => item !== nextPage[nextPage.length - 1]))
  }

  const goForward = () => {
    isLoading()
    if (nextPage.length > 0) {
      setPrevPage([...prevPage, page])
      setPage(nextPage[nextPage.length - 1])
      setForward()
    }
  }

  useEffect(() => {
    let win = document.querySelector(".internet")
    if (win && win.parentElement && win.parentElement.parentElement) {
      if (win.parentElement.parentElement.classList.contains("max")) {
        setIsMaxed(true)
      } else {
        setIsMaxed(false)
      }
    }
  }, [isMaxed])

  if (loading) {
    return (
      <div className="internet" style={{ height: "87.5%" }}>
        <div className="net-header">
          <div className="net-options">
            <div className="file-button">File</div>
            <Bookmarks bookmarks={bookmarks} page={page} pageSetter={setPage} prevPage={prevPage} prevPageSetter={setPrevPage} loading={isLoading} />
          </div>
          <div className="net-row">
            <div className="net-line head"></div>
            <div className="net-head-container">
              <NetButtons setHome={setTic} goBack={goBack} goForward={goForward} refresh={refresh} />
              <InputContainer url={page.url} searchTerm={searchPageTerm} visit={handleVisit} />
            </div>
            <div className="net-line end"></div>
          </div>
        </div>
        <div className="net-page" id={page.pageID}>
          <Loading />
        </div>
      </div>
    )
  } else {
    return (
      <div className="internet" style={{ height: "87.5%" }}>
        <div className="net-header">
          <div className="net-options">
            <div className="file-button"><span style={{ textDecoration: "underline" }}>F</span>ile</div>
            <Bookmarks bookmarks={bookmarks} page={page} pageSetter={setPage} prevPage={prevPage} prevPageSetter={setPrevPage} loading={isLoading} />
          </div>
          <div className="net-row">
            <div className="net-line head"></div>
            <div className="net-head-container">
              <NetButtons setHome={setTic} goBack={goBack} goForward={goForward} refresh={refresh} />
              <InputContainer url={page.url} searchTerm={searchPageTerm} visit={handleVisit} />
            </div>
            <div className="net-line end"></div>
          </div>
        </div>
        <div className="net-page" id={page.pageID}>
          {page.current}
        </div>
      </div>
    )
  }
}

export default React.memo(Internet)

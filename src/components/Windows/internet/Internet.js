import React, { useState, useCallback, useRef, useEffect, memo, useMemo } from 'react';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import NewPage from './pages/NewPage';
import NewPage2 from './pages/NewPage2';
import WebGames from './pages/WebGames';
import TicTacToe from './pages/games/TicTacToe';
import GridLayout from './pages/GridLayout';
import NewPage3 from './pages/NewPage3';
import Loading from './pages/Loading';
import NetButtons from './containers/NetButtons';
import Bookmarks from './containers/Bookmarks';
import InputContainer from './containers/InputContainer';
import homepageContent from '../../../assets/internet/content/homepage.json'
import gridLayoutContent from '../../../assets/internet/content/gridLayout.json';
import webGamesContent from '../../../assets/internet/content/webGames.json';
import newPageContent from '../../../assets/internet/content/newPage.json';
import newPage2Content from '../../../assets/internet/content/newPage2.json';
import newPage3Content from '../../../assets/internet/content/newPage3.json';
import '../../../style/net.css';

function useRandomLoading() {
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const startLoading = useCallback(() => {
    setLoading(true);
    const loadInterval = (Math.random() * (3 - 2) + 2) * 1000;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
      timeoutRef.current = null;
    }, loadInterval);
  }, []);

  return [loading, startLoading];
}



function Internet({ openRandomAd }) {

  const pages = useMemo(() => [
    {
      id: homepageContent.id,
      title: homepageContent.title,
      url: homepageContent.url,
      component: <Homepage pageData={homepageContent} />,
    },
    {
      id: webGamesContent.id,
      title: webGamesContent.title,
      url: webGamesContent.url,
      component: <WebGames pageData={webGamesContent} linkOne={() => goToPage('tic-tac-toe')} />,
    },
    {
      id: newPageContent.id,
      title: newPageContent.title,
      url: newPageContent.url,
      component: <NewPage pageData={newPageContent} />,
    },
    {
      id: newPage2Content.id,
      title: newPage2Content.title,
      url: newPage2Content.url,
      component: <NewPage2 pageData={newPage2Content} />,
    },
    {
      id: 'not-found',
      title: '404 Not Found',
      url: '',
      component: <NotFound />,
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic-Tac-Toe',
      url: 'http://www.webgames.com/tictactoe',
      component: <TicTacToe />,
    },
    {
      id: gridLayoutContent.id,
      title: gridLayoutContent.title,
      url: gridLayoutContent.url,
      component: <GridLayout />,
    },
    {
      id: newPage3Content.id,
      title: newPage3Content.title,
      url: newPage3Content.url,
      component: <NewPage3 pageData={newPage3Content} />,
    },
  ], []);

  const bookmarkIds = useMemo(() => [
    'homepage',
    'games',
    'newpage',
    'newpage2',
    'tic-tac-toe',
    'grid-layout',
    'newpage3',
  ], []);

  const getPageByUrl = (url) => pages.find((p) => p.url === url);
  const getPageById = (id) => pages.find((p) => p.id === id);

  const [currentPageId, setCurrentPageId] = useState('homepage');
  const [pageTerm, setPageTerm] = useState('http://www.scape.net');
  const [backStack, setBackStack] = useState([]);
  const [forwardStack, setForwardStack] = useState([]);

  const [loading, startLoading] = useRandomLoading();

  const currentPage = useMemo(() => {
    return getPageById(currentPageId) || getPageById('not-found');
  }, [currentPageId, pages]);

  useEffect(() => {
    if (currentPage) {
      setPageTerm(currentPage.url);
    }
  }, [currentPage]);

  useEffect(() => {
    if (!loading && currentPage && openRandomAd) {
      const chance = Math.random();
      if (chance < 0.3) {
        openRandomAd();
      }
    }
  }, [loading, currentPage, openRandomAd]);

  const goToPage = useCallback(
    (pageId) => {
      const nextPage = getPageById(pageId) || getPageById('not-found');
      startLoading();
      setBackStack((prev) => [...prev, currentPageId]);
      setForwardStack([]);
      setCurrentPageId(nextPage.id);
    },
    [currentPageId, startLoading, pages]
  );

  const findPage = () => {
    startLoading();
    setBackStack((prev) => [...prev, currentPageId]);
    setForwardStack([]);

    let typed = pageTerm.trim();
    if (!typed.startsWith('http://') && !typed.startsWith('https://')) {
      typed = `http://www.${typed}`;
    }

    const match = getPageByUrl(typed);
    if (match) {
      setCurrentPageId(match.id);
    } else {
      setCurrentPageId('not-found');
    }
  };

  const goBack = () => {
    if (backStack.length > 0) {
      startLoading();
      const prev = [...backStack];
      const lastId = prev.pop();
      setForwardStack((fwd) => [...fwd, currentPageId]);
      setBackStack(prev);
      setCurrentPageId(lastId);
    }
  };

  const goForward = () => {
    if (forwardStack.length > 0) {
      startLoading();
      const fwd = [...forwardStack];
      const nextId = fwd.pop();
      setBackStack((prev) => [...prev, currentPageId]);
      setForwardStack(fwd);
      setCurrentPageId(nextId);
    }
  };

  const refresh = () => {
    startLoading();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      findPage();
    }
  };

  const setTic = () => {
    goToPage('tic-tac-toe');
  };

  if (loading) {
    return (
      <div className="internet" style={{ height: '87.5%' }}>
        <div className="net-header">
          <div className="net-options">
            <div className="file-button">File</div>
            <Bookmarks
              bookmarks={bookmarkIds}
              pages={pages}
              currentPageId={currentPageId}
              goToPage={goToPage}
              loading={startLoading}
            />
          </div>
          <div className="net-row">
            <div className="net-line head"></div>
            <div className="net-head-container">
              <NetButtons
                setHome={setTic}
                goBack={goBack}
                goForward={goForward}
                refresh={refresh}
              />
              <InputContainer
                url={pageTerm}
                onKeyDown={handleKeyDown}
                onVisit={findPage}
                onChange={(val) => setPageTerm(val)}
              />
            </div>
            <div className="net-line end"></div>
          </div>
        </div>
        <div className="net-page" id={currentPage.id}>
          <Loading />
        </div>
      </div>
    );
  }

  return (
    <div className="internet" style={{ height: '87.5%' }}>
      <div className="net-header">
        <div className="net-options">
          <div className="file-button">
            <span style={{ textDecoration: 'underline' }}>F</span>ile
          </div>
          <Bookmarks
            bookmarks={bookmarkIds}
            pages={pages}
            currentPageId={currentPageId}
            goToPage={goToPage}
            loading={startLoading}
          />
        </div>
        <div className="net-row">
          <div className="net-line head"></div>
          <div className="net-head-container">
            <NetButtons
              setHome={setTic}
              goBack={goBack}
              goForward={goForward}
              refresh={refresh}
            />
            <InputContainer
              url={pageTerm}
              onKeyDown={handleKeyDown}
              onVisit={findPage}
              onChange={(val) => setPageTerm(val)}
            />
          </div>
          <div className="net-line end"></div>
        </div>
      </div>
      <div className="net-page" id={currentPage.id}>
        {currentPage.component}
      </div>
    </div>
  );
}

export default memo(Internet);

import React, { useState, useCallback, useRef, useEffect, memo } from 'react';
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

function Internet({ openAd }) {

  const pages = [
    {
      id: 'homepage',
      title: 'ScapeNet',
      url: 'http://www.scape.net',
      component: <Homepage colPosition="col-left" />
    },
    {
      id: 'games',
      title: 'Web Games',
      url: 'http://www.webgames.com',
      component: <WebGames />
    },
    {
      id: 'newpage',
      title: 'New Page',
      url: 'http://www.newpage.com',
      component: <NewPage colPosition="col-right" />
    },
    {
      id: 'newpage2',
      title: 'New Page 2',
      url: 'http://www.newpage2.com',
      component: <NewPage2 />
    },
    {
      id: 'not-found',
      title: '404 Not Found',
      url: '',
      component: <NotFound />
    },
    {
      id: 'tic-tac-toe',
      title: 'Tic-Tac-Toe',
      url: 'http://www.webgames.com/tictactoe',
      component: <TicTacToe />
    },
    {
      id: 'grid-layout',
      title: 'Grid Layout',
      url: 'http://www.gridlayout.com',
      component: <GridLayout />
    },
    {
      id: 'newpage3',
      title: 'New Page 3',
      url: 'http://www.newpage3.com',
      component: <NewPage3 />
    }
  ];

  const bookmarkIds = ['homepage', 'games', 'newpage', 'newpage2', 'tic-tac-toe', 'grid-layout', 'newpage3'];

  const getPageByUrl = (url) => {
    return pages.find((p) => p.url === url);
  };

  const getPageById = (id) => {
    return pages.find((p) => p.id === id);
  };

  const [currentPageId, setCurrentPageId] = useState('homepage');
  const [pageTerm, setPageTerm] = useState('http://www.scape.net'); 
  const [backStack, setBackStack] = useState([]);  
  const [forwardStack, setForwardStack] = useState([]); 

  const [loading, startLoading] = useRandomLoading();

  const currentPage = getPageById(currentPageId) || getPageById('not-found');

  useEffect(() => {
    if (currentPage) {
      setPageTerm(currentPage.url);
    }
  }, [currentPage]);

  useEffect(() => {
    const link = 'http://www.';
    if (pageTerm && !pageTerm.includes(link)) {
      setPageTerm(`http://www.${pageTerm}`);
    }
  }, [pageTerm]);

  useEffect(() => {
    if (!loading && currentPage) {
      const chance = Math.random();
      if (chance < 0.3) {
        openAd();
      }
    }
  }, [loading, currentPage]);

  const goToPage = useCallback((pageId) => {
    const nextPage = getPageById(pageId) || getPageById('not-found');
    startLoading();
    setBackStack((prev) => [...prev, currentPageId]);
    setForwardStack([]);
    setCurrentPageId(nextPage.id);
  }, [currentPageId, startLoading]);

  const findPage = () => {
    startLoading();
    const match = getPageByUrl(pageTerm);
    setBackStack((prev) => [...prev, currentPageId]);
    setForwardStack([]);
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

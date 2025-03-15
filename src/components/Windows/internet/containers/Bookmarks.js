import React, { useState, useEffect } from 'react';

function Bookmarks({
  bookmarks,       
  pages,           
  currentPageId,   
  goToPage,        
  loading          
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const offPosition = document.querySelector('.net-page');
    if (isOpen && offPosition) {
      offPosition.addEventListener('click', reveal);
    }
    return () => {
      offPosition && offPosition.removeEventListener('click', reveal);
    };
  }, [isOpen]);

  const reveal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const openBookmark = (bookmarkId) => {
    setIsOpen(false);
    loading();
    goToPage(bookmarkId);
  };

  if (isOpen) {
    return (
      <div className="bookmarks">
        <div
          className="bookmarks-button"
          onClick={reveal}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ textDecoration: 'underline' }}>B</span>ookmarks
        </div>
        <ul className="bookmarks-list">
          {bookmarks.map((bookmarkId) => {
            const pageItem = pages.find((p) => p.id === bookmarkId);
            if (!pageItem) return null;

            return (
              <li className="bookmark-list-item" key={bookmarkId}>
                <div onClick={() => openBookmark(bookmarkId)}>
                  {pageItem.title}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="bookmarks">
        <div
          className="bookmarks-button"
          onClick={reveal}
          style={{ cursor: 'pointer' }}
        >
          <span style={{ textDecoration: 'underline' }}>B</span>ookmarks
        </div>
      </div>
    );
  }
}

export default Bookmarks;

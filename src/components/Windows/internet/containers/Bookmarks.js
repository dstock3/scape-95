import React, { useState, useEffect } from 'react';

function Bookmarks({
  bookmarks,       // An array of page IDs
  pages,           // The master array of page objects
  currentPageId,   // The currently displayed page ID
  goToPage,        // Function that updates the page by ID
  loading          // The "startLoading" function from your custom hook
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
    // Trigger random loading spinner
    loading();
    // Use the goToPage callback to switch the current page
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

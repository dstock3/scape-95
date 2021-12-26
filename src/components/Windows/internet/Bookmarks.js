import React, {useState} from 'react'

function Bookmarks(props) {
    const [isOpen, setIsOpen] = useState(false)

    const reveal = () => {
        setIsOpen(prevState => !prevState)
    }

    const openBookmark = (pageItem) => {
        setIsOpen(false)
        props.loading()
        console.log(pageItem)
        props.pageSetter({...props.page, current: pageItem.component, title: pageItem.title, pageID: pageItem.id, url: pageItem.url})
    }

    if (isOpen) {
        return (
            <div className="bookmarks">
                <div className="bookmarks-button" onClick={reveal} style={{cursor: "pointer"}}>
                    Bookmarks
                </div>
                <ul className="bookmarks-list">
                    {props.bookmarks.map(pageItem => (
                        <li className="bookmark-list-item" key={pageItem.id}>
                            <div onClick={() => {
                                openBookmark(pageItem)
                            }}>{pageItem.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="bookmarks">
                <div className="bookmarks-button" onClick={reveal} style={{cursor: "pointer"}}>
                    Bookmarks
                </div>
            </div>
        )
    }
}

export default Bookmarks

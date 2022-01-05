import React, {useState, useEffect} from 'react'

function Bookmarks(props) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        let offPosition = document.querySelector(".net-page")
        if (isOpen) {
            offPosition.addEventListener("click", reveal)
        }
        return () => {
            offPosition.removeEventListener("click", reveal)
        }
    })

    const reveal = () => {
        setIsOpen(prevState => !prevState)
    }

    const openBookmark = (pageItem) => {
        setIsOpen(false)
        props.loading()
        props.prevPageSetter([...props.prevPage, props.page])
        props.pageSetter({...props.page, current: pageItem.component, title: pageItem.title, pageID: pageItem.id, url: pageItem.url})
    }

    if (isOpen) {
        return (
            <div className="bookmarks">
                <div className="bookmarks-button" onClick={reveal} style={{cursor: "pointer"}}>
                    <span style={{textDecoration: "underline"}}>B</span>ookmarks
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
                    <span style={{textDecoration: "underline"}}>B</span>ookmarks
                </div>
            </div>
        )
    }
}

export default Bookmarks

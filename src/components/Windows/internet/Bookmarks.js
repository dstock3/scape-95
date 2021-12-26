import React, {useState} from 'react'

function Bookmarks(props) {
    const [isOpen, setIsOpen] = useState(false)

    const reveal = () => {
        setIsOpen(true)
    }

    if (isOpen) {
        return (
            <div className="bookmarks">
                <div className="bookmarks-button" onClick={reveal}>
                    Bookmarks
                </div>
                <ul className="bookmarks-list">
                    {props.bookmarks.map(item => (
                        <li className="net-list-item" key={item.key}>
                            <a href={item.link}>{item.linkTitle}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return (
            <div className="bookmarks">
                <div className="bookmarks-button" onClick={reveal}>
                    Bookmarks
                </div>
            </div>
        )
    }
}

export default Bookmarks

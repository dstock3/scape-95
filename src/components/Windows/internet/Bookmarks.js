import React, {useState} from 'react'

function Bookmarks(props) {
    const [isOpen, setIsOpen] = useState(false)

    const reveal = () => {
        setIsOpen(true)
    }

    return (
        <div className="bookmarks-button" onClick={reveal}>
            Bookmarks
            <div className="bookmarks-list">
                {

                }
            </div>
        </div>
    )
}

export default Bookmarks

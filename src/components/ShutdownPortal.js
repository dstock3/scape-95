import React from 'react'
import ReactDOM from 'react-dom'
import '../style/shutdown.css'

function ShutdownPortal({window}) {
    return ReactDOM.createPortal(
        <>
            {window}
        </>,
        document.getElementById('shutdown-modal')
    )
}

export default ShutdownPortal

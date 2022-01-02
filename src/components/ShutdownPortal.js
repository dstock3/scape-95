import React from 'react'
import ReactDOM from 'react-dom'
import '../style/shutdown.css'

function ShutdownPortal(props) {
    return ReactDOM.createPortal(
        <>
            {props.window}
        </>,
        document.getElementById('shutdown-modal')
    )
}

export default ShutdownPortal

import React, { useState } from 'react'
import Homepage from './Homepage'

function Internet() {
    const [page, setPage] = useState({current: <Homepage />, pageID: "homepage"})
    return (
        <div className="internet">
            <div className="net-header">

            </div>
            <div id={page.pageID}>
                {page.current}
            </div>
        </div>
    )
}

export default Internet

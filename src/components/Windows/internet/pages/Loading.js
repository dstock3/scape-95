import React from 'react'
import "../../../../style/loading.css"

function Loading() {
    const loadStyle = {
        backgroundColor: "black",
        height: "100%",
        width: "100%"
    }
    return (
        <div className="loading-page" style={loadStyle}>
            <div className="loading-container">
                <div className="loading"></div>
            </div>  
        </div>
    )
}

export default Loading

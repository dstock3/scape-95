import React from 'react'
import refreshIcon from '../../../../assets/internet/refresh.svg'
import homeIcon from '../../../../assets/internet/home.svg'
import backIcon from '../../../../assets/internet/back.svg'
import forwardIcon from '../../../../assets/internet/forward.svg'

function NetButtons(props) {
    return (
        <div className="net-button-container">
            <button onClick={props.setHome}>
                <img src={homeIcon} alt="home icon"></img>
                <div className="net-button-label">Home</div>
            </button>
            <button onClick={props.goBack}>
                <img src={backIcon} alt="back icon"></img>
                <div className="net-button-label">Back</div>
            </button>
            <button onClick={props.goForward}>
                <img src={forwardIcon} alt="forward icon"></img>
                <div className="net-button-label">Forward</div>
            </button>
            <button onClick={props.refresh}>
                <img src={refreshIcon} alt="refresh icon"></img>
                <div className="net-button-label">Refresh</div>
            </button>
        </div>
    )
}

export default NetButtons

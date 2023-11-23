import React, { useState } from 'react';
import '../../../style/aim.css';

const AimClient = () => {




    return (
        <div className="aim-client-container">
            <div className="aim-client-header">
                <div className="aim-client-options">
                    <div className="aim-client-option my-aim-option">
                        <span style={{textDecoration: "underline"}}>M</span>y AIM
                    </div>
                    <div className="aim-client-option people-option">
                        <span style={{textDecoration: "underline"}}>P</span>eople
                    </div>
                    <div className="aim-client-option help-option">
                        <span style={{textDecoration: "underline"}}>H</span>elp
                    </div>
                </div>

                <hr className="aim-client-hr" />
                <div className="aim-client-banner">
                    <img className="aim-client-banner-img" src="https://picsum.photos/150/66" alt="aim-client-banner" />
                </div>
            </div>
            <div className="aim-client-body">


            </div>
            <div className="aim-client-footer">
            </div>
        </div>
    );
};

export default AimClient;

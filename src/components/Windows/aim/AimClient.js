import React, { useState } from 'react';
import '../../../style/aim.css';

const AimClient = () => {
    //const onlineIcon = 'path-to-online-icon.png';
    //const offlineIcon = 'path-to-offline-icon.png';

    const [buddies, setBuddies] = useState({
        BFFs: { list: ['PixieGal1999', 'CatLoverrr04'], expanded: true, online: true },
        Family: { list: ['RollTheDice9285'], expanded: true, online: false },
    });

    const toggleGroup = (group) => {
        setBuddies((prevBuddies) => ({
            ...prevBuddies,
            [group]: {
                ...prevBuddies[group],
                expanded: !prevBuddies[group].expanded,
            },
        }));
    };

    return (
        <div className="aim-client-container">
            <header className="aim-client-header">
                <span className="aim-client-title">LargeDave911's Buddy List</span>
            </header>
            <nav className="aim-client-nav">
                <ul>
                    <li>My AIM</li>
                    <li>People</li>
                    <li>Help</li>
                </ul>
            </nav>
            <div className="aim-client-body">
                {Object.keys(buddies).map((group) => (
                    <div key={group} className="aim-group">
                        <div className="aim-group-title" onClick={() => toggleGroup(group)}>
                            {group} ({buddies[group].list.length})
                        </div>
                        {buddies[group].expanded && (
                            <ul className="aim-buddy-list">
                                {buddies[group].list.map((buddy) => (
                                    <li key={buddy} className={buddies[group].online ? 'online' : 'offline'}>
                                        {/*
                                            <img src={buddies[group].online ? onlineIcon : offlineIcon} alt="status" />
                                            {buddy}
                                        */}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <footer className="aim-client-footer">
                <button onClick={() => console.log('Open AIM Settings')}>Setup</button>
            </footer>
        </div>
    );
};

export default AimClient;

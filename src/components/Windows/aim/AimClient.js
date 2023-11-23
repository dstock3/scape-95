import React, { useEffect, useState } from 'react';
import '../../../style/aim.css';

const AimClient = () => {
    const [buddies, setBuddies] = useState([
        {
            name: 'Buddy 1',
            status: 'online',
            away: false,
            idle: false,
        },
        {
            name: 'Buddy 2',
            status: 'online',
            away: true,
            idle: false,
        },
        {
            name: 'Buddy 3',
            status: 'offline',
            away: false,
            idle: false,
        }
    ]);

    const [family, setFamily] = useState([
        {
            name: 'Family 1',
            status: 'online',
            away: false,
            idle: false,
        },
        {
            name: 'Family 2',
            status: 'online',
            away: true,
            idle: false,
        },
        {
            name: 'Family 3',
            status: 'offline',
            away: false,
            idle: false,
        }
    ]);

    const [coworkers, setCoworkers] = useState([
        {
            name: 'Coworker 1',
            status: 'online',
            away: false,
            idle: false,
        },
        {
            name: 'Coworker 2',
            status: 'online',
            away: true,
            idle: false,
        },
        {
            name: 'Coworker 3',
            status: 'offline',
            away: false,
            idle: false,
        }
    ]);

    const [offline, setOffline] = useState(null);

    useEffect(() => {
        const offlineContacts = [];
        buddies.forEach((contact) => {
            if (contact.status === 'offline') {
                offlineContacts.push(contact);
            }
        });
        family.forEach((contact) => {
            if (contact.status === 'offline') {
                offlineContacts.push(contact);
            }
        });
        coworkers.forEach((contact) => {
            if (contact.status === 'offline') {
                offlineContacts.push(contact);
            }
        });
        setOffline(offlineContacts);
    }, [buddies, family, coworkers]);
    
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
                <div className="aim-client-tabs">
                    <div className="aim-client-tab online-tab selected-tab">
                        <span className="aim-client-tab-text">Online</span>
                    </div>
                    <div className="aim-client-tab list-setup-tab">
                        <span className="aim-client-tab-text">List Setup</span>
                    </div>
                </div>
                <div className="contact-list-outer-container">
                    <div className="contact-list-container">
                        <div className="aim-client-list-container buddies-list-container">
                            <div className="buddies-list-header">
                                <span className="list-header-arrow">
                                    {'>'}
                                </span>
                                <span className="buddies-list-text header-text">Buddies</span>
                            </div>
                            <ul className="buddies-list">
                                {buddies.map((contact, index) => {
                                    return (
                                        contact.status === 'online' && (
                                            <li className="contact-list-item" key={index}>
                                                <div className="contact-list-item-name-container">
                                                    <span className="contact-list-item-name">{contact.name}</span>
                                                </div>
                                            </li>
                                        )
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="aim-client-list-container family-list-container">
                            <div className="family-list-header">
                                <span className="list-header-arrow">
                                    {'>'}
                                </span>
                                <span className="header-text">Family</span>
                            </div>
                            <ul className="family-list">
                                {family.map((contact, index) => {
                                    return (
                                        contact.status === 'online' && (
                                            <li className="contact-list-item" key={index}>
                                                <div className="contact-list-item-name-container">
                                                    <span className="contact-list-item-name">{contact.name}</span>
                                                </div>
                                            </li>
                                        )
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="aim-client-list-container coworkers-list-container">
                            <div className="coworkers-list-header">
                                <span className="list-header-arrow">
                                    {'>'}
                                </span>
                                <span className="header-text">Coworkers</span>
                            </div>
                            <ul className="coworkers-list">
                                {coworkers.map((contact, index) => {
                                    return (
                                        contact.status === 'online' && (
                                            <li className="contact-list-item" key={index}>
                                                <div className="contact-list-item-name-container">
                                                    <span className="contact-list-item-name">{contact.name}</span>
                                                </div>
                                            </li>
                                        )
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="aim-client-list-container offline-list-container">
                            <div className="offline-list-header">
                                <span className="list-header-arrow">
                                    {'>'}
                                </span>
                                <span className="header-text">Offline</span>
                            </div>
                            <ul className="offline-list">
                                {offline && offline.map((contact, index) => {
                                    return (
                                        <li className="contact-list-item" key={index}>
                                            <div className="contact-list-item-name-container">
                                                <span className="contact-list-item-name">{contact.name}</span>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aim-client-footer">
            </div>
        </div>
    );
};

export default AimClient;

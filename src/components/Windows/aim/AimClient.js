import React, { useEffect, useState } from 'react';
import ContactListHead from './ContactListHead';
import ContactListItem from './ContactListItem';
import '../../../style/aim.css';

const AimClient = () => {
    const [selectedList, setSelectedList] = useState('buddies'); 

    const handleListSelection = (listType) => {
        console.log("List Selected:", listType); 
        setSelectedList(listType);
    };

    const [lists, setLists] = useState({
        buddies: {
            status: 'open'
        },
        family: {
            status: 'closed'

        },
        coworkers: {
            status: 'closed'
        }
    });

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
        },
        {
            name: 'Buddy 4',
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
        },
        {
            name: 'Coworker 4',
            status: 'offline',
            away: false,
        },
        {
            name: 'Coworker 5',
            status: 'offline',
            away: false,
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
                            <ContactListHead
                                contactList={buddies}
                                contactType="Buddies"
                                className="buddies-list"
                                selectedList={selectedList}
                                onClick={() => handleListSelection('buddies')}
                            />
                            
                            <ContactListItem className="buddies-list" contactList={buddies} />
                        </div>
                        <div className="aim-client-list-container family-list-container">
                            <ContactListHead
                                contactList={family}
                                contactType="Family"
                                className="family-list"
                                selectedList={selectedList}
                                onClick={() => handleListSelection('family')}
                            />
                            
                            <ContactListItem className="family-list" contactList={family} />    
                        </div>
                        <div className="aim-client-list-container coworkers-list-container">
                            <ContactListHead
                                contactList={coworkers}
                                contactType="Coworkers"
                                className="coworkers-list"
                                selectedList={selectedList}
                                onClick={() => handleListSelection('coworkers')}
                            />

                            <ContactListItem className="coworkers-list" contactList={coworkers} />
                        </div>
                        <div className="aim-client-list-container offline-list-container">
                            <div className="offline-list-header">
                                <span className="list-header-arrow">▼</span>
                                <span className="header-text">Offline</span>
                            </div>

                            {offline && offline.length > 0 && (
                                <ContactListItem className="offline-list" contactList={offline} />
                            )}    
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

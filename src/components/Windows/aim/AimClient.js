import React, { useEffect, useState, useRef } from 'react';
import ContactListHead from './ContactListHead';
import ContactListItem from './ContactListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../../style/aim.css';
import doorOpenSound from '../../../assets/aim/doorOpen.mp3';
import doorCloseSound from '../../../assets/aim/doorClose.mp3';

const AimClient = () => {
    const [selectedList, setSelectedList] = useState('buddies'); 
    
    const [lists, setLists] = useState({
        buddies: {
            status: 'open'
        },
        family: {
            status: 'closed'

        },
        coworkers: {
            status: 'closed'
        },
        offline: {
            status: 'open'
        }
    });

    const handleListSelection = (listType) => {
        setSelectedList(listType);
        setLists(prevLists => {
            return {
                ...prevLists,
                [listType]: {
                    ...prevLists[listType],
                    status: prevLists[listType].status === 'open' ? 'closed' : 'open'
                }
            };
        });
    };

    const [buddies, setBuddies] = useState([
        { name: 'StarGazer91', status: 'online', away: false, idle: false },
        { name: 'BlueSkyWalker', status: 'online', away: true, idle: false },
        { name: 'PixelPirate', status: 'idle', away: false, idle: true },
        { name: 'DigitalDruid', status: 'offline', away: false, idle: false },
        { name: 'NeonNinja', status: 'online', away: false, idle: false }
    ]);
    
    const [family, setFamily] = useState([
        { name: 'MamaBear2020', status: 'offline', away: false, idle: false },
        { name: 'PapaWolf', status: 'online', away: true, idle: false },
        { name: 'JuniorJaguar', status: 'online', away: false, idle: false },
        { name: 'BabyKoala', status: 'idle', away: false, idle: true }
    ]);
    
    const [coworkers, setCoworkers] = useState([
        { name: 'CodeMaster', status: 'online', away: false, idle: false },
        { name: 'BugHunter', status: 'online', away: true, idle: false },
        { name: 'DesignDiva', status: 'offline', away: false, idle: false },
        { name: 'AgileAce', status: 'offline', away: false },
        { name: 'DynamoDev', status: 'idle', away: false, idle: true }
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

    const doorOpenAudioRef = useRef(null);
    const doorCloseAudioRef = useRef(null);

    useEffect(() => {
        doorOpenAudioRef.current = new Audio(doorOpenSound);
        doorCloseAudioRef.current = new Audio(doorCloseSound);
    }, []);

    const randomlyChangeStatus = (contacts, statusToChange, newStatus, soundEffect) => {
        const eligibleContacts = contacts.filter(contact => contact.status === statusToChange);
        if (eligibleContacts.length > 0) {
            const randomIndex = Math.floor(Math.random() * eligibleContacts.length);
            return contacts.map((contact, index) => {
                if (index === randomIndex) {
                    soundEffect.current.play();
                    return { ...contact, status: newStatus };
                }
                return contact;
            });
        }
        return contacts; 
    };

    const randomlySignOn = () => {
        const randomGroup = Math.floor(Math.random() * 3); 
        if (randomGroup === 0) {
            setBuddies(b => randomlyChangeStatus(b, 'offline', 'online', doorOpenAudioRef));
        } else if (randomGroup === 1) {
            setFamily(f => randomlyChangeStatus(f, 'offline', 'online', doorOpenAudioRef));
        } else {
            setCoworkers(c => randomlyChangeStatus(c, 'offline', 'online', doorOpenAudioRef));
        }
    };
    
    const randomlySignOff = () => {
        const randomGroup = Math.floor(Math.random() * 3); 
        if (randomGroup === 0) {
            setBuddies(b => randomlyChangeStatus(b, 'online', 'offline', doorCloseAudioRef));
        } else if (randomGroup === 1) {
            setFamily(f => randomlyChangeStatus(f, 'online', 'offline', doorCloseAudioRef));
        } else {
            setCoworkers(c => randomlyChangeStatus(c, 'online', 'offline', doorCloseAudioRef));
        }
    };

    useEffect(() => {
        const signOnInterval = setInterval(randomlySignOn, 70000); 
        const signOffInterval = setInterval(randomlySignOff, 15000);
    
        return () => {
            clearInterval(signOnInterval);
            clearInterval(signOffInterval);
        };
    }, []);
    
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
                            
                            {lists.buddies.status === 'open' && (
                                <ContactListItem className="buddies-list" contactList={buddies} />
                            )}
                        </div>
                        <div className="aim-client-list-container family-list-container">
                            <ContactListHead
                                contactList={family}
                                contactType="Family"
                                className="family-list"
                                selectedList={selectedList}
                                onClick={() => handleListSelection('family')}
                            />
                            
                            {lists.family.status === 'open' && (
                                <ContactListItem className="family-list" contactList={family} />
                            )}
                        </div>
                        <div className="aim-client-list-container coworkers-list-container">
                            <ContactListHead
                                contactList={coworkers}
                                contactType="Coworkers"
                                className="coworkers-list"
                                selectedList={selectedList}
                                onClick={() => handleListSelection('coworkers')}
                            />

                            {lists.coworkers.status === 'open' && (
                                <ContactListItem className="coworkers-list" contactList={coworkers} />
                            )}                            
                        </div>
                        <div className="aim-client-list-container offline-list-container">
                            <div className="offline-list-header">
                                <span className="list-header-arrow">
                                    <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '10px' }} />
                                </span>
                                <span className="header-text">Offline</span>
                            </div>
                            {offline && offline.length > 0 && (
                                <ul className="offline-list">
                                    {offline.map((contact, index) => {
                                        return (
                                            <li className="contact-list-item" key={index}>
                                                <div className="contact-list-item-name-container">
                                                    <span className="contact-list-item-name">{contact.name}</span>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}   
                        </div>
                    </div>
                </div>
            </div>
            <div className="aim-client-footer">
                <div className="aim-footer-images">
                    <div className="aim-footer-img-container">
                        <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="IM icon" />
                        <div className="aim-footer-description">
                            <span style={{textDecoration: "underline"}}>I</span>M
                        </div>
                    </div>
                    <div className="aim-footer-img-container">
                        <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Chat Icon" />
                        <div className="aim-footer-description">
                            <span style={{textDecoration: "underline"}}>C</span>hat
                        </div>
                    </div>
                    <div className="aim-footer-img-container">
                        <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Info icon" />
                        <div className="aim-footer-description">
                            <span style={{textDecoration: "underline"}}>I</span>nfo
                        </div>
                    </div>
                    <div className="aim-footer-img-container">
                        <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Away icon" />
                        <div className="aim-footer-description">
                            <span style={{textDecoration: "underline"}}>A</span>way
                        </div>
                    </div>
                    <div className="aim-footer-img-container">
                        <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Setup icon" />
                        <div className="aim-footer-description">
                            <span style={{textDecoration: "underline"}}>S</span>etup
                        </div>
                    </div>
                </div>
                <div className="aim-client-footer-banner">
                    <img className="aim-client-footer-banner-img" src="https://picsum.photos/190/40" alt="aim-client-footer-banner" />
                </div>
            </div>
        </div>
    );
};

export default AimClient;

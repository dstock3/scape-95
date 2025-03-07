import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import ContactListHead from './ContactListHead';
import ContactListItem from './ContactListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../../style/aim.css';
import doorOpenSound from '../../../assets/aim/doorOpen.mp3';
import doorCloseSound from '../../../assets/aim/doorClose.mp3';
import AimWindow from './AimWindow';

import buddiesData from '../../../assets/aim/aim_scripts/buddies_list/buddies.json';
import familyData from '../../../assets/aim/aim_scripts/buddies_list/family.json';
import coworkersData from '../../../assets/aim/aim_scripts/buddies_list/coworkers.json';

const normalizeContacts = (contacts) =>
  contacts.map(contact => ({
    away: false,
    idle: false,
    ...contact,
  }));

const AimClient = ({ openAimWindow, setAimWindowState, closeAimLoader }) => {
  const randomStatusEnabled = false;
  const [selectedList, setSelectedList] = useState('buddies');
  const [activeConversation, setActiveConversation] = useState(null);

  const [lists, setLists] = useState({
    buddies: { status: 'open' },
    family: { status: 'closed' },
    coworkers: { status: 'closed' },
    offline: { status: 'open' },
  });

  const handleListSelection = useCallback((listType) => {
    setSelectedList(listType);
    setLists(prevLists => ({
      ...prevLists,
      [listType]: {
        ...prevLists[listType],
        status: prevLists[listType].status === 'open' ? 'closed' : 'open',
      },
    }));
  }, []);

  const [buddies, setBuddies] = useState(normalizeContacts(buddiesData));
  const [family, setFamily] = useState(normalizeContacts(familyData));
  const [coworkers, setCoworkers] = useState(normalizeContacts(coworkersData));

  const offline = useMemo(() => {
    const offlineContacts = [];
    buddies.forEach(contact => {
      if (contact.status === 'offline') offlineContacts.push(contact);
    });
    family.forEach(contact => {
      if (contact.status === 'offline') offlineContacts.push(contact);
    });
    coworkers.forEach(contact => {
      if (contact.status === 'offline') offlineContacts.push(contact);
    });
    return offlineContacts;
  }, [buddies, family, coworkers]);

  const doorOpenAudioRef = useRef(null);
  const doorCloseAudioRef = useRef(null);

  useEffect(() => {
    doorOpenAudioRef.current = new Audio(doorOpenSound);
    doorCloseAudioRef.current = new Audio(doorCloseSound);
  }, []);

  const randomlyChangeStatus = useCallback((contacts, statusToChange, newStatus, soundEffect) => {
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
  }, []);

  const randomlySignOn = useCallback(() => {
    const randomGroup = Math.floor(Math.random() * 3);
    if (randomGroup === 0) {
      setBuddies(b => randomlyChangeStatus(b, 'offline', 'online', doorOpenAudioRef));
    } else if (randomGroup === 1) {
      setFamily(f => randomlyChangeStatus(f, 'offline', 'online', doorOpenAudioRef));
    } else {
      setCoworkers(c => randomlyChangeStatus(c, 'offline', 'online', doorOpenAudioRef));
    }
  }, [randomlyChangeStatus]);

  const randomlySignOff = useCallback(() => {
    const randomGroup = Math.floor(Math.random() * 3);
    if (randomGroup === 0) {
      setBuddies(b => randomlyChangeStatus(b, 'online', 'offline', doorCloseAudioRef));
    } else if (randomGroup === 1) {
      setFamily(f => randomlyChangeStatus(f, 'online', 'offline', doorCloseAudioRef));
    } else {
      setCoworkers(c => randomlyChangeStatus(c, 'online', 'offline', doorCloseAudioRef));
    }
  }, [randomlyChangeStatus]);

  useEffect(() => {
    if (!randomStatusEnabled) return;
    const signOnInterval = setInterval(randomlySignOn, 70000);
    const signOffInterval = setInterval(randomlySignOff, 15000);

    return () => {
      clearInterval(signOnInterval);
      clearInterval(signOffInterval);
    };
  }, [randomlySignOn, randomlySignOff, randomStatusEnabled]);

  const handleOpenConversation = (contact) => {
    setAimWindowState(prev => ({ ...prev, contact }));
    openAimWindow();
  };

  const handleCloseConversation = () => {
    setActiveConversation(null);
  };

  return (
    <div className="aim-client-container">
      <div className="aim-client-header">
        <div className="aim-client-options">
          <div className="aim-client-option my-aim-option">
            <span style={{ textDecoration: "underline" }}>M</span>y AIM
          </div>
          <div className="aim-client-option people-option">
            <span style={{ textDecoration: "underline" }}>P</span>eople
          </div>
          <div className="aim-client-option help-option">
            <span style={{ textDecoration: "underline" }}>H</span>elp
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
                <ContactListItem
                  className="buddies-list"
                  contactList={buddies}
                  onDoubleClick={handleOpenConversation}
                />
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
                <ContactListItem
                  className="family-list"
                  contactList={family}
                  onDoubleClick={handleOpenConversation}
                />
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
                <ContactListItem
                  className="coworkers-list"
                  contactList={coworkers}
                  onDoubleClick={handleOpenConversation}
                />
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
                  {offline.map((contact, index) => (
                    <li
                      className="contact-list-item"
                      key={index}
                      onDoubleClick={() => handleOpenConversation(contact)}
                    >
                      <div className="contact-list-item-name-container">
                        <span className="contact-list-item-name">{contact.name}</span>
                      </div>
                    </li>
                  ))}
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
              <span style={{ textDecoration: "underline" }}>I</span>M
            </div>
          </div>
          <div className="aim-footer-img-container">
            <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Chat Icon" />
            <div className="aim-footer-description">
              <span style={{ textDecoration: "underline" }}>C</span>hat
            </div>
          </div>
          <div className="aim-footer-img-container">
            <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Info icon" />
            <div className="aim-footer-description">
              <span style={{ textDecoration: "underline" }}>I</span>nfo
            </div>
          </div>
          <div className="aim-footer-img-container">
            <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Away icon" />
            <div className="aim-footer-description">
              <span style={{ textDecoration: "underline" }}>A</span>way
            </div>
          </div>
          <div className="aim-footer-img-container">
            <img className="aim-footer-img" src="https://picsum.photos/25/25" alt="Setup icon" />
            <div className="aim-footer-description">
              <span style={{ textDecoration: "underline" }}>S</span>etup
            </div>
          </div>
        </div>
        <div className="aim-client-footer-banner">
          <img className="aim-client-footer-banner-img" src="https://picsum.photos/190/40" alt="aim-client-footer-banner" />
        </div>
      </div>
      {activeConversation && (
        <AimWindow
          conversation={activeConversation}
          onClose={handleCloseConversation}
        />
      )}
    </div>
  );
};

export default AimClient;

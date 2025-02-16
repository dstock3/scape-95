import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../../style/aim.css';
import { v4 as uuidv4 } from 'uuid';

import blueSkyWalkerResponses from '../../../assets/aim/aim_scripts/BlueSkyWalker.json';
import starGazer91Responses from '../../../assets/aim/aim_scripts/StarGazer91.json';

const characterResponses = {
  BlueSkyWalker: blueSkyWalkerResponses,
  StarGazer91: starGazer91Responses,
};

const AimWindow = () => {
  const [messages, setMessages] = useState([]);
  const quillRef = useRef(null);
  const quillInstance = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState('BlueSkyWalker');
  const [nextResponseIndex, setNextResponseIndex] = useState(0);

  const handleSendMessage = useCallback(() => {
    if (quillInstance.current) {
      const messageContent = quillInstance.current.getText().trim();
      if (messageContent !== '') {
        const timestamp = new Date().toLocaleTimeString();
        setMessages(prev => [
          ...prev,
          { id: uuidv4(), text: messageContent, sent: true, time: timestamp },
        ]);
        quillInstance.current.root.innerHTML = '';
        quillInstance.current.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [['bold', 'italic', 'underline', 'link', 'image']],
        },
      });
      quillInstance.current.focus();

      // Attach a keydown listener to quill's root
      const editor = quillInstance.current.root;
      const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage();
        }
      };
      editor.addEventListener("keydown", handleKeyDown);
      return () => {
        editor.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleSendMessage]);

  useLayoutEffect(() => {
    const messageArea = document.querySelector('.aim-message-area');
    if (messageArea) {
      messageArea.scrollTop = messageArea.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) return;
    const lastMessage = messages[messages.length - 1];
    if (lastMessage.sent) {
      const timer = setTimeout(() => {
        receiveAutomatedResponse();
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  const receiveAutomatedResponse = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const responses = characterResponses[currentCharacter] || [];
      const responseText =
        responses.length > 0
          ? responses[nextResponseIndex]
          : "I'm not sure how to respond to that.";
      const fakeMessage = {
        id: uuidv4(),
        text: responseText,
        sent: false,
        time: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, fakeMessage]);
      setNextResponseIndex(prev => (prev + 1) % responses.length);
    }, 300);
  };

  return (
    <div className="aim-window" aria-label="Chat Window">
      <ul className="aim-menu-bar">
        <li className="aim-window-file-option">
          <span style={{ textDecoration: 'underline' }}>F</span>ile
        </li>
        <li className="aim-window-file-option">
          <span style={{ textDecoration: 'underline' }}>E</span>dit
        </li>
        <li className="aim-window-file-option">
          <span style={{ textDecoration: 'underline' }}>I</span>nsert
        </li>
        <li className="aim-window-file-option">
          <span style={{ textDecoration: 'underline' }}>P</span>eople
        </li>
      </ul>

      <hr className="aim-menu-bar-divider" />

      <div className="aim-message-area">
        {messages.map(message => (
          <div
            key={message.id}
            className={`message ${message.sent ? 'sent' : 'received'}`}
            aria-label={`Message sent at ${message.time}`}
          >
            <span className="username">
              {message.sent ? 'You' : currentCharacter}:
            </span>
            <span dangerouslySetInnerHTML={{ __html: message.text }}></span>
          </div>
        ))}
      </div>

      <div ref={quillRef} style={{ height: 100 }}></div>

      <div className="typing-indicator">
        {isTyping && <span>{currentCharacter} is typing...</span>}
      </div>

      <div className="aim-window-button-container">
        <button className="aim-window-button" aria-label="Warn">
          Warn
        </button>
        <button className="aim-window-button" aria-label="Block">
          Block
        </button>
        <button
          className="aim-window-button"
          onClick={handleSendMessage}
          aria-label="Send Message"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AimWindow;

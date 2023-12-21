import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../../style/aim.css';
import { v4 as uuidv4 } from 'uuid';

const AimWindow = () => {
    const [messages, setMessages] = useState([]);
    const quillRef = useRef(null);

    useEffect(() => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [['bold', 'italic', 'underline', 'link', 'image']]
                },
            });

            quill.focus();
        }
    }, []);

    useLayoutEffect(() => {
        const messageArea = document.querySelector('.aim-message-area');
        messageArea.scrollTop = messageArea.scrollHeight;
    }, [messages]);

    const handleSendMessage = () => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current);
            const messageContent = quill.getText().trim();
            if (messageContent !== '') {
                const timestamp = new Date().toLocaleTimeString();
                setMessages(prevMessages => [...prevMessages, { id: uuidv4(), text: messageContent, sent: true, time: timestamp }]);
                quill.root.innerHTML = '';
                quill.focus(); 
            }
        }
    };

    const receiveMessage = () => {
        const timestamp = new Date().toLocaleTimeString();
        const fakeMessage = {
            id: uuidv4(),
            text: "This is a simulated response.",
            sent: false,
            time: timestamp
        };
        setMessages(prevMessages => [...prevMessages, fakeMessage]);
    };

    return (
        <div className="aim-window" aria-label="Chat Window">
            <ul className="aim-menu-bar">
                <li className="aim-window-file-option">
                    <span style={{textDecoration: "underline"}}>F</span>ile
                </li>
                <li className="aim-window-file-option">
                    <span style={{textDecoration: "underline"}}>E</span>dit
                </li>
                <li className="aim-window-file-option">
                    <span style={{textDecoration: "underline"}}>I</span>nsert
                </li>
                <li className="aim-window-file-option">
                    <span style={{textDecoration: "underline"}}>P</span>eople
                </li>
            </ul>

            <hr className="aim-menu-bar-divider" />

            <div className="aim-message-area">
                {messages.map(message => (
                    <div key={message.id} className={`message ${message.sent ? 'sent' : 'received'}`} aria-label={`Message sent at ${message.time}`}>
                        <span className="username">{message.sent ? 'You' : 'Friend'}:</span>
                        <span dangerouslySetInnerHTML={{ __html: message.text }}></span>
                    </div>
                ))}
            </div>

            <div ref={quillRef} style={{ height: 100 }}></div>

            <div className="aim-window-button-container">
                <button className="aim-window-button" aria-label="Warn">
                    Warn
                </button>
                <button className="aim-window-button" aria-label="Warn">
                    Block
                </button>
                <button className="aim-window-button" onClick={handleSendMessage} aria-label="Send Message">
                    Send
                </button>
                {/* for testing purposes only */}
                <button className="aim-window-button" onClick={receiveMessage} aria-label="Receive Message">
                    Receive
                </button>
            </div>
        </div>
    );
};

export default AimWindow;
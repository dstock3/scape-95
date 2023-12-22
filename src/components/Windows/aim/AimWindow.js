import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../../style/aim.css';
import { v4 as uuidv4 } from 'uuid';

const autoResponses = [
    "Hey there! How can I help you today?",
    "Interesting point! I never thought about it that way.",
    "That's really cool. Tell me more!",
    "Oh wow, I didn't know that. Thanks for sharing!",
    "Haha, that's pretty funny! 😂",
    "Hmm, I'm not sure about that. Do you have more info?",
    "Can you elaborate on that a bit more?",
    "I'm here if you need to talk.",
    "That sounds exciting! Have any pictures or links to share?",
    "I'm a bit confused. Can you explain that again?",
    "Let's change the topic. Got any plans for the weekend?",
    "I totally agree with you on that.",
    "Sorry, I was away for a moment. What did I miss?",
    "I think you're right. It's important to consider all perspectives.",
    "That's a tough question. Let me think about it for a second."
];

const AimWindow = () => {
    const [messages, setMessages] = useState([]);
    const quillRef = useRef(null);
    const [isTyping, setIsTyping] = useState(false);
    const [nextResponseIndex, setNextResponseIndex] = useState(0);

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

        setTimeout(() => {
            receiveAutomatedResponse();
        }, 500); 
    };

    const receiveAutomatedResponse = () => {
        setIsTyping(true);
    
        setTimeout(() => {
            setIsTyping(false); 
            const fakeMessage = {
                id: uuidv4(),
                text: autoResponses[nextResponseIndex],
                sent: false,
                time: new Date().toLocaleTimeString()
            };
    
            setMessages(prevMessages => [...prevMessages, fakeMessage]);
            setNextResponseIndex((prevIndex) => (prevIndex + 1) % autoResponses.length); 
        }, 500); 
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
                {isTyping && <div className="typing-indicator">Friend is typing...</div>}
                <button className="aim-window-button" aria-label="Warn">
                    Warn
                </button>
                <button className="aim-window-button" aria-label="Warn">
                    Block
                </button>
                <button className="aim-window-button" onClick={handleSendMessage} aria-label="Send Message">
                    Send
                </button>
                {/* for testing purposes only 
                    <button className="aim-window-button" onClick={receiveMessage} aria-label="Receive Message">
                        Receive
                    </button>
                */}
            </div>
        </div>
    );
};

export default AimWindow;
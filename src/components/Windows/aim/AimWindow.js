import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import '../../../style/aim.css';

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

            quill.on('text-change', () => {
                setMessages([...messages, { text: quill.root.innerHTML, sent: true }]);
            });
        }
    }, [quillRef, messages]);

    const handleSendMessage = () => {
        if (quillRef.current) {
            const quill = new Quill(quillRef.current);
            const messageContent = quill.root.innerHTML;
            if (messageContent.trim() !== '<p><br></p>') { 
                const timestamp = new Date().toLocaleTimeString();
                setMessages([...messages, { text: messageContent, sent: true, time: timestamp }]);
                quill.root.innerHTML = ''; 
            }
        }
    };

    return (
        <div className="aim-window">
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
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sent ? 'sent' : 'received'}`}>
                        <span>[{message.time}] </span>
                        <span className="username">{message.sent ? 'You' : 'Friend'}: </span>
                        <span>{message.text}</span>
                    </div>
                ))}
            </div>
            <div className="aim-toolbar"></div>
            <div className="aim-message-input-area">
                <div ref={quillRef} style={{ height: 100 }}></div> 
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default AimWindow;


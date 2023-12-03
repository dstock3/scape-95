import React, { useState } from 'react';
import '../../../style/aim.css';

const AimWindow = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <div className="aim-window">
            <ul className="aim-window-file-options">
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
            <div className="aim-chat-area">
                {messages.map((message, index) => (
                    <div key={index} className="aim-message">
                        {message}
                    </div>
                ))}
            </div>

            <div className="aim-message-input-area">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    )
}

export default AimWindow;
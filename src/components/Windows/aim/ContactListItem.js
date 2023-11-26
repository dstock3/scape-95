import React from 'react';

const ContactListItem = ({ className, contactList }) => {
    return (
        <ul className={className}>
            {contactList.map((contact, index) => {
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
    )
}

export default React.memo(ContactListItem);
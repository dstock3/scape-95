import React from 'react';

const ContactListItem = ({ className, contactList, onDoubleClick }) => {
  return (
    <ul className={className}>
      {contactList.map((contact, index) => (
        contact.status === 'online' && (
          <li 
            className="contact-list-item" 
            key={index}
            onDoubleClick={() => onDoubleClick && onDoubleClick(contact)}
          >
            <div className="contact-list-item-name-container">
              <span className="contact-list-item-name">{contact.name}</span>
            </div>
          </li>
        )
      ))}
    </ul>
  );
};

export default React.memo(ContactListItem);

const ContactListHead = ({ contactList, contactType, className }) => {
    return (
        <div className={className + "-header"}>
            <span className="list-header-arrow">▼</span>
            <span className={className + "-text header-text"}>{contactType} {" "} 
            ({contactList.filter((contact) => contact.status === 'online').length}/{contactList.length})
            </span>
        </div>
    )
}

export default ContactListHead;

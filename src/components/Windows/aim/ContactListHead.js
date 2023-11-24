const ContactListHead = ({ contactList, contactType, className, selectedList, onClick }) => {
    console.log("Class Name:", className); 

    const baseClassName = className.split('-')[0];

    const headerClass = `${className}-header`;
    const textClass = `${className}-text header-text ${selectedList === baseClassName ? 'selected-list-text' : ''}`;

    return (
        <div className={headerClass} onClick={onClick}>
            <span className="list-header-arrow">▼</span>
            <span className={textClass}>{contactType} {" "}
            ({contactList.filter((contact) => contact.status === 'online').length}/{contactList.length})
            </span>
        </div>
    )
}


export default ContactListHead;
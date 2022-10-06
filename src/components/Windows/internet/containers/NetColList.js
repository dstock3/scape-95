import React from 'react'

function NetColList({image, list}) {
    if (image) {
        return (
            <>
                <img className="profile-image" src={image} alt="placeholder"></img>
                <ul className="net-list">
                    {list.map(item => (
                        <li className="net-list-item" key={item.key}>
                            <a href={item.link}>{item.linkTitle}</a>
                        </li>
                    ))}
                </ul>
            </>
        )
    } else {
        return (
            <ul className="net-list">
                {list.map(item => (
                    <li className="net-list-item" key={item.key}>
                        <a href={item.link}>{item.linkTitle}</a>
                    </li>
                ))}
            </ul>
        )
    }
}

export default NetColList

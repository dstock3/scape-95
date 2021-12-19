import React from 'react'

function NetColList(props) {
    return (
        <ul className="net-list">
            {props.list.map(item => (
                <li className="net-list-item" key={item.key}>
                    <a href={item.link}>{item.linkTitle}</a>
                </li>
            ))}
        </ul>
    )
}

export default NetColList

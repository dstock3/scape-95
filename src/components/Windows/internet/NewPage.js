import React, { useState } from 'react'
import NetColList from './NetColList'
import '../../../style/newpage.css'

function NewPage(props) {
    const [netList, setNetList] = useState([
        {key: 1, link: "#", linkTitle: "Lorem Ipsum"},
        {key: 2, link: "#", linkTitle: "Lorem Ipsum"},
        {key: 3, link: "#", linkTitle: "Lorem Ipsum"},
        {key: 4, link: "#", linkTitle: "Lorem Ipsum"}
    ])

    return (
        <>
            <h1>New Page</h1>
            <div className="net-container">
                <div className={`net-col ${props.colPosition}`}>
                    <NetColList list={netList} />
                </div>
                <div className="net-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </>
    )
}

export default NewPage

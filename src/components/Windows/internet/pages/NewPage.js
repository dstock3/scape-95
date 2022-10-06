import React, { useState } from 'react'
import NetColList from '../containers/NetColList'

function NewPage({colPosition}) {
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
                <div className={`net-col ${colPosition}`}>
                    <NetColList list={netList} image={"https://picsum.photos/seed/picsum/200/200"}/>
                </div>
                <div className="net-body">
                    <section>
                        <article className="net-article">
                            <h3 className="net-article-head">Lorem Ipsum</h3>
                                <div className="net-lede">
                                    <img className="net-article-image" src="https://picsum.photos/300/300" alt="placeholder"></img>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                
                                <a className="article-link" href="#">Read More...</a>
                        </article>
                        <article className="net-article">
                            <h3 className="net-article-head">Lorem Ipsum</h3>
                            <div className="net-lede">
                                <img className="net-article-image" src="https://picsum.photos/seed/picsum/300/300" alt="placeholder"></img>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            
                            <a className="article-link" href="#">Read More...</a>
                        </article>
                    </section>

                </div>
            </div>
        </>
    )
}

export default NewPage

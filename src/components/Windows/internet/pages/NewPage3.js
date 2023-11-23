import React from 'react';
import '../../../../style/net-page.css'

const NewPage3 = () => {
  return (
    <div className="new-page3-container">
        <div className="new-page3">
        <header className="page3-header">
            <h1 className="page3-title">Welcome to Our Page</h1>
            <img src="path-to-your-logo.png" alt="Logo" className="page3-logo"/>
        </header>

        <nav className="page3-navigation">
            <ul className="page3-nav-list">
            <li><a href="#news">News</a></li>
            <li><a href="#directory">Directory</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>

        <main className="page3-main-content">
            <section className="page3-news">
            <h2>Latest Updates</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <section className="page3-announcements">
            <h2>What's New</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <section className="page3-resources">
            <h2>Useful Resources</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>

            <section className="page3-projects">
            <h2 className="page3-project-head">Our Projects</h2>
            <ul className="page3-project-links">
                <li><a className="page3-project-link" href="#project1">Project 1</a></li>
                <li><a className="page3-project-link" href="#project2">Project 2</a></li>
                <li><a className="page3-project-link" href="#project3">Project 3</a></li>
                <li><a className="page3-project-link" href="#project4">Project 4</a></li>
            </ul>
            </section>
        </main>

        <footer className="page3-footer">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
        </div>
    </div>
  );
}

export default NewPage3;
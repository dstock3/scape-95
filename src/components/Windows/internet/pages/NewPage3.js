import React from 'react';
import '../../../../style/net-page.css';

const NewPage3 = ({ pageData }) => {
  const { title, logo, navItems, sections, footer } = pageData.content;

  return (
    <div className="new-page3-container">
      <div className="new-page3">
        <header className="page3-header">
          <h1 className="page3-title">{title}</h1>
          <img src={logo} alt="Logo" className="page3-logo"/>
        </header>

        <nav className="page3-navigation">
          <ul className="page3-nav-list">
            {navItems.map((item, idx) => (
              <li key={idx}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
            ))}
          </ul>
        </nav>

        <main className="page3-main-content">
          {sections.map((section) => (
            <section key={section.id} className={`page3-${section.id}`}>
              <h2>{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.links && (
                <ul className="page3-project-links">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <a className="page3-project-link" href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </main>

        <footer className="page3-footer">
          <p>&copy; {new Date().getFullYear()} {footer}</p>
        </footer>
      </div>
    </div>
  );
};

export default NewPage3;

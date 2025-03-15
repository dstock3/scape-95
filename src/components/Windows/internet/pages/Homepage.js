import React, { useState } from 'react';
import '../../../../style/net-page.css';
import NetColList from '../containers/NetColList';

function Homepage({ pageData }) {
    const [netList, setNetList] = useState(pageData.content.sidebarLinks);

    return (
        <>
            <h1>{pageData.content.header}</h1>
            <h2>{pageData.content.subheader}</h2>
            <div className="net-container">
                <div className={`net-col ${pageData.position}`}>
                    <NetColList
                        list={netList}
                        image={pageData.content.sidebarImage}
                    />
                </div>
                <div className="net-body">
                    <section>
                        {pageData.content.articles.map(article => (
                            <article key={article.id} className="net-article">
                                <h3 className="net-article-head">{article.headline}</h3>
                                <div className="net-lede">
                                    <img
                                        className="net-article-image"
                                        src={article.image}
                                        alt={article.headline}
                                    />
                                    <p>{article.lede}</p>
                                </div>
                                {article.body.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                                <a className="article-link" href={article.link}>Read More...</a>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
        </>
    );
}

export default Homepage;

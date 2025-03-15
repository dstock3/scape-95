import React from 'react';
import NetColList from '../containers/NetColList';
import '../../../../style/net-page.css';

function NewPage({ pageData }) {
  return (
    <>
      <h1>{pageData.content.header}</h1>
      <div className="net-container">
        <div className={`net-col ${pageData.position}`}>
          <NetColList 
            list={pageData.content.colList} 
            image={"https://picsum.photos/seed/picsum/200/200"}
          />
        </div>
        <div className="net-body">
          <section>
            {pageData.content.articles.map((article) => (
              <article className="net-article" key={article.id}>
                <h3 className="net-article-head">{article.headline}</h3>
                <div className="net-lede">
                  <img className="net-article-image" src={article.image} alt={article.headline}/>
                  <p>{article.lede}</p>
                </div>
                <a className="article-link" href={article.link}>Read More...</a>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default NewPage;
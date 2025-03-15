import React from 'react';
import '../../../../style/net-page.css';

function WebGames({ pageData, linkOne }) {
  return (
    <>
      <h1>{pageData.content.header}</h1>
      <div className="net-container">
        <div className="net-body">
          <section>
            {pageData.content.games.map(game => (
              <article className="net-article" key={game.id} style={{ border: "2px dotted rgb(133, 2, 2)" }}>
                <h3 className="net-article-head">{game.title}</h3>
                <div className="net-lede">
                  <img 
                    className="net-article-image" 
                    style={{ cursor: "pointer" }} 
                    src={game.image} 
                    onClick={game.id === "tic-tac-toe" ? linkOne : undefined} 
                    alt={game.title} />
                  <p>{game.description}</p>
                  <div
                    onClick={game.id === "tic-tac-toe" ? linkOne : undefined}
                    style={{ textDecoration: "underline", cursor: "pointer", textAlign: "right", margin: "0 6%" }}
                  >
                    {game.linkText}
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default WebGames;

import React from 'react';
import './News.css';

const Tile = ({article}) =>
  <div className="flex-item">
    <img
      className="article-image"
      src={`${process.env.PUBLIC_URL}/images/${article.image.source}`}
      alt={article.image.text}
    />
    <a className="article-heading" href={article.link}><h4>{article.heading}</h4></a>
    <div className="article-description">{article.description}</div>
    <a className="article-link" href={article.link}>Read More</a>
  </div>;

export const News = ({articles}) =>
  <div className="home-news">
    <h2>News & Articles</h2>
    <div className="flex-container">
      {articles.map(article => <Tile article={article} />)}
    </div>
  </div>;
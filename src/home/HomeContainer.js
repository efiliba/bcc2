import React from 'react';
import './HomeContainer.css';
import { Carousel } from './Carousel';
import { Tiles } from './Tiles';
import { Paralax } from './Paralax';
import { News } from './News';

import slides from '../slides.json';
import tiles from '../tiles.json';
import news_articles from '../news_articles.json';

export const HomeContainer = props => 
  <div className="home-container">
    <Carousel slides={slides} />
    <Tiles tiles={tiles} />
    <Paralax />
    <News articles={news_articles} />
  </div>;
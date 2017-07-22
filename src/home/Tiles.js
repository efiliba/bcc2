import React from 'react';
import './Tiles.css';

const Tile = ({tile}) =>
  <a className="flex-item" href={tile.header.link}>
    <div className="heading">
      <i className={`fa fa-${tile.header.icon}`}></i> 
      {tile.header.text}
    </div>
    <div className="description">{tile.description}</div>
  </a>;

export const Tiles = ({tiles}) =>
  <div className="home-tiles flex-container">
    {tiles.map(tile => <Tile tile={tile} />)}
  </div>;
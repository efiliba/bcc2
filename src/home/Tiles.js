import React from 'react';
import './Tiles.css';
import { Link } from 'react-router-dom';

const Tile = ({tile}) =>
  <Link className="flex-item" to={tile.header.link}>
    <div className="heading">
      <i className={`fa fa-${tile.header.icon}`}></i> 
      {tile.header.text}
    </div>
    <div className="description">{tile.description}</div>
  </Link>;

export const Tiles = ({tiles}) =>
  <div className="home-tiles flex-container">
    {tiles.map((tile, index) => <Tile tile={tile} key={`tile${index}`} />)}
  </div>;
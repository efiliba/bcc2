import React from 'react';
import './ServicesWeProvideTiles.css';
import { Link } from 'react-router-dom';

const Tile = ({tile}) =>
  <Link className="flex-item" to={tile.link}>
    <div className="service-tile__heading">
      {tile.heading}
    </div>
    <div className="service-tile__image">
      <img src={`../images/${tile.image}`} alt={tile.heading} />
    </div>
    <div className="service-tile__description">{tile.description}</div>
  </Link>;

export const ServicesWeProvideTiles = ({tiles}) =>
  <div className="service-tiles flex-container">
    {tiles.map((tile, index) => <Tile tile={tile} key={`servicesTile${index}`} />)}
  </div>;
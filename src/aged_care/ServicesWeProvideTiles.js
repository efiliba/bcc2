import React from 'react';
import './ServicesWeProvideTiles.css';
import { Link } from 'react-router-dom';

const Tile = ({tile}) =>
  <div className="flex-item">
    <div className="flex-item__container">
      <div className="service-tile__heading">
        {tile.heading}
      </div>
      <div className="flex-item__container--content">
        <Link className="service-tile__content" to={tile.link}>
          <div className="service-tile__image">
            <img src={`../images/${tile.image}`} alt={tile.heading} />
          </div>
          <div className="service-tile__description">
            {tile.description}
          </div>
          <div className="service-tile__more">MORE</div>
        </Link>
      </div>
    </div>
  </div>;

export const ServicesWeProvideTiles = ({tiles}) =>
  <div className="service-tiles flex-container">
    {tiles.map((tile, index) => <Tile tile={tile} key={`servicesTile${index}`} />)}
  </div>;
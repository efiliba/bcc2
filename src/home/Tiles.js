import React from 'react';
import './Tiles.css';

const Tile = ({tile}) =>
  <div className="tile">
    <h4 className="title">
      <i className={`fa fa-${tile.header.icon}`}></i> 
      <a href={tile.header.link}>{tile.header.text}</a>
    </h4>
    <div className="description">{tile.description}</div>
  </div>;

export const Tiles = ({tiles}) =>
  <div className="flex-container">
    {
      tiles.map(tile => 
        <div className="flex-item">
          <Tile tile={tile} />
        </div>
      )
    }
  </div>;
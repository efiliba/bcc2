import React from 'react';
import { Link } from 'react-router-dom';
import navigation_links from '../navigation_links.json';

export const NavBar = () => 
  <nav>
    <ul>
      {
        navigation_links.map((link, index) => 
          <li key={`link${index}`}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        )
      }
    </ul>
  </nav>
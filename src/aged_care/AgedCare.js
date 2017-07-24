import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './AgedCare.css';
import { ServicesWeProvideTiles } from './ServicesWeProvideTiles';

import services_we_provide_tiles from '../services_we_provide_tiles.json';
import stay_at_home from '../images/stay_at_home.png';

const StayAtHome = () =>
  <div className="stay-at-home-container">
    <Row>
      <Col xs={12} sm={6}>
        <h4>
          Stay in your own home and maintain Your Independence.
        </h4>
        <div className="stay-at-home-content">
          Best Choice care assist our clients to stay at home
          For as long as they want by providing assistance to
          Keep their daily routines. Best Choice care assist our
          Clients to stay at home for as long as they want by
          Providing assistance to keep their daily routines.
        </div>
      </Col>
      <Col xs={12} sm={6}>
        <img src={stay_at_home} alt="Stay At Home" />
      </Col>
    </Row>
  </div>;

const ServicesWeProvide = () =>
  <div className="services-we-provide-container">
    <h2>Services We Provide</h2>
    <ServicesWeProvideTiles tiles={services_we_provide_tiles} />
  </div>;

export const AgedCare = props =>
  <div className="aged-care-container">
    <StayAtHome />
    <ServicesWeProvide />
  </div>;


    // <img src={help_at_home} alt="Help At Home" />
    // <img src={personal_care} alt="Personal Care" />
    // <img src={social_support} alt="Social Support" />


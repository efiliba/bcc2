import React from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { NavBar } from './NavBar';

export const Footer = props => 
  <Row className="app-footer-container">
    <Col xs={4}>
      <img src={`${process.env.PUBLIC_URL}/images/logo_on_dark.png`} alt="Best Choice Care logo" />
      <div className="copyright">Copyright © 2016 Best Choice Care</div>
    </Col>
    <Col xs={4}>
      <div className="footer-nav-bar">
        Menu
        <NavBar />
      </div>
    </Col>
    <Col xs={4} className="contact-us">
      Contact Us
      <p>
        Suite 1a Level 2<br />
        802 Pacific Highway<br />
        Gordon NSW 2072
      </p>
      <p>1300 407 705</p>
      <p>admin@bestchoicecare.com.au</p>
    </Col>
  </Row>;
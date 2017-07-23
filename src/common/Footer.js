import React from 'react';
import './Footer.css';
import { Row, Col } from 'react-bootstrap';
import { NavBar } from './NavBar';

import logo_on_dark from '../images/logo_on_dark.png';

export const Footer = props => 
  <div className="app-footer-container">
    <Row>
      <Col xs={12}>
        <img src={logo_on_dark} alt="Best Choice Care logo" />
        <div className="footer-text-container">
          <div className="footer-nav-bar">
            <div className="footer-nav-bar__header">
              Menu
            </div>
            <NavBar />
          </div>
          <div className="contact-us">
            <div className="contact-us__header">
              Contact Us
            </div>
            <div className="contact-us__address">
              <p>
                Suite 1a Level 2<br />
                802 Pacific Highway<br />
                Gordon NSW 2072
              </p>
              <p>1300 407 705</p>
              <p>admin@bestchoicecare.com.au</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <div className="copyright">Copyright © 2016 Best Choice Care</div>
      </Col>      
    </Row>
  </div>;
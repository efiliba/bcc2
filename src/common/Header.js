import React from 'react';
import './Header.css';
import { Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';

const IconColumnLink = props =>
  <Col xs={12} sm={3} lg={2}>
    <div className="header-icon">
      <a href={props.link} target="_blank">
        <i className={`header-icon__icon fa fa-${props.icon} fa-2x`} />
      </a>
      <div className="header-icon__container">
        <p className="header-icon__container--title">{props.title}</p>
        <span className="header-icon__container--sub-title">{props.subTitle}</span>
      </div>
    </div>
  </Col>;

const FacebookIconColumnLink = () =>
  <Col xs={12} sm={2} lg={1}>
    <div className="header-icon-facebook">
      <a href="https://www.facebook.com/bestchoicecare.com.au" target="_blank">
        <i className="header-icon__icon fa fa-facebook fa-2x" />
      </a>
    </div>
  </Col>;

const PhoneIconColumnLink = () =>
  <Col xs={12} sm={2} lg={2}>
    <div className="header-icon-phone">
      <a href="tel:1300 407 705">
        <i className="fa fa-phone fa-2x" />
        <span>1300 407 705</span>
      </a>
    </div>
  </Col>;

const NavBar = () => 
  <nav className="header-nav-bar" role="navigation">
    <ul>
      <li className="page_item page-item-350">
        <a href="get-to-know-us-offer">&#8220;Get To Know Us&#8221; Offer!</a>
      </li>
      <li className="page_item page-item-280">
        <a href="about-us">About Us</a>
      </li>
      <li className="page_item page-item-480">
        <a href="disability-care">Disability Support</a>
      </li>
      <li className="page_item page-item-2">
        <a href="get-started">Get Started With Our Home Care Services</a>
      </li>
      <li className="page_item page-item-200">
        <a href="our-services">What We Provide</a>
      </li>
    </ul>
  </nav>

export const Header = () => 
  <div className="app-header-container">
    <Row>
      <Col lg={1} className="spacer" />
      <Col xs={12} lg={2} className="header-logo">
        <a href="home"><img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Best Choice Care" /></a>
      </Col>
      <Col xs={0} sm={1} lg={2} className="spacer" />
      <IconColumnLink link="/" icon="home" title="We Are Located" subTitle="in and around Sydney" />
      <IconColumnLink link="/" icon="check" title="Contact Us For" subTitle="your free consultation" />
      <FacebookIconColumnLink />
      <PhoneIconColumnLink />
    </Row>
    <Row>
      <NavBar />
    </Row>
  </div>;
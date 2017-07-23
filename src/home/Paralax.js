import React from 'react';
import './Paralax.css';
import { Row, Col } from 'react-bootstrap';

export const Paralax = props => 
  <div className="home-paralax-container">
    <div className="home-paralax-scroll-image">
      <Row>
        <Col xs={0} sm={2} md={4} lg={6} />
        <Col xs={12} sm={10} md={8} lg={6}>
          <h4 className="title">
            Caring, Compassionate &amp; Consistent Aged &amp; Disability Care Services
          </h4>
          <span className="subtitle">-Our Promise To You-</span>
          <div className="description">
            Our home care services are delivered by carers who are always professional, courteous and reliable, and with the help of
            our service will be scheduled according to your family's specific needs. Carers who enter your home will always
            be trained in advance, and will be taught your loved one's routine and care schedule before entering your home,
            to eliminate any confusion and to ensure you are never left without the peace of mind that you are entitled to. 
          </div>
        </Col>
      </Row>
    </div>
    <div className="home-paralax-stationary-image">
      <Row>
        <Col xs={12}>
          <div className="home-paralax-stationary-image__text">
            <h4 className="title">
              LIVE IN YOUR OWN HOME, ON YOUR OWN TERMS
            </h4>
            <div className="description">
              Best Choice Care is simply not like other agencies. Here the power is always given to you, the client. Your needs and your
              family's wishes will always come first and we will do everything in our power to customise our services in
              a way that allows you to live life while being granted the freedom, safety and hassle-free care that you deserve.
            </div>
          </div>
          <a href="get-started" alt="Get Started">How To Get Started Today</a>
        </Col>
      </Row>
    </div>
  </div>;
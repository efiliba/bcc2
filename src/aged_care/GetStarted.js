import React from 'react';
import './GetStarted.css';
import { Row, Col } from 'react-bootstrap';
import ContactUsForm from './contact_us/ContactUsFormContainer';

export const GetStarted = () =>
  <Row className="get-started">
    <Col xs={12} sm={6}>
      <h3>Get Started With Our Home Care Services</h3>
      <p>If you are looking for reliable carers and who Can provide in home care so you don’t have To go to a nursing home</p>
      <ContactUsForm />
    </Col>
    <Col xs={12} sm={6}>
      <h4>3 Easy Steps To Get Started</h4>
      <ol>
        <li>Call us on 1300 407 705 or email us to book a free consultation</li>
        <li>We will come to your home and discuss your individual care needs and make a care plan and answer any questions you have.</li>
        <li>Our qualified carers will then start your services after we have orientated them to your needs.</li>
      </ol>
    </Col>
  </Row>;
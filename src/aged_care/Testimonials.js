import React from 'react';
import './Testimonials.css';
import { Row, Col } from 'react-bootstrap';

const Testimonial = ({image, clientName, message}) =>
  <Row className="testimonial-container">
    <Col xs={12} sm={6}>
      <div className='testimonial__image'>
        <img src={`../images/${image}`} alt={clientName} />
      </div>
    </Col>
    <Col xs={12} sm={6}>
      <div className='testimonial__message'>
        {message}
      </div>
    </Col>
  </Row>;

export const Testimonials = () =>
  <div className='testimonials-container'>
    <Testimonial image='personal_care.png' clientName='Eli' message="Leslie is much loved, but doesn't want a back rub" />
    <Testimonial image='help_at_home.png' clientName='Silvia' message='Leslie is the best' />
  </div>
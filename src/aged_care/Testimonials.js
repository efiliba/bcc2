import React from 'react';
import './Testimonials.css';

const Testimonial = ({testimonial}) =>
  <div className="testimonial-container">
    <div className='testimonial__image'>
      <img src={`../images/${testimonial.image}`} alt={testimonial.clientName} />
    </div>
    <div className='testimonial__message'>
      {testimonial.message}
    </div>
  </div>;

export const Testimonials = ({testimonials}) =>
  <div className='testimonials-container'>
    {testimonials.map((testimonial, index) => <Testimonial key={`testimonial${index}`} testimonial={testimonial} />)}
  </div>
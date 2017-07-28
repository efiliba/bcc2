import React from 'react';
import './ContactUsForm.css';
import { FormGroup, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import { Field } from 'redux-form';

const FieldGroup = ({children, id, label, help}) =>
  <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    {children}
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>;

export const ContactUsForm = ({pristine, submitting, submitted, handleSubmit, reset}) =>
  <section id='contactUsForm'>
    <form className="contact-us-form" onSubmit={handleSubmit}>
      <h3 className='contact-us-form__title'>Contact Us</h3>
      {submitted && <div className="contact-us-form__submitted-message alert alert-success">Your request has been submitted, we will contact you shortly.</div>}
      <FieldGroup id="contactUsName" className='contact-us-form__name' label="Name" help="Please enter your full name">
        <Field name="name" type="text" component="input" placeholder="Enter Name" />
      </FieldGroup>
      <FieldGroup id="contactUsPhone" className='contact-us-form__phone' label="Phone">
        <Field name="phone" type="text" component="input" placeholder="Phone" />
      </FieldGroup>      
      <FieldGroup id="contactUsEmail" className='contact-us-form__email' label="Email">
        <Field name="email" type="text" component="input" placeholder="Email address" />
      </FieldGroup>
      <FieldGroup id="contactUsRequest" className='contact-us-form__reques' label="Request" help="Please enter your message">
        <Field name="request" component="textarea" placeholder="Enter your message here" />
      </FieldGroup>
      <Button type="submit" className="contact-us-form__submit btn btn-primary" disabled={pristine || submitting}>
        Submit
      </Button>
      <Button type="button" className="contact-us-form__reset btn btn-secondary" onClick={reset} disabled={pristine || submitting}>
        Reset
      </Button>
    </form>
  </section>;
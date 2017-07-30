import React from 'react';
import './ContactUsForm.css';
import { FormGroup, ControlLabel, HelpBlock, Button } from 'react-bootstrap'
import { Field } from 'redux-form';

const FieldGroup = ({children, id, className, label, help}) =>
  <FormGroup controlId={id} className={className}>
    <ControlLabel>{label}</ControlLabel>
    {children}
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>;

export const ContactUsForm = ({pristine, submitting, submitSucceeded, anyTouched, handleSubmit, reset}) =>
  <section id='contactUsForm'>
     <form className="contact-us-form" onSubmit={handleSubmit}> 
      <h3 className='contact-us-form__title'>Contact Us</h3>
      {submitSucceeded && !anyTouched && <div className="contact-us-form__submitted-message alert alert-success">Your request has been submitted, we will contact you shortly.</div>}
      <FieldGroup id="contactUsFirstName" className='contact-us-form__first_name' label="First Name" help="Please enter your first name">
        <Field name="firstName" type="text" component="input" placeholder="Enter First Name" />
      </FieldGroup>
      <FieldGroup id="contactUsSurname" className='contact-us-form__surname' label="Surname" help="Please enter your last name">
        <Field name="surname" type="text" component="input" placeholder="Enter Surname" />
      </FieldGroup>
      <FieldGroup id="contactUsPhone" className='contact-us-form__phone' label="Phone">
        <Field name="phone" type="text" component="input" placeholder="Phone" />
      </FieldGroup>      
      <FieldGroup id="contactUsEmail" className='contact-us-form__email' label="Email">
        <Field name="email" type="text" component="input" placeholder="Email address" />
      </FieldGroup>
      <FieldGroup id="contactUsLocation" className='contact-us-form__location' label="Location" help="We can only service Sydney suburbs at this time.">
        <Field name="suburb" type="text" component="input" placeholder="Suburb where care is required" />
      </FieldGroup>
      <FieldGroup id="contactUsRequest" className='contact-us-form__request' label="Request" help="Please enter your message">
        <Field name="request" component="textarea" rows="10" placeholder="Enter your message here" />
      </FieldGroup>
      <Button type="submit" className="contact-us-form__submit btn btn-primary" disabled={pristine || submitting}>
        Submit
      </Button>
      <Button type="button" className="contact-us-form__reset btn btn-secondary" onClick={reset} disabled={pristine || submitting}>
        Reset
      </Button>
    </form>
  </section>;
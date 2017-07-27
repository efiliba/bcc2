import React from 'react';
import './ContactUsForm.css';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'


function FieldGroup({id, label, help, ...props}) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export const ContactUsForm = ({fields: {name, phone, email, request}, submitted, handleSubmit}) =>
  <section id='contactUsForm'>
    <form className="contact-us-form" onSubmit={() => {debugger; handleSubmit()}}>
      <h3 className='contact-us-form__title'>Contact Us</h3>
      {submitted && <div className="contact-us-form__submitted-message alert alert-success">Your request has been submitted, we will contact you shortly.</div>}
      <FieldGroup
        id="contactUsName"
        className='contact-us-form__name'
        type="text"
        label="Name"
        placeholder="Enter name"
        help="Please enter your full name"
        {...name}
      />
      <FieldGroup
        id="contactUsPhone"
        className='contact-us-form__phone'
        type="phone"
        label="Phone"
        placeholder="Phone"
        {...phone}
      />
      <FieldGroup
        id="contactUsEmail"
        className='contact-us-form__email'
        type="email"
        label="Email"
        placeholder="Email address"
        {...email}
      />
      <FormGroup controlId="contactUsRequest">
        <ControlLabel>Request</ControlLabel>
        <FormControl
          componentClass="textarea"
          className='contact-us-form__request'
          placeholder="Request"
          {...request}
        />
      </FormGroup>
      <Button type="submit" className="contact-us-form__submit btn btn-primary">
        Submit
      </Button>
    </form>
  </section>;
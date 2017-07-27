import { reduxForm } from 'redux-form';
import { ContactUsForm } from './ContactUsForm';
import { saveContactRequest } from '../actionCreators';

const config = {
    form: 'contactUsForm',                                // Unique name for the form
    fields: ['name', 'phone', 'email', 'request'],        // All the fields in the form
    getFormState: state => state.get('form')
};

const mapStateToProps = state => ({
  submitted: state.get('form').contactUsForm.submitted
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(saveContactRequest(data))
});

export default reduxForm(config, mapStateToProps, mapDispatchToProps)(ContactUsForm);

// export default () => ContactUsForm({
//   fields: {
//     name: 'test',
//     email: 'a@b.c',
//     request: ''
//   },
//   submitted: false,
//   handleSubmit: () => console.log('submit')
// });
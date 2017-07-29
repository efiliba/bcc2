import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { ContactUsForm } from './ContactUsForm';
import { saveContactRequest } from '../redux/actionCreators';

const config = {
  form: 'contactUsForm',                        // Unique name for the form
  getFormState: state => state.get('form')      // Needed to store state in immutableJS 
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(saveContactRequest(data))
});

export default connect(null, mapDispatchToProps)(reduxForm(config)(ContactUsForm));
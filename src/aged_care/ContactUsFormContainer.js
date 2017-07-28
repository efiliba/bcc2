import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { ContactUsForm } from './ContactUsForm';
import { saveContactRequest } from '../redux/actionCreators';

const config = {
  form: 'contactUsForm',                                  // Unique name for the form
  // fields: ['name', 'phone', 'email', 'request'],          // All the fields in the form
  getFormState: state => state.get('form')
};

const mapStateToProps = state => ({
  // submitted: state.get('form').contactUsForm.submitted
  submitted: state.form.contactUsForm && state.form.contactUsForm.submitted
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: data => dispatch(saveContactRequest(data))
});

// export default reduxForm(config, mapStateToProps, mapDispatchToProps)(ContactUsForm);
const ConnectedContactUsForm = connect(mapStateToProps, mapDispatchToProps)(ContactUsForm);
// export default reduxForm(config)(ConnectedContactUsForm);
// export default reduxForm({form: 'contactUsForm'})(ConnectedContactUsForm);


const ContactUsReduxForm =  reduxForm({form: 'contactUsForm'})(ContactUsForm);
export default connect(mapStateToProps, mapDispatchToProps)(ContactUsReduxForm);

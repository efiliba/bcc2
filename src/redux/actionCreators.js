import * as ActionTypes from './actions/actionTypes';
// import { reset } from 'redux-form';
import fetch from 'isomorphic-fetch';
import { apiUrl } from '../config';

export const saveContactRequest = data => dispatch => {
  dispatch({
    type: ActionTypes.CONTACT_REQUEST_SAVED,
    data
  });
  // dispatch(reset('contactUsForm'));             // Clear form data
};

export const saveContactRequest2 = data => dispatch => fetch(`${apiUrl}/saveContactRequest`, {
  method: 'post',
  body: JSON.stringify({contactRequest: data}),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})
  .then(response => dispatch({
    type: ActionTypes.CONTACT_REQUEST_SAVED
  }))
  .catch(err => console.log('Error in saveContactRequest API', err));

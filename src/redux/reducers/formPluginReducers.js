import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export const contactUsForm = (state, action) => {
  switch (action.type) {
    case ActionTypes.CONTACT_REQUEST_SAVED:
      // return undefined;                         // Clear form data
      return Actions.onContactUsSaved(state);
    default:
      return state;
  }
}
import * as ActionTypes from '../actions/actionTypes';
import * as Actions from '../actions/actions';

export default (state = Actions.INITIAL_SITE_STATE, action) => {
  switch (action.type) {
    case ActionTypes.CONTACT_REQUEST_SAVED:
      return Actions.onContactUsSaved(state, action.data);
    default:
      return state;
  }
}
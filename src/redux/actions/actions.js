import {Map as IMap} from 'immutable';

export const INITIAL_SITE_STATE = new IMap();

export const onContactUsSaved = (state, data) =>
  state.set('data', data);
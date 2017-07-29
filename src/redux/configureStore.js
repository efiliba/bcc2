import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Map as IMap } from 'immutable';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import { siteReducer, contactUsForm } from './reducers';

export default initialState => {
  const composeEnhancers = (window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const storeBuilder = composeEnhancers(applyMiddleware(thunk));

  const reducers = combineImmutableReducers(siteReducer);
  const store = storeBuilder(createStore)(reducers, initialState);

  // if (module.hot) {
  //     // Enable Webpack hot module replacement for reducers
  //     module.hot.accept('./reducers/carerReducer', () => {

  //         /// May need to add formReducer using combineReducers for replaceReducer
  //         /// http://moox.io/statinamic/docs/advanced/redux/

  //         const nextReducer = require('./reducers/carerReducer');
  //         store.replaceReducer(nextReducer);
  //     });
  // }

  return store;
};

const combineImmutableReducers = site => {
  const reducers = combineReducers({
    site,
    form: formReducer.plugin({                  // Add plugin to formReducer
      contactUsForm                             //    to clear the form
    })
  });

  // return (state = {}, action) => reducers(state, action);
  return (state = {}, action) => IMap(
    reducers(IMap.isMap(state) ? state.toObject() : state, action)
  );
};
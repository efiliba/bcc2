import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { Map as IMap } from 'immutable';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

// import rootReducer from './reducers';

import { contactUsForm } from './reducers/formPluginReducers';

export default initialState => {
  const composeEnhancers = (window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const storeBuilder = composeEnhancers(applyMiddleware(thunk));

  const reducers = combineImmutableReducers(/*navigationReducer*/);
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

const combineImmutableReducers = (/*navigationReducer*/) => {
  const reducers = combineReducers({
    // nav_links: navigationReducer,
    form: formReducer.plugin({                  // Add plugin to formReducer
      contactUsForm,                            //    to clear the form
    })
  });

  return (state = {}, action) => IMap(reducers(
    IMap.isMap(state) ? state.toObject() : state, action
  ));
};
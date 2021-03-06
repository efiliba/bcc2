import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureStore from './redux/configureStore';

const store = configureStore(fromJS(window.__INITIAL_STATE__));

// if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
//   console.error('*** TRY RESTART SERVER ***: Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.'); // eslint-disable-line
// }

ReactDOM.render(
  <Provider store={store} key="provider">
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import configureStore from './redux/store';
import Root from './Root/Root';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();

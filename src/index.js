import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'config/theme';
import 'normalize.css';

import configureStore from './redux-modules/store';
import Root from './Root/Root';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = createHistory();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Root />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
);

registerServiceWorker();

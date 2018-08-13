import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './index';

const composeEnhancers = composeWithDevTools({});

const configureStore = preloadedState => createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(
    thunk.withExtraArgument(),
  )),
);

export default configureStore;

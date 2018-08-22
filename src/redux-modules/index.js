// @flow strict
import { combineReducers } from 'redux';
import appConfig from './appConfig';
import doctors from './doctors';

export default combineReducers({
  appConfig,
  doctors,
});

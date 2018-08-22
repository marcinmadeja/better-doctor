// @flow strict
import { combineReducers } from 'redux';
import appConfig from './appConfig';
import cards from './cards';

export default combineReducers({
  appConfig,
  cards,
});

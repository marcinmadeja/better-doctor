// @flow strict
import * as types from './types';
import type {
  CARDS_FETCH_REQUEST_ACTION,
  CARDS_FETCH_SUCCESS_ACTION,
  CARDS_FETCH_FAILURE_ACTION,
  CARDS_LIST_TYPE,
} from './types';

export const cardsFetchRequest = (): CARDS_FETCH_REQUEST_ACTION => (
  { type: types.CARDS_FETCH_REQUEST }
);

export const cardsFetchSuccess = (payload: CARDS_LIST_TYPE): CARDS_FETCH_SUCCESS_ACTION => (
  { type: types.CARDS_FETCH_SUCCESS, payload }
);

export const cardsFetchFailure = (): CARDS_FETCH_FAILURE_ACTION => (
  { type: types.CARDS_FETCH_FAILURE }
);

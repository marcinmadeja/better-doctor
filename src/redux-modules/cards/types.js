// @flow strict
export const CARDS_FETCH_REQUEST = '@@doctors/CARDS_FETCH_REQUEST';
export const CARDS_FETCH_SUCCESS = '@@doctors/CARDS_FETCH_SUCCESS';
export const CARDS_FETCH_FAILURE = '@@doctors/CARDS_FETCH_FAILURE';

export type CARDS_LIST_TYPE = Array<any>;

export type CARDS_FETCH_REQUEST_ACTION = {| type: typeof CARDS_FETCH_REQUEST |};
export type CARDS_FETCH_SUCCESS_ACTION = {| type: typeof CARDS_FETCH_SUCCESS, payload: CARDS_LIST_TYPE |};
export type CARDS_FETCH_FAILURE_ACTION = {| type: typeof CARDS_FETCH_FAILURE |};

export type Action =
  | CARDS_FETCH_REQUEST_ACTION
  | CARDS_FETCH_SUCCESS_ACTION
  | CARDS_FETCH_FAILURE_ACTION;

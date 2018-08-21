// @flow strict
import * as types from './types';
import type {
  DOCTORS_FETCH_REQUEST_ACTION,
  DOCTORS_FETCH_SUCCESS_ACTION,
  DOCTORS_FETCH_FAILURE_ACTION,
  DOCTORS_LIST_TYPE,
} from './types';

export const doctorsFetchRequest = (): DOCTORS_FETCH_REQUEST_ACTION => (
  { type: types.DOCTORS_FETCH_REQUEST }
);

export const doctorsFetchSuccess = (payload: DOCTORS_LIST_TYPE): DOCTORS_FETCH_SUCCESS_ACTION => (
  { type: types.DOCTORS_FETCH_SUCCESS, payload }
);

export const doctorsFetchFailure = (): DOCTORS_FETCH_FAILURE_ACTION => (
  { type: types.DOCTORS_FETCH_FAILURE }
);

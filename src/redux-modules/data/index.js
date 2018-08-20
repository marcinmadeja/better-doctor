// @flow strict
import * as types from './types';
import type { Action, DOCTORS_LIST_TYPE } from './types';

export type State = {
  doctors: DOCTORS_LIST_TYPE,
  doctorsRequest: boolean,
  doctorsSuccess: boolean,
  doctorsFailure: boolean,
}

export const doctorsReset = {
  doctors: [],
  doctorsRequest: false,
  doctorsSuccess: false,
  doctorsFailure: false,
};

export const initialState: State = {
  ...doctorsReset,
};

const doctorsFetchRequest = (state: State) => ({
  ...state,
  ...doctorsReset,
  doctorsRequest: true,
});

const doctorsFetchSuccess = (state: State, payload: DOCTORS_LIST_TYPE) => ({
  ...state,
  ...doctorsReset,
  doctorsSuccess: true,
  doctors: payload,
});

const doctorsFetchFailure = (state: State) => ({
  ...state,
  ...doctorsReset,
  doctorsFailure: true,
});

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.DOCTORS_FETCH_REQUEST:
      return doctorsFetchRequest(state);
    case types.DOCTORS_FETCH_SUCCESS:
      return doctorsFetchSuccess(state, action.payload);
    case types.DOCTORS_FETCH_FAILURE:
      return doctorsFetchFailure(state);
    default:
      return state;
  }
};

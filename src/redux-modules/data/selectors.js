// @flow strict
import type { State } from './index';
import type { DOCTORS_LIST_TYPE } from './types';

type MainState = {
  data: State,
};

export const getDoctors = (state: MainState): DOCTORS_LIST_TYPE => state.data.doctors;
export const fetchDoctorsState = (state: MainState): { [string]: boolean } => ({
  request: state.data.doctorsRequest,
  success: state.data.doctorsSuccess,
  failure: state.data.doctorsFailure,
});

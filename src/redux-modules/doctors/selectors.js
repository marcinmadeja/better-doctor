// @flow strict
import type { State } from './index';
import type { DOCTORS_LIST_TYPE } from './types';

type MainState = {
  doctors: State,
};

export const getDoctors = (state: MainState): DOCTORS_LIST_TYPE => state.doctors.doctors;
export const fetchDoctorsState = (state: MainState): { [string]: boolean } => ({
  request: state.doctors.doctorsRequest,
  success: state.doctors.doctorsSuccess,
  failure: state.doctors.doctorsFailure,
});

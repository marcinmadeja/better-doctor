import * as actions from './actions';
import * as types from './types';

const doctors = new Array(10).fill({ user: 'user' });

describe('data actions', () => {
  it('should create DOCTORS_FETCH_REQUEST action', () => {
    expect(actions.doctorsFetchRequest())
      .toEqual({ type: types.DOCTORS_FETCH_REQUEST });
  });

  it('should create DOCTORS_FETCH_SUCCESS_ACTION action', () => {
    expect(actions.doctorsFetchSuccess(doctors))
      .toEqual({ type: types.DOCTORS_FETCH_SUCCESS, payload: doctors });
  });

  it('should create DOCTORS_FETCH_FAILURE action', () => {
    expect(actions.doctorsFetchFailure())
      .toEqual({ type: types.DOCTORS_FETCH_FAILURE });
  });
});

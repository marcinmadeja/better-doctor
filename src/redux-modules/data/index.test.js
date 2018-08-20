import * as types from './types';
import reducer, { initialState } from './index';

const users = new Array(10).fill({ user: 'user' });

describe('data reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DOCTORS_FETCH_REQUEST', () => {
    expect(reducer({ ...initialState, doctors: [1, 2] }, {
      type: types.DOCTORS_FETCH_REQUEST,
    })).toEqual({
      ...initialState,
      doctorsRequest: true,
    });
  });

  it('should handle DOCTORS_FETCH_SUCCESS', () => {
    expect(reducer({ ...initialState, doctorsRequest: true }, {
      type: types.DOCTORS_FETCH_SUCCESS,
      payload: users,
    })).toEqual({
      ...initialState,
      doctorsSuccess: true,
      doctors: users,
    });
  });

  it('should handle DOCTORS_FETCH_FAILURE', () => {
    expect(reducer({ ...initialState, doctorsSuccess: true }, {
      type: types.DOCTORS_FETCH_FAILURE,
    })).toEqual({
      ...initialState,
      doctorsFailure: true,
    });
  });
});

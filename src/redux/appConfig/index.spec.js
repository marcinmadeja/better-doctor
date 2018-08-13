import * as types from './types';
import reducer, { initialState } from './index';

describe('appConfig reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle toggleNav', () => {
    expect(reducer(initialState, {
      type: types.TOGGLE_NAV,
    })).toEqual({
      ...initialState,
      navOpen: true,
    });

    expect(reducer(initialState, {
      type: types.TOGGLE_NAV,
      payload: false,
    })).toEqual({
      ...initialState,
      navOpen: false,
    });

    expect(reducer(initialState, {
      type: types.TOGGLE_NAV,
      payload: true,
    })).toEqual({
      ...initialState,
      navOpen: true,
    });
  });
});

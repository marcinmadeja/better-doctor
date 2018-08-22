import * as types from './types';
import reducer, { initialState } from './index';

const users = new Array(10).fill({ user: 'user' });

describe('data reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CARDS_FETCH_REQUEST', () => {
    expect(reducer({ ...initialState, cards: [1, 2] }, {
      type: types.CARDS_FETCH_REQUEST,
    })).toEqual({
      ...initialState,
      cardsRequest: true,
    });
  });

  it('should handle CARDS_FETCH_SUCCESS', () => {
    expect(reducer({ ...initialState, cardsRequest: true }, {
      type: types.CARDS_FETCH_SUCCESS,
      payload: users,
    })).toEqual({
      ...initialState,
      cardsSuccess: true,
      cards: users,
    });
  });

  it('should handle CARDS_FETCH_FAILURE', () => {
    expect(reducer({ ...initialState, cardsSuccess: true }, {
      type: types.CARDS_FETCH_FAILURE,
    })).toEqual({
      ...initialState,
      cardsFailure: true,
    });
  });
});

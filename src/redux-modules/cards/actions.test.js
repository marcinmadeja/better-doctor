import * as actions from './actions';
import * as types from './types';

const cards = new Array(10).fill({ user: 'user' });

describe('data actions', () => {
  it('should create CARDS_FETCH_REQUEST action', () => {
    expect(actions.cardsFetchRequest())
      .toEqual({ type: types.CARDS_FETCH_REQUEST });
  });

  it('should create CARDS_FETCH_SUCCESS_ACTION action', () => {
    expect(actions.cardsFetchSuccess(cards))
      .toEqual({ type: types.CARDS_FETCH_SUCCESS, payload: cards });
  });

  it('should create CARDS_FETCH_FAILURE action', () => {
    expect(actions.cardsFetchFailure())
      .toEqual({ type: types.CARDS_FETCH_FAILURE });
  });
});

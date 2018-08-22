// @flow strict
import * as types from './types';
import type { Action, CARDS_LIST_TYPE } from './types';

export type State = {
  cards: CARDS_LIST_TYPE,
  cardsRequest: boolean,
  cardsSuccess: boolean,
  cardsFailure: boolean,
}

export const cardsReset = {
  cards: [],
  cardsRequest: false,
  cardsSuccess: false,
  cardsFailure: false,
};

export const initialState: State = {
  ...cardsReset,
};

const cardsFetchRequest = (state: State) => ({
  ...state,
  ...cardsReset,
  cardsRequest: true,
});

const cardsFetchSuccess = (state: State, payload: CARDS_LIST_TYPE) => ({
  ...state,
  ...cardsReset,
  cardsSuccess: true,
  cards: payload,
});

const cardsFetchFailure = (state: State) => ({
  ...state,
  ...cardsReset,
  cardsFailure: true,
});

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.CARDS_FETCH_REQUEST:
      return cardsFetchRequest(state);
    case types.CARDS_FETCH_SUCCESS:
      return cardsFetchSuccess(state, action.payload);
    case types.CARDS_FETCH_FAILURE:
      return cardsFetchFailure(state);
    default:
      return state;
  }
};

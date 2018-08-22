// @flow strict
import type { State } from './index';
import type { CARDS_LIST_TYPE } from './types';

type MainState = {
  cards: State,
};

export const getCards = (state: MainState): CARDS_LIST_TYPE => state.cards.cards;
export const fetchCardsState = (state: MainState): { [string]: boolean } => ({
  request: state.cards.cardsRequest,
  success: state.cards.cardsSuccess,
  failure: state.cards.cardsFailure,
});

import * as selectors from './selectors';
import { initialState } from './index';

const mockState = {
  cards: initialState,
};

describe('data selectors', () => {
  it('should return cards', () => {
    expect(selectors.getCards(mockState))
      .toEqual(initialState.cards);
  });

  it('should return fetchCards state', () => {
    expect(selectors.fetchCardsState(mockState))
      .toEqual({
        request: initialState.cardsRequest,
        success: initialState.cardsSuccess,
        failure: initialState.cardsFailure,
      });
  });
});

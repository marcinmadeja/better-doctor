import * as selectors from './selectors';
import { initialState } from './index';

const mockState = {
  appConfig: initialState,
};

describe('appConfig selectors', () => {
  it('should return navOpen', () => {
    expect(selectors.getNavOpen(mockState))
      .toEqual(initialState.navOpen);
  });
});

import * as actions from './actions';
import * as types from './types';

describe('appConfig actions', () => {
  it('should create TOGGLE_NAV action', () => {
    expect(actions.toggleNav())
      .toEqual({ type: types.TOGGLE_NAV });

    expect(actions.toggleNav('payload'))
      .toEqual({ type: types.TOGGLE_NAV, payload: 'payload' });
  });
});

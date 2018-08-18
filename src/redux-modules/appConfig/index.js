// @flow strict
import type { Action } from './types';
import * as types from './types';
import * as utils from '../utils';

export type State = {
  navOpen: boolean
};

export const initialState = {
  navOpen: false,
};

const toggleNav = (state: State, payload: ?boolean) => ({
  ...state,
  navOpen: utils.getToggleValue(payload, state.navOpen),
});

export default(state: State = initialState, action: Action) => {
  switch (action.type) {
    case types.TOGGLE_NAV:
      return toggleNav(state, action.payload);
    default:
      return state;
  }
};

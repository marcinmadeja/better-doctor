import * as types from './types';
import * as utils from '../utils';

const initialState = {
  navOpen: false,
};

const toggleNav = (state, payload) => ({
  ...state,
  navOpen: utils.getToggleValue(payload, state.navOpen),
});

export default(state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_NAV:
      return toggleNav(state, action.payload);
    default:
      return state;
  }
};

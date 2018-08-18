// @flow strict
import type { State } from './index';

type MainState = {
  appConfig: State,
};

export const getNavOpen = (state: MainState) => state.appConfig.navOpen;

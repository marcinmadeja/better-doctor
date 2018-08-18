// @flow strict
export const TOGGLE_NAV: string = '@@auth/TOGGLE_NAV';

export type Action = { type: typeof TOGGLE_NAV, payload: ?boolean, };

// @flow strict
import { REACT_APP_MTG_API_URL } from 'constants/env';
import * as apiUtils from './utils';

const request = (endpoint: string): any => {
  const url = `${REACT_APP_MTG_API_URL}${endpoint}`;
  return apiUtils.request({ url });
};

export const getCards = async (): mixed => {
  const response: mixed = await request('cards');
  return response.data.cards;
};

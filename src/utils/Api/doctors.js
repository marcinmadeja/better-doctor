import { BETTER_DOCTORS_API_KEY, BETTER_DOCTORS_API_URL } from 'constants/env';
import * as apiUtils from './utils';

const BD_DEFAULT_LOCATION = '37.773,-122.413,100';

const generateParamsLink = (params) => {
  return Object.keys(params)
    .map(param => `${param}=${params[param]}`)
    .join('&');
};

const bdAuthorization = (params = {}) => {
  return {
    ...params,
    user_key: BETTER_DOCTORS_API_KEY,
  };
};

const bdRequest = (endpoint, params) => {
  const authParams = bdAuthorization(params);
  const requestParams = generateParamsLink(authParams);
  const url = `${BETTER_DOCTORS_API_URL}${endpoint}?${requestParams}`;
  return apiUtils.request({ url });
};

const getDoctorsParams = (params = {}) => {
  const newParams = { ...params };
  if (!params.location && !params.query && !params.name && !params.first_name && !params.last_name) {
    newParams.location = BD_DEFAULT_LOCATION;
  }

  if (!params.skip) newParams.skip = 0;
  if (!params.limit) newParams.limit = 10;

  return newParams;
};

export const getDoctors = async () => {
  const params = getDoctorsParams();
  const response = await bdRequest('/doctors', params);
  return response;
};

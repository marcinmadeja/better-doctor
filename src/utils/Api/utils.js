import axios from 'axios';
import { get } from 'lodash';

export const configureAuth = (requestConfig) => {
  if (!requestConfig.headers) requestConfig.headers = {};

  requestConfig.headers = {
    'Access-Control-Expose-Headers': 'location',
    'Content-Type': 'application/json',
    ...requestConfig.headers,
  };

  return requestConfig;
};

export const request = ({
  url,
  body,
  method = 'get',
}) => {
  const requestConfig = { url, method };

  if (method === 'get') requestConfig.params = body;
  else requestConfig.data = body;

  return axios(configureAuth(requestConfig))
    .catch((error) => Promise.reject(error.response));
};

export const generateParamsLink = (params) => {
  return Object.keys(params)
    .map(param => `${param}=${params[param]}`)
    .join('&');
};

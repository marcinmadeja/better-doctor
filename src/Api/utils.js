// @flow strict
import axios from 'axios';

type requestConfigType = {
  url: string,
  method: string,
  headers?: any,
  params?: any,
  data?: any,
};

const configureConfig = (url: string, method: string = 'get', body: any) => {
  const requestConfig: requestConfigType = { url, method };
  if (method === 'get') requestConfig.params = body;
  else requestConfig.data = body;

  return requestConfig;
};

export const request = ({
  url,
  method = 'get',
  body,
}: {
  url: string,
  body?: any,
  method?: 'get' | 'post',
}): mixed => {
  return axios({
    ...configureConfig(url, method, body),
  })
    .catch((error) => Promise.reject(error.response));
};

export const generateParamsLink = (params: { [string]: string }): string => {
  return Object.keys(params)
    .map(param => `${param}=${params[param]}`)
    .join('&');
};

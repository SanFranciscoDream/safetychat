import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Platform } from 'react-native';

import ApiHelper from '../helpers/ApiHelper';
import { appConfig } from '../../appConfig';
import Notification from '../ui/Notification';

export const api = axios.create();

const SUCCESS_STATUSES = [200, 201];
const SERVER_ERROR = 500;

api.defaults.baseURL = appConfig.apiUrl;

api.interceptors.request.use(
  async config => {
    const newConfig: AxiosRequestConfig = {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        'App-Platform': Platform.OS,
        ...config.headers,
      },
    };
    return newConfig;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    console.log('response', response);

    if (!SUCCESS_STATUSES.includes(response.status)) {
      Notification.showError(response.data?.message || 'Unknown error');

      return Promise.reject(response);
    }

    if (response?.data?.message) {
      Notification.showSuccess(response?.data?.message);
    }

    return response;
  },
  error => {
    // global showing error messages
    console.log('response error', error?.response);

    ApiHelper.getApiErrors(error?.response?.data);

    if (error.response?.status === SERVER_ERROR) {
      Notification.showError('Server error');
    }

    return Promise.reject(error);
  },
);

export const setAccessToken = (token: string) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearAccessToken = () => {
  api.defaults.headers['Authorization'] = null;
};

export interface IConfig {
  url: string;
  data?: Object;
  config?: AxiosRequestConfig;
}

export interface IResponseCommon<T> {
  success: boolean;
  errors: {
    [key: string]: string[];
  } | null;
  message: string | null;
  data: T | T[];
}

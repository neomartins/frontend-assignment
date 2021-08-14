import axios, { AxiosRequestConfig } from 'axios';
import { backendUrl } from '../src/global';

const config = (axiosConfig: AxiosRequestConfig) => {
  axiosConfig.headers.common = {
    
  };
  return axiosConfig;
};

const instance = axios.create({
  baseURL: backendUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((axiosConfig) => {
  return config(axiosConfig);
}, (error) => {
  return Promise.reject(error);
});

instance.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default instance;

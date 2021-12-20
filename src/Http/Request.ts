/* eslint-disable max-len */
/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 13:05:40
 * @LastEditTime: 2021-12-02 15:00:14
 * @LastEditors: ecstAsy
 */
import axios, {
  AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise,
} from "axios";

export interface ResponseData<T = any> {
  code: number
  data?: T
  message: string
}

/**
 *  默认配置
 */
const defaultConfig: AxiosRequestConfig = {
  baseURL: "/api",
  timeout: 6000,
};

/**
 * @description: 合并配置项
 * @param {AxiosRequestConfig} options
 * @return {*AxiosRequestConfig} options
 */
const mergeConfig = (options: AxiosRequestConfig): AxiosRequestConfig => Object.assign(defaultConfig, options);

/**
 * @description: 拦截器
 * @param {AxiosInstance} instance
 * @param {string} url
 * @return {*}
 */
const interceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config: AxiosRequestConfig) => config, (error) => Promise.reject(error));
  instance.interceptors.response.use((response: AxiosResponse<ResponseData<any>>) => {
    const { status } = response;
    if (status >= 200 && status < 300) {
      if (response.data.code) {
        return Promise.reject(response.data);
      }
      return Promise.resolve(response.data);
    }
    return Promise.reject(response);
  }, (error) => Promise.reject(error));
};

/**
 * @description: axios 实例
 * @param {AxiosRequestConfig} options
 * @return {*AxiosPromise}
 */
export const Request = (options: AxiosRequestConfig): AxiosPromise<ResponseData> => {
  const instance: AxiosInstance = axios.create();
  const Options = mergeConfig(options);
  interceptors(instance);

  return instance(Options);
};

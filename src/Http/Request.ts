/* eslint-disable max-len */
/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 13:05:40
 * @LastEditTime: 2022-07-07 09:56:01
 * @LastEditors: ecstAsy
 */
import axios, {
  AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosPromise,
} from "axios";
import { ElMessage } from "element-plus";
import { LocalStorage } from "ecstasy-tools";
import router from "@/router";

const ENV = import.meta.env;
export interface ResponseData<T = any> {
  code: number
  data?: T
  message: string
}

/**
 *  默认配置
 */
const defaultConfig: AxiosRequestConfig = {
  baseURL: `${ENV.VITE_APP_API}`,
  timeout: 6000,
};

/**
 * @description: 合并配置项
 * @param {AxiosRequestConfig} options
 * @return {*AxiosRequestConfig} options
 */
const mergeConfig = (options: AxiosRequestConfig): AxiosRequestConfig => Object.assign(defaultConfig, options);

// 异常拦截处理器
const errorHandler = (error: any) => {
  if (error.response) {
    if (error.response.status === 403) {
      router.push("/403?error=no_auth");
    }
  }
  return Promise.reject(error);
};
/**
 * @description: 拦截器
 * @param {AxiosInstance} instance
 * @param {string} url
 * @return {*}
 */
const interceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use((config: AxiosRequestConfig) => {
    const Config = config;
    const token = LocalStorage.getItem("tm-token");
    // 如果 token 存在
    // 让每个请求携带自定义 token 请根据实际情况自行修改
    if (token) {
      Config.headers!.Authorization = `Bearer ${token}`;
    }
    return Config;
  }, errorHandler);
  instance.interceptors.response.use((response: AxiosResponse<ResponseData<any>>) => {
    const { status } = response;
    if (status >= 200 && status < 300) {
      if (response.data.code) {
        if (response.data.code === 40034) {
          ElMessage.warning(response.data.message);
          router.back();
        } else if (response.data.code === 40094) {
          ElMessage.warning(response.data.message);
        } else {
          ElMessage.error(response.data.message);
        }
        return Promise.reject(new Error(JSON.stringify(response.data) || "Error"));
      }
      return Promise.resolve(response.data);
    }
    return Promise.reject(response);
  }, errorHandler);
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

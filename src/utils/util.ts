/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:48:27
 * @LastEditTime: 2021-12-02 11:51:41
 * @LastEditors: ecstAsy
 */
import { getItem } from "./localStorage";

export const getToken = () => !!getItem("token");

/**
 * @description: 获取随机字符串
 * @param {*num}
 * @return {*res}
 */
export const getRandomStr = (num: number) => {
  const NUM = num || 32;
  const Str = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789";
  let res = "";
  for (let i = 0; i < NUM; i += 1) {
    res += Str.charAt(Math.floor(Math.random() * 62));
  }
  return res;
};

/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:48:27
 * @LastEditTime: 2022-07-07 14:10:55
 * @LastEditors: ecstAsy
 */
import { LocalStorage } from "ecstasy-tools";

// eslint-disable-next-line import/prefer-default-export
export const getToken = () => !!LocalStorage.getItem("moko-token");

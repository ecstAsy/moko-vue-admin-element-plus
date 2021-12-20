/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:56:28
 * @LastEditTime: 2021-12-02 13:12:19
 * @LastEditors: ecstAsy
 */
import { Request } from "./Request";
import { UserLoginTypes } from "./type";

const Api = {
  common: {
    allCate: "/common/status",
    list: "/common/list",
  },
  user: {
    login: "/auth/login",
  },
};

export const allCate = async () => Request({
  url: Api.common.allCate,
  method: "GET",
});

export const mokoList = async (data: any) => Request({
  url: Api.common.list,
  method: "POST",
  data,
});

export const userLogin = (data: UserLoginTypes) => Request({
  url: Api.user.login,
  method: "POST",
  data,
});

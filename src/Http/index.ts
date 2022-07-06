/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:56:28
 * @LastEditTime: 2022-07-06 17:36:08
 * @LastEditors: ecstAsy
 */
import { stringify } from "querystring";
import { Request } from "./Request";
import { MergeParamsTypes, UserLoginTypes } from "./type";

// 增删改查合并请求方法
const MergeRequest = (url: string, params: MergeParamsTypes) => {
  const { method, id, data } = params;
  const options:any = { url: id ? `${url}/${id}` : url, method };
  if (method === "GET") {
    options.url = data ? `${options.url}?${stringify(data)}` : `${options.url}`;
  } else {
    options.data = data;
  }

  return Request(options);
};
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

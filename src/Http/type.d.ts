/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:56:50
 * @LastEditTime: 2022-07-06 17:34:40
 * @LastEditors: ecstAsy
 */
export interface ResponseData {
  code: number
  data: any
  message: string
}

export interface MergeParamsTypes {
  id?: number | null
  method: "GET" | "POST" | "PUT" | "DELETE"
  data?: any
}

export interface UserLoginTypes {
  account: string,
  password: string
}

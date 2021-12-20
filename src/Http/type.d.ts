/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:56:50
 * @LastEditTime: 2021-12-02 11:56:50
 * @LastEditors: ecstAsy
 */
export interface ResponseData {
  code: number
  data?: any
  message: string
}

export interface UserLoginTypes {
  account: string,
  password: string
}

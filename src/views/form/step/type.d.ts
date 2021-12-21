/*
 * @Author: ecstAsy
 * @Date: 2021-12-21 17:16:36
 * @LastEditTime: 2021-12-21 17:35:32
 * @LastEditors: ecstAsy
 */

export interface StepItemTypes {
  title: string
  icon: string
}

export interface TransferStateTypes {
  account: null | string
  way: number
  payment: null | string
  name: null | string
  amount: number
}

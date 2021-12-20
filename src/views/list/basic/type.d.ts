/*
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:55:48
 * @LastEditTime: 2021-12-09 15:18:49
 * @LastEditors: ecstAsy
 */

export interface OptionItemTypes {
  value: number,
  label: string
}

export interface BasicParamsTypes {
  name?: string | null,
  status?: number | null,
  times?: number,
  date?: string | null,
  des?: string | null,
  current?: number,
  pageSize?: number
}

/*
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:53:22
 * @LastEditTime: 2021-12-21 11:59:14
 * @LastEditors: ecstAsy
 */

interface ScopedSlots {
  customRender: string | ""
}

export interface ColumnTypes {
  key?: string,
  title: string,
  dataIndex: string,
  scopedSlots?: ScopedSlots | any
}

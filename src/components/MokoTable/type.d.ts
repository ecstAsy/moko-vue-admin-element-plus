/*
 * @Author: ecstAsy
 * @Date: 2021-12-09 14:53:22
 * @LastEditTime: 2022-07-07 10:24:19
 * @LastEditors: ecstAsy
 */

interface ScopedSlots {
  customRender: string
}

export interface ColumnTypes {
  key?: string,
  title: string,
  dataIndex?: string,
  align?: "left" | "center" | "right"
  scopedSlots?: ScopedSlots | any
  fixed?: string
  width?: number
  children?: Array<ColumnTypes>
  remark?: string
  formatter?: any
  [proppName:string]:any
}

export interface PaginationTypes {
  total: number
  pageSize: number
  currentPage: number
}

export interface SumMapTypes {
  [proppName:string]:number
}

export interface MokoTableStateTypes {
  columns: Array<ColumnTypes>
  dataSource: Array<any>
  pagination: PaginationTypes
  [proppName:string]:any
}

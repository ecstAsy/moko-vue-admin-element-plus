/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:52:49
 * @LastEditTime: 2022-07-08 10:13:48
 * @LastEditors: ecstAsy
 */
export interface RootTypes {

}

export interface AppStateTypes {
  isCollapse: boolean,
  allStatus: Array<object>
}

export interface UserTypes {
  token: string
  roles: Array<string>
  userInfo: any
}

export interface PermissionTypes {
  routers: Array<Object>
}

export interface AllStoreTypes extends RootTypes {
  app: AppStateTypes,
  user: UserTypes,
  permission: PermissionTypes
}

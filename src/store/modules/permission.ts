/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:54:55
 * @LastEditTime: 2021-12-22 17:36:35
 * @LastEditors: ecstAsy
 */
import { Module } from "vuex";
import { RootTypes, PermissionTypes } from "@/store/type";
import AsyncRouterMap from "@/config/router.config";

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
const hasPermission = (permission: [], route: any) => {
  if (route.meta && route.meta.permission) {
    let flag = false;
    for (let i = 0, len = permission.length; i < len; i += 1) {
      flag = route.meta.permission.includes(permission[i]);
      if (flag) {
        return true;
      }
    }
    return false;
  }
  return true;
};

const filterAsyncRouter = (routerMap: any, roles: []) => {
  const accessedRouters = routerMap.filter((route: any) => {
    if (hasPermission(roles, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
};

const permission: Module<PermissionTypes, RootTypes> = {
  state: {
    routers: [],
  },
  mutations: {
    SET_ROUTERS: (state: PermissionTypes, routers: []) => {
      state.routers = routers;
    },
  },
  actions: {
    generateRoutes ({ commit }: any, data: any) {
      return new Promise((resolve) => {
        const { roles } = data;
        const accessedRouters = filterAsyncRouter(AsyncRouterMap, roles);
        commit("SET_ROUTERS", accessedRouters);
        resolve(true);
      });
    },
  },
};

export default permission;

/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 15:02:59
 * @LastEditTime: 2022-07-06 17:40:31
 * @LastEditors: ecstAsy
 */
import NProgress from "nprogress";
import { getToken } from "@/utils/util";
import router from "./router";
import { store } from "./store";
import "nprogress/nprogress.css";

const allowList = ["/user/login"];
// @ts-ignore
router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (getToken()) {
    if (to.path === "/user/login") {
      next();
    } else {
      // @ts-ignore
      const hasRoles = store.state.user.roles && store.state.user.roles.length > 0;
      if (hasRoles) {
        // @ts-ignore
        store.dispatch("generateRoutes", { roles: store.state.user.roles });
        next();
      } else {
        // 获取用户信息
        const { roles } = await store.dispatch("getUserInfo");
        // 添加路由信息
        await store.dispatch("generateRoutes", { roles });
        next({ ...to, replace: true });
      }
    }
  } else if (allowList.indexOf(to.path) !== -1) {
    next();
  } else {
    // 未登录的时候会重定向到登录页面
    next(`/user/login?redirect=${to.path}`);
  }
});

router.afterEach(() => {
  NProgress.done();
});

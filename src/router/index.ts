/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 13:37:01
 * @LastEditTime: 2022-10-21 17:10:35
 * @LastEditors: ecstAsy
 */

import { createRouter, createWebHashHistory, Router } from "vue-router";
import AsyncRouterMap from "@/config/router.config";

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: AsyncRouterMap,
});

export default router;

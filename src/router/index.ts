/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 13:37:01
 * @LastEditTime: 2022-03-02 16:54:08
 * @LastEditors: ecstAsy
 */
import { createRouter, createWebHistory, Router } from "vue-router";
import AsyncRouterMap from "@/config/router.config";

const router: Router = createRouter({
  history: createWebHistory(),
  routes: AsyncRouterMap,
});

export default router;

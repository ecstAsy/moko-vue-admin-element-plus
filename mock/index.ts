/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:45:49
 * @LastEditTime: 2022-03-02 16:50:31
 * @LastEditors: ecstAsy
 */
import { MockMethod } from "vite-plugin-mock";

import common from "./modules/common";
import user from "./modules/user";

export default [
  ...common,
  ...user,
] as MockMethod[];

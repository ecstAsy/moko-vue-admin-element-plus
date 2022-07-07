/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:45:49
 * @LastEditTime: 2022-07-07 16:22:17
 * @LastEditors: ecstAsy
 */
// eslint-disable-next-line import/no-extraneous-dependencies
import { MockMethod } from "vite-plugin-mock";

import common from "./modules/common";
import user from "./modules/user";

export default [
  ...common,
  ...user,
] as MockMethod[];

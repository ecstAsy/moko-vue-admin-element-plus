/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 11:45:49
 * @LastEditTime: 2021-12-02 11:55:36
 * @LastEditors: ecstAsy
 */
import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer";

import common from "./modules/common";
import user from "./modules/user";

export default createProdMockServer([
  ...common,
  ...user,
]);

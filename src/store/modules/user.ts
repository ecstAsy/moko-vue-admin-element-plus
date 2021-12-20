/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:54:30
 * @LastEditTime: 2021-12-20 17:16:53
 * @LastEditors: ecstAsy
 */
import { Module } from "vuex";
import { RootTypes, UserTypes } from "@/store/type";
import { setItem, removeItem } from "@/utils/localStorage";
// import { userLogin } from "@/Http";
import { getRandomStr } from "@/utils/util";

const user: Module<UserTypes, RootTypes> = {
  state: {
    token: "",
    roles: [],
  },
  mutations: {
    SET_TOKEN: (state: UserTypes, token: string): void => {
      state.token = token;
    },

    SET_ROLES: (state: UserTypes, roles: Array<string>): void => {
      state.roles = roles;
    },
  },
  actions: {
    // 登陆
    async login({ commit }: any, payload) {
      const { account, password } = payload;
      if (account === "moko.admin" && password === "admin") {
        const res: any = {
          code: 0,
          data: {
            name: "Moko",
            token: getRandomStr(64),
            roles: ["admin"],
          },
          message: "登录成功！",
        };
          // await userLogin(payload);
        if (!res.code) {
          await Promise.all([
            setItem("token", res.data.token),
            commit("SET_TOKEN", res.data.token),
            commit("SET_ROLES", res.data.roles),
          ]);
        }
        return res;
      }
      return {
        code: 1,
        data: null,
        message: "账号或密码错误！",
      };
    },

    // 退出登陆
    logout({ commit }: any) {
      return new Promise((resolve) => {
        removeItem("token");
        commit("SET_TOKEN", null);
        resolve(true);
      });
    },

    // 获取用户角色信息
    getUserInfo({ commit }: any) {
      return new Promise((resolve) => {
        const roles = ["admin"];
        commit("SET_ROLES", roles);
        resolve({
          roles,
        });
      });
    },
  },
};

export default user;

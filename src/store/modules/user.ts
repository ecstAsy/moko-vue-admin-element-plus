/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:54:30
 * @LastEditTime: 2022-07-08 10:13:32
 * @LastEditors: ecstAsy
 */
import { Module } from "vuex";
import { RootTypes, UserTypes } from "@/store/type";
import { LocalStorage, GetRandomStr } from "ecstasy-tools";
// import { userLogin } from "@/Http";

const user: Module<UserTypes, RootTypes> = {
  state: {
    token: "",
    roles: [],
    userInfo: {
      authdata: [],
    },
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
    async login ({ commit }: any, payload) {
      const { account, password } = payload;
      if (account === "moko.admin" && password === "admin") {
        const res: any = {
          code: 0,
          data: {
            name: "Moko",
            token: GetRandomStr(64),
            roles: ["admin"],
          },
          message: "登录成功！",
        };
          // await userLogin(payload);
        if (!res.code) {
          await Promise.all([
            LocalStorage.setItem("moko-token", res.data.token),
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
    logout ({ commit }: any) {
      return new Promise((resolve) => {
        LocalStorage.removeItem("moko-token");
        commit("SET_TOKEN", null);
        resolve(true);
      });
    },

    // 获取用户角色信息
    getUserInfo ({ commit }: any) {
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

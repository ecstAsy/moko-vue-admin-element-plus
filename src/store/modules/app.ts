/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:53:45
 * @LastEditTime: 2021-12-02 14:53:45
 * @LastEditors: ecstAsy
 */
import { Module } from "vuex";
import { RootTypes, AppStateTypes } from "@/store/type";

const app: Module<AppStateTypes, RootTypes> = {
  state: {
    isCollapse: false,
    allStatus: [],
  },
  mutations: {
    SET_COLLAPSE: (state: AppStateTypes) => {
      state.isCollapse = !state.isCollapse;
    },
  },
  actions: {
    setCollpase({ commit }: any) {
      return commit("SET_COLLAPSE");
    },
  },
};

export default app;

/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 14:51:57
 * @LastEditTime: 2021-12-22 17:36:22
 * @LastEditors: ecstAsy
 */
import { InjectionKey } from "vue";
import { Store, createStore, useStore as baseUseStore } from "vuex";
import { RootTypes, AllStoreTypes } from "./type";
import user from "./modules/user";
import permission from "./modules/permission";
import app from "./modules/app";

export const key: InjectionKey<Store<RootTypes>> = Symbol("");

export const store: Store<RootTypes> = createStore({
  modules: {
    user,
    permission,
    app,
  },
});

export function useStore<T = AllStoreTypes> () {
  return baseUseStore<T>(key);
}

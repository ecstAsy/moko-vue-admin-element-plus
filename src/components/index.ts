/*
 * @Author: ecstAsy
 * @Date: 2021-12-02 18:12:25
 * @LastEditTime: 2021-12-05 11:26:58
 * @LastEditors: ecstAsy
 */
import { defineAsyncComponent, App } from "vue";

const vueFiels = import.meta.glob("/src/components/*/index.vue");

const copFiles = { ...vueFiels };
const fileNames = Object.keys(copFiles);

export default {
  install(app: App<Element>) {
    fileNames.map((item) => {
      const cname = item.split("/")[3];
      return app.component(cname, defineAsyncComponent(copFiles[item]));
    });
  },
};

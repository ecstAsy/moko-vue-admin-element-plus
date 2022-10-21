import { createApp } from "vue";
import * as Icons from "@element-plus/icons-vue";
import router from "@/router";
import { store, key } from "@/store";
import App from "./App.vue";

import "./permission";
import "@/styles/index.scss";
import "element-plus/theme-chalk/el-message.css";
import "element-plus/theme-chalk/el-message-box.css";
import "element-plus/theme-chalk/el-notification.css";

const app = createApp(App);

Object.keys(Icons).forEach((icon) => {
  app.component(icon, Icons[icon as keyof typeof Icons]);
});

app.directive("permission", {
  beforeMount(el, binding, vnode) {
    // @ts-ignore
    const { userInfo } = store.state.user;
    const { value } = binding;
    if (!value.length) return false;
    const flag =
      value.filter((v: string) => userInfo.authdata.includes(v)).length > 0;
    if (!flag) {
      const El = el;
      if (!el.parentNode) {
        El.style.display = "none";
      } else {
        El.parentNode.removeChild(el);
      }
    }
    return true;
  },
});

app.use(router).use(store, key).mount("#app");

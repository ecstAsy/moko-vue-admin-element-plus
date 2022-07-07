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

app.use(router)
  .use(store, key)
  .mount("#app");

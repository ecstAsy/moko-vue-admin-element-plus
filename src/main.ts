import { createApp } from "vue";
import * as Icons from "@element-plus/icons-vue";
import router from "@/router";
import { store, key } from "@/store";
import components from "@/components";
import App from "./App.vue";
import "./permission";
import "@/styles/index.scss";

const app = createApp(App);

Object.keys(Icons).forEach((icon) => {
  app.component(icon, Icons[icon as keyof typeof Icons]);
});

app.use(router)
  .use(store, key)
  .use(components)
  .mount("#app");

/*
 * @Author: ecstAsy
 * @Date: 2021-12-01 15:59:24
 * @LastEditTime: 2021-12-01 18:12:31
 * @LastEditors: ecstAsy
 */
import { createI18n } from "vue-i18n";
import zhCN from "./lang/zh_CN";
import enUS from "./lang/en_US";

const lang = "zh-CN";

const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: "zh_CN",
  messages: {
    zh_CN: zhCN,
    en_US: enUS,
  },
});

export default i18n;

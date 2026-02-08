import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import zhTW from "@/locales/zh-TW.json";

Vue.use(VueI18n);

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: "zh-TW",
    fallbackLocale: "en",
    messages: {
      en,
      ja,
      "zh-TW": zhTW,
    },
  });
};

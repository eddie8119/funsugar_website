import Vue from "vue";
import VueI18n from "vue-i18n";

import en from "@/locales/en.json";
import ja from "@/locales/ja.json";
import zhTW from "@/locales/zh-TW.json";

Vue.use(VueI18n);

const DEFAULT_LOCALE = "zh-TW";

function getLocaleFromCookie(cookieString) {
  if (!cookieString) return null;
  const match = cookieString
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith("preferred-locale="));
  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

function getInitialLocale({ req }) {
  if (process.server && req && req.headers?.cookie) {
    return getLocaleFromCookie(req.headers.cookie);
  }
  if (process.client && typeof document !== "undefined") {
    return getLocaleFromCookie(document.cookie);
  }
  return null;
}

export default ({ app, req }) => {
  const savedLocale = getInitialLocale({ req }) || DEFAULT_LOCALE;

  app.i18n = new VueI18n({
    locale: savedLocale,
    fallbackLocale: "en",
    messages: {
      en,
      ja,
      "zh-TW": zhTW,
    },
  });
};

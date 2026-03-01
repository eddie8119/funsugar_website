import { BRAND_LINK } from "./constants/link";

const WEBSITE_URL = BRAND_LINK.website;
const OG_IMAGE = `${WEBSITE_URL}og-cover.png`;
const FAVICON = `${WEBSITE_URL}favicon.png`;

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "KaiJi 開工大吉｜室內工程管理軟體",
    htmlAttrs: {
      lang: "Zh-Hant-TW",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "robots", name: "robots", content: "index, follow" },
      {
        hid: "application-name",
        name: "application-name",
        content: "KaiJi 開工大吉",
      },
      { hid: "author", name: "author", content: "方生糖" },
      {
        hid: "description",
        name: "description",
        content:
          "KaiJi 開工大吉是一款專為室內設計與施工團隊打造的工程管理軟體，整合工地紀錄、任務追蹤與專案排程，幫助監工與設計師降低漏項、誤工與溝通成本，讓每個案場從開工就井然有序。",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "方生糖",
      },
      { hid: "og:locale", property: "og:locale", content: "zh_TW" },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "KaiJi 開工大吉｜室內工程管理軟體",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "使用 KaiJi 記錄工地、追蹤任務與協作，減少工項遺漏的發生，讓室內工程更順、更省。",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: OG_IMAGE,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "KaiJi 開工大吉預覽",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: WEBSITE_URL,
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "KaiJi 開工大吉｜室內工程管理軟體",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "室內設計與工程監工的行動幫手，快速紀錄任務，減少遺漏與重工。",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: OG_IMAGE,
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@funsugar_studio",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      {
        rel: "canonical",
        href: WEBSITE_URL,
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "方生糖",
          url: WEBSITE_URL,
          logo: FAVICON,
          sameAs: [BRAND_LINK.instagram, BRAND_LINK.behance],
          description:
            "KaiJi 開工大吉與室內攝影服務，協助設計師管理工地的利器。",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: BRAND_LINK.email,
          },
          makesOffer: [
            {
              "@type": "Offer",
              name: "KaiJi 開工大吉",
              url: WEBSITE_URL,
              category: "SoftwareApplication",
            },
            {
              "@type": "Offer",
              name: "室內空間攝影服務",
              url: `${WEBSITE_URL}photography`,
              category: "PhotographyService",
            },
          ],
        },
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "@/plugins/fontAwesome.js" },
    "@/plugins/i18n.js",
    { src: "@/plugins/video-embed.js", mode: "client" },
    { src: "@/plugins/gtag.client.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  publicRuntimeConfig: {
    gaMeasurementId: process.env.NUXT_ENV_GA_ID || "",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};

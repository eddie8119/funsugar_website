export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "KaiJi 開工大吉手帳｜室內工程管理與設計師專屬工具",
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
        content: "KaiJi 開工大吉手帳",
      },
      { hid: "author", name: "author", content: "方生糖 Designer Helper" },
      {
        hid: "description",
        name: "description",
        content:
          "KaiJi 開工大吉手帳，專為室內設計與工程監管打造的數位工具，輕鬆記錄工地、降低遺漏與誤工成本，是設計師與工程團隊的高效率助手。",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "KaiJi, 開工大吉手帳, 室內工地管理手帳, 室內工程管理, 工地管理, 室內設計師工具, 室內工程記錄, 室內專案協作, 室內攝影, 台北室內攝影,空間攝影",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "方生糖 Designer Helper",
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
        content: "KaiJi 開工大吉手帳｜室內工程管理與設計師專屬工具",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "使用 KaiJi 記錄工地、追蹤任務與協作，減少工項遺漏的發生，讓室內工程更順、更省。",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "KaiJi 開工大吉手帳預覽",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://designer-helper-funsugar.netlify.app/",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "KaiJi 開工大吉手帳｜室內工程管理與設計師專屬工具",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "室內設計與工程監工的行動幫手，快速紀錄任務，減少遺漏與重工。",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "",
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
        href: "",
      },
    ],
    script: [
      {
        type: "application/ld+json",
        json: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "方生糖 Designer Helper",
          url: "https://designer-helper-funsugar.netlify.app/",
          logo: "https://designer-helper-funsugar.netlify.app/favicon.png",
          sameAs: [
            "https://www.instagram.com/funsugar_not_designer/",
            "https://www.behance.net/WANG81195321",
          ],
          description:
            "KaiJi 開工大吉手帳與室內攝影服務，協助設計師管理工地的利器。",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            email: "funsugar8119@gmail.com",
          },
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

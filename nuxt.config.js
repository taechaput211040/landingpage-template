export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: {
    port: 3004,
    host: "0.0.0.0" // default: localhost
  },
  env: {
    // API_URL: process.env.API_URL,
    // API_URL2 : process.env.API_URL2,
    API_PROXY_URL: process.env.API_PROXY_URL,
    DOMAIN: process.env.DOMAIN,
    TITLE: process.env.TITLE,
    LOGO: process.env.LOGO,
    LOGOTITLE: process.env.LOGOTITLE
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.TITLE || "SMARTBET",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://template.smart-agent.co/"
      },
      { hid: "og:title", property: "og:title", content: "Welcome to SMARTBET" },
      {
        hid: "og:description",
        property: "og:description",
        content:
          " SMARTBET บริการทำเว็ปไซต์ Responsive Template Website เทมเพลตที่รองรับทุกระบบผ่านทุกอุปกรณ์อย่างสมบูรณ์เเบบ"
      },
      { hid: "og:image", property: "og:image", content: "/logo.png" }

      // { hid: "twitter:url", property: "twitter:url", content: "gobet247.com" },
      // { hid: "twitter:title", property: "twitter:title", content: "Welcome to GOBET247" },
      // { hid: "twitter:description", property: "twitter:description", content: "Welcome to GOBET247" },
      // { hid: "twitter:image", property: "twitter:image", content: "/logo-gobet247-4x4.png" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Prompt"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.6.0.js",
        type: "text/javascript"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/Winwheel.js' },
    // { src: '~/plugins/TweenMax.min.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/google-fonts",

    // With options
    [
      "@nuxtjs/google-fonts",
      {
        /* module options */
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // '@nuxtjs/proxy',
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "vue-sweetalert2/nuxt"
    // "vue-slick"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // proxy: true,
    baseURL: "",
    crossDomain: true,
    proxyHeaders: false,
    credentials: false
  },
  proxy: {
    "/get.php": {
      target: "https://aj899.com",
      pathRewrite: { "^/api/": "" }
    }
    // '/public': { target: 'https://zamba777.com',changeOrigin: true, pathRewrite: {'^/public/': '/public'} }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: {
      analyzerMode: "static"
    },
    babel: {
      compact: false,
      plugins: [["@babel/plugin-proposal-private-methods", { loose: true }]]
    },
    maxChunkSize: 300000
    // publicPath:"_nuxt/"
  },
  router: {
    mode: "history"
    // base: "/betkub"
  },
  googleFonts: {
    families: {
      Kanit: true
    }
  }
};

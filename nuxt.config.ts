// https://nuxt.com/docs/api/configuration/nuxt-config

import packageJson from './package.json'

export default defineNuxtConfig({
  devtools: {
    enabled: true
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'ko'
      },
      title: '두투어 | Dootour',
      meta: [
        { property: 'Imagetoolbar', content: 'no' }
        // { name: 'naver-site-verification', content: 'cfa7ee906e99b8415f5f728b2cfed73eacc99001' }
      ],
      script: [
        // { src: 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js', defer: true }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: [
    '~/assets/scss/style.scss'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: true
    }
  ],
  imports: {
    dirs: [
      'composables/**',
      'stores'
    ]
  },
  modules: [
    '@nuxt/image',
    '@nuxt/devtools',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@nuxtjs/i18n',
    '@nuxtjs/device',
    '@nuxtjs/robots',
    '@nuxtjs/stylelint-module',
    'nuxt-icon',
    'nuxt-simple-sitemap',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt'
  ],
  pinia: {
    storesDirs: [
      './stores/**'
    ]
  },
  i18n: {
    langDir: './locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'ko',
        file: 'ko.ts'
      },
      {
        code: 'en',
        file: 'en.ts'
      }
    ],
    defaultLocale: 'ko',
    strategy: 'no_prefix'
  },
  stylelint: {
    lintOnStart: true
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: [
        '/'
      ]
    },
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      }
    }
  },
  vueuse: {
    ssrHandlers: false
  },
  robots: {
    rules: [
      {
        UserAgent: '*',
        Allow: '/'
      }
    ]
  },
  sourcemap: {
    server: true,
    client: true
  },
  site: {
    url: 'https://www.dooramgi.kr'
  },
  runtimeConfig: {
    public: {
      appVersion: JSON.stringify(packageJson.version),
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? process.env.NUXT_ENV_VERCEL_URL ?? 'http://localhost:4040',
      opiKey: process.env.OPINET_KEY,
      skOpenApiKey: process.env.SK_OPEN_API_KEY,
      naverClientId: process.env.NAVER_CLIENT_ID
    }
  }
})

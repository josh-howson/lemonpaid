// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'icon', type: 'image/png', href: '/favicon-192x192.png'},
      ],
      title: "Lemonpaid",
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'pwa-install',
    },
  },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/font.css',
    '@/assets/css/variables.css',
    '@/assets/css/globals.css',
    '@/assets/css/utilities.css',
    '@/assets/css/animation.css',
  ]
});

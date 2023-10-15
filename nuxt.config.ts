// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  typescript: {
    typeCheck: true,
  },
  css: ['@/assets/css/reset.css'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      title: 'Тестовое',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1.0',
        },
      ],
    },
  },
})

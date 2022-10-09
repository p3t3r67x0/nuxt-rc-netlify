export default defineNuxtConfig({
  components: true,
  imports: {
    dirs: ['stores'],
  },
  nitro: {
    preset: 'netlify',
  },
  plugins: [
    '~/plugins/directive.client.js'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-client'
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://nuxt.saleor.cloud/graphql/'
    }
  }
})

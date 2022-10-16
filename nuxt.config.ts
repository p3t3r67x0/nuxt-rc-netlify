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
  buildModules: [
    '@nuxtjs/html-validator'
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: 'https://nuxt.saleor.cloud/graphql/'
    }
  },
  htmlValidator: {
    logLevel: 'verbose',
    usePrettier: false,
    failOnError: false,
    options: {
      extends: [
        'html-validate:document',
        'html-validate:recommended',
        'html-validate:standard'
      ],
      rules: {
        'text-content': 'off',
        'svg-focusable': 'off',
        'no-unknown-elements': 'error',
        // Conflicts or not needed as we use prettier formatting
        'void-style': 'off',
        'no-trailing-whitespace': 'off',
        // Conflict with Nuxt defaults
        'require-sri': 'off',
        'attribute-boolean-style': 'off',
        'doctype-style': 'off'
      }
    }
  }
})

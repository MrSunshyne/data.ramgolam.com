// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'github_pages',
    prerender: {
      routes: ['/'],
    },
  },

  app: {
    head: {
      title: 'Mauritius Open Data',
      titleTemplate: '%s — data.ramgolam.com',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Open data projects for Mauritius — fuel prices, gold prices, internet plans, power outages, and more. All data is freely accessible.' },
        { name: 'author', content: 'Sandeep Ramgolam' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://data.ramgolam.com' },
        { property: 'og:title', content: 'Mauritius Open Data' },
        { property: 'og:description', content: 'Open data projects for Mauritius — fuel prices, gold prices, internet plans, power outages, and more.' },
        { property: 'og:image', content: 'https://data.ramgolam.com/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@MrSunshyne' },
        { name: 'twitter:title', content: 'Mauritius Open Data' },
        { name: 'twitter:description', content: 'Open data projects for Mauritius — fuel prices, gold prices, internet plans, power outages, and more.' },
        { name: 'twitter:image', content: 'https://data.ramgolam.com/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://data.ramgolam.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Syne:wght@700;800&display=swap',
        },
      ],
      script: [
        {
          src: 'https://cloud.umami.is/script.js',
          defer: true,
          'data-website-id': 'REPLACE_WITH_UMAMI_WEBSITE_ID',
        },
      ],
    },
  },
})

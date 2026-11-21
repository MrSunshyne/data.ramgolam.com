// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'github_pages',
    prerender: {
      routes: ['/'],
    },
  },

  app: {
    head: {
      title: 'Sandeep Ramgolam // Data Projects',
      titleTemplate: '%s',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Personal data visualization and open data projects by Sandeep Ramgolam.' },
        { name: 'author', content: 'Sandeep Ramgolam' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://data.ramgolam.com' },
        { property: 'og:title', content: 'Sandeep Ramgolam // Data Projects' },
        { property: 'og:description', content: 'Personal data visualization and open data projects.' },
        { property: 'og:image', content: 'https://data.ramgolam.com/og.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@MrSunshyne' },
        { name: 'twitter:title', content: 'Sandeep Ramgolam // Data Projects' },
        { name: 'twitter:description', content: 'Personal data visualization and open data projects.' },
        { name: 'twitter:image', content: 'https://data.ramgolam.com/og.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: 'https://data.ramgolam.com' },
        // The fonts (assets/css/main.css), fetched straight away so they are there for the first paint.
        { rel: 'preload', href: '/fonts/satoshi-400.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/satoshi-700.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        { rel: 'preload', href: '/fonts/clash-display-700.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
      ],
      script: [
        {
          src: 'https://gc.zgo.at/count.js',
          async: true,
          'data-goatcounter': 'https://data-ramgolam.goatcounter.com/count',
        },
      ],
    },
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  nitro: {
    preset: 'github_pages',
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
        { rel: 'preconnect', href: 'https://api.fontshare.com' },
        {
          rel: 'stylesheet',
          href: 'https://api.fontshare.com/v2/css?f[]=clash-display@700&f[]=satoshi@400,500,700&display=swap',
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

<template>
    <div class="ma-layout">
      <!-- Left Side: Fixed Sidebar -->
      <aside class="ma-sidebar">
        <div class="ma-hero-inner">
          <header class="ma-profile">
            <span class="ma-name">SANDEEP RAMGOLAM</span>
            <span class="ma-label">/ DATA ARCHIVIST</span>
          </header>
          <h1 class="ma-title">Personal <br />Data Projects</h1>
          <p class="ma-desc">Visualizing Mauritian datasets into machine-readable formats and interactive experiences. Exploring finance, infrastructure, and national benchmarks.</p>
          <div class="ma-hero-links">
            <a href="https://sandeep.ramgolam.com" target="_blank" class="ma-link-btn">Portfolio</a>
            <a href="https://github.com/MrSunshyne" target="_blank" class="ma-link-btn">GitHub</a>
            <a href="https://stats.ramgolam.com" target="_blank" class="ma-link-btn">Traffic</a>
          </div>
        </div>
        <div class="ma-noise"></div>
      </aside>

      <!-- Right Side: Scrollable Feed -->
      <main class="ma-feed">
        <div class="ma-feed-grid">
          
          <!-- Projects -->
          <div
            v-for="project in projects"
            :key="project.name"
            class="ma-card ma-project"
          >
            <a :href="project.url" target="_blank" class="ma-project-link">
              <div class="ma-project-info">
                <div class="ma-project-content">
                  <h2 class="ma-project-name">{{ project.name }}</h2>
                  <p class="ma-project-sub">{{ project.tagline }}</p>
                </div>
              </div>
              <div 
                class="ma-project-thumb"
                :style="{ backgroundImage: `url(${project.image})` }"
              ></div>
            </a>
            <a v-if="project.github" :href="project.github" target="_blank" class="ma-project-github" title="View on GitHub">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
            </a>
          </div>

          <!-- Datasets -->
          <a
            v-for="ds in datasets"
            :key="ds.name"
            :href="ds.url"
            target="_blank"
            class="ma-card ma-project ma-dataset-row"
          >
            <div class="ma-project-info">
              <div class="ma-project-content">
                <h2 class="ma-project-name">{{ ds.name }}</h2>
                <p class="ma-project-sub">JSON Dataset</p>
              </div>
            </div>
            <div
              class="ma-project-thumb"
              :style="{ backgroundImage: `url(${ds.image})` }"
            ></div>
          </a>
        </div>
      </main>
    </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'Fuel Prices',
    tagline: 'Historical Price Analysis',
    url: 'https://fuel-prices.ramgolam.com',
    github: 'https://github.com/MrSunshyne/mauritius-fuel-prices',
    image: 'https://fuel-prices.ramgolam.com/og-image.png'
  },
  {
    name: 'Gold Prices',
    tagline: 'BOM Daily Rates',
    url: 'https://gold.ramgolam.com',
    github: 'https://github.com/MrSunshyne/gold-prices',
    image: 'https://gold.ramgolam.com/og-image.png'
  },
  {
    name: 'Internet Prices',
    tagline: 'Connectivity Benchmark',
    url: 'https://mobile-data.ramgolam.com',
    github: 'https://github.com/MrSunshyne/mauritius-internet-prices',
    image: 'https://mobile-data.ramgolam.com/og-image.png'
  },
  {
    name: 'Power Outages',
    tagline: 'CEB Infrastructure Logs',
    url: 'https://courant.ramgolam.com',
    github: 'https://github.com/MrSunshyne/mauritius-power-outages',
    image: 'https://courant.ramgolam.com/og-image.png'
  },
  {
    name: 'Reservoirs',
    tagline: 'Water Storage in 3D',
    url: 'https://reservoirs.ramgolam.com',
    github: 'https://github.com/MrSunshyne/mauritius-reservoirs',
    image: 'https://reservoirs.ramgolam.com/og-image.jpg'
  },
  {
    name: 'Cloud Hosting',
    tagline: 'Hosting Provider Benchmark',
    url: 'https://github.com/MrSunshyne/cloud-hosting-mauritius',
    github: 'https://github.com/MrSunshyne/cloud-hosting-mauritius',
    image: 'https://raw.githubusercontent.com/MrSunshyne/cloud-hosting-mauritius/main/public/images/og-image.png'
  }
]

const datasets = [
  { name: 'Fuel Dataset', url: 'https://github.com/MrSunshyne/mauritius-dataset-fuel', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-fuel/main/public/images/fuel.png' },
  { name: 'Gold Dataset', url: 'https://github.com/MrSunshyne/mauritius-dataset-gold', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-gold/main/og-image.png' },
  { name: 'Electricity Dataset', url: 'https://github.com/MrSunshyne/mauritius-dataset-electricity', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-electricity/main/public/images/electricity.png' },
  { name: 'Meteo Dataset', url: 'https://github.com/MrSunshyne/mauritius-dataset-meteo', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-meteo/master/public/images/og-image.png' },
  { name: 'Meetups Dataset', url: 'https://github.com/MrSunshyne/mauritius-meetups-data', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-meetups-data/main/public/images/og-image.png' },
  { name: 'Reservoirs Dataset', url: 'https://github.com/MrSunshyne/mauritius-dataset-reservoirs', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-dataset-reservoirs/main/og-image.jpg' }
]
</script>

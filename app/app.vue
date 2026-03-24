<template>
  <div class="ma-root">
    <NuxtRouteAnnouncer />

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
    <!-- Screen Overlay Texture -->
    <div class="ma-texture"></div>
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
    url: 'https://power-outages-mauritius.netlify.app',
    github: 'https://github.com/MrSunshyne/mauritius-power-outages',
    image: 'https://power-outages-mauritius.netlify.app/__og-image__/image/og.png'
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
  { name: 'Meetups Dataset', url: 'https://github.com/MrSunshyne/mauritius-meetups-data', image: 'https://raw.githubusercontent.com/MrSunshyne/mauritius-meetups-data/main/public/images/og-image.png' }
]
</script>

<style>
/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --ma-bg:         #0a0a0a;
  --ma-border:     #1d1d1d;
  --ma-card-bg:    #0f0f0f;
  --ma-text:       #fcfcfc;
  --ma-text-muted: #666;
  --ma-accent:     #ff3e3e;
  
  --ma-font-disp:  'Clash Display', sans-serif;
  --ma-font-body:  'Satoshi', sans-serif;
}

html, body {
  background: var(--ma-bg);
  color: var(--ma-text);
  font-family: var(--ma-font-body);
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }

/* ── Layout ── */
.ma-root {
  min-height: 100vh;
  position: relative;
}

.ma-layout {
  display: flex;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
}

/* ── Sidebar (Fixed Left) ── */
.ma-sidebar {
  width: 420px;
  flex-shrink: 0;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 1px solid var(--ma-border);
  background: var(--ma-bg);
}

.ma-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
}

.ma-name { font-weight: 700; letter-spacing: 0.05em; font-size: 13px; }
.ma-label { font-size: 13px; color: var(--ma-text-muted); }

.ma-title {
  font-family: var(--ma-font-disp);
  font-size: clamp(40px, 5vw, 72px);
  line-height: 0.95;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.ma-desc {
  font-size: 18px;
  color: var(--ma-text-muted);
  max-width: 400px;
  line-height: 1.5;
  margin-bottom: 40px;
}

.ma-hero-links {
  display: flex;
  gap: 16px;
}

.ma-link-btn {
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 10px 20px;
  border: 1px solid var(--ma-border);
  transition: all 0.2s;
}

.ma-link-btn:hover {
  background: var(--ma-text);
  color: var(--ma-bg);
}

/* ── Feed (Scrollable Right) ── */
.ma-feed {
  flex: 1;
  min-width: 0;
  padding: 0 48px;
}

.ma-feed-grid {
  display: flex;
  flex-direction: column;
  gap: 64px;
  padding-top: 40vh;
  padding-bottom: 40vh;
}

/* ── Cards ── */
.ma-card {
  padding: 0;
  position: relative;
  overflow: hidden;
}

/* ── Projects (Row Layout) ── */
.ma-project {
  display: flex;
  align-items: stretch;
  min-height: 280px;
}

.ma-project-link {
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: flex-end;
}

.ma-project-info {
  flex: 1;
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: right;
  position: relative;
  z-index: 1;
}

.ma-project-thumb {
  flex-shrink: 0;
  width: 50%;
  max-width: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  position: relative;
  z-index: 1;
}

.ma-project-overlay {
  display: none; 
}

.ma-project-content {}

.ma-project-name {
  font-family: var(--ma-font-disp);
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.1;
}

.ma-project-sub {
  font-size: 16px;
  color: var(--ma-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.ma-project-github {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  color: var(--ma-text-muted);
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}

.ma-project:hover .ma-project-github { opacity: 1; }

.ma-project-github:hover {
  color: var(--ma-text);
  border-color: var(--ma-border);
  background: var(--ma-card-bg);
}




/* ── Textures ── */
.ma-texture {
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.035;
}

.ma-noise {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 100% 0%, rgba(255, 62, 62, 0.03) 0%, transparent 50%);
  pointer-events: none;
}

/* ── Scroll-Driven Animations ── */
@supports (animation-timeline: view()) {
  @keyframes ma-scale {
    0% {
      opacity: 0.4;
      transform: scale(0.9);
      filter: blur(0);
    }
    15% {
      opacity: 0.6;
      transform: scale(0.93);
      filter: blur(0);
    }
    40% {
      opacity: 1;
      transform: scale(1.08);
      filter: blur(0);
    }
    60% {
      opacity: 1;
      transform: scale(1.08);
      filter: blur(0);
    }
    85% {
      opacity: 0.6;
      transform: scale(0.93);
      filter: blur(0);
    }
    100% {
      opacity: 0.4;
      transform: scale(0.9);
      filter: blur(2px);
    }
  }

  .ma-project {
    animation: ma-scale linear forwards;
    animation-timeline: view();
    animation-range: cover 0% cover 100%;
    transform-origin: right center;
  }
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .ma-sidebar { width: 340px; padding: 60px 40px; }
  .ma-feed { padding: 0 32px; }
  .ma-project-name { font-size: 36px; }
}

@media (max-width: 1000px) {
  .ma-layout { flex-direction: column; }
  .ma-sidebar {
    width: 100%;
    height: auto;
    position: relative;
    border-right: none;
    border-bottom: 1px solid var(--ma-border);
    padding: 60px 40px;
  }
  .ma-feed { width: 100%; padding: 0 32px; }
  .ma-feed-grid { padding-top: 20vh; padding-bottom: 20vh; }
}

@media (max-width: 600px) {
  .ma-sidebar { padding: 48px 24px; }
  .ma-feed { padding: 0 16px; }
  .ma-title { font-size: 48px; }
  .ma-project { min-height: 200px; }
  .ma-project-name { font-size: 28px; }
  .ma-project-thumb { width: 100%; height: 200px; background-position: center; margin-top: 24px; }
  .ma-project-link { flex-direction: column; }
  .ma-project-info { text-align: left; align-items: flex-start; padding: 24px 16px; }
  .ma-feed-grid { gap: 40px; }
}
</style>

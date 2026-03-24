<template>
  <div class="site">
    <NuxtRouteAnnouncer />

    <!-- Nav -->
    <header class="nav">
      <div class="nav-inner">
        <a href="/" class="nav-logo">
          <span class="nav-logo-icon" aria-hidden="true">◈</span>
          <span>data.ramgolam.com</span>
        </a>
        <a
          href="https://github.com/MrSunshyne"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-gh"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      </div>
    </header>

    <main>
      <!-- Hero -->
      <section class="hero">
        <div class="hero-inner">
          <div class="hero-badge">
            <span class="badge-dot" aria-hidden="true"></span>
            Open Data Initiative
          </div>
          <h1 class="hero-title">
            Mauritius<br />
            <span class="hero-accent">Open Data</span>
          </h1>
          <p class="hero-desc">
            Making public data about Mauritius accessible, visual, and usable.
            Free datasets and live dashboards for fuel, gold, internet prices, and more.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-num">5</span>
              <span class="stat-label">Live Apps</span>
            </div>
            <div class="stat-divider" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-num">5</span>
              <span class="stat-label">Open Datasets</span>
            </div>
            <div class="stat-divider" aria-hidden="true"></div>
            <div class="stat">
              <span class="stat-num">20+</span>
              <span class="stat-label">Years of Data</span>
            </div>
          </div>
        </div>
        <div class="hero-glow" aria-hidden="true"></div>
      </section>

      <!-- Live Apps -->
      <section class="section">
        <div class="section-inner">
          <div class="section-header">
            <span class="section-tag section-tag--live">Live Apps</span>
            <h2 class="section-title">Interactive dashboards</h2>
            <p class="section-sub">Data visualized and ready to explore</p>
          </div>

          <div class="grid grid--apps">
            <!-- Fuel Prices -->
            <a
              href="https://fuel.ramgolam.com"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--live card--featured"
              data-umami-event="click-fuel"
            >
              <div class="card-head">
                <div class="card-icon">⛽</div>
                <span class="card-badge card-badge--live">Live</span>
              </div>
              <h3 class="card-title">Fuel Prices</h3>
              <p class="card-desc">Petrol &amp; diesel price history since 2002 with trend analysis and projections.</p>
              <div class="card-meta">
                <span class="card-source">Source: STC</span>
                <span class="card-since">Since 2002</span>
              </div>
              <div class="card-footer">
                <span class="card-url">fuel.ramgolam.com</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <!-- Gold Prices -->
            <a
              href="https://gold.ramgolam.com"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--live"
              data-umami-event="click-gold"
            >
              <div class="card-head">
                <div class="card-icon">◈</div>
                <span class="card-badge card-badge--live">Live</span>
              </div>
              <h3 class="card-title">Gold Prices</h3>
              <p class="card-desc">Daily gold prices since 2004 across all karats, including Dodo coins.</p>
              <div class="card-meta">
                <span class="card-source">Source: BOM</span>
                <span class="card-since">Since 2004</span>
              </div>
              <div class="card-footer">
                <span class="card-url">gold.ramgolam.com</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <!-- Internet Prices -->
            <a
              href="https://mobile-data.ramgolam.com"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--live"
              data-umami-event="click-internet"
            >
              <div class="card-head">
                <div class="card-icon">📶</div>
                <span class="card-badge card-badge--live">Live</span>
              </div>
              <h3 class="card-title">Internet Prices</h3>
              <p class="card-desc">Mobile data plan pricing comparison across all providers in Mauritius.</p>
              <div class="card-meta">
                <span class="card-source">Source: ISPs</span>
                <span class="card-since">Current</span>
              </div>
              <div class="card-footer">
                <span class="card-url">mobile-data.ramgolam.com</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <!-- Power Outages -->
            <a
              href="https://power-outages-mauritius.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--live"
              data-umami-event="click-power"
            >
              <div class="card-head">
                <div class="card-icon">⚡</div>
                <span class="card-badge card-badge--live">Live</span>
              </div>
              <h3 class="card-title">Power Outages</h3>
              <p class="card-desc">Power outage tracker for Mauritius — history, frequency, and affected regions.</p>
              <div class="card-meta">
                <span class="card-source">Source: CEB</span>
                <span class="card-since">Current</span>
              </div>
              <div class="card-footer">
                <span class="card-url">power-outages-mauritius.netlify.app</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <!-- Cloud Hosting -->
            <a
              href="https://github.com/MrSunshyne/cloud-hosting-mauritius"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--live card--wip"
              data-umami-event="click-cloud"
            >
              <div class="card-head">
                <div class="card-icon">☁</div>
                <span class="card-badge card-badge--wip">WIP</span>
              </div>
              <h3 class="card-title">Cloud Hosting</h3>
              <p class="card-desc">Cloud and hosting providers available in Mauritius, with specs and pricing.</p>
              <div class="card-meta">
                <span class="card-source">Source: Providers</span>
                <span class="card-since">In progress</span>
              </div>
              <div class="card-footer">
                <span class="card-url">GitHub repo</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- Datasets -->
      <section class="section section--datasets">
        <div class="section-inner">
          <div class="section-header">
            <span class="section-tag section-tag--data">Open Datasets</span>
            <h2 class="section-title">Raw data, free to use</h2>
            <p class="section-sub">Machine-readable datasets, updated regularly, licensed openly</p>
          </div>

          <div class="grid grid--datasets">
            <a
              href="https://github.com/MrSunshyne/mauritius-dataset-fuel"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--dataset"
              data-umami-event="dataset-fuel"
            >
              <div class="card-head">
                <div class="card-icon card-icon--sm">⛽</div>
                <span class="card-badge card-badge--data">Dataset</span>
              </div>
              <h3 class="card-title">Fuel Dataset</h3>
              <p class="card-desc">Daily fuel prices &amp; Brent crude oil data since 2002.</p>
              <div class="card-footer">
                <span class="card-url">mauritius-dataset-fuel</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <a
              href="https://github.com/MrSunshyne/mauritius-dataset-gold"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--dataset"
              data-umami-event="dataset-gold"
            >
              <div class="card-head">
                <div class="card-icon card-icon--sm">◈</div>
                <span class="card-badge card-badge--data">Dataset</span>
              </div>
              <h3 class="card-title">Gold Dataset</h3>
              <p class="card-desc">Daily gold prices across all karats (9k–24k) since 2004.</p>
              <div class="card-footer">
                <span class="card-url">mauritius-dataset-gold</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <a
              href="https://github.com/MrSunshyne/mauritius-dataset-electricity"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--dataset"
              data-umami-event="dataset-electricity"
            >
              <div class="card-head">
                <div class="card-icon card-icon--sm">⚡</div>
                <span class="card-badge card-badge--data">Dataset</span>
              </div>
              <h3 class="card-title">Electricity Dataset</h3>
              <p class="card-desc">Power outage history with dates, times, and affected areas.</p>
              <div class="card-footer">
                <span class="card-url">mauritius-dataset-electricity</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <a
              href="https://github.com/MrSunshyne/mauritius-dataset-meteo"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--dataset"
              data-umami-event="dataset-meteo"
            >
              <div class="card-head">
                <div class="card-icon card-icon--sm">🌦</div>
                <span class="card-badge card-badge--data">Dataset</span>
              </div>
              <h3 class="card-title">Meteo Dataset</h3>
              <p class="card-desc">Weather and meteorological statistics across Mauritius.</p>
              <div class="card-footer">
                <span class="card-url">mauritius-dataset-meteo</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>

            <a
              href="https://github.com/MrSunshyne/mauritius-meetups-data"
              target="_blank"
              rel="noopener noreferrer"
              class="card card--dataset"
              data-umami-event="dataset-meetups"
            >
              <div class="card-head">
                <div class="card-icon card-icon--sm">◉</div>
                <span class="card-badge card-badge--data">Dataset</span>
              </div>
              <h3 class="card-title">Meetups Dataset</h3>
              <p class="card-desc">Community tech meetup data — events, speakers, and attendance.</p>
              <div class="card-footer">
                <span class="card-url">mauritius-meetups-data</span>
                <span class="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="cta-section">
        <div class="cta-inner">
          <p class="cta-label">Open source &amp; free to use</p>
          <h2 class="cta-title">Want to contribute or use the data?</h2>
          <p class="cta-desc">All datasets are publicly available on GitHub. Pull requests welcome.</p>
          <a
            href="https://github.com/MrSunshyne"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-btn"
            data-umami-event="cta-github"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-left">
          <span class="footer-name">Sandeep Ramgolam</span>
          <span class="footer-sep" aria-hidden="true">·</span>
          <a
            href="https://ramgolam.com"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >ramgolam.com</a>
        </div>
        <div class="footer-right">
          <a
            href="https://github.com/MrSunshyne"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Mauritius Open Data',
})
</script>

<style>
/* ── Reset & base ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:         #080809;
  --bg-card:    #0f0f11;
  --bg-card-h:  #141418;
  --border:     rgba(255, 255, 255, 0.07);
  --border-h:   rgba(255, 255, 255, 0.13);

  --text-1:     #f0f0f2;
  --text-2:     #9393a0;
  --text-3:     #5a5a6a;

  --green:      #22c55e;
  --green-dim:  rgba(34, 197, 94, 0.12);
  --green-glow: rgba(34, 197, 94, 0.06);

  --amber:      #f59e0b;
  --amber-dim:  rgba(245, 158, 11, 0.12);

  --blue-glow:  rgba(99, 102, 241, 0.15);

  --radius-sm:  6px;
  --radius:     12px;
  --radius-lg:  18px;

  --font-body:  'Inter', system-ui, -apple-system, sans-serif;
  --font-disp:  'Syne', var(--font-body);
}

html { font-size: 16px; scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text-1);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a { color: inherit; text-decoration: none; }

/* ── Layout ── */
.site { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }

/* ── Nav ── */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid var(--border);
  background: rgba(8, 8, 9, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.nav-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-1);
  letter-spacing: -0.01em;
  transition: opacity 0.15s;
}
.nav-logo:hover { opacity: 0.7; }
.nav-logo-icon {
  color: var(--green);
  font-size: 16px;
}
.nav-gh {
  color: var(--text-2);
  transition: color 0.15s;
  display: flex;
  align-items: center;
}
.nav-gh:hover { color: var(--text-1); }

/* ── Hero ── */
.hero {
  position: relative;
  overflow: hidden;
  padding: 100px 24px 80px;
  text-align: center;
}
.hero-inner {
  max-width: 680px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.hero-glow {
  position: absolute;
  top: -120px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(ellipse at center, var(--blue-glow) 0%, transparent 70%);
  pointer-events: none;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--green);
  background: var(--green-dim);
  border: 1px solid rgba(34, 197, 94, 0.2);
  padding: 5px 12px;
  border-radius: 100px;
  margin-bottom: 28px;
}
.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--green);
  animation: pulse 2s ease-in-out infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.hero-title {
  font-family: var(--font-disp);
  font-size: clamp(44px, 8vw, 80px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text-1);
  margin-bottom: 20px;
}
.hero-accent {
  background: linear-gradient(135deg, var(--green) 0%, #16a34a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-desc {
  font-size: 17px;
  color: var(--text-2);
  max-width: 520px;
  margin: 0 auto 40px;
  line-height: 1.7;
}
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}
.stat-num {
  font-family: var(--font-disp);
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-1);
}
.stat-label {
  font-size: 12px;
  color: var(--text-3);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.stat-divider {
  width: 1px;
  height: 32px;
  background: var(--border);
}

/* ── Sections ── */
.section {
  padding: 64px 24px;
}
.section--datasets {
  background: linear-gradient(180deg, transparent 0%, rgba(245, 158, 11, 0.02) 100%);
}
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
}
.section-header {
  margin-bottom: 40px;
}
.section-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  margin-bottom: 12px;
}
.section-tag--live {
  color: var(--green);
  background: var(--green-dim);
}
.section-tag--data {
  color: var(--amber);
  background: var(--amber-dim);
}
.section-title {
  font-family: var(--font-disp);
  font-size: clamp(24px, 4vw, 34px);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin-bottom: 8px;
}
.section-sub {
  font-size: 15px;
  color: var(--text-2);
}

/* ── Grid ── */
.grid {
  display: grid;
  gap: 16px;
}
.grid--apps {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto;
}
.grid--datasets {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

/* Bento-style featured card */
.grid--apps .card--featured {
  grid-column: span 2;
}

/* ── Cards ── */
.card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
  cursor: pointer;
  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
  position: relative;
  overflow: hidden;
  gap: 0;
}
.card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}
.card--live::before {
  background: radial-gradient(ellipse at top left, var(--green-glow), transparent 60%);
}
.card--dataset::before {
  background: radial-gradient(ellipse at top left, rgba(245, 158, 11, 0.04), transparent 60%);
}
.card:hover {
  background: var(--bg-card-h);
  border-color: var(--border-h);
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
.card:hover::before { opacity: 1; }

.card--live:hover { border-color: rgba(34, 197, 94, 0.25); }
.card--dataset:hover { border-color: rgba(245, 158, 11, 0.25); }

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.card-icon {
  font-size: 28px;
  line-height: 1;
}
.card-icon--sm { font-size: 20px; }

.card-badge {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 100px;
}
.card-badge--live {
  color: var(--green);
  background: var(--green-dim);
  border: 1px solid rgba(34, 197, 94, 0.2);
}
.card-badge--data {
  color: var(--amber);
  background: var(--amber-dim);
  border: 1px solid rgba(245, 158, 11, 0.2);
}
.card-badge--wip {
  color: var(--text-2);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
}

.card-title {
  font-family: var(--font-disp);
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-1);
  margin-bottom: 8px;
}
.card--featured .card-title { font-size: 22px; }

.card-desc {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 16px;
}

.card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}
.card-source, .card-since {
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.03em;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  margin-top: auto;
}
.card-url {
  font-size: 12px;
  color: var(--text-3);
  font-family: ui-monospace, 'SF Mono', monospace;
}
.card-arrow {
  font-size: 16px;
  color: var(--text-3);
  transition: color 0.15s, transform 0.15s;
}
.card:hover .card-arrow {
  color: var(--text-1);
  transform: translate(2px, -2px);
}
.card--live:hover .card-arrow { color: var(--green); }
.card--dataset:hover .card-arrow { color: var(--amber); }
.card--live:hover .card-url { color: var(--text-2); }
.card--dataset:hover .card-url { color: var(--text-2); }

/* ── CTA ── */
.cta-section {
  padding: 80px 24px;
  border-top: 1px solid var(--border);
  text-align: center;
}
.cta-inner {
  max-width: 520px;
  margin: 0 auto;
}
.cta-label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 12px;
}
.cta-title {
  font-family: var(--font-disp);
  font-size: clamp(22px, 4vw, 30px);
  font-weight: 800;
  letter-spacing: -0.025em;
  color: var(--text-1);
  margin-bottom: 12px;
}
.cta-desc {
  font-size: 15px;
  color: var(--text-2);
  margin-bottom: 28px;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  background: var(--text-1);
  color: var(--bg);
  font-size: 14px;
  font-weight: 600;
  border-radius: var(--radius);
  transition: opacity 0.15s, transform 0.15s;
}
.cta-btn:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

/* ── Footer ── */
.footer {
  border-top: 1px solid var(--border);
  padding: 20px 24px;
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.footer-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.footer-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text-2);
}
.footer-sep { color: var(--text-3); }
.footer-link {
  font-size: 13px;
  color: var(--text-3);
  transition: color 0.15s;
}
.footer-link:hover { color: var(--text-1); }
.footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

/* ── Responsive ── */
@media (max-width: 720px) {
  .hero { padding: 60px 20px 48px; }
  .section { padding: 48px 20px; }
  .grid--apps .card--featured { grid-column: span 1; }
  .hero-stats { gap: 20px; }
  .stat-divider { height: 24px; }
}

@media (max-width: 480px) {
  .nav-inner { padding: 0 16px; }
  .hero-badge { font-size: 11px; }
  .grid { gap: 12px; }
  .card { padding: 20px; }
  .cta-section { padding: 56px 20px; }
  .footer { padding: 16px 20px; }
}
</style>

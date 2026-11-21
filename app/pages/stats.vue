<template>
  <div class="ma-layout">
    <aside class="ma-sidebar">
      <div class="ma-hero-inner">
        <header class="ma-profile">
          <NuxtLink to="/" class="ma-name">SANDEEP RAMGOLAM</NuxtLink>
          <span class="ma-label">/ TRAFFIC</span>
        </header>
        <h1 class="ma-title">Project <br />Traffic</h1>
        <p class="ma-desc">Page visits to each project, per day. Counted with GoatCounter; on a few sites, earlier days come from Umami or Cloudflare. No cookies, nothing that identifies anyone. Days are in Mauritius time.</p>
        <div class="st-ranges" role="group" aria-label="Period">
          <button
            v-for="r in RANGES"
            :key="r.days"
            type="button"
            class="ma-link-btn"
            :class="{ active: range === r.days }"
            :aria-pressed="range === r.days"
            @click="range = r.days"
          >
            {{ r.label }}
          </button>
        </div>
        <p v-if="data" class="st-summary">
          {{ sites.some((s) => s.estimated) ? 'About ' : '' }}{{ visitCount(grandTotal) }} from {{ fmtDay(data.from) }} to today<template v-if="updated">, updated {{ updated }}</template>.
        </p>
      </div>
      <div class="ma-noise"></div>
    </aside>

    <main class="ma-feed">
      <p v-if="error" class="st-message">The figures could not be loaded. Try again in a moment.</p>
      <p v-else-if="!data" class="st-message">Loading…</p>
      <ol v-else class="st-sites">
        <li v-for="s in sites" :key="s.id" class="st-site" :class="{ quiet: !s.total }">
          <div class="st-head">
            <a :href="s.url" target="_blank" class="st-name">{{ s.name }}</a>
            <span class="st-total" :title="s.estimated ? 'Includes estimates from a sample' : undefined">{{ s.estimated ? '≈ ' : '' }}{{ fmt(s.total) }}<small> {{ s.total === 1 ? 'visit' : 'visits' }}</small></span>
            <span v-if="s.change" class="st-change" :class="s.change.tone" :title="`${visitCount(s.previous ?? 0)} in the ${data.days} days before`">{{ s.change.text }}</span>
          </div>
          <svg class="st-chart" :viewBox="`0 0 ${s.bars.length} 100`" preserveAspectRatio="none" role="img" :aria-label="`${s.name}: ${visitCount(s.total)}`">
            <template v-for="(b, i) in s.bars" :key="i">
              <rect
                v-if="b.visits !== null"
                :x="i + 0.15"
                :y="100 - height(b.visits, s.peak)"
                width="0.7"
                :height="height(b.visits, s.peak)"
                :class="{ now: i === s.bars.length - 1, imported: b.source !== 'goatcounter' }"
              >
                <title>{{ b.label }}: {{ s.estimated && b.source !== 'goatcounter' ? '≈ ' : '' }}{{ visitCount(b.visits) }}{{ b.source !== 'goatcounter' ? `, ${sourceInfo(b.source).short}` : '' }}</title>
              </rect>
            </template>
          </svg>
          <div class="st-axis">
            <span>{{ s.bars[0]?.label }}</span>
            <span v-if="s.peak">busiest {{ s.weekly ? 'week' : 'day' }}: {{ fmt(s.peak) }}</span>
            <span>{{ s.weekly ? 'this week' : 'today' }}</span>
          </div>
          <p v-if="s.since || s.sources.length" class="st-note">
            <template v-if="s.since">Counted since {{ s.since }}. </template>
            <span v-for="src in s.sources" :key="src.name" class="st-imported">
              {{ fmtDay(src.from) }} – {{ fmtDay(src.to) }}: {{ sourceInfo(src.name).what }}, before GoatCounter.
            </span>
          </p>
        </li>
      </ol>
    </main>
  </div>
</template>

<script setup lang="ts">
interface TrafficSite {
  id: string
  name: string
  url: string
  total: number
  previous: number | null
  visits: (number | null)[]
  sources: { name: string; from: string; to: string }[]
}

// https://stats.ramgolam.com/api/traffic (the stats-worker repo)
interface Traffic {
  from: string
  to: string
  days: number
  updated: string | null
  sites: TrafficSite[]
}

useHead({
  title: 'Traffic // Data Projects',
  meta: [{ name: 'description', content: 'Page visits per day to each of Sandeep Ramgolam’s data projects.' }],
})

const RANGES = [
  { days: '30', label: '30 days' },
  { days: '90', label: '90 days' },
  { days: '365', label: '1 year' },
  { days: 'all', label: 'All' },
]
// Longer periods are drawn a week to a bar.
const WEEKLY_FROM = 120

const range = ref('90')
const { data, error } = useFetch<Traffic>('https://stats.ramgolam.com/api/traffic', {
  query: { days: range },
  server: false,
})

const weekly = computed(() => (data.value?.days ?? 0) >= WEEKLY_FROM)

// Counters that some days were imported from, before GoatCounter was added. Estimates come
// from a sample, so a single day says little: sites with them are drawn a week to a bar.
const SOURCES: Record<string, { short: string; what: string; estimate: boolean }> = {
  umami: { short: 'counted by Umami', what: 'visitors counted by Umami', estimate: false },
  cloudflare: {
    short: 'estimated by Cloudflare',
    what: 'page views estimated by Cloudflare Web Analytics from a sample of about 1 in 10, shown by week',
    estimate: true,
  },
}
const sourceInfo = (name: string | null) => SOURCES[name ?? ''] ?? { short: `from ${name}`, what: `from ${name}`, estimate: false }

const dayFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' })
const fmtDay = (day: string) => dayFormat.format(new Date(`${day}T00:00:00Z`))
const fmt = (n: number) => n.toLocaleString('en-GB')
const visitCount = (n: number) => `${fmt(n)} ${n === 1 ? 'visit' : 'visits'}`
const addDays = (day: string, n: number) => new Date(Date.parse(`${day}T00:00:00Z`) + n * 86400_000).toISOString().slice(0, 10)
const height = (visits: number, peak: number) => (peak ? Math.max((visits / peak) * 100, visits ? 2 : 0) : 0)

interface Bar {
  label: string
  /** null: nothing counted then. */
  visits: number | null
  /** 'goatcounter', or the counter the days were imported from. */
  source: string | null
}

// One bar a day, or a week a bar counted back from today, so every bar but the first is a full week.
function bars(t: Traffic, s: TrafficSite, byWeek: boolean): Bar[] {
  const sourceOf = (i: number) => {
    const day = addDays(t.from, i)
    return s.sources.find((src) => day >= src.from && day <= src.to)?.name ?? 'goatcounter'
  }
  if (!byWeek) return s.visits.map((v, i) => ({ label: fmtDay(addDays(t.from, i)), visits: v, source: v === null ? null : sourceOf(i) }))
  const out: Bar[] = []
  for (let end = s.visits.length; end > 0; end -= 7) {
    const start = Math.max(0, end - 7)
    const counted = s.visits.map((v, i) => [v, i] as const).slice(start, end).filter(([v]) => v !== null)
    out.unshift({
      label: `${fmtDay(addDays(t.from, start))} – ${fmtDay(addDays(t.from, end - 1))}`,
      visits: counted.length ? counted.reduce((a, [v]) => a + (v ?? 0), 0) : null,
      // A week partly imported is drawn as imported.
      source: counted.map(([, i]) => sourceOf(i)).find((src) => src !== 'goatcounter') ?? (counted.length ? 'goatcounter' : null),
    })
  }
  return out
}

function change(s: TrafficSite): { text: string; tone: 'up' | 'down' | 'flat' | 'new' } | null {
  if (s.previous === null) return null
  if (!s.previous) return s.total ? { text: 'new', tone: 'new' } : null
  const pct = Math.round(((s.total - s.previous) / s.previous) * 100)
  return { text: `${pct > 0 ? '+' : ''}${pct}%`, tone: pct > 0 ? 'up' : pct < 0 ? 'down' : 'flat' }
}

const sites = computed(() => {
  const t = data.value
  if (!t) return []
  return [...t.sites]
    .sort((a, b) => b.total - a.total)
    .map((s) => {
      const estimated = s.sources.some((src) => sourceInfo(src.name).estimate)
      const byWeek = weekly.value || estimated
      const b = bars(t, s, byWeek)
      const first = s.visits.findIndex((v) => v !== null)
      return {
        ...s,
        bars: b,
        weekly: byWeek,
        estimated,
        peak: Math.max(0, ...b.map((x) => x.visits ?? 0)),
        // A change against a sampled estimate would say more about the sample than the traffic.
        change: estimated ? null : change(s),
        // The first counted day, when the period starts before it.
        since: first > 0 ? fmtDay(addDays(t.from, first)) : '',
      }
    })
})

const grandTotal = computed(() => sites.value.reduce((a, s) => a + s.total, 0))

const now = ref(Date.now())
let clock: ReturnType<typeof setInterval> | undefined
onMounted(() => (clock = setInterval(() => (now.value = Date.now()), 60_000)))
onBeforeUnmount(() => clearInterval(clock))
const updated = computed(() => {
  const at = data.value?.updated
  if (!at) return ''
  const minutes = Math.round((now.value - Date.parse(at)) / 60_000)
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes} min ago`
  return `${Math.round(minutes / 60)} h ago`
})
</script>

<style scoped>
.ma-name:hover { color: var(--ma-accent); }

.st-ranges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.st-ranges .ma-link-btn {
  background: none;
  color: inherit;
  font-family: inherit;
  cursor: pointer;
  padding: 8px 10px;
}

.st-ranges .ma-link-btn.active {
  background: var(--ma-text);
  color: var(--ma-bg);
}

.st-summary {
  font-size: 14px;
  color: var(--ma-text-muted);
  line-height: 1.5;
}

.st-message {
  padding: 40vh 0;
  color: var(--ma-text-muted);
  text-align: center;
}

.st-sites {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding: 120px 0;
}

.st-site.quiet { opacity: 0.45; }

.st-head {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-bottom: 16px;
}

.st-name {
  font-family: var(--ma-font-disp);
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  margin-right: auto;
}

.st-name:hover { color: var(--ma-accent); }

.st-total {
  font-family: var(--ma-font-disp);
  font-size: 28px;
  font-variant-numeric: tabular-nums;
}

.st-total small {
  margin-left: 6px;
  font-family: var(--ma-font-body);
  font-size: 13px;
  color: var(--ma-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.st-change {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 4px 8px;
  border: 1px solid var(--ma-border);
}

.st-change.up::before { content: '▲ '; }
.st-change.down { color: var(--ma-text-muted); }
.st-change.down::before { content: '▼ '; }
.st-change.new { color: var(--ma-accent); border-color: currentColor; text-transform: uppercase; }

.st-chart {
  display: block;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid var(--ma-border);
}

.st-chart rect { fill: var(--ma-text); opacity: 0.8; }
.st-chart rect:hover { fill: var(--ma-accent); opacity: 1; }
/* Today, or this week: not over yet. */
.st-chart rect.now { opacity: 0.4; }
/* Days counted by another counter before GoatCounter. */
.st-chart rect.imported { fill: #8a8a8a; opacity: 0.6; }

.st-axis {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 8px;
  font-size: 12px;
  color: var(--ma-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.st-note {
  margin-top: 6px;
  font-size: 12px;
  color: var(--ma-text-muted);
  line-height: 1.5;
}

.st-imported::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 6px;
  background: #8a8a8a;
  opacity: 0.6;
}

@media (max-width: 1000px) {
  .st-ranges { justify-content: center; }
  .st-sites { padding: 60px 24px 120px; }
  .st-name { font-size: 28px; }
}

@media (max-width: 600px) {
  .st-name { font-size: 24px; width: 100%; }
  .st-total { font-size: 22px; }
}
</style>

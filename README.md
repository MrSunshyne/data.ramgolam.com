# data.ramgolam.com

The index of Sandeep Ramgolam's data projects, at https://data.ramgolam.com. A Nuxt site, generated statically and deployed to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

- `/`: the projects and datasets (`app/pages/index.vue`).
- `/stats`: page visits per project per day (`app/pages/stats.vue`). The browser loads the figures from `https://stats.ramgolam.com/api/traffic`, served by the private `MrSunshyne/stats-worker` repo: a Cloudflare Worker that copies each site's daily visits from GoatCounter into D1 every 10 minutes. The list of sites lives in that repo's `src/sites.ts`.

Visits to this site are counted with GoatCounter (`data-ramgolam`). `app/plugins/goatcounter.client.ts` counts the pages opened after the first one.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

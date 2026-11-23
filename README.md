# data.ramgolam.com

The index of Sandeep Ramgolam's data projects, at https://data.ramgolam.com. A Nuxt site, generated statically and deployed to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

The page is `app/pages/index.vue`. Its Traffic link goes to https://stats.ramgolam.com, where page visits to this site and the other projects are shown (the private `MrSunshyne/stats-worker` repo).

Visits to this site are counted with GoatCounter (`data-ramgolam`).

## Scheduled scrapes (`trigger/`)

GitHub runs scheduled workflows late, or skips them: the hourly electricity scrape ran twice a day, the gold site's hourly check four times in a week, and the flights scrape never ran. `trigger/` is a Cloudflare Worker, `dataset-triggers`, that starts them on time instead. It wakes every minute, finds the workflows that are due by the same cron expressions as their files (`JOBS` in `trigger/index.js`), and asks GitHub to run them, as the "Run workflow" button would. The workflows keep their own schedules as a fallback.

| Repository | Workflow | When (UTC) |
|---|---|---|
| mauritius-dataset-flights | scrape.yml | every 10 minutes, at :03, :13, … |
| mauritius-dataset-reservoirs | scrape.yml | 07:00 and 15:00 |
| mauritius-dataset-electricity | scrape.yml | every hour, 06:00 to 18:00 |
| mauritius-dataset-gold | scrape.yml | 06:00 and 10:00, Monday to Friday |
| gold-prices | deploy.yml | every hour at :17, Monday to Friday |
| mauritius-dataset-fuel | scrape.yml | 00:00 |
| mauritius-dataset-fuel | scrape-brent.yml, scrape-inflation.yml | 06:00 on the 1st and 15th |
| mauritius-dataset-meteo | scrape.yml | 00:00 |
| mauritius-meetups-data | fetch-meetup-data.yml | 08:00 |

Its `GITHUB_TOKEN` secret is a fine-grained token named "moris3d dataset triggers", for these repositories only, with Actions read and write and no expiry. To add a repository, add it to the token on GitHub and to `JOBS`, then run `npx wrangler deploy` in `trigger/`. If a workflow's schedule changes, change its line in `JOBS` too.

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

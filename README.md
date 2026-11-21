# data.ramgolam.com

The index of Sandeep Ramgolam's data projects, at https://data.ramgolam.com. A Nuxt site, generated statically and deployed to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

The page is `app/pages/index.vue`. Its Traffic link goes to https://stats.ramgolam.com, where page visits to this site and the other projects are shown (the private `MrSunshyne/stats-worker` repo).

Visits to this site are counted with GoatCounter (`data-ramgolam`).

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

// Starts the data projects' scheduled GitHub workflows on time. GitHub's own schedules are
// best effort, and for these repositories they ran hours late or not at all: the hourly
// electricity scrape ran twice a day, the gold site's hourly check four times in a week, the
// flights scrape never. So this Cloudflare Worker wakes every minute, works out which
// workflows are due by the same cron expressions as their files, and asks GitHub to run
// them, as the "Run workflow" button would. The workflows keep their own schedules as a
// fallback; each one runs one at a time or checks before it writes, so an extra run is
// harmless.
//
// One Worker with one Cron Trigger for all of them: the free plan allows five per account.
// GITHUB_TOKEN is a fine-grained token for the repositories below only, with Actions read and
// write: `npx wrangler secret put GITHUB_TOKEN` in this folder. Deploy with
// `npx wrangler deploy`.

const OWNER = 'MrSunshyne';

// Each workflow and its schedule, copied from its file's `on.schedule` (UTC). Keep the two in
// step when one changes.
export const JOBS = [
  { repo: 'mauritius-dataset-flights', workflow: 'scrape.yml', cron: '3-59/10 * * * *' },
  { repo: 'mauritius-dataset-reservoirs', workflow: 'scrape.yml', cron: '0 7,15 * * *' },
  { repo: 'mauritius-dataset-electricity', workflow: 'scrape.yml', cron: '0 6-18 * * *' },
  { repo: 'mauritius-dataset-gold', workflow: 'scrape.yml', cron: '0 6,10 * * 1-5' },
  { repo: 'gold-prices', workflow: 'deploy.yml', cron: '17 * * * 1-5' },
  { repo: 'mauritius-dataset-fuel', workflow: 'scrape.yml', cron: '0 0 * * *' },
  { repo: 'mauritius-dataset-fuel', workflow: 'scrape-brent.yml', cron: '0 6 1,15 * *' },
  { repo: 'mauritius-dataset-fuel', workflow: 'scrape-inflation.yml', cron: '0 6 1,15 * *' },
  { repo: 'mauritius-dataset-meteo', workflow: 'scrape.yml', cron: '0 0 * * *' },
  { repo: 'mauritius-meetups-data', workflow: 'fetch-meetup-data.yml', cron: '0 8 * * *' },
];

// Whether one field of a cron expression ("*", "5", "6-18", "3-59/10", "1,15") takes `value`.
function matches(spec, value, min, max) {
  return spec.split(',').some((part) => {
    const [range, stepText] = part.split('/');
    const step = stepText ? Number(stepText) : 1;
    let [lo, hi] = range === '*' ? [min, max] : range.split('-').map(Number);
    // "5/15" runs from 5 to the end, as cron reads it.
    hi ??= stepText ? max : lo;
    return value >= lo && value <= hi && (value - lo) % step === 0;
  });
}

// Whether a cron expression is due at `date` (to the minute, UTC). None of the schedules
// above restricts both the day of the month and the day of the week, so every field must
// match (cron's either-day rule never comes into it).
export function due(cron, date) {
  const [minute, hour, day, month, weekday] = cron.trim().split(/\s+/);
  return (
    matches(minute, date.getUTCMinutes(), 0, 59) &&
    matches(hour, date.getUTCHours(), 0, 23) &&
    matches(day, date.getUTCDate(), 1, 31) &&
    matches(month, date.getUTCMonth() + 1, 1, 12) &&
    matches(weekday, date.getUTCDay(), 0, 6)
  );
}

async function dispatch({ repo, workflow }, token) {
  const r = await fetch(`https://api.github.com/repos/${OWNER}/${repo}/actions/workflows/${workflow}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'dataset-triggers (data.ramgolam.com)',
    },
    body: JSON.stringify({ ref: 'main' }),
  });
  // 204 is GitHub's yes.
  if (r.status !== 204) throw new Error(`${repo}/${workflow}: GitHub answered ${r.status}: ${await r.text()}`);
}

export default {
  async scheduled(controller, env) {
    const at = new Date(controller.scheduledTime);
    const jobs = JOBS.filter((j) => due(j.cron, at));
    if (!jobs.length) return;
    const results = await Promise.allSettled(jobs.map((j) => dispatch(j, env.GITHUB_TOKEN)));
    for (const [i, r] of results.entries()) console.log(`${jobs[i].repo}/${jobs[i].workflow}: ${r.status === 'fulfilled' ? 'started' : r.reason.message}`);
    // One failing doesn't stop the others; any failure marks the invocation failed in the logs
    // (an expired or revoked token, say).
    const failed = results.filter((r) => r.status === 'rejected');
    if (failed.length) throw new Error(`${failed.length} of ${jobs.length} could not be started`);
  },
};

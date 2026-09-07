---
description: "Run your own BitBadges indexer and API. Architecture, MongoDB and Redis requirements, environment variables, bun scripts, and Docker."
---

# Self-hosting

The indexer and API are open source at [https://github.com/bitbadges/bitbadges-indexer](https://github.com/bitbadges/bitbadges-indexer). Run them yourself when you want your own copy of the indexed data or your own API without credits and rate limits.

This page is also part of the [API reference](/api-reference).

## Example

```bash
git clone https://github.com/bitbadges/bitbadges-indexer
cd bitbadges-indexer
bun install
cp .env.example .env   # fill in RPC_URLS, API_URL, DB_URL, REDIS_URL, SESSION_SECRET

bun run restart        # setup + bootstrap sample data + run
# or step by step
bun run setup          # create indexes and views
bun run bootstrap      # load sample collections
bun run dev            # build and run
```

The API listens on `http://localhost:3001`. The WebSocket server listens on `8080`.

```bash
curl -X POST http://localhost:3001/api/v0/collections \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{ "collectionsToFetch": [ { "collectionId": "1" } ] }'
```

## Architecture

| Process | File | Role |
| --- | --- | --- |
| Block indexer | `poll.ts` | Polls a connected node for new blocks every second (`POLL_INTERVAL_MS`) and writes the results to MongoDB. |
| API server | `indexer.ts` | Express REST API over the indexed data, plus authentication. |
| Queue worker | `queue/` | Background jobs: metadata fetching, claim processing, refreshes. |
| WebSocket server | | Real-time updates and candlestick data. |

Storage is MongoDB. Redis backs rate limiting, the credit ledger, and caches. Both are required.

Point the poller at your own node. Public nodes are not built for an indexer that can send more than 100 requests per second. See [Run a node](../chain/run-a-node.md).

## Environment variables

Required:

| Variable | Description | Example |
| --- | --- | --- |
| `RPC_URLS` | Chain RPC endpoints as a JSON array | `'["http://localhost:26657"]'` |
| `API_URL` | Chain REST (LCD) endpoint | `http://localhost:1317` |
| `DB_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `REDIS_URL` | Redis connection string | `rediss://user:pass@redis.example.com:6379` |
| `SESSION_SECRET` | Signs session cookies. New cookies always use this value. | random string |
| `SESSION_SECRET_2`, `SESSION_SECRET_3` | Optional previous secrets, accepted for verification only. Set one next to a rotated `SESSION_SECRET` so nobody is logged out, then remove it after one session lifetime (7 days). | |

Optional, core features:

| Variable | Description | Default |
| --- | --- | --- |
| `BITBADGES_API_KEY` | API key seeded for local use. Send it as `x-api-key` in the request above. | |
| `FRONTEND_URL` | Frontend origin for CORS | `http://localhost:3000` |
| `DEV_MODE` | Development mode | `true` |
| `DISABLE_API` | Do not start the API server | `false` |
| `DISABLE_BLOCKCHAIN_POLLER` | Do not poll blocks | `false` |
| `DISABLE_URI_POLLER` | Do not fetch metadata | `false` |
| `DISABLE_NOTIFICATION_POLLER` | Do not poll notifications | `false` |
| `POLL_INTERVAL_MS` | Block polling interval | `1000` |
| `ACCOUNT_RATE_LIMIT_PER_MIN` | Per-account request cap | `10000` |
| `MIN_TIME_BETWEEN_REFRESHES` | Manual refresh cooldown in ms | `300000` |

Optional, OAuth providers: each provider needs a `CLIENT_ID` and `CLIENT_SECRET` (Discord, Twitter/X, GitHub, Google, Facebook, Reddit, Twitch, Farcaster, Slack, LinkedIn, Strava, Bluesky, Shopify, Meetup, and more). Optional third-party services: `STRIPE_SECRET_KEY` (payments), `SENDGRID_API_KEY` (email), `INFURA_ID` / `ALCHEMY_API_KEY` (EVM chain access), `SPACES_ACCESS_KEY_ID` (DigitalOcean Spaces or S3). The full list, with comments, is in `.env.example`.

## Scripts

| Command | What it does |
| --- | --- |
| `bun run setup` | Build, then create indexes and views |
| `bun run setup with-delete` | Delete and recreate every database |
| `bun run setup-plugins` | Seed the BitBadges-hosted plugin documents |
| `bun run bootstrap` | Load sample collections |
| `bun run restart` | `setup with-delete`, bootstrap, run |
| `bun run dev` | Build and run |
| `bun run dev:no-build` | Run the existing build |
| `bun run dev:test` | Run in test mode |
| `bun run build` | Compile TypeScript |
| `bun run indexer` | Run the production build |
| `bun run test` | Build and run the Jest suite |
| `bun run lint`, `bun run lint:fix`, `bun run format` | ESLint and Prettier |

## Docker

```bash
docker build -t bitbadges-indexer .
docker run -p 3001:3001 -p 8080:8080 --env-file .env bitbadges-indexer
```

The image builds with `oven/bun`, runs `bun run indexer` as a non-root user, and bakes in the MongoDB `crypt_shared` library for in-process field-level encryption (`CRYPT_SHARED_LIB_PATH`). A full multi-service setup (chain node plus services) is at [https://github.com/bitbadges/bitbadges-docker](https://github.com/bitbadges/bitbadges-docker).

## Rate limit tiers

Your instance applies the same limiters as the hosted API: 150 requests per minute per IP for frontend traffic, 10 per 10 seconds per IP with no key, and `ACCOUNT_RATE_LIMIT_PER_MIN` per account with a key. Adjust with the environment variable.

## Troubleshooting

MongoDB connection failed: check that `DB_URL` is correct and reachable, that the database user has permissions, and (on Atlas) that your IP is allowed.

## Related

- [BitBadges API](README.md)
- [Run a node](../chain/run-a-node.md)

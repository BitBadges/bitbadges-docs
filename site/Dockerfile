# Build context is the REPOSITORY ROOT, not site/ — the site renders the
# markdown that lives in the repo above it:
#
#   docker build -f site/Dockerfile -t trevormil23/bitbadges-docs:latest .
#
# ============================================
# Stage 1: Build
# ============================================
FROM node:22-slim AS builder

RUN apt-get update && apt-get install -y curl unzip \
    && rm -rf /var/lib/apt/lists/* \
    && curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

WORKDIR /repo/site

# Dependencies first, so source edits do not invalidate the install layer.
COPY site/package.json site/bun.lock ./
RUN bun install --frozen-lockfile

# The documentation content sits at /repo; DOCS_CONTENT_DIR defaults to '..'.
COPY . /repo

# `prebuild` copies images and the OpenAPI document into public/ and builds the
# search index, then Next prerenders every page.
RUN NODE_OPTIONS="--max-old-space-size=4096" bun run build

# ============================================
# Stage 2: Runtime
# ============================================
FROM node:22-slim AS runner

RUN groupadd -r appuser && useradd -r -g appuser appuser

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# The standalone bundle carries its own minimal node_modules and server.js.
COPY --from=builder --chown=appuser:appuser /repo/site/.next/standalone ./
COPY --from=builder --chown=appuser:appuser /repo/site/.next/static ./.next/static
COPY --from=builder --chown=appuser:appuser /repo/site/public ./public

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]

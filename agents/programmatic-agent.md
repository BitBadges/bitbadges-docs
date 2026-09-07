---
description: "Build collections from natural-language prompts in Node with BitBadgesBuilderAgent and your own Anthropic or OpenAI key. Config, hooks, sessions, result shape, review handoff."
---

# Programmatic Agent

`BitBadgesBuilderAgent` builds BitBadges collections from natural-language prompts inside your Node process, with your own Anthropic or OpenAI key. BitBadges never sees the key and never proxies the requests.

```ts
import { BitBadgesBuilderAgent } from 'bitbadges/builder/agent';

const agent = new BitBadgesBuilderAgent({ anthropicKey: process.env.ANTHROPIC_API_KEY });

const result = await agent.build('create a subscription token for $10/month, max 500 subscribers');

console.log(result.toString());
// BitBadgesBuilderAgent build: 2 message(s), valid, 18,204 tokens, $0.0732, 5 round(s)

console.log(result.transaction);
console.log(result.reviewUrl); // open in a browser to review and sign
```

This is the scriptable counterpart to the [MCP Builder Tools](mcp-tools.md).

| | No-code site | MCP builder | Programmatic agent |
| --- | --- | --- | --- |
| Where it runs | Any shell | Claude Desktop, Cursor, Claude Code | Your Node process |
| LLM key | BitBadges-managed (billed credits) | Your Claude subscription | Your Anthropic or OpenAI key |
| Good for | End users, one-off builds | Power users, exploratory work | Dapps, bots, games, CI, fine-tuning |

## Install

Install the SDK plus the provider you use. Both providers are optional peer dependencies; install one.

```bash
# Anthropic (default)
npm install bitbadges @anthropic-ai/sdk

# OpenAI
npm install bitbadges openai
```

The SDK never bundles either provider. The key stays in your process.

```bash
# Pick one: Anthropic (default) or OpenAI. Values shown are fake.
export ANTHROPIC_API_KEY=sk-ant-api03-0123456789abcdef0123456789abcdef
export OPENAI_API_KEY=sk-proj-0123456789abcdef0123456789abcdef

# Optional: needed when prompts trigger query, search, or simulate tools. Key from https://bitbadges.io/developer
export BITBADGES_API_KEY=0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef
```

Anthropic and OpenAI keys are required only for `BitBadgesBuilderAgent`, the Node-side build loop on this page. The MCP server (`bitbadges-builder`, used by Cursor, Claude Desktop, Claude Code, Cline, OpenAI Codex, and Gemini Code Assist) is model-agnostic and does not read these variables. If you only want the MCP server, go to [MCP Builder Tools](mcp-tools.md).

## Zero-Config

### Anthropic (Default)

```ts
import { BitBadgesBuilderAgent } from 'bitbadges/builder/agent';

const agent = new BitBadgesBuilderAgent({ anthropicKey: process.env.ANTHROPIC_API_KEY });
const result = await agent.build('create a subscription token for $10/month, max 500 subscribers');
console.log(result.transaction);
```

### OpenAI

```ts
import { BitBadgesBuilderAgent } from 'bitbadges/builder/agent';

const agent = new BitBadgesBuilderAgent({
  provider: 'openai',
  apiKey: process.env.OPENAI_API_KEY
});

const result = await agent.build('create a subscription token for $10/month, max 500 subscribers');
console.log(result.transaction);
```

Both providers run the same loop: same tools, same validation, same review pass, same token-type inference. The dispatcher translates the Anthropic-style internal message format to and from OpenAI's chat-completions shape at the API boundary.

Token-type inference has parity across providers. Both run a fast classifier (Anthropic Haiku or OpenAI `gpt-4o-mini`) before each build to pick the token-type skill. OpenAI uses native structured outputs (`response_format: json_schema, strict: true`), so the JSON contract is server-enforced.

## Auth Modes

### Anthropic

```ts
import Anthropic from '@anthropic-ai/sdk';
import { BitBadgesBuilderAgent } from 'bitbadges/builder/agent';

// 1. API key (most common)
new BitBadgesBuilderAgent({ anthropicKey: process.env.ANTHROPIC_API_KEY });

// 2. OAuth token, for Claude Code / Claude Pro flows
new BitBadgesBuilderAgent({ anthropicAuthToken: process.env.ANTHROPIC_OAUTH_TOKEN });

// 3. Pre-built Anthropic client, for custom retry or interceptor logic
new BitBadgesBuilderAgent({
  anthropicClient: new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, baseURL: 'https://llm-gateway.example.com', maxRetries: 5 })
});
```

### OpenAI

```ts
import OpenAI from 'openai';
import { BitBadgesBuilderAgent } from 'bitbadges/builder/agent';

// 1. API key (most common)
new BitBadgesBuilderAgent({ provider: 'openai', apiKey: process.env.OPENAI_API_KEY });

// 2. Custom base URL, for Azure OpenAI, proxies, gateways
new BitBadgesBuilderAgent({ provider: 'openai', apiKey: process.env.OPENAI_API_KEY, baseURL: 'https://llm-gateway.example.com/v1' });

// 3. Pre-built OpenAI client, for custom retry, interceptor, or Azure AD logic
new BitBadgesBuilderAgent({
  provider: 'openai',
  providerClient: new OpenAI({ apiKey: process.env.OPENAI_API_KEY, baseURL: 'https://llm-gateway.example.com/v1', maxRetries: 5 })
});
```

Environment variables are read when no explicit credentials are passed:

- Anthropic: `ANTHROPIC_API_KEY`, `ANTHROPIC_OAUTH_TOKEN`, `ANTHROPIC_AUTH_TOKEN`
- OpenAI: `OPENAI_API_KEY`
- Shared: `BITBADGES_API_KEY`, `BITBADGES_API_URL`

## Customization

```ts
import { BitBadgesBuilderAgent, MemoryStore } from 'bitbadges/builder/agent';

const agent = new BitBadgesBuilderAgent({
  // Provider: pick one of the auth-mode patterns above
  anthropicKey: process.env.ANTHROPIC_API_KEY,
  bitbadgesApiKey: process.env.BITBADGES_API_KEY,
  model: 'sonnet',                       // Anthropic: 'haiku' | 'sonnet' (default) | 'opus'.
                                         // OpenAI: pass a model id directly, e.g. 'gpt-4o' / 'gpt-4o-mini'.
  validation: 'strict',                  // 'strict' | 'lenient' | 'off'
  skills: ['subscription', 'fungible-token'], // limit the skill set
  systemPromptAppend: 'Always use locked-approvals permissions.', // adds to the base prompt
  maxRounds: 8,                          // agent loop cap
  fixLoopMaxRounds: 3,                   // validation fix cap
  autoInferTokenType: true,              // default: token-type detection; false disables it
  sessionStore: new MemoryStore(),       // MemoryStore | FileStore | your own KVStore
  hooks: {
    onTokenUsage:   (u) => console.log(`$${u.cumulativeCostUsd.toFixed(4)}`),
    onToolCall:     (e) => console.log(`[${e.name}] ${e.durationMs}ms`),
    onStatusUpdate: (s) => console.log(`status: ${s}`),           // "Building", "Validating", and so on
    onLog:          (e) => console.log(`[${e.type}] ${e.label}`), // info / ai_text / validation / error
    onCompletion:   (trace) => console.log(`done in ${trace.rounds} rounds`)
  },
  defaultCreatorAddress: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  debug: false                           // true dumps prompts and responses to stderr
});
```

### Hook Contract

- `onTokenUsage` is load-bearing. It is awaited, and rejections propagate out of `build()`. Throw from it to enforce per-build quotas (the BitBadges API does this with its token ledger).
- `onCompletion` fires exactly once per `build()`, on success and on error, so cleanup runs either way.
- `onToolCall`, `onStatusUpdate`, and `onLog` are fire-and-forget observability hooks. Rejections are swallowed so a broken logger cannot hang a build.
- `onLog` receives `{ type: 'info' | 'ai_text' | 'validation' | 'error', label, data }` entries: round boundaries, the LLM's text responses, and validation-gate pass or fail. Useful for live dev consoles and audit log persistence.

### Validation Modes

- `'strict'` (default) throws `ValidationFailedError` if hard errors remain after the fix loop.
- `'lenient'` always returns. `result.valid` is false and hard errors are in `result.errors`.
- `'off'` skips the gate. Use only for experiments.

### Skills

Two inputs at two levels:

```ts
new BitBadgesBuilderAgent({
  anthropicKey,
  skills: ['nft', 'smart-token']          // allowlist, constructor-level filter
});

await agent.build('mint 100 nfts', {
  selectedSkills: ['nft']                  // actual injection for this build
});
```

`agent.listSkills()` returns every available skill (filtered by the constructor allowlist when set). `agent.describeSkill(id)` returns one by id. Discovery is code-only; there is no public marketplace endpoint. An unknown id in `selectedSkills` is dropped silently with no build failure. Set `debug: true` to log dropped ids.

#### How skill content is injected by mode

| Build mode | What gets injected |
| --- | --- |
| `create` | Full skill instructions with build recipes. The LLM follows them to construct a new collection from scratch |
| `update` / `refine` | Summaries only, with an explicit "do not rebuild the collection to match the skill" warning. The collection already exists on-chain; skills are reference context, not a blueprint |

If an update build rewrites too aggressively, drop skills from the per-build call. The agent then falls back to the generic `DOMAIN_KNOWLEDGE` guidance.

#### Token-type inference (auto-pick)

When the caller supplies no token-type skill, the agent classifies the prompt and prepends one high-confidence pick, or builds freestyle when nothing matches with confidence.

```ts
new BitBadgesBuilderAgent({
  anthropicKey,
  autoInferTokenType: true           // default; false disables it
});

const result = await agent.build('monthly subscription for $10/mo');
result.inferredTokenType;            // 'subscription', or null (freestyle), or undefined (skipped)
result.inferredTokenTypeSource;      // 'standards' (existing-collection fast path) | 'llm'
result.inferredTokenTypeReasoning;   // one-sentence rationale
```

Inference is skipped when `selectedSkills` already contains a token-type entry; explicit picks win. Non-token-type skills (additional-context) do not block inference. The type table lives in [Smart Tokens and Vaults](../guides/smart-tokens-and-vaults.md).

### Prompt-Injection Guard on the System-Prompt Slots

`systemPromptAppend` (additive) and `systemPrompt` (full replace) both pass through an injection-pattern check at construction. If either contains an obvious "ignore all previous instructions" or "you are now a..." payload, the constructor throws a `BitBadgesBuilderAgentError` with code `INVALID_SYSTEM_PROMPT_APPEND` or `INVALID_SYSTEM_PROMPT`. Hosted deployments that accept end-user input into these slots should still run their own `containsInjection` check at the trust boundary. The SDK check is defense in depth, not a replacement.

### Custom Tools

Add tools on top of the built-ins, or filter built-ins out:

```ts
new BitBadgesBuilderAgent({
  anthropicKey,
  tools: {
    remove: ['build_claim'],
    add: [{
      definition: {
        name: 'lookup_sku',
        description: 'Return the price in USDC for a product SKU from the merchant catalog.',
        input_schema: { type: 'object', properties: { sku: { type: 'string' } }, required: ['sku'] }
      },
      execute: async (args, ctx) => ({ sku: args.sku, priceUsdc: '25', requestedBy: ctx.sessionId })
    }]
  }
});
```

## Session Stores

Conversation messages and token counters persist so refinement works across HTTP requests.

```ts
import Redis from 'ioredis';
import { BitBadgesBuilderAgent, MemoryStore, FileStore, type KVStore, type KVStoreSetOptions } from 'bitbadges/builder/agent';

const anthropicKey = process.env.ANTHROPIC_API_KEY;

// Default: single process, in memory
new BitBadgesBuilderAgent({ anthropicKey, sessionStore: new MemoryStore() });

// Disk-backed: survives process restarts (default dir: ~/.bitbadges/agent-sessions)
new BitBadgesBuilderAgent({ anthropicKey, sessionStore: new FileStore({ dir: '/var/lib/bb' }) });

// Bring your own: any object matching the KVStore interface
class RedisStore implements KVStore {
  private redis = new Redis(process.env.REDIS_URL!);

  async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async set(key: string, value: string, opts?: KVStoreSetOptions): Promise<void> {
    if (opts?.ttlSeconds) {
      await this.redis.set(key, value, 'EX', opts.ttlSeconds);
    } else {
      await this.redis.set(key, value);
    }
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }
}
new BitBadgesBuilderAgent({ anthropicKey, sessionStore: new RedisStore() });
```

Pass the same `sessionId` across `.build()` calls to continue a session, for example for refinement.

## Result Shape

```ts
interface BuildResult {
  valid: boolean;
  transaction: any;              // parsed object, not a JSON string
  reviewUrl: string;             // bitbadges.io link: review and sign this tx in the browser
  errors: StructuredError[];     // code, message, path?, fixHint?
  warnings: Warning[];           // non-fatal advisory notes
  advisoryNotes: string[];       // raw review findings
  validation: any;               // SDK validator result
  simulation: any | null;        // null when no simulator is configured
  audit: any | null;             // review findings and summary
  tokensUsed: number;
  costUsd: number;               // computed per selected model
  rounds: number;
  fixRounds: number;
  trace: BuildTrace;             // full messages, tool calls, prompt hash
  toString(): string;            // human-readable one-liner
}
```

Errors dispatch on `instanceof`:

```ts
import {
  BitBadgesBuilderAgentError,
  ValidationFailedError,
  QuotaExceededError,
  AnthropicAuthError,
  AbortedError,
  PeerDependencyError,
  SimulationError
} from 'bitbadges/builder/agent';
```

## Review and Sign in the Browser

The SDK never signs for the user. `result.reviewUrl` is a bitbadges.io link that opens the transaction in the review-and-sign flow (Preview, Review Items, Transferability, Permissions, then wallet signature). The whole transaction rides in the URL hash (`#tx=<base64url JSON>`), so nothing is uploaded and the link works offline. Set `BITBADGES_FRONTEND_URL` to point at testnet or a local site.

```ts
const result = await agent.build('create a subscription token for $10/mo');
console.log(result.reviewUrl);
// https://bitbadges.io/mint/local-builder#tx=<base64url of result.transaction>
// For a one-message transaction the hash part looks like:
// eyJtZXNzYWdlcyI6W3sidHlwZVVybCI6Ii90b2tlbml6YXRpb24uTXNnRGVsZXRlT3V0Z29pbmdBcHByb3ZhbCIsInZhbHVlIjp7ImNyZWF0b3IiOiJiYjFwMHJyZWwzMzY1c2NhZHE1azlwdjB4MHpwOWoyMmpzNmRudzcwZCIsImNvbGxlY3Rpb25JZCI6IjIiLCJhcHByb3ZhbElkIjoiYWdlbnQtZGFpbHktYnVkZ2V0In19XX0
```

For a short, shareable link (chat, email, an LLM relaying it to a user), upload through the open preview endpoint instead. This is what the MCP `get_review_url` tool and `bb preview` do:

```ts
import { buildReviewUrlFromCode } from 'bitbadges/builder/agent';

const res = await fetch('https://api.bitbadges.io/api/v0/builder/preview', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ transaction: result.transaction })
});
const { code } = await res.json(); // for example prv_ab12cd34, valid 1 hour
console.log(buildReviewUrlFromCode('https://bitbadges.io', code, result.transaction));
// https://bitbadges.io/mint/local-builder?code=prv_ab12cd34
```

Update transactions (a non-zero `collectionId`) route to `/update/local-builder/:id` so the site diffs against on-chain state. The helpers `buildHandoffUrl`, `buildReviewUrlFromCode`, `detectExistingCollectionId`, and `encodeTxForHash` are exported from `bitbadges/builder/agent`.

## Image Placeholders

Two image-handling modes. Pick the one that fits your pipeline.

### 1. Real URLs in the Prompt

If you already host the images, put the URLs in the prompt. The LLM emits them verbatim into `metadataPlaceholders` entries.

```ts
await agent.build(
  `Create an NFT collection with hero image https://cdn.example.com/hero.png and
   token art https://cdn.example.com/t1.png`
);
```

No post-processing. The LLM has to copy the URLs faithfully, so keep them short and well-formed.

### 2. Placeholders Plus Post-Build Substitution

When the user is still choosing or uploading images at build time, use symbolic placeholders and swap them in after the build:

```ts
const result = await agent.build(prompt, {
  availableImagePlaceholders: ['IMAGE_1', 'IMAGE_2']
});

const finalTx = agent.substituteImages(result.transaction, {
  IMAGE_1: 'https://cdn.example.com/hero.png',   // or a data: URL
  IMAGE_2: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png'
});
```

The LLM wires `IMAGE_N` tokens into the metadata; you resolve them at the end. This matches the hosted site's flow.

### Detecting Stragglers

`agent.collectImageReferences(tx)` returns every `IMAGE_N` token still in the transaction. Use it as a pre-broadcast check: anything it returns is a placeholder that never got a real value and would land on-chain as-is.

## Health Check

```ts
const report = await agent.healthCheck();
// { anthropic: { ok: true, model: 'claude-sonnet-4-6' },
//   bitbadgesApi: { ok: true, configured: true } }
```

## Validate Without Building

```ts
import { readFileSync } from 'node:fs';

const existing = JSON.parse(readFileSync('./tx.json', 'utf8'));
const { valid, errors, simulation } = await agent.validate(existing);
```

## Export as a Single Prompt for No-Tools LLMs

To hand the build to Claude.ai, ChatGPT, or Gemini (no tools there), `agent.exportPrompt()` assembles the no-tools variant of the system prompt concatenated with the user message. The LLM emits the final transaction JSON directly.

```ts
const { prompt, communitySkillsIncluded } = await agent.exportPrompt(
  'create a subscription token for $10/mo',
  { selectedSkills: ['subscription'] }
);

// Paste `prompt` into Claude.ai / ChatGPT / Gemini. The output is
// a { messages: [{ typeUrl, value }] } JSON object. Paste it into
// https://bitbadges.io/mint/local-builder ("Bring your transaction")
// to review and sign.
```

No Anthropic call is made. No validation, no simulation, no fix loop. This is a prompt-assembly helper and a best-effort path; `build()` remains the quality-gated path.

## Abort

```ts
const controller = new AbortController();
const result = agent.build(prompt, { abortSignal: controller.signal });
setTimeout(() => controller.abort(), 30_000);
// or: agent.abort()
```

## Cancellation and Streaming

- Cancellation: supported with `abortSignal` or `agent.abort()`.
- Streaming: not in v1. The agent returns when the build completes or throws. Use the `onTokenUsage` and `onToolCall` hooks for live progress.

## Prompt Caching (Automatic)

The agent uses Anthropic prompt caching on the stable prefix (system prompt, tool schemas, and inlined skill instructions). Builds inside a 5-minute window read those tokens from cache at about 10% of the regular input-token cost. Cache-creation tokens cost about 1.25x regular input on the miss. One hit pays the miss back; every hit after that is a saving.

Caching is on by default with nothing to configure. Skill ordering is canonicalized (alphabetical), so `['nft', 'subscription']` and `['subscription', 'nft']` hit the same cache key.

### When Caching Pays Off

The stable prefix is typically 10-15% of the per-build token count. The rest is dynamic user context and tool-calling round trips.

- First build with a new skill set: cache miss. You pay 1.25x on the prefix tokens. Net: a few cents more than no cache for a typical build.
- Second build within 5 minutes with the same skill set: cache hit. Prefix tokens cost 10% of full rate. Break-even lands about here.
- Steady state (several builds an hour with overlapping skill sets): cache-read tokens dominate the input count on `result.trace`. Real savings are 40-60% of the total input-token bill, not 90%, because the prefix is only part of the request.

One-off scripts that run a single build pay the 1.25x write premium with no recovery. The delta is cents, so leave caching on, but do not count it as a headline optimization for low-volume use.

### Observability

The `onTokenUsage` hook reports cache counters per round:

```ts
new BitBadgesBuilderAgent({
  anthropicKey,
  hooks: {
    onTokenUsage: (u) => {
      console.log(
        `round ${u.round}: ${u.inputTokens} in, ${u.outputTokens} out, ` +
        `cache ${u.cacheReadTokens} read / ${u.cacheCreationTokens} write, ` +
        `cumulative $${u.cumulativeCostUsd.toFixed(4)}`
      );
    }
  }
});
```

`result.trace.cacheReadTokens` and `result.trace.cacheCreationTokens` carry cumulative counts for the whole build. A healthy steady state has `cacheReadTokens >> inputTokens`.

### What Invalidates the Cache

- 5-minute TTL since the last hit.
- Any change to the system prompt (for example a `systemPromptAppend` edit).
- Any change to the tool set (`tools.add` or `tools.remove`).
- Any change to the canonical skill set.

The per-request tail (request header, metadata, prompt text, refinement history) is never cached; it is expected to vary.

## Internals (Unstable Primitives)

To run your own loop (a different LLM, a custom strategy, fine-tuning data collection):

```ts
import {
  buildSystemPrompt, DOMAIN_KNOWLEDGE, SKILL_INSTRUCTIONS,
  runAgentLoop, runValidationGate, buildFixPrompt,
  createAgentToolRegistry
} from 'bitbadges/builder/internals';
```

Not covered by semver. Anything here may be renamed or removed in a minor release. Use `bitbadges/builder/agent` (the stable path) whenever possible.

## Examples

Runnable scripts at [bitbadgesjs/packages/bitbadgesjs-sdk/examples/builder-agent/](https://github.com/BitBadges/bitbadgesjs/tree/main/packages/bitbadgesjs-sdk/examples/builder-agent):

- `zero-config.ts`: the 5-line sample
- `middle-tier.ts`: hooks, skills, file store, typed errors
- `diy-internals.ts`: OpenAI through `/internals` (unsupported)

## Troubleshooting

- `PeerDependencyError: @anthropic-ai/sdk is required`: run `npm install @anthropic-ai/sdk`.
- `Anthropic credentials are required`: set `ANTHROPIC_API_KEY` or pass `anthropicKey` / `anthropicAuthToken` to the constructor.
- `ValidationFailedError` after 3 fix rounds: the fix loop gave up. Inspect `err.errors` for structured causes and `err.advisoryNotes` for design concerns the agent considered but did not resolve. Raising `fixLoopMaxRounds` rarely helps; the prompt usually needs more constraints.
- Simulation reports a `jsonToTxBytes` error: an encode-time advisory, not a chain failure. The transaction is typically still broadcast-safe.

## Related

- [MCP Builder Tools](mcp-tools.md) (same tools, different runtime)
- [Agents](README.md) (terminal-first workflow)
- [SDK](../sdk/README.md)

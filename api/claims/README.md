---
description: "How claims work. Plugins, indexed versus on-demand, claim numbers, success logic, sign-in modes, gating an on-chain approval, and the trust model."
---

# Claims

A claim is an off-chain criteria check hosted by BitBadges: meet the criteria, receive the reward. Claims run airdrops, whitelist mints, code redemptions, attendance rewards, and any flow where a user must qualify before receiving tokens or access. No contract or frontend code is required.

See the [API reference](/api-reference) for every route's request and response schema.

## Example

A claim with three plugin instances: `numUses` caps the claim at 100 successes, and either of two whitelists is enough to pass.

```ts
import { BigIntify, BitBadgesAPI } from 'bitbadges';

const BitBadgesApi = new BitBadgesAPI({ apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify }); // key from https://bitbadges.io/developer

// Create it: POST /api/v0/claims (needs a session with the Manage Claims scope)
await BitBadgesApi.createClaims({
  claims: [
    {
      claimId: 'claim_demo_01',
      collectionId: '1',
      plugins: [
        {
          pluginId: 'numUses',
          instanceId: 'num-uses',
          version: '0',
          publicParams: { maxUses: 100, hideCurrentState: false, displayAsUnlimited: false },
          privateParams: {}
        },
        {
          pluginId: 'whitelist',
          instanceId: 'vip-whitelist',
          version: '0',
          publicParams: { maxUsesPerAddress: 1, hasPrivateList: true },
          privateParams: { listId: 'vip-list' }
        },
        {
          pluginId: 'whitelist',
          instanceId: 'early-access',
          version: '0',
          publicParams: { maxUsesPerAddress: 1, hasPrivateList: true },
          privateParams: { listId: 'early-access-list' }
        }
      ],
      satisfyMethod: {
        type: 'AND',
        conditions: ['num-uses', { type: 'OR', conditions: ['vip-whitelist', 'early-access'] }]
      },
      rewards: [],
      metadata: {
        name: 'Early access mint',
        description: 'VIP and early-access holders can mint one Demo NFT.',
        image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/claim.png'
      },
      showInSearchResults: true,
      categories: ['nft'],
      estimatedCost: 'Free',
      estimatedTime: '1 minute',
      approach: 'in-site'
    }
  ]
});

// Complete it for bob: plugin inputs are keyed by instanceId (these plugins take none)
const res = await BitBadgesApi.completeClaim('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0
});
console.log(res.claimAttemptId); // 3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a
```

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools connected, a prompt like this works:

```text
Create a claim for collection 1 that requires a Discord role and a password, 100 uses total, one per address.
```

The agent calls `search_plugins` to look up the `discord` and `password` parameter schemas, then `build_claim` to produce the claim document. Review it, then create it through the API or the site.
{% endhint %}

## What Is in This Section

| Page | Read it when |
| --- | --- |
| [Endpoints](endpoints.md) | You complete, simulate, verify, fetch, create, or delete claims through the API, or build the merkle proof for an on-chain claim. |
| [Plugins](plugins.md) | You need a plugin's parameters or the request contract for a custom plugin endpoint. |
| [Dynamic Stores](dynamic-stores.md) | You want a BitBadges-hosted address list you update from your own systems. |

Guides: [Distribute with Claims](../../guides/distribute-with-claims.md) walks through designing and shipping a claim. [Build a Claim Plugin](../../guides/build-a-claim-plugin.md) walks through writing an endpoint.

## How a Claim Works

1. A claim is created with a set of plugin instances (core, BitBadges-hosted, or custom).
2. A user attempts the claim on the site, through the API, or programmatically.
3. All plugins run in parallel. Each receives the user's address and its parameters and answers pass or fail.
4. If the success logic is satisfied (by default every plugin passes), the claim succeeds.
5. Rewards follow: a token mint, gated content, points, an entry in a list, or anything your app decides.

A claim checks criteria. You decide what success means and how you verify it later (a direct lookup by address, an NFT the user now holds, and so on).

### Plugin ID Versus Instance ID

A plugin id names the plugin (`codes`, `whitelist`, `must-own-badges`). An instance id names one use of that plugin inside a claim. One claim can hold several instances of the same plugin with different configuration when the plugin's version config sets `duplicatesAllowed`. Instance ids appear in `satisfyMethod.conditions`, as the keys of the `completeClaim` body, in per-instance plugin state, and in `_specificInstanceIds`.

### Parallel Execution

Plugins never see each other's state changes inside one attempt. Each plugin reads state as it was before the attempt started. Passing plugins return state updates that commit together, and only if the whole claim succeeds. A plugin that needs to coordinate with another must use your own external state. Custom plugin endpoints have 10 seconds to respond.

### Asynchronous Processing

`completeClaim` simulates first. If the simulation fails, the call returns the error and nothing is queued. If it passes, the attempt joins a queue and you get a `claimAttemptId` right away. Attempts resolve in about 1 to 5 seconds. Poll `getClaimAttemptStatus`. Attempts for the same collection process one at a time; different collections process in parallel.

## Indexed Versus On-Demand Claims

| | Indexed (standard) | On-demand (non-indexed) |
| --- | --- | --- |
| `numUses` plugin | present | absent |
| Attempt ledger | every success recorded with a claim number (#0, #1, #2, and so on) | none |
| Usage limits, per-address tracking, claim numbers | yes | no |
| Typical use | distribution with a fixed supply | a live yes/no eligibility check such as token ownership |
| Result caching | n/a | per the claim's cache policy |

Most claims are indexed. A plugin must set `reuseForNonIndexed` to work in an on-demand claim.

### Cache Policy (On-Demand Claims)

```ts
interface iClaimCachePolicy<T extends NumberType> {
  ttl?: T;                          // seconds, default 300
  alwaysPermanent?: boolean;        // cache forever after the first evaluation
  permanentAfter?: UNIXMilliTimestamp<T>; // TTL until this time, then permanent
}
```

| Strategy | Behavior |
| --- | --- |
| No policy | Cache for 5 minutes |
| `ttl: 60` | Cache for 60 seconds |
| `alwaysPermanent: true` | Cache forever after the first evaluation |
| `permanentAfter: 1788825600000` | Cache with TTL until 2026-09-07T00:00:00Z, then permanently |

Use short TTLs for criteria that change (token ownership can transfer). Use permanent caching for one-time checks.

## Claim Numbers

Indexed claims number successes from 0 upward. By default `numUses` assigns the next number. A plugin with the `ClaimNumbers` response preset can assign numbers instead (`codes` assigns the code index, `whitelist` the list index). Only one plugin per claim can assign claim numbers.

## Success Logic

By default every plugin must pass. Override with `satisfyMethod`:

```ts
interface iSatisfyMethod {
  type: 'AND' | 'OR' | 'NOT';
  conditions: Array<string | iSatisfyMethod>; // instance ids or nested logic
  options?: { minNumSatisfied?: number };      // M of N for OR
}
```

| Rule | `satisfyMethod` |
| --- | --- |
| All must pass (default) | falsy |
| 2 of 3 social checks must pass | `{ type: 'OR', conditions: ['discord-gate', 'github-gate', 'twitter-gate'], options: { minNumSatisfied: 2 } }` |
| Must not pass | `{ type: 'NOT', conditions: ['banned-list'] }` |
| Nested | `{ type: 'AND', conditions: [{ type: 'OR', conditions: ['vip-whitelist', 'early-access'] }, 'num-uses'] }` |

- `numUses` is always required and cannot be made optional.
- Evaluation short-circuits. If 2 of 8 pass and that is enough, the other 6 are not checked.
- Users can pass `_specificInstanceIds` to choose which instances to attempt.
- State updates only apply to plugins on the success path.

## Signed-In Versus Select Address

The `initiatedBy` plugin decides whether the claiming address is verified.

| Mode | Behavior |
| --- | --- |
| Sign in required | The user authenticates with BitBadges. The address is verified. |
| No sign in | Any address can be entered. No verification. |

Disable sign in for a lighter UX (no wallet signature), for mobile or limited wallets, or for backend auto-completion where your server chooses the address. Most claims should require sign in. For auto-completion, disable sign in and gate with a password only your backend knows, then call `completeClaim` for any address.

## Rewards

A claim can carry rewards that become visible on success: gated text, a URL, or custom data.

```ts
interface iClaimReward<T extends NumberType> {
  rewardId: string;
  instanceId: string;              // unique per reward within the claim
  metadata?: iMetadata<T>;         // name, description, image
  automatic?: boolean;             // grant automatically on success
  gatedContent: { content?: string; url?: string; params?: object };
  calculationMethod?: { alwaysShow?: boolean; minClaimSuccesses?: number };
}
```

Configure rewards in the claim builder or through the `rewards` field of the claim document. Gated content is only visible to users who have succeeded.

## Metadata and Discoverability

| Field | Purpose |
| --- | --- |
| `metadata` | Name, description, image. Shown in the UI and search. |
| `showInSearchResults` | Appear in public search on the site. |
| `categories` | String array for filtering, for example `["nft", "gaming"]`. |
| `estimatedCost`, `estimatedTime` | Display-only strings such as `"$10"` and `"5 minutes"`. Not enforced. |
| `testOnly` | Excluded from public queries and production distribution. |

## Gating an On-Chain Approval

Claims can gate on-chain token operations such as minting. The claim controls the right to initiate a transfer, not the transfer itself.

1. The user completes the claim and receives a merkle leaf (a one-time code). BitBadges signs the leaf for that address.
2. The user submits `MsgTransferTokens` with the merkle proof.
3. The approval's merkle challenge verifies the proof on-chain.

On-chain, the chain verifies the leaf signature matches the sender, verifies the path from leaf to root, checks the root against `approvalCriteria.merkleChallenges`, marks the leaf used in the challenge tracker (no replay), and then applies every other approval criterion before executing the transfer. On the site all of this is hidden; the user completes the claim, then signs. Through the API you fetch the reserved code and the proof yourself, see [Endpoints](endpoints.md).

### On-Chain Types

```ts
interface iMerkleChallenge<T extends NumberType> {
  root: string;               // merkle root
  maxUsesPerLeaf: T;          // 1 = one-time use
  uri: string;                // where the leaf metadata lives
  customData: string;
  challengeTrackerId: string; // usage tracker id
  leafSigner: string;         // ETH address that signs leaves
}

interface iMerkleProof {
  aunts: { aunt: string; onRight: boolean }[]; // path from leaf to root
  leaf: string;                                 // the one-time code
  leafSignature: string;                        // ETH signature of `${leaf}-${intendedBitBadgesAddress}`
}

interface iMerkleChallengeTrackerDoc<T extends NumberType> {
  collectionId: CollectionId;
  challengeTrackerId: string;
  approvalId: string;
  approvalLevel: 'collection' | 'incoming' | 'outgoing' | '';
  approverAddress: BitBadgesAddress;
  usedLeafIndices: iUsedLeafStatus<T>[];
}
```

`merkleChallenges` lives on collection-level, outgoing, and incoming approval criteria. See [Merkle Challenges](../../token-standard/approval-criteria/merkle-challenges.md).

### How the Claim Links to the Approval

```ts
interface iChallengeTrackerIdDetails<T extends NumberType> {
  collectionId: CollectionId;
  approvalId: string;
  challengeTrackerId: string;
  approvalLevel: 'collection' | 'incoming' | 'outgoing' | '';
  approverAddress: BitBadgesAddress;
}
```

| Claim field | Purpose |
| --- | --- |
| `trackerDetails` | The link above. Must match the on-chain merkle challenge. |
| `collectionId` | Positive integer for an on-chain claim. Off-chain claims use a non-positive value. |
| `docClaimed` | Must be `true` for the claim to be active. Set when the claim is finalized and linked on-chain. |
| `cid` | Equals the `challengeTrackerId` for on-chain claims. |
| `action.seedCode` | Encrypted seed for the one-time codes. Decrypted only for authorized managers. |

The claim builder sets these for you. When creating claims through the API, make `trackerDetails` match the approval.

### Keep Both Sides Aligned

| Misalignment | Result |
| --- | --- |
| Claim allows 100 codes, tree has 50 leaves | The last 50 users succeed off-chain and fail on-chain |
| Approval updated, claim not updated | Users receive proofs for a stale root |
| Claim time window differs from on-chain `transferTimes` | Valid proof, transfer rejected |
| On-chain `initiatedBy` excludes the claim's allowed addresses | Valid proof, sender rejected |

Use the claim builder, which generates the tree and the claim together. Update both sides together. Make `numUses.maxUses` equal the leaf count and the approval's maximum transfers, and keep the claim's `transferTimes` inside the approval's window.

### Who Can Manage a Linked Claim

| Approval level | Who manages linked claims |
| --- | --- |
| Collection | The current collection manager. BitBadges checks it. |
| Outgoing (sender) | The sender address |
| Incoming (recipient) | The recipient address |

Transferring the manager role transfers control of every claim linked to collection approvals. The new manager can update, reconfigure, or disable them; the old manager loses access. With a manager splitter or multisig, all signers share that authority.

## Trust Model

Claims are an off-chain system run by BitBadges. Know what you trust.

- **The claim creator.** They control plugins, params, and success logic and can change them at any time. Each update increments the claim `version`. Pass `_expectedVersion` when completing claims so a changed claim fails instead of silently applying new criteria.
- **BitBadges as oracle.** BitBadges evaluates criteria, keeps state, and issues proofs. On-chain verification proves a proof is structurally valid, not that the off-chain criteria were applied correctly.
- **Third-party plugins.** A custom plugin must be honest, available within 10 seconds, and secure. A compromised plugin can approve the wrong users. Fewer plugins means fewer dependencies.
- **Codes and passwords.** Whoever holds a code or password can attempt the claim. For on-chain gating, the leaf signature binds the proof to the address that claimed, so a leaked code only helps that address on-chain. Use passwords mainly for backend auto-completion.
- **Flash criteria.** A user can qualify, transfer the qualifying token, and let the next holder qualify too. Design criteria with that in mind.

For high-stakes flows: prefer on-chain criteria (token ownership, on-chain dynamic store challenges), treat claims as a convenience layer over approval criteria that enforce the limits on their own, plan for rollback, audit each plugin and its owner, and monitor attempts through the API.

## Do You Need a Claim

Claims are a convenience, not a requirement. The on-chain merkle challenge is fully decentralized: generate your own tree, hand out leaves, and let users submit proofs without BitBadges claims.

Simpler alternatives that often fit:

- Fully on-chain criteria (token ownership, dynamic store challenges, address checks).
- A snapshot of eligible addresses baked into an approval.
- Checking ownership in your own backend with the API or SDK.
- Sending tokens directly.

Claims earn their place when you want the hosted in-site experience, composable criteria with AND/OR/NOT logic, managed state (who claimed, limits, code redemption), off-chain to on-chain gating with proof generation handled for you, or custom endpoints with managed state and webhooks.

## Related

- [Endpoints](endpoints.md)
- [Plugins](plugins.md)
- [Distribute with Claims](../../guides/distribute-with-claims.md)
- [Merkle Challenges](../../token-standard/approval-criteria/merkle-challenges.md)

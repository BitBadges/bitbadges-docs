---
description: "Configure a claim with plugins, simulate and complete it from your backend, verify success, and gate an on-chain mint with it."
---

# Distribute with Claims

At the end you have a working claim that checks your criteria, a backend that completes and verifies it, and (optionally) an on-chain mint gated by it. Claims are off-chain eligibility checks run by BitBadges; the concepts and the full endpoint list live in [Claims API](../api/claims/endpoints.md).

Prerequisites:

- A BitBadges API key. Create one at [bitbadges.io/developer](https://bitbadges.io/developer) and send it in the `x-api-key` header, or set `BITBADGES_API_KEY` for the SDK. See [BitBadges API](../api/README.md).
- The `bitbadges` npm package or the `bb` CLI (see [SDK](../sdk/README.md) and [CLI](../cli/README.md)).

## 1. Decide the Flow

Every claim answers three questions:

1. How do you identify the user? (address, sign-in)
2. How do you verify the user meets the criteria? (codes, address lists, token ownership, custom logic)
3. What happens on success? (mint a token, show gated content, grant access, trigger an external action)

Pick a criteria plugin per question. Built-in plugins cover most cases; a custom plugin covers the rest.

| Criteria | Plugin | Setup |
| --- | --- | --- |
| One-time codes handed out by email, SMS, QR, or in person | `codes` | Generate codes from a seed (step 2). Users redeem them in-site. |
| A shared secret | `password` | One password. Use it when uniqueness is not needed, or for backend auto-completion (step 4). |
| A known set of addresses | `whitelist` | Static list, or a dynamic store you update by API. |
| Addresses that change over time | `whitelist` with `useDynamicStore` | Add and remove addresses from your backend, Zapier, an agent, or a cron job. The claim config does not change. |
| On-chain token ownership | `must-own-badges`, `min-badge` | No external setup. Balances are checked directly. |
| Anything else | custom plugin | Your HTTP endpoint receives the address and returns pass or fail. See [Build a Claim Plugin](build-a-claim-plugin.md). |

`numUses` is always present and always required. It caps total uses and drives claim numbers.

Rewards work the same way:

| Reward | How |
| --- | --- |
| Gated content or URLs | The in-site rewards tab links content that appears only after success. Combine with [Sign in with BitBadges](sign-in-users.md) for an authenticated redirect. |
| External action (email, API call, database update, webhook, AI agent) | A custom plugin endpoint runs during claim processing, so it can execute side effects on success. |
| On-chain mint or transfer | The claim gates an approval with a Merkle challenge (step 6). The user gets a permanent, verifiable on-chain credential. |
| Points | Award points on success and use point balances as criteria for other claims. |
| Native integrations | Some services check claims by claim ID (for example WordPress gated sites). Everything else calls `checkClaimSuccess` (step 5). |

Design tips:

- Start with built-in plugins. Codes and passwords solve most distribution problems. Dynamic stores are less work than a custom endpoint.
- Decouple criteria from the claim. A dynamic store changes eligibility without reconfiguring the claim.
- Mint a non-transferable token when the criteria must persist and be verifiable by third parties or on-chain.
- Simulate before going live (step 4).

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

- "Build a claim gated by 100 one-time codes, one use per address, and show me the claim JSON and the codes."
- "Search the claim plugins for a way to gate by Discord server membership, then build the claim with it."
{% endhint %}

## 2. Configure the Claim

A claim is stored as an `iClaimBuilderDoc`. You create one with `api.createClaims({ claims: [...] })`, whose entries are `CreateClaimRequest` objects. Each entry in `plugins` has this shape:

```ts
interface IntegrationPluginParams<T extends ClaimIntegrationPluginType> {
  instanceId: string;       // Unique ID for this plugin instance within the claim
  pluginId: T;              // Plugin type: "numUses", "codes", "password", etc.
  version: string;          // Plugin version (usually "0")
  publicParams: object;     // Plugin-specific config (visible to users)
  privateParams: object;    // Plugin-specific secrets (hidden from users)
}
```

The fastest path is the claim builder at [bitbadges.io/developer](https://bitbadges.io/developer). It writes the document for you, and the JSON tab of the claim details shows the result. The guides section of the in-site Claim Tester lists common patterns; find the one closest to your use case and copy its steps. The same principles apply to almost every integration.

To build the document yourself, start with a code-gated claim limited to 100 uses. Codes are derived from a seed so you can regenerate them:

```ts
import crypto from 'crypto';
import CryptoJS from 'crypto-js';
import { BigIntify, BitBadgesAPI, type CreateClaimRequest } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });

const seedCode = crypto.randomBytes(32).toString('hex');
const numCodes = 100;

// Generate deterministic codes from the seed
const codes: string[] = [];
for (let i = 0; i < numCodes; i++) {
  const hash = CryptoJS.SHA256(`${seedCode}-${i}`).toString();
  codes.push(`${hash}-${i}`);
}

const claim: CreateClaimRequest<bigint> = {
  claimId: 'claim_demo_01',
  metadata: { name: 'Demo codes', description: 'One code per person', image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/claim.png' },
  plugins: [
    {
      pluginId: 'numUses',
      instanceId: 'num-uses-instance',
      version: '0',
      publicParams: { maxUses: 100 },
      privateParams: {}
    },
    {
      pluginId: 'codes',
      instanceId: 'codes-instance',
      version: '0',
      publicParams: { numCodes: 100 },
      privateParams: { codes, seedCode }
    }
  ],
  seedCode
};

await api.createClaims({ claims: [claim] });
```

Codes are one-time use by default. Distribute them however you want.

Create the claim with `bb api claims create-claim --body @claim.json` or `api.createClaims`. See [Claims API](../api/claims/endpoints.md) for the payload.

## 3. Combine Gates

Plugins pass together (AND) by default. `satisfyMethod` switches to OR or M-of-N logic; `numUses` is always required regardless. The `iSatisfyMethod` interface is in [Claims API](../api/claims/endpoints.md).

Whitelist AND token ownership, with sign-in required:

```ts
const claim: CreateClaimRequest<bigint> = {
  claimId: 'claim_demo_02',
  metadata: { name: 'VIP holders', description: 'Allowlisted holders of Demo NFT 1', image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/vip.png' },
  plugins: [
    {
      pluginId: 'numUses',
      instanceId: 'num-uses',
      version: '0',
      publicParams: { maxUses: 500 },
      privateParams: {}
    },
    {
      pluginId: 'initiatedBy',
      instanceId: 'sign-in',
      version: '0',
      publicParams: {},
      privateParams: {}
    },
    {
      pluginId: 'whitelist',
      instanceId: 'vip-list',
      version: '0',
      publicParams: { maxUsesPerAddress: 1 },
      privateParams: {
        list: {
          listId: '',
          addresses: ['bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', 'bb1zc268nctj8xwslgw7q22cahs6k4y048agr6fvf'],
          whitelist: true
        }
      }
    },
    {
      pluginId: 'must-own-badges',
      instanceId: 'badge-gate',
      version: '0',
      publicParams: {},
      privateParams: {
        ownershipRequirements: {
          $and: [{
            assets: [{
              collectionId: '1',
              assetIds: [{ start: '1', end: '1' }],
              ownershipTimes: [{ start: '1', end: 'MAX' }],
              mustOwnAmounts: { start: '1', end: 'MAX' }
            }]
          }]
        }
      }
    }
  ]
};
```

Code OR whitelist, where the whitelist reads a dynamic store:

```ts
const claim: CreateClaimRequest<bigint> = {
  claimId: 'claim_demo_03',
  metadata: { name: 'Code or allowlist', description: 'Redeem a code, or be on the eligible list', image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/either.png' },
  plugins: [
    {
      pluginId: 'numUses',
      instanceId: 'num-uses',
      version: '0',
      publicParams: { maxUses: 200 },
      privateParams: {}
    },
    {
      pluginId: 'codes',
      instanceId: 'codes-path',
      version: '0',
      publicParams: { numCodes: 100 },
      privateParams: { codes, seedCode } // from step 2
    },
    {
      pluginId: 'whitelist',
      instanceId: 'whitelist-path',
      version: '0',
      publicParams: { maxUsesPerAddress: 1 },
      privateParams: {
        useDynamicStore: true,
        dynamicDataId: 'eligible-users',
        dataSecret: process.env.STORE_SECRET!
      }
    }
  ],
  satisfyMethod: {
    type: 'OR',
    conditions: ['codes-path', 'whitelist-path']
    // numUses is always required and not included in OR conditions
  },
  seedCode
};
```

Feed the dynamic store from anywhere that can send HTTP. Pre-evaluating users this way (for example with an AI model) avoids long waits during claim execution:

```ts
const eligible = await isEligible(userAddress); // your own model or rules
if (eligible) {
  await api.performStoreAction({
    dynamicDataId: 'eligible-users',
    dataSecret: process.env.STORE_SECRET,
    actionName: 'add',
    payload: { address: userAddress }
  });
}
```

Time-windowed claim, open for one week:

```ts
const claim: CreateClaimRequest<bigint> = {
  claimId: 'claim_demo_04',
  metadata: { name: 'Launch week', description: 'Open for seven days', image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/week.png' },
  plugins: [
    {
      pluginId: 'numUses',
      instanceId: 'num-uses',
      version: '0',
      publicParams: { maxUses: 50 },
      privateParams: {}
    },
    {
      pluginId: 'transferTimes',
      instanceId: 'time-window',
      version: '0',
      publicParams: {
        transferTimes: [{
          start: '1788739200000',  // 2026-09-06 00:00 UTC
          end: '1789344000000'     // 2026-09-13 00:00 UTC
        }]
      },
      privateParams: {}
    },
    {
      pluginId: 'initiatedBy',
      instanceId: 'sign-in',
      version: '0',
      publicParams: {},
      privateParams: {}
    }
  ]
};
```

Password-gated claim for backend auto-completion. No sign-in; only your server knows the password, and `approach: 'api'` marks it as API-driven:

```ts
const claim: CreateClaimRequest<bigint> = {
  claimId: 'claim_demo_05',
  metadata: { name: 'Backend grants', description: 'Completed by the server', image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/server.png' },
  plugins: [
    {
      pluginId: 'numUses',
      instanceId: 'num-uses',
      version: '0',
      publicParams: { maxUses: 1000, displayAsUnlimited: true },
      privateParams: {}
    },
    {
      pluginId: 'password',
      instanceId: 'backend-password',
      version: '0',
      publicParams: {},
      privateParams: { password: process.env.CLAIM_PASSWORD! }
    }
  ],
  approach: 'api'
};
```

## 4. Simulate, Then Complete

A simulation is instant and has no side effects. Complete for real only after it passes. The body is keyed by `instanceId`; `_expectedVersion` fails the call if the claim changed since you fetched it (`-1` overrides).

```bash
bb api claims simulate-claim claim_demo_01 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue \
  --body '{"_expectedVersion": 0, "codes-instance": {"code": "abc-123"}}'

bb api claims complete-claim claim_demo_01 bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue \
  --body '{"_expectedVersion": 0, "codes-instance": {"code": "abc-123"}}'

# Poll the attempt after ~2 seconds, with the claimAttemptId that complete-claim returned
bb api claims get-claim-attempt-status "$CLAIM_ATTEMPT_ID"
```

```ts
const sim = await api.simulateClaim('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0,
  'codes-instance': { code: codes[0] }  // Keyed by instanceId
});

const res = await api.completeClaim('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0,
  'codes-instance': { code: codes[0] }
});

// Check status after ~2 seconds
const status = await api.getClaimAttemptStatus(res.claimAttemptId);
```

For OR claims, `_specificInstanceIds` limits the attempt to one path:

```ts
await api.completeClaim('claim_demo_03', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0,
  _specificInstanceIds: ['codes-path'],  // Only attempt the code path
  'codes-path': { code: 'abc-123' }
});
```

Backend auto-completion for the password claim above completes on behalf of any address without that user signing in:

```ts
await api.completeClaim('claim_demo_05', userAddress, {
  _expectedVersion: 0,
  'backend-password': { password: process.env.CLAIM_PASSWORD! }
});
```

## 5. Verify Success

Check an address, or a specific attempt, before you grant access:

```ts
// Has this address claimed?
const result = await api.checkClaimSuccess('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue');
if (result.successCount >= 1) {
  // Grant access, show content, etc.
}

// Did this attempt succeed?
const status = await api.getClaimAttemptStatus(res.claimAttemptId);
if (status.success) {
  // This attempt succeeded
}
```

## 6. Gate an On-Chain Mint

A claim can gate a mint or transfer. The claim controls the right to initiate; the chain executes. This is a hybrid process:

1. The user completes the claim and receives a Merkle proof leaf (a one-time code signed by BitBadges for that address; handled behind the scenes on the site).
2. The user submits the proof in a `MsgTransferTokens`.
3. The approval's Merkle challenge validates the proof.

On-chain, the chain verifies the leaf signature matches the sender, verifies the path from leaf to root, checks the root against the approval's `merkleChallenges`, marks the leaf as used in the challenge tracker (no replay), then executes the transfer if every other criterion also passes. The `iMerkleChallenge`, `iMerkleProof`, and tracker types are in [Merkle Challenges](../token-standard/approval-criteria/merkle-challenges.md). `merkleChallenges` works at any level: collection, outgoing, or incoming.

Via the API, `completeClaim` returns the proof and you include it in the transaction. See [Mint and Distribute](mint-and-distribute.md) for the transfer itself.

The claim document links to the approval through `trackerDetails`:

```ts
interface iChallengeTrackerIdDetails<T extends NumberType> {
  collectionId: CollectionId;          // The collection this claim is linked to
  approvalId: string;                  // The specific approval ID
  challengeTrackerId: string;          // The Merkle challenge tracker ID
  approvalLevel: 'collection' | 'incoming' | 'outgoing' | '';  // Which approval level
  approverAddress: BitBadgesAddress;   // The approver (manager, sender, or recipient)
}
```

| Field | Purpose |
| --- | --- |
| `collectionId` | Positive integer = on-chain claim linked to that collection. Off-chain claims use a non-positive value. |
| `docClaimed` | Must be `true` for the claim to be active and distributable. Set when the claim is finalized and linked on-chain. |
| `cid` | For on-chain claims, matches the `challengeTrackerId` and maps the claim to its Merkle challenge tracker. |
| `action.seedCode` | The encrypted seed that generates one-time codes and Merkle leaves. Decrypted only for authorized managers. |

The claim builder sets these fields for you. If you create claims programmatically, `trackerDetails` must match the on-chain approval's Merkle challenge configuration.

Both sides must agree. The off-chain claim checks plugins and issues proofs; the on-chain approval validates proofs and moves tokens. Misalignment fails late:

| Scenario | Result |
| --- | --- |
| Claim allows 100 codes, Merkle tree has 50 leaves | Last 50 users claim off-chain, then fail on-chain |
| On-chain approval updated without updating the claim | Users receive proofs for a stale Merkle root |
| Claim time window differs from on-chain `transferTimes` | Proof is valid, transfer rejected outside the on-chain window |
| On-chain `initiatedBy` does not match the claim's allowed addresses | Proof is valid, sender rejected by the approval |

Rules that keep them aligned:

- Use the claim builder. It generates the Merkle tree and the claim together.
- Update both sides together. Change the approval, update the claim; change the claim, regenerate the tree.
- Match limits. `numUses` equals the number of leaves and the approval's maximum transfers. Claim `transferTimes` fall inside the approval's window.

{% hint style="warning" %}
Do not use claim-gated approvals for high-stakes distributions. The trust model and mitigations are in [Claims](../api/claims/README.md).
{% endhint %}

Who can manage a linked claim depends on the approval level: only the manager for collection-level approvals, only the sender for outgoing approvals, only the recipient for incoming approvals. Transferring the manager role transfers claim control with it: the new manager can update, reconfigure, or disable every claim linked to collection approvals, and the previous manager loses access. With a manager splitter or multisig, all signers share that authority. See [Permissions](../token-standard/concepts/permissions.md).

## Next Steps

- [Build a Claim Plugin](build-a-claim-plugin.md) for criteria the built-in plugins do not cover.
- [Sign In Users](sign-in-users.md) to pair a claim with authentication.
- [Claims API](../api/claims/endpoints.md) for every endpoint, plugin schema, and the security model.

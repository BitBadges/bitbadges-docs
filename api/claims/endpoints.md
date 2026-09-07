---
description: "Claims API reference. Complete, simulate, and verify claims, fetch and search them, create and delete them, and build the merkle proof for on-chain claims."
---

# Claims

The claims routes let a backend or an agent complete claims for users, check who has claimed, and manage claims without the site. All claim routes require an API key. Concepts (indexed versus on-demand claims, success logic, claim numbers, the trust model) live in [Claims](README.md).

This page is also part of the [API reference](/api-reference).

Addresses in paths accept any supported format. `0x` and `bb1` addresses both work and resolve to the same account. The examples complete `claim_demo_01` (a code-gated claim on collection 1 with the instance id `codes-gate`) for bob.

## Complete a Claim

```bash
curl -X POST https://api.bitbadges.io/api/v0/claims/complete/claim_demo_01/bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{ "_expectedVersion": 0, "codes-gate": { "code": "54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0" } }'
```

```ts
const res = await BitBadgesApi.completeClaim('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0,
  'codes-gate': { code: '54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0' }
});
console.log(res.claimAttemptId); // 3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a

// Claims process asynchronously. Poll the attempt.
const status = await BitBadgesApi.getClaimAttemptStatus(res.claimAttemptId);
console.log(status.success); // true once the queue has processed it
```

```json
{ "claimAttemptId": "3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a" }
```

### Body

```ts
{
  _expectedVersion: number;        // claim.version from getClaim(). -1 skips the check (not recommended)
  _specificInstanceIds?: string[]; // only run these plugin instances
  [instanceId: string]: Record<string, unknown>; // per-plugin user inputs, keyed by instance ID
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `_expectedVersion` | number | yes | The claim version you fetched. The attempt fails on a mismatch, so a creator cannot change criteria or actions without you knowing. `-1` disables the check. |
| `_specificInstanceIds` | string[] | no | Complete only these plugin instances. Must be compatible with the claim's success logic. |
| `[instanceId]` | object | per plugin | User inputs for that plugin instance, for example `{ password }` or `{ code }`. Custom plugins define their own schema. Look it up with [Plugins](plugins.md). |

### Behavior

- The route simulates first. If simulation fails, it returns the error immediately and nothing is queued. If simulation passes, the attempt enters the queue and the response carries `claimAttemptId`.
- If the claim requires sign in (`initiatedBy` plugin), the request needs a session for that address with the `Complete Claims` scope. See [Sign In with BitBadges](../sign-in/README.md).
- If sign in is not required, gate the claim another way, for example a password that only your backend knows.
- On the site, the **API Code** tab of a claim shows snippets customized to that claim.

## Simulate a Claim

```ts
const res = await BitBadgesApi.simulateClaim('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0,
  _specificInstanceIds: ['num-uses', 'codes-gate'],
  'codes-gate': { code: '54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0' }
});
```

```bash
curl -X POST https://api.bitbadges.io/api/v0/claims/simulate/claim_demo_01/bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{ "_expectedVersion": 0, "codes-gate": { "code": "54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0" } }'
```

```json
{ "claimAttemptId": "00000000000000000000000000000000" }
```

Simulation is instant, is not queued, and consumes no use. The body is the same as `completeClaim`. Use `_specificInstanceIds` to test only some plugins. The returned `claimAttemptId` is a zeroed placeholder for compatibility.

## Check an Attempt

```bash
curl https://api.bitbadges.io/api/v0/claims/status/3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a -H "x-api-key: $BITBADGES_API_KEY"
```

```ts
const status = await BitBadgesApi.getClaimAttemptStatus('3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a');
if (status.success) {
  // this attempt succeeded
}
```

```json
{
  "success": true,
  "error": "",
  "code": "54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0",
  "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
}
```

| Field | Description |
| --- | --- |
| `success` | Final result of the attempt. |
| `error` | Error message when it failed. |
| `code` | The reserved merkle code for an on-chain token claim. Only present when you have permission and the claim is on-chain. |
| `bitbadgesAddress` | The claiming address. |

The route accepts `GET` and `POST`. Obtain `claimAttemptId` from `completeClaim` or from a custom plugin (it is in every plugin request).

### Polling

```ts
const res = await BitBadgesApi.completeClaim('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: 0,
  'codes-gate': { code: '54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0' }
});

const pollStatus = async (attemptId: string, maxRetries = 10): Promise<boolean> => {
  for (let i = 0; i < maxRetries; i++) {
    await new Promise((r) => setTimeout(r, 2000));
    const status = await BitBadgesApi.getClaimAttemptStatus(attemptId);
    if (status.success !== undefined) return status.success;
  }
  throw new Error('Claim processing timed out');
};

const success = await pollStatus(res.claimAttemptId);
```

Typical processing time is 1 to 5 seconds. Claims for the same collection process sequentially. Different collections process in parallel.

## Check Success by Address

```bash
curl https://api.bitbadges.io/api/v0/claims/success/claim_demo_01/bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue -H "x-api-key: $BITBADGES_API_KEY"
```

```ts
const res = await BitBadgesApi.checkClaimSuccess('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue');
if (res.successCount >= 1) {
  // the address has completed the claim
}
```

```json
{ "successCount": 1, "claimNumbers": [0] }
```

`successCount` is `1` for on-demand claims and the number of completions for standard (indexed) claims. `claimNumbers` lists the zero-based claim numbers for indexed claims.

Verifying a claim is two-fold. First authenticate the user (with [Sign In with BitBadges](../sign-in/README.md) or your own method). Then look up the attempt or the address as above. Never trust a client that says it claimed.

## Fetch Claim Attempts

```ts
const res = await BitBadgesApi.getClaimAttempts('claim_demo_01', {
  address: 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', // omit for the most recent attempts
  includeErrors: true,
  bookmark: ''
});
```

```bash
curl "https://api.bitbadges.io/api/v0/claims/claim_demo_01/attempts?address=bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue&includeErrors=true" \
  -H "x-api-key: $BITBADGES_API_KEY"
```

```json
{
  "docs": [
    {
      "success": true,
      "attemptedAt": "1788739200000",
      "claimId": "claim_demo_01",
      "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
      "claimAttemptId": "3b9d2f7a1c4e6b8d0f2a4c6e8b1d3f5a",
      "claimNumber": 0
    },
    {
      "success": false,
      "attemptedAt": "1788738900000",
      "claimId": "claim_demo_01",
      "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
      "claimAttemptId": "8e1c4a6f2d9b3e7a5c0f1d4b6a8e2c9f",
      "claimNumber": -1,
      "error": "Invalid code. Not found in list of codes."
    }
  ],
  "bookmark": "eyJza2lwIjoyNX0",
  "total": 2
}
```

Route: `GET /api/v0/claims/{claimId}/attempts` with `address`, `includeErrors`, and `bookmark` as query parameters. Paginated with a bookmark. See [Pagination and Views](../pagination-and-views.md).

## Fetch a Claim

```bash
curl "https://api.bitbadges.io/api/v0/claim/claim_demo_01?fetchAllClaimedUsers=true" -H "x-api-key: $BITBADGES_API_KEY"
```

```ts
const { claim } = await BitBadgesApi.getClaim('claim_demo_01', {
  fetchPrivateParams: false,      // true = include private params (creator or manager only, needs auth)
  fetchAllClaimedUsers: true,     // populates numUses publicState.claimedUsers { [address]: [claimNumbers] }
  privateStatesToFetch: ['codes-gate'] // private state for specific plugin instances
});

// Batch form: POST /api/v1/claims/fetch
const res = await BitBadgesApi.getClaims({
  claimsToFetch: [{ claimId: 'claim_demo_01', fetchAllClaimedUsers: true }]
});
```

The claim document after one success (synthesized from the SDK types; private params are stripped because `fetchPrivateParams` is false):

```json fold=9-15,38-44,46-51
{
  "claim": {
    "_includesPrivateParams": false,
    "claimId": "claim_demo_01",
    "createdBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "managedBy": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
    "collectionId": "1",
    "standaloneClaim": false,
    "trackerDetails": {
      "collectionId": "1",
      "approvalId": "mint-approval",
      "challengeTrackerId": "claim_demo_01",
      "approvalLevel": "collection",
      "approverAddress": ""
    },
    "plugins": [
      {
        "pluginId": "numUses",
        "instanceId": "num-uses",
        "version": "0",
        "publicParams": { "maxUses": 100, "hideCurrentState": false, "displayAsUnlimited": false },
        "privateParams": {},
        "publicState": {
          "numUses": 1,
          "usedClaimNumbers": [{ "start": "0", "end": "0" }],
          "claimedUsers": { "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue": [0] }
        }
      },
      {
        "pluginId": "codes",
        "instanceId": "codes-gate",
        "version": "0",
        "publicParams": { "numCodes": 100, "hideCurrentState": false },
        "privateParams": {},
        "publicState": { "usedCodeRanges": [{ "start": "0", "end": "0" }] }
      },
      {
        "pluginId": "initiatedBy",
        "instanceId": "sign-in",
        "version": "0",
        "publicParams": {},
        "privateParams": {},
        "publicState": {}
      }
    ],
    "rewards": [],
    "showInSearchResults": true,
    "categories": ["nft"],
    "estimatedCost": "Free",
    "estimatedTime": "1 minute",
    "approach": "in-site",
    "metadata": {
      "name": "Demo NFT mint",
      "description": "Redeem a one-time code for one Demo NFT.",
      "image": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/claim.png"
    },
    "assignMethod": "",
    "lastUpdated": "1788652800000",
    "version": "0"
  }
}
```

The **JSON** tab of a claim on the site shows the same document. `fetchPrivateParams: true` requires the `Read Private Claim Data` scope for that claim's creator or manager.

## Search Claims

```ts
const res = await BitBadgesApi.searchClaims({
  searchValue: 'demo nft', // regex match on name
  bookmark: ''
});
console.log(res.claims.map((c) => c.claimId)); // ['claim_demo_01']
```

```bash
curl "https://api.bitbadges.io/api/v0/claims/search?searchValue=demo%20nft" -H "x-api-key: $BITBADGES_API_KEY"
```

Route: `GET /api/v0/claims/search` with `searchValue` and `bookmark` as query parameters. The response is `{ claims, bookmark }` with the same claim documents as above. Only claims with `showInSearchResults: true` appear.

## Create Claims

```ts
import crypto from 'crypto';
import { BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({ apiKey: process.env.BITBADGES_API_KEY, convertFunction: BigIntify });

// Generate codes the same way the API does: sha256(`${seedCode}-${i}`) + `-${i}`
const seedCode = crypto.randomBytes(32).toString('hex');
const numCodes = 50;
const codes: string[] = [];
for (let i = 0; i < numCodes; i++) {
  codes.push(crypto.createHash('sha256').update(`${seedCode}-${i}`).digest('hex') + `-${i}`);
}

await api.createClaims({
  claims: [
    {
      claimId: 'claim_demo_02',
      plugins: [
        {
          pluginId: 'numUses',
          instanceId: 'num-uses',
          version: '0',
          publicParams: { maxUses: numCodes, hideCurrentState: false, displayAsUnlimited: false },
          privateParams: {}
        },
        {
          pluginId: 'codes',
          instanceId: 'codes-gate',
          version: '0',
          publicParams: { numCodes, hideCurrentState: false },
          privateParams: { codes, seedCode }
        }
      ],
      rewards: [],
      metadata: { name: 'Bot code drop', description: 'Codes distributed by my bot', image: '' },
      showInSearchResults: false,
      categories: [],
      approach: 'api'
    }
  ]
});
```

Route: `POST /api/v0/claims`. Requires a session with the `Manage Claims` scope. The response is `{}`. Pass `testClaims: true` to create test claims that disappear when the browser session ends and never show in search. Linking a claim to an on-chain collection approval requires the proper permissions and extra setup; the site or the MCP builder tools apply `collectionId` and the tracker details for you. If you use the MCP builder tools or the AI builder, call the `build_claim` tool instead of writing this payload. For the `codes` plugin, set `publicParams.numCodes` as a number and leave `privateParams` empty. The server generates `seedCode` and the codes. Use the `search_plugins` tool to list plugins and their parameters.

Update with `PUT /api/v0/claims` (`{ claims: UpdateClaimRequest[] }`).

## Delete Claims

```ts
await BitBadgesApi.deleteClaims({ claimIds: ['claim_demo_02'] });
```

```json
{}
```

Route: `DELETE /api/v0/claims`. Deletion is a soft delete. The claim gets `deletedAt` and drops out of queries. Attempt records stay for history.

## Reserved Codes and the Merkle Proof

An on-chain gated claim reserves a merkle code for the user when the claim succeeds. The user then proves that code in `MsgTransferTokens`. The flow is: create claim, complete claim, get the reserved code, get the proof path, submit the transfer.

### 1. Get Reserved Codes and Leaf Signatures

```ts
const reserved = await BitBadgesApi.getReservedClaimCodes('claim_demo_01', 'bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue', {
  _expectedVersion: claim.version
});
```

```json
{
  "reservedCodes": ["54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0"],
  "leafSignatures": [
    "0x5c1d8f0b3a7e2c9d4f6a1b8e0c3d5f7a9b2e4c6d8f0a1b3c5d7e9f2a4b6c8d0e1f3a5b7c9d0e2f4a6b8c1d3e5f7a9b0c2d4e6f8a1b3c5d7e9f0a2b4c6d8e1b"
  ]
}
```

Route: `POST /api/v0/claims/reserved/{claimId}/{address}`. `leafSignatures[i]` proves the mapping between `reservedCodes[i]` and the address.

### 2. Get the Merkle Path

The proof route is HTTP only (no SDK wrapper). Leaves are `sha256(code)`, or `sha256(bitbadgesAddress)` when the challenge uses `useCreatorAddressAsLeaf`. The leaf below is `sha256` of the reserved code above.

```bash
curl -X POST https://api.bitbadges.io/api/v0/merkleProofInfo \
  -H "Content-Type: application/json" -H "x-api-key: $BITBADGES_API_KEY" \
  -d '{
    "collectionId": "1",
    "approvalId": "mint-approval",
    "approvalLevel": "collection",
    "approverAddress": "",
    "challengeTrackerId": "claim_demo_01",
    "bitbadgesAddress": "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue",
    "claimCodes": ["54cf408a23d18090ae296d44ee588da291bdc4bec75ef0af8b2513e5903caaba-0"],
    "leaves": ["ab24f755d460e42069f4e20715f9807c896a8c5b974c4fda776ebdbd357a8526"]
  }'
```

```json
{
  "allProofDetails": [
    {
      "proofObj": [
        { "aunt": "0647c17406a5682d95a118679d324a19eee7556a06158a1f475a7ea664d7d73f", "onRight": true },
        { "aunt": "64c8e890a8cfacb411332d91e3b6c260c59d1d63c3122ed5d4e461c4afaed04e", "onRight": true },
        { "aunt": "a70e0dae15ca1d64303f6f50b22a961f46e9b4d0e29dce2718149d113bdf2b32", "onRight": true }
      ],
      "isValidProof": true,
      "leafIndex": 0,
      "leaf": "ab24f755d460e42069f4e20715f9807c896a8c5b974c4fda776ebdbd357a8526"
    }
  ]
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `collectionId` | string | yes | Collection with the approval. |
| `approvalId` | string | yes | Approval that carries the merkle challenge. |
| `approvalLevel` | string | yes | `collection`, `outgoing`, or `incoming`. |
| `approverAddress` | string | yes | Empty string for collection level. The user's address for outgoing or incoming. |
| `challengeTrackerId` | string | yes | The `challengeTrackerId` of the merkle challenge in `approvalCriteria.merkleChallenges`. |
| `leaves` | string[] | yes | `sha256` of each code, or of the address for `useCreatorAddressAsLeaf`. |
| `claimCodes` | string[] | code claims | The reserved codes, in the same order as `leaves`. |
| `bitbadgesAddress` | string | address claims | The claiming address. Required when `useCreatorAddressAsLeaf` is set. |

### 3. Submit the Transfer

```ts
const proof = proofInfo.allProofDetails[0];

const result = await client.signAndBroadcast([
  MsgTransferTokens.create({
    creator: client.address,
    collectionId: '1',
    transfers: [
      {
        from: 'Mint',
        toAddresses: [client.address],
        balances: [
          {
            tokenIds: [{ start: '1', end: '1' }],
            amount: '1',
            ownershipTimes: [{ start: '1', end: '18446744073709551615' }]
          }
        ],
        merkleProofs: [
          {
            leaf: reserved.reservedCodes[0],
            leafSignature: reserved.leafSignatures[0],
            aunts: proof.proofObj
          }
        ],
        prioritizedApprovals: [
          { approvalId: 'mint-approval', approvalLevel: 'collection', approverAddress: '', version: '0' }
        ],
        onlyCheckPrioritizedCollectionApprovals: true,
        onlyCheckPrioritizedIncomingApprovals: false,
        onlyCheckPrioritizedOutgoingApprovals: false,
        memo: ''
      }
    ]
  })
]);
```

`client` is the signing client for the claiming address (bob), so `client.address` is `bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue`. `prioritizedApprovals` tells the chain which approval to check. The `approvalId` must match the approval that references the claim's merkle challenge. Always pass `prioritizedApprovals`, even when empty. See [Prioritized Approvals](../../token-standard/concepts/prioritized-approvals.md) and [MsgTransferTokens](../../token-standard/messages/msg-transfer-tokens.md).

## Patterns for Agents and Backends

- **Bot distributes codes.** Create a code-gated claim, hand out codes through your app or bot, and let users complete on the site or complete on their behalf.
- **Backend auto-completion.** Create a password-gated claim where only your backend knows the password. Complete claims for users when they meet your own criteria. This is incompatible with in-site plugins that need user interaction; a custom plugin is usually the better option. See [Build a Claim Plugin](../../guides/build-a-claim-plugin.md).
- **Ownership-gated minting.** Use the `must-own-badges` plugin so holders of token X can mint token Y.
- **Time-windowed drops.** Add `transferTimes` to bound when claims can complete.
- **Standalone claims.** Criteria check, then an off-chain reward (points, a list spot, gated content). No transaction needed.

Tips:

- Call `simulateClaim` before `completeClaim` in production to catch errors without consuming a use.
- Match `numUses.maxUses` to the merkle tree leaf count for on-chain claims. A mismatch leaves some codes without a valid proof.
- Pass `_expectedVersion` so concurrent agents or users cannot race a changed claim.
- Poll `getClaimAttemptStatus` after submitting. Attempts resolve in about 2 to 5 seconds.
- Plugin schemas: see [Plugins](plugins.md) for `getPlugin`, `getPlugins`, `searchPlugins`, and `getPluginErrors`.

## Related

- [Claims](README.md)
- [Plugins](plugins.md)
- [Distribute with Claims](../../guides/distribute-with-claims.md)
- [API reference](/api-reference)

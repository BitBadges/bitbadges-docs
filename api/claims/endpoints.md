---
description: "Claims API reference. Complete, simulate, and verify claims, fetch and search them, create and delete them, and build the merkle proof for on-chain claims."
---

# Claims

The claims routes let a backend or an agent complete claims for users, check who has claimed, and manage claims without the site. All claim routes require an API key. Concepts (indexed versus on-demand claims, success logic, claim numbers, the trust model) live in [Claims](README.md).

This page is also part of the [API reference](/api-reference).

Addresses in paths accept any supported format. `0x` and `bb1` addresses both work and resolve to the same account.

## Complete a claim

```bash
curl -X POST https://api.bitbadges.io/api/v0/claims/complete/<claimId>/bb1abc... \
  -H "Content-Type: application/json" -H "x-api-key: <key>" \
  -d '{ "_expectedVersion": 0, "codes-instance": { "code": "abc-def-ghi" } }'
```

```ts
const res = await BitBadgesApi.completeClaim(claimId, 'bb1abc...', {
  _expectedVersion: 0,
  'password-instance': { password: 'secret123' },
  'codes-instance': { code: 'abc-def-ghi' }
});
console.log(res.claimAttemptId);

// Claims process asynchronously. Poll the attempt.
const status = await BitBadgesApi.getClaimAttemptStatus(res.claimAttemptId);
console.log(status); // { success: true, error: '', bitbadgesAddress: 'bb1...' }
```

### Body

```ts
{
  _expectedVersion: number;        // claim.version from getClaim(). -1 skips the check (not recommended)
  _specificInstanceIds?: string[]; // only run these plugin instances
  [instanceId: string]: { ...pluginInputs }; // per-plugin user inputs, keyed by instance ID
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

## Simulate a claim

```ts
const res = await BitBadgesApi.simulateClaim(claimId, address, {
  _expectedVersion: 0,
  _specificInstanceIds: ['plugin-a', 'plugin-b'],
  'plugin-a': { /* ... */ }
});
```

```bash
curl -X POST https://api.bitbadges.io/api/v0/claims/simulate/<claimId>/<address> \
  -H "Content-Type: application/json" -H "x-api-key: <key>" \
  -d '{ "_expectedVersion": 0 }'
```

Simulation is instant, is not queued, and consumes no use. The body is the same as `completeClaim`. Use `_specificInstanceIds` to test only some plugins. The returned `claimAttemptId` is a placeholder for compatibility.

## Check an attempt

```bash
curl https://api.bitbadges.io/api/v0/claims/status/<claimAttemptId> -H "x-api-key: <key>"
```

```ts
const status = await BitBadgesApi.getClaimAttemptStatus(claimAttemptId);
if (status.success) {
  // this attempt succeeded
}
```

```json
{ "success": true, "error": "", "code": "abc123...", "bitbadgesAddress": "bb1..." }
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
const res = await BitBadgesApi.completeClaim(claimId, address, body);

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

## Check success by address

```bash
curl https://api.bitbadges.io/api/v0/claims/success/<claimId>/<address> -H "x-api-key: <key>"
```

```ts
const res = await BitBadgesApi.checkClaimSuccess(claimId, address);
if (res.successCount >= 1) {
  // the address has completed the claim
}
```

```json
{ "successCount": 1, "claimNumbers": [0] }
```

`successCount` is `1` for on-demand claims and the number of completions for standard (indexed) claims. `claimNumbers` lists the zero-based claim numbers for indexed claims.

Verifying a claim is two-fold. First authenticate the user (with [Sign In with BitBadges](../sign-in/README.md) or your own method). Then look up the attempt or the address as above. Never trust a client that says it claimed.

## Fetch claim attempts

```ts
const res = await BitBadgesApi.getClaimAttempts(claimId, {
  address: 'bb1abc...', // omit for the most recent attempts
  includeErrors: true,
  bookmark: ''
});
```

Route: `POST /api/v0/claims/{claimId}/attempts`. Paginated with a bookmark. See [Pagination and views](../pagination-and-views.md).

## Fetch a claim

```bash
curl "https://api.bitbadges.io/api/v0/claim/<claimId>?fetchAllClaimedUsers=true" -H "x-api-key: <key>"
```

```ts
const claim = await BitBadgesApi.getClaim(claimId, {
  fetchPrivateParams: false,      // true = include private params (creator or manager only, needs auth)
  fetchAllClaimedUsers: true,     // populates numUses publicState.claimedUsers { [address]: [claimNumbers] }
  privateStatesToFetch: ['instanceId'] // private state for specific plugin instances
});

// Batch form: POST /api/v1/claims/fetch
const res = await BitBadgesApi.getClaims({
  claimsToFetch: [{ claimId, fetchAllClaimedUsers: true }]
});
```

The **JSON** tab of a claim on the site shows a full example document. `fetchPrivateParams: true` requires the `Read Private Claim Data` scope for that claim's creator or manager.

## Search claims

```ts
const res = await BitBadgesApi.searchClaims({
  searchValue: 'nft mint', // regex match on name
  bookmark: undefined
});
```

Route: `POST /api/v0/claims/search`. Only claims with `showInSearchResults: true` appear.

## Create claims

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
      plugins: [
        {
          pluginId: 'numUses',
          instanceId: 'num-uses',
          version: '0',
          publicParams: { maxUses: numCodes },
          privateParams: {}
        },
        {
          pluginId: 'codes',
          instanceId: 'codes-gate',
          version: '0',
          publicParams: { numCodes },
          privateParams: { codes, seedCode }
        }
      ],
      state: {},
      action: { seedCode },
      metadata: { name: 'My Agent Claim', description: 'Codes distributed by my bot' }
    }
  ]
});
```

Route: `POST /api/v0/claims`. Requires a session with the `Manage Claims` scope. Pass `testClaims: true` to create test claims that disappear when the browser session ends and never show in search. Linking a claim to an on-chain collection approval requires the proper permissions and extra setup; the site or the MCP builder tools apply `collectionId` and the tracker details for you. If you use the MCP builder tools or the AI builder, call the `build_claim` tool instead of writing this payload. For the `codes` plugin, set `publicParams.numCodes` as a number and leave `privateParams` empty. The server generates `seedCode` and the codes. Use the `search_plugins` tool to list plugins and their parameters.

Update with `PUT /api/v0/claims` (`{ claims: UpdateClaimRequest[] }`).

## Delete claims

```ts
await BitBadgesApi.deleteClaims({ claimIds: ['claim-id-1', 'claim-id-2'] });
```

Route: `DELETE /api/v0/claims`. Deletion is a soft delete. The claim gets `deletedAt` and drops out of queries. Attempt records stay for history.

## Reserved codes and the merkle proof

An on-chain gated claim reserves a merkle code for the user when the claim succeeds. The user then proves that code in `MsgTransferTokens`. The flow is: create claim, complete claim, get the reserved code, get the proof path, submit the transfer.

### 1. Get reserved codes and leaf signatures

```ts
const reserved = await BitBadgesApi.getReservedClaimCodes(claimId, userAddress, {
  _expectedVersion: claim.version
});
// reserved.reservedCodes = ['abc123...-0']
// reserved.leafSignatures = ['0x...']  proves the address to leaf mapping
```

Route: `POST /api/v0/claims/reserved/{claimId}/{address}`.

### 2. Get the merkle path

The proof route is HTTP only (no SDK wrapper). Leaves are `sha256(code)`, or `sha256(bitbadgesAddress)` when the challenge uses `useCreatorAddressAsLeaf`.

```bash
curl -X POST https://api.bitbadges.io/api/v0/merkleProofInfo \
  -H "Content-Type: application/json" -H "x-api-key: <key>" \
  -d '{
    "collectionId": "123",
    "approvalId": "mint-approval",
    "approvalLevel": "collection",
    "approverAddress": "",
    "challengeTrackerId": "<challengeTrackerId>",
    "bitbadgesAddress": "bb1abc...",
    "claimCodes": ["abc123...-0"],
    "leaves": ["<sha256 of each code>"]
  }'
```

```json
{
  "allProofDetails": [
    { "proofObj": [ { "aunt": "<hash>", "onRight": true } ], "isValidProof": true, "leafIndex": 0, "leaf": "<hash>" }
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

### 3. Submit the transfer

```ts
const proof = proofInfo.allProofDetails[0];

const result = await client.signAndBroadcast([
  MsgTransferTokens.create({
    creator: client.address,
    collectionId: '123',
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

`prioritizedApprovals` tells the chain which approval to check. The `approvalId` must match the approval that references the claim's merkle challenge. Always pass `prioritizedApprovals`, even when empty. See [Prioritized approvals](../../token-standard/concepts/prioritized-approvals.md) and [MsgTransferTokens](../../token-standard/messages/msg-transfer-tokens.md).

## Patterns for agents and backends

- **Bot distributes codes.** Create a code-gated claim, hand out codes through your app or bot, and let users complete on the site or complete on their behalf.
- **Backend auto-completion.** Create a password-gated claim where only your backend knows the password. Complete claims for users when they meet your own criteria. This is incompatible with in-site plugins that need user interaction; a custom plugin is usually the better option. See [Build a claim plugin](../../guides/build-a-claim-plugin.md).
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
- [Distribute with claims](../../guides/distribute-with-claims.md)
- [API reference](/api-reference)

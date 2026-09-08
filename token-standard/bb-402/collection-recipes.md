---
description: "Collection approval configurations for BB-402 auth patterns: basic soulbound access token, revocable token, short-lived 2FA token, ban list, and tiered access."
---

# BB-402 Collection Recipes

These are the collection approval setups that back common BB-402 gates. Every recipe is a variation of one pattern: the provider mints, tokens are soulbound, and revocation is optional.

```ts
collectionApprovals: [
  // Provider can mint to anyone, anytime
  {
    approvalId: 'provider-mint',
    fromListId: 'Mint',
    toListId: 'All',
    initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',  // only alice, the provider, can mint
    transferTimes: [{ start: 1n, end: 18446744073709551615n }],
    tokenIds: [{ start: 1n, end: 1n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    version: 0n,
    approvalCriteria: {
      overridesFromOutgoingApprovals: true,  // required for Mint
      overridesToIncomingApprovals: true,
    },
  },
  // No post-mint transfer approval = soulbound
]
```

{% hint style="info" %}
Ask your agent:

```text
Create a soulbound access-token collection where only alice can mint and revoke, and lock those approvals forever.
```

The MCP builder tools (`add_approval, set_permissions`) produce the objects on this page.
{% endhint %}

## The Core Pattern

1. The provider has free mint power: it can mint to anyone, for all time or for a window.
2. Soulbound: no post-mint transfer approval exists, so tokens cannot move.
3. Revocable (optional): the provider can transfer tokens out of users' accounts.

You control access by minting and revoking. Everything else is a variation.

## Basic Access Token

Provider-minted, soulbound, no transfers. The approvals above are the whole configuration.

BB-402 check: `mustOwnAmounts: { start: '1', end: '1' }` on this collection.

## Revocable Access Token

The basic pattern plus a second approval that lets the provider move tokens back to its own account. `Mint` cannot receive tokens, so revocation here removes the user's access without burning supply. This pattern requires `noForcefulPostMintTransfers: false`.

```ts
collectionApprovals: [
  // Provider can mint
  {
    approvalId: 'provider-mint',
    fromListId: 'Mint',
    toListId: 'All',
    initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
    transferTimes: [{ start: 1n, end: 18446744073709551615n }],
    tokenIds: [{ start: 1n, end: 1n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    version: 0n,
    approvalCriteria: {
      overridesFromOutgoingApprovals: true,
      overridesToIncomingApprovals: true,
    },
  },
  // Provider can revoke (transfer from the user back to the provider)
  {
    approvalId: 'provider-revoke',
    fromListId: '!Mint',
    toListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
    initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',  // only alice can revoke
    transferTimes: [{ start: 1n, end: 18446744073709551615n }],
    tokenIds: [{ start: 1n, end: 1n }],
    ownershipTimes: [{ start: 1n, end: 18446744073709551615n }],
    version: 0n,
    approvalCriteria: {
      overridesFromOutgoingApprovals: true,  // bypass user's outgoing approvals
      overridesToIncomingApprovals: true,
    },
  },
]
```

## Short-Lived 2FA Token

For sensitive operations, mint a token that is valid for a brief window (for example 60 seconds). The user completes a 2FA challenge on your frontend, you mint the short-lived token, and the gated endpoint checks for it alongside the main access token.

```ts
// After user passes 2FA on your frontend:
const now = BigInt(Date.now());
const sixtySeconds = 60n * 1000n;

const transfer = {
  from: 'Mint',
  toAddresses: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
  balances: [{
    amount: 1n,
    tokenIds: [{ start: 1n, end: 1n }],
    ownershipTimes: [{ start: now, end: now + sixtySeconds - 1n }],
  }],
};
```

BB-402 check: `$and` of the main access token and the 2FA token.

```json
{
  "$and": [
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "42",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "mustOwnAmounts": { "start": "1", "end": "1" }
      }]
    },
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "99",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "mustOwnAmounts": { "start": "1", "end": "1" }
      }]
    }
  ]
}
```

The 2FA token expires on its own. No revocation, no cleanup.

## Ban List

A separate collection where owning a token means the address is banned. Use the provider-mint plus soulbound pattern; to ban, mint to the user; to unban, revoke with the revocable pattern.

```ts
// Ban collection: same provider-mint + soulbound pattern
// To ban: mint token to the user
// To unban: revoke (use the revocable pattern above)
```

BB-402 check with `mustOwnAmounts: { start: '0', end: '0' }` (must not own):

```json
{
  "tokens": [{
    "chain": "BitBadges",
    "collectionId": "999",
    "tokenIds": [{ "start": "1", "end": "1" }],
    "mustOwnAmounts": { "start": "0", "end": "0" }
  }]
}
```

## Tiered Access

Use token IDs within one collection as tiers:

- Token ID 1: basic
- Token ID 2: premium
- Token ID 3: enterprise

Mint the matching token ID to each user. Check with `$or` for "any tier", or with a specific token ID for a tier-specific endpoint.

## How to Create the Collection

- On the BitBadges site, the recommended path for most providers. An AI agent with the [MCP Builder Tools](../../agents/mcp-tools.md) can also assemble the configuration.
- With the CLI: `bb build` then `bb deploy`; see [Create a Collection](../../guides/create-a-collection.md).
- With the SDK: [MsgUniversalUpdateCollection](../messages/msg-universal-update-collection.md).

Most providers create the collection once and then mint and revoke programmatically through the SDK or API.

## Related

- [BB-402](README.md)
- [Gate access](../../guides/gate-access.md)
- [Set Transferability](../../guides/set-transferability.md)
- [Mint and Distribute](../../guides/mint-and-distribute.md)

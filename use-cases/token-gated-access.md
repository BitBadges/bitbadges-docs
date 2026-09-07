---
description: "Gate an API route, a page, or a download behind token ownership with BB-402. A soulbound receipt and one JSON condition replace API keys."
---

# Token-Gated Access

BB-402 turns any HTTP resource into a token-gated one. The server answers `402 Payment Required` with the ownership condition, the client proves it holds the token with a signature, and the server checks the balance on-chain. The token is the credential: a subscription, a paid receipt, a membership, a KYC credential, or a ban-list entry all work as the condition.

On the collection side, the whole access model is which approvals exist. A mint approval with no post-mint approval is a soulbound receipt that cannot be sold or lent. Add a manager override approval and the receipt is revocable.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Credential cannot be transferred | No approval with `fromListId: "!Mint"`. Mint is the only path in. See [Transferability](../token-standard/concepts/transferability.md) |
| Credential can be revoked | A manager-only approval with `overridesFromOutgoingApprovals: true` that moves tokens back to Mint or to the burn address. See [Overrides](../token-standard/approval-criteria/overrides.md) |
| Access expires | `ownershipTimes` on the balance, as in a [subscription](subscriptions.md) |
| Tiers | One token ID per level; the condition names the level it needs |
| "Must hold this and must not be banned" | `AccessCondition` with `$and`, `$or`, and `mustOwnAmounts: { "start": "0", "end": "0" }` for exclusion. See [BB-402](../token-standard/bb-402/README.md) |
| Server-side proof of ownership | A balance query or the BitBadges API `verifyOwnership` call. See [Gate Access with BB-402](../guides/gate-access.md) |

## The Fields That Matter

The condition the server sends back in the 402 body: hold tier 2 or higher of collection `100` right now, and hold nothing from ban list `999`.

```json
{
  "$and": [
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "100",
        "tokenIds": [{ "start": "2", "end": "3" }],
        "ownershipTimes": [{ "start": "1788739200000", "end": "1788739200000" }],
        "mustOwnAmounts": { "start": "1", "end": "18446744073709551615" }
      }]
    },
    {
      "tokens": [{
        "chain": "BitBadges",
        "collectionId": "999",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "mustOwnAmounts": { "start": "0", "end": "0" }
      }]
    }
  ]
}
```

The collection that backs it needs one approval:

```json
{
  "approvalId": "issue-access",
  "fromListId": "Mint",
  "toListId": "All",
  "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "tokenIds": [{ "start": "1", "end": "3" }],
  "approvalCriteria": { "overridesFromOutgoingApprovals": true }
}
```

With no other approval, a holder cannot move the token anywhere. The server does not need to check "was this resold" because it cannot be.

## Variations

- Paid access: replace the manager mint with a public mint that has `coinTransfers`, so buying the token is buying the access. See [Product Catalogs and Commerce](product-catalogs-and-commerce.md).
- Short-lived sessions: mint with `ownershipTimes` of a few minutes and `allowPurgeIfExpired: true`, the same shape as a [custom 2FA token](memberships-and-address-lists.md).
- Any N of M: `numMatchesForVerification` on the condition accepts holders of any 3 of 10 token IDs.
- Cross-chain holders: `chain: "Ethereum"` in the condition checks an ERC-721 or ERC-20 with the same server code.
- Chain-level gating: the [ante handler token gate](../token-standard/integrate/ante-handler-token-gates.md) applies the same ownership check to any Cosmos message type, not only HTTP.

## Build It

- Skill: [BB-402](../agents/skills/bb-402.md)
- Guide: [Gate Access with BB-402](../guides/gate-access.md), [Collection Recipes](../token-standard/bb-402/collection-recipes.md) for the soulbound, revocable, 2FA, ban-list, and tiered collections
- Spec: [BB-402 Specification](../token-standard/bb-402/spec.md)

```text
Build a soulbound access token collection with three tiers (token IDs 1 to 3) that only I can mint, no transfers after mint. Then write an Express middleware that returns a BB-402 challenge requiring tier 2 or 3 and verifies the X-BB-Proof header with the BitBadges API.
```

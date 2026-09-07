---
description: "Keep an allowlist, a ban list, a DAO roster, or a five-minute 2FA token on-chain. Membership is a balance; the manager adds by minting and removes by burning."
---

# Memberships and Address Lists

A membership collection is one token ID and two manager-only approvals: mint to add an address, burn to remove it. Any other collection, any BB-402 server, and any ante handler can then reference the roster with `mustOwnTokens`. For a plain list with no balances, a stored address list from MsgCreateAddressLists does the same job and plugs into any `toListId` or `initiatedByListId`, including inverted with `!` for a ban list.

Two variants stretch the same shape. A DAO roster becomes a multi-sig when its approvals carry `votingChallenges`. A 2FA collection mints tokens that expire in five minutes, so "holds one right now" is proof of a fresh second factor.

## What Makes It Work

| Requirement | Token-standard primitive |
| --- | --- |
| Manager adds a member | `manager-add` approval: `fromListId: "Mint"`, `initiatedByListId` = manager |
| Manager removes a member | `manager-remove` approval: `fromListId: "!Mint"`, `toListId` = burn address, `initiatedByListId` = manager, `overridesFromOutgoingApprovals: true`. See [Overrides](../token-standard/approval-criteria/overrides.md) |
| Members cannot transfer membership | No other approval on the collection |
| Other collections check membership | `mustOwnTokens` with this collection's ID. See [Token Ownership](../token-standard/approval-criteria/token-ownership.md) |
| Allowlist or ban list in any approval | A stored list ID in `toListId`, or `!listId` to exclude. See [Address Lists](../token-standard/concepts/address-lists.md) |
| Votes from the roster | `votingChallenges` with members as `voters` and a `quorumThreshold`. See [Voting Challenges](../token-standard/approval-criteria/voting-challenges.md) |
| Token that expires in minutes | `ownershipTimes` of `[now, now + 300000]` on the mint, with `autoDeletionOptions.allowPurgeIfExpired: true`. See [Auto-Deletion](../token-standard/approval-criteria/auto-deletion.md) |

## The Fields That Matter

```json
{
  "standards": ["Address List"],
  "validTokenIds": [{ "start": "1", "end": "1" }],
  "collectionApprovals": [
    {
      "approvalId": "manager-add",
      "fromListId": "Mint",
      "toListId": "All",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "approvalCriteria": { "overridesFromOutgoingApprovals": true, "overridesToIncomingApprovals": false }
    },
    {
      "approvalId": "manager-remove",
      "fromListId": "!Mint",
      "toListId": "bb1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs7gvmv",
      "initiatedByListId": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
      "approvalCriteria": { "overridesFromOutgoingApprovals": true, "overridesToIncomingApprovals": false }
    }
  ]
}
```

A 2FA mint is a MsgTransferTokens whose balance carries the short window:

```json
{
  "from": "Mint",
  "toAddresses": ["bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"],
  "balances": [{ "amount": "1", "tokenIds": [{ "start": "1", "end": "1" }], "ownershipTimes": [{ "start": "1788739200000", "end": "1788739500000" }] }]
}
```

```bash
bb build address-list --name "Allowlist" --description "Approved addresses" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/list.png
bb build custom-2fa --creator bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --name "Demo 2FA" \
  --image ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/2fa.png --description "Short-lived 2FA token"
```

The first emits an `Address List` collection with the two manager approvals above. The second emits a `Custom-2FA` collection whose mint approval only the manager can use; `bb custom-2fa mint` then issues tokens with the five-minute window.

## Variations

- Self-service join: replace `initiatedByListId` on `manager-add` with `All` and add `coinTransfers` for a paid membership, or `merkleChallenges` for an invite code.
- Expiring membership: mint with `ownershipTimes` and renew like a [subscription](subscriptions.md).
- DAO treasury: a payout approval with `votingChallenges` over the roster, `resetAfterExecution: true` for recurring votes, and `delayAfterQuorum` as a timelock. See [Multi-Sig Voting](../agents/skills/multi-sig-voting.md).
- Public ban list: an `Address List` collection anyone can reference as `!` in their own approvals, or in a BB-402 condition with `mustOwnAmounts: { "start": "0", "end": "0" }`.
- Withdraw gate: point a vault's `mustOwnTokens` at the 2FA collection. See [Agent Vaults and Spending Limits](agent-vaults-and-spending-limits.md).

## Build It

- Skill: [Address List](../agents/skills/address-list.md), [Custom 2FA](../agents/skills/custom-2fa.md), [Multi-Sig Voting](../agents/skills/multi-sig-voting.md)
- Reference: [MsgCreateAddressLists](../token-standard/messages/msg-create-address-lists.md), [Collection Recipes](../token-standard/bb-402/collection-recipes.md) for the ban-list and 2FA recipes
- CLI: [`bb build address-list`](../cli/build.md#address-list), [`bb build custom-2fa`](../cli/build.md#custom-2fa), `bb custom-2fa mint` from [Standards](../cli/standards.md#custom-2fa)

```text
Load the address-list skill. Build a members collection called Council where only bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d can add and remove members and members cannot transfer. Validate, review, simulate, then give me the review link.
```

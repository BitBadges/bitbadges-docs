---
description: "The mental model behind every BitBadges token on one page, plus the order to read the concept pages in."
---

# Concepts

This page gives the model that every other page assumes. Read it before the reference tabs.

## The model

A transfer moves an amount of token IDs, for a set of ownership times, from one address to one or more recipients. The chain executes it only if all of the following hold:

1. The sender owns the balance being moved.
2. A collection approval matches the transfer.
3. The sender's outgoing approvals match, unless the collection approval overrides them.
4. The recipient's incoming approvals match, unless the collection approval overrides them.

A complete `Transfer` with the three fields that matter open:

```json fold=17-34
{
  "from": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "toAddresses": [
    "bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue"
  ],
  "balances": [
    {
      "amount": "1",
      "tokenIds": [
        { "start": "1", "end": "1" }
      ],
      "ownershipTimes": [
        { "start": "1", "end": "18446744073709551615" }
      ]
    }
  ],
  "precalculateBalancesFromApproval": {
    "approvalId": "",
    "approvalLevel": "",
    "approverAddress": "",
    "version": "0",
    "precalculationOptions": {
      "overrideTimestamp": "0",
      "tokenIdsOverride": [],
      "scalingMultiplier": "0"
    }
  },
  "merkleProofs": [],
  "ethSignatureProofs": [],
  "memo": "",
  "prioritizedApprovals": [],
  "onlyCheckPrioritizedCollectionApprovals": false,
  "onlyCheckPrioritizedIncomingApprovals": false,
  "onlyCheckPrioritizedOutgoingApprovals": false
}
```

The building blocks:

| Block | One line |
| --- | --- |
| Collection | The on-chain object that holds tokens, metadata, approvals, permissions, and a manager. |
| Token ID | A number from 1 to `validTokenIds`. Fungible or non-fungible depends only on how many you mint per ID. |
| Balance | `amount` of `tokenIds` owned during `ownershipTimes`. Ownership can be time-bound. |
| Mint address | The reserved sender `"Mint"` with unlimited balance. Every mint is a transfer from it. |
| Address list | A reusable set of addresses referenced by ID in approvals: `"All"`, `"Mint"`, `"!Mint"`, inline lists, or stored lists. |
| Approval | A rule that says who can send, who can receive, who can initiate, when, which IDs, which ownership times, plus criteria. |
| Approval criteria | Extra conditions on an approval: payments, proofs, votes, trackers, overrides, and more. |
| Permission | A rule that says whether the manager (or a user) can change something, and whether that rule is frozen. |
| Manager | The address that runs the collection according to its permissions. |

Circulating supply is not a stored number. It is the total that has left the Mint address. Mint approvals plus the permission to update them decide the supply.

{% hint style="info" %}
Ask your agent: "Transfer one of token ID 1 in collection 1 from alice to bob and show me the transaction JSON." The MCP builder tools (`build_transfer`) produce the objects on this page.
{% endhint %}

## Reading order

The pages below depend on each other in this order.

| Page | Read for |
| --- | --- |
| [Accounts](accounts.md) | How Ethereum and Cosmos addresses map to one `bb1` account |
| [UintRanges](uint-ranges.md) | The `{ start, end }` range type used for IDs, times, and amounts |
| [Balances](balances.md) | How amounts, token IDs, and ownership times combine |
| [Minting and supply](minting-and-supply.md) | The Mint address and how supply is controlled |
| [Address lists](address-lists.md) | Reserved IDs, inline lists, stored lists, inversion |
| [Transferability](transferability.md) | The three approval levels and the fields of an approval |
| [Approval criteria](../approval-criteria/README.md) | Every criterion, on its own pages |
| [Prioritized approvals](prioritized-approvals.md) | Auto-scan vs prioritized matching, versions, `mustPrioritize` |
| [Permissions](permissions.md) | The manager, permission states, first-match evaluation |
| [Collections](collections.md) | Collection fields, metadata, standards, `validTokenIds`, `isArchived` |
| [Invariants](../approval-criteria/invariants.md) | Creation-only rules such as supply caps and no forceful transfers |
| [Compliance zones](compliance-zones.md) | Where compliance is enforced and why |

After these, the IBC pages ([alias denoms](../ibc/alias-denoms.md), [wrapper paths](../ibc/cosmos-coin-wrapper-paths.md), [backed minting](../ibc/backed-minting.md)) build on [special address flags](../approval-criteria/special-address-flags.md).

## Explore first

The fastest way to see the structures is to use the BitBadges site. Complete the collection creation flow, then open "Show Tx" at the end to see the transaction JSON the site built.

## Related

- [Token standard](../README.md)
- [Messages](../messages/README.md)

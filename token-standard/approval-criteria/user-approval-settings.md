---
description: "userApprovalSettings: let a collection approval restrict the denoms in user-level coin transfers, disable them, and take a royalty on every coin payment."
---

# User approval settings

`userApprovalSettings` is how the issuer constrains what users can do in their own outgoing and incoming approvals for transfers that match a collection approval. It carries the allowed payment denoms, a switch to disable user coin transfers, and the royalty.

## Shape

```json
{
  "approvalCriteria": {
    "userApprovalSettings": {
      "allowedDenoms": ["ubadge"],
      "disableUserCoinTransfers": false,
      "userRoyalties": {
        "percentage": "500",
        "payoutAddress": "bb1creator..."
      }
    }
  }
}
```

```ts
interface UserApprovalSettings<T extends NumberType> {
  allowedDenoms?: string[];
  disableUserCoinTransfers?: boolean;
  userRoyalties?: iUserRoyalties<T>;
}

interface UserRoyalties<T extends NumberType> {
  percentage: T;         // basis points, 1 to 10000
  payoutAddress: string; // receives the royalty
}
```

| Field | Type | Description |
| --- | --- | --- |
| `allowedDenoms` | string[] | Denoms a user-level `coinTransfers` entry may use under this approval. Empty means every denom the module params allow. |
| `disableUserCoinTransfers` | bool | `true` rejects any user-level approval with `coinTransfers` under this collection approval |
| `userRoyalties.percentage` | Uint | Basis points. `100` is 1%, `250` is 2.5%, `10000` is 100%. |
| `userRoyalties.payoutAddress` | string | `bb1` address that receives the royalty. Required when `percentage` is above 0. |

Collection approvals only.

## How it works

The chain matches the collection approval first, then checks the user-level approvals for the same balance slice. It passes this collection approval's `userApprovalSettings` down into that user-level check:

- If `disableUserCoinTransfers` is set and the user approval has `coinTransfers`, the transfer fails.
- If `allowedDenoms` is non-empty and a user coin transfer uses a denom outside it, the transfer fails.
- For every coin in a user-level coin transfer, `royalty = amount * percentage / 10000` goes to `payoutAddress` and the remainder goes to the coin transfer's recipient.

When one transfer is split across several collection approvals, each slice carries the settings of the approval that matched it.

### Royalties

Royalties apply to coin payments (for example a buyer paying a seller through the seller's outgoing approval), not to the tokens themselves. A `percentage` above 10000 is rejected. A `percentage` above 0 with an empty `payoutAddress` is rejected.

5% to the creator:

```json
{
  "approvalCriteria": {
    "userApprovalSettings": {
      "userRoyalties": { "percentage": "500", "payoutAddress": "bb1creator..." }
    }
  }
}
```

2.5% to an artist:

```json
{
  "approvalCriteria": {
    "userApprovalSettings": {
      "userRoyalties": { "percentage": "250", "payoutAddress": "bb1artist..." }
    }
  }
}
```

### Examples

Users may pay only in BADGE:

```json
{ "approvalCriteria": { "userApprovalSettings": { "allowedDenoms": ["ubadge"] } } }
```

No user-level payments at all:

```json
{ "approvalCriteria": { "userApprovalSettings": { "disableUserCoinTransfers": true } } }
```

BADGE only, with 5% to the creator:

```json
{
  "approvalCriteria": {
    "userApprovalSettings": {
      "allowedDenoms": ["ubadge"],
      "userRoyalties": { "percentage": "500", "payoutAddress": "bb1creator..." }
    }
  }
}
```

Use one of `allowedDenoms` or `disableUserCoinTransfers`; setting both is contradictory, and `disableUserCoinTransfers` wins because it is checked first.

## Related

- [Coin transfers](coin-transfers.md)
- [Transferability](../concepts/transferability.md)
- [Params](../queries/params.md)

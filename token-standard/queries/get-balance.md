---
description: "GetBalance returns an address's balances, approvals, auto-approve flags, and permissions in a collection."
---

# GetBalance

Returns the `UserBalanceStore` for one address in one collection: balances, outgoing and incoming approvals, auto-approve flags, and user permissions.

## Example

```bash
bb query tokenization balance 1 bb1abc...
```

```bash
curl https://lcd.bitbadges.io/bitbadges/bitbadgeschain/tokenization/get_balance/1/bb1abc...
```

## Request

| Field | Type | Description |
| --- | --- | --- |
| `collectionId` | string | Collection ID. |
| `address` | string | Address to look up. `Mint` and `Total` are valid. |

## Response

```json
{
  "balance": {
    "balances": [
      {
        "amount": "1",
        "tokenIds": [{ "start": "1", "end": "1" }],
        "ownershipTimes": [{ "start": "1672531200000", "end": "18446744073709551615" }]
      }
    ],
    "outgoingApprovals": [],
    "incomingApprovals": [],
    "autoApproveSelfInitiatedOutgoingTransfers": true,
    "autoApproveSelfInitiatedIncomingTransfers": true,
    "autoApproveAllIncomingTransfers": true,
    "userPermissions": {
      "canUpdateOutgoingApprovals": [],
      "canUpdateIncomingApprovals": [],
      "canUpdateAutoApproveSelfInitiatedOutgoingTransfers": [],
      "canUpdateAutoApproveSelfInitiatedIncomingTransfers": [],
      "canUpdateAutoApproveAllIncomingTransfers": []
    }
  }
}
```

| Field | Type | Description |
| --- | --- | --- |
| `balances` | `Balance[]` | Owned amounts by token ID range and ownership time range. |
| `outgoingApprovals` | `UserOutgoingApproval[]` | Approvals for transfers out of this address. |
| `incomingApprovals` | `UserIncomingApproval[]` | Approvals for transfers into this address. |
| `autoApproveSelfInitiatedOutgoingTransfers` | bool | Approve transfers the address initiates from itself. |
| `autoApproveSelfInitiatedIncomingTransfers` | bool | Approve transfers the address initiates to itself. |
| `autoApproveAllIncomingTransfers` | bool | Approve every incoming transfer. |
| `userPermissions` | `UserPermissions` | Permissions that guard updates to the fields above. |

## Behavior

- An address with no stored record returns the collection's `defaultBalances`.
- `Mint` shows what remains mintable; `Total` shows what has been minted.
- For a single token at a single time, [GetBalanceForToken](get-balance-for-token.md) returns one number instead of ranges.

## Related

- [Balances](../concepts/balances.md)
- [GetBalanceForToken](get-balance-for-token.md)
- [MsgUpdateUserApprovals](../messages/msg-update-user-approvals.md)

---
description: "dynamicStoreChallenges: require the initiator, sender, recipient, or a fixed address to be true in an address-to-bool store with a global kill switch."
---

# Dynamic store challenges

A dynamic store is an on-chain map from address to boolean that its creator maintains. A dynamic store challenge requires a party of the transfer to be `true` in that store. It is the cheapest way to gate transfers on state that another account, contract, or off-chain system controls.

## Shape

```json
{
  "dynamicStoreChallenges": [
    { "storeId": "1", "ownershipCheckParty": "initiator" },
    { "storeId": "2", "ownershipCheckParty": "sender" }
  ]
}
```

```ts
interface DynamicStoreChallenge {
  storeId: string;
  ownershipCheckParty?: string;
}
```

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `storeId` | Uint | yes | ID of the dynamic store |
| `ownershipCheckParty` | string | no | `"initiator"` (default), `"sender"`, `"recipient"`, or a fixed `bb1` address |

The store itself:

```proto
message DynamicStore {
  string storeId = 1;
  string createdBy = 2;
  bool defaultValue = 3;
  bool globalEnabled = 4;
  string uri = 5;
  string customData = 6;
}
```

| Field | Description |
| --- | --- |
| `defaultValue` | Value for any address without an explicit entry |
| `globalEnabled` | Kill switch. `false` fails every challenge on this store. New stores start `true`. |
| `uri`, `customData` | Metadata, or inline JSON metadata |

## How it works

For each challenge:

1. Load the store. A missing store fails the challenge.
2. If `globalEnabled` is `false`, fail with `dynamic store storeId {id} is globally disabled`.
3. Resolve the party from `ownershipCheckParty`. Empty means `"initiator"`. A `bb1` address means that address, whoever is transferring.
4. Read the party's value. If no entry exists, use `defaultValue`.
5. The value must be `true`.

All challenges on the approval must pass. The check is read-only; transfers never modify a store.

### Kill switch

`globalEnabled: false` halts every approval that depends on the store in one transaction, whatever the per-address values. Use it as an emergency stop, for example when an integrated protocol is compromised.

```json
{ "creator": "bb1...", "storeId": "1", "defaultValue": true, "globalEnabled": false }
```

```json
{ "creator": "bb1...", "storeId": "1", "defaultValue": true, "globalEnabled": true }
```

### Managing stores

| Action | Message or query |
| --- | --- |
| Create a store with a default value | [MsgCreateDynamicStore](../messages/msg-create-dynamic-store.md) |
| Change `defaultValue`, `globalEnabled`, `uri`, `customData` | [MsgUpdateDynamicStore](../messages/msg-update-dynamic-store.md) |
| Set a value for an address | [MsgSetDynamicStoreValue](../messages/msg-set-dynamic-store-value.md) |
| Delete a store | [MsgDeleteDynamicStore](../messages/msg-delete-dynamic-store.md) |
| Read a store | [GetDynamicStore](../queries/get-dynamic-store.md) |
| Read a value | [GetDynamicStoreValue](../queries/get-dynamic-store-value.md) |

Only the creator can update or delete a store or set its values. A contract or a multisig can be that creator.

### Alternatives

Off-chain authorization with no per-address writes: [Merkle challenges](merkle-challenges.md) or [ETH signature challenges](eth-signature-challenges.md). Token-based gating: [token ownership](token-ownership.md).

## Related

- [Token ownership](token-ownership.md)
- [EVM query challenges](evm-query-challenges.md)
- [MsgCreateDynamicStore](../messages/msg-create-dynamic-store.md)

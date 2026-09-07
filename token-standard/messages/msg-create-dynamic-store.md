---
description: "MsgCreateDynamicStore creates an on-chain boolean store keyed by address, for use in dynamic store challenges."
---

# MsgCreateDynamicStore

Creates a dynamic store: a per-address boolean map that approvals can check through a `DynamicStoreChallenge`. Anyone can sign it; the signer becomes the store's owner.

## Example

```bash
bb tx tokenization create-dynamic-store false --from <key> --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgCreateDynamicStore } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgCreateDynamicStore({
  creator: client.address,
  defaultValue: false,
  uri: 'https://example.com/store-metadata',
  customData: JSON.stringify({ description: 'Member store', version: '1.0' })
});

const result = await client.signAndBroadcast([msg]);
```

```json
{
  "creator": "bb1abc...",
  "defaultValue": false,
  "uri": "https://example.com/store-metadata",
  "customData": "{\"description\": \"Member store\", \"version\": \"1.0\"}"
}
```

`uri` and `customData` are optional. Omit them for a bare store.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Only this address can update, delete, or set values in the store. |
| `defaultValue` | bool | yes | Value returned for any address without an explicit entry. |
| `uri` | string | no | Metadata URI. Not validated. |
| `customData` | string | no | Arbitrary string, often JSON. Not validated. |

## Response

| Field | Type | Description |
| --- | --- | --- |
| `storeId` | Uint | ID assigned by the chain. |
| `reviewItems` | string[] | Advisory notes. |

## Behavior

- The chain assigns the next store ID (starting at 1) and stores `createdBy: creator`.
- New stores start with `globalEnabled: true`. Flip it with [MsgUpdateDynamicStore](msg-update-dynamic-store.md) to halt every approval that depends on the store.
- The CLI takes only `defaultValue`; use the SDK or JSON to set `uri` and `customData`.

## Related

- [Dynamic store challenges](../approval-criteria/dynamic-store-challenges.md)
- [MsgSetDynamicStoreValue](msg-set-dynamic-store-value.md)
- [MsgUpdateDynamicStore](msg-update-dynamic-store.md)
- [GetDynamicStore](../queries/get-dynamic-store.md)

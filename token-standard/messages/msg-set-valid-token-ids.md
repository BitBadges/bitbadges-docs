---
description: "MsgSetValidTokenIds sets a collection's validTokenIds and the canUpdateValidTokenIds permission in one message."
---

# MsgSetValidTokenIds

Sets the valid token IDs of a collection and the permission that guards future changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-valid-token-ids ./set-valid-token-ids.json --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetValidTokenIds } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetValidTokenIds({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  validTokenIds: [{ start: 1n, end: 200n }],
  canUpdateValidTokenIds: [
    {
      tokenIds: [{ start: 1n, end: 200n }],
      permanentlyPermittedTimes: [],
      permanentlyForbiddenTimes: [{ start: 1n, end: 18446744073709551615n }]
    }
  ]
});

const result = await client.signAndBroadcast([msg]);
console.log(result.txHash, result.success);
```

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "validTokenIds": [{ "start": "1", "end": "200" }],
  "canUpdateValidTokenIds": [
    {
      "tokenIds": [{ "start": "1", "end": "200" }],
      "permanentlyPermittedTimes": [],
      "permanentlyForbiddenTimes": [{ "start": "1", "end": "18446744073709551615" }]
    }
  ]
}
```

This example grows the collection to 200 IDs and then locks those IDs so they can never be changed again.

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `validTokenIds` | `UintRange[]` | yes | New valid token IDs. Must merge to one range that starts at 1. |
| `canUpdateValidTokenIds` | `TokenIdsActionPermission[]` | no | New permission. `tokenIds`, `permanentlyPermittedTimes`, `permanentlyForbiddenTimes`. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateValidTokenIds: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection, so only `canUpdateValidTokenIds` changes.
- Only IDs that are not already valid are checked against the stored `canUpdateValidTokenIds`. IDs cannot be removed; the range must stay `[1, N]`.
- The new permission is applied last and cannot re-permit a permanently forbidden time.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, `Ids must be sequential starting from 1`.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)
- [Minting and Supply](../concepts/minting-and-supply.md)

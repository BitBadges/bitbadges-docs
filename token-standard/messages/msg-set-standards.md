---
description: "MsgSetStandards sets a collection's standards list and the canUpdateStandards permission in one message."
---

# MsgSetStandards

Sets the standards a collection declares and the permission that guards future changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-setstandards ./set-standards.json --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetStandards } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetStandards({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  standards: ['NFTs'],
  canUpdateStandards: [
    {
      permanentlyPermittedTimes: [{ start: 1n, end: 18446744073709551615n }],
      permanentlyForbiddenTimes: []
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
  "standards": ["NFTs"],
  "canUpdateStandards": [
    {
      "permanentlyPermittedTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "permanentlyForbiddenTimes": []
    }
  ]
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `standards` | string[] | yes | Full replacement list of standard identifiers. |
| `canUpdateStandards` | `ActionPermission[]` | no | New permission. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateStandards: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- The change is checked against the stored `canUpdateStandards` for the current time.
- Standards are labels that tell clients how to interpret the collection. The chain does not enforce them.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, permission forbidden.

## Related

- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)

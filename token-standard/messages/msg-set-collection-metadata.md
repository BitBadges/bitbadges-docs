---
description: "MsgSetCollectionMetadata sets a collection's metadata URI or inline customData and the canUpdateCollectionMetadata permission."
---

# MsgSetCollectionMetadata

Sets the collection metadata and the permission that guards future metadata changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-setcollectionmetadata ./set-collection-metadata.json --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetCollectionMetadata } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetCollectionMetadata({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  collectionMetadata: {
    uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json',
    customData: ''
  },
  canUpdateCollectionMetadata: [
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
  "collectionMetadata": {
    "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/collection.json",
    "customData": ""
  },
  "canUpdateCollectionMetadata": [
    {
      "permanentlyPermittedTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "permanentlyForbiddenTimes": []
    }
  ]
}
```

Inline metadata without hosting: leave `uri` empty and put the metadata document in `customData` as a JSON string. The BitBadges API parses it on read. When both are set, `uri` wins. See [Collections](../concepts/collections.md).

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "collectionMetadata": {
    "uri": "",
    "customData": "{\"name\":\"Demo NFTs\",\"image\":\"ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/image.png\",\"description\":\"One hundred demo tokens.\"}"
  },
  "canUpdateCollectionMetadata": []
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `collectionMetadata` | `CollectionMetadata` | yes | `uri` (validated as a URI when set) and `customData`. |
| `canUpdateCollectionMetadata` | `ActionPermission[]` | no | New permission. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateCollectionMetadata: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- The change is checked against the stored `canUpdateCollectionMetadata` for the current time.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, `ErrInvalidURI`, permission forbidden.

## Related

- [MsgSetTokenMetadata](msg-set-token-metadata.md)
- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)

---
description: "MsgSetTokenMetadata sets per-token metadata entries and the canUpdateTokenMetadata permission in one message."
---

# MsgSetTokenMetadata

Sets the token metadata entries of a collection and the permission that guards future changes. Only the current manager can sign it. For multi-field updates use [MsgUpdateCollection](msg-update-collection.md).

## Example

```bash
bb tx tokenization set-settokenmetadata ./set-token-metadata.json --from alice --chain-id bitbadges-1
```

```ts
import { BitBadgesSigningClient, GenericCosmosAdapter, MsgSetTokenMetadata } from 'bitbadges';

const adapter = await GenericCosmosAdapter.fromMnemonic(process.env.MNEMONIC!, 'bitbadges-1');
const client = new BitBadgesSigningClient({ adapter, network: 'mainnet' });

const msg = new MsgSetTokenMetadata({
  creator: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
  collectionId: 1n,
  tokenMetadata: [
    {
      uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json',
      customData: '',
      tokenIds: [{ start: 1n, end: 100n }]
    }
  ],
  canUpdateTokenMetadata: [
    {
      tokenIds: [{ start: 1n, end: 100n }],
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
  "tokenMetadata": [
    {
      "uri": "ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json",
      "customData": "",
      "tokenIds": [{ "start": "1", "end": "100" }]
    }
  ],
  "canUpdateTokenMetadata": [
    {
      "tokenIds": [{ "start": "1", "end": "100" }],
      "permanentlyPermittedTimes": [{ "start": "1", "end": "18446744073709551615" }],
      "permanentlyForbiddenTimes": []
    }
  ]
}
```

Inline metadata without hosting: leave `uri` empty and put the metadata document in `customData` as a JSON string. The BitBadges API parses it on read. When both are set, `uri` wins.

```json
{
  "creator": "bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d",
  "collectionId": "1",
  "tokenMetadata": [
    {
      "uri": "",
      "customData": "{\"name\":\"Demo NFT #1\",\"image\":\"ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/1.png\",\"description\":\"First token in the series.\"}",
      "tokenIds": [{ "start": "1", "end": "1" }]
    }
  ],
  "canUpdateTokenMetadata": []
}
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `creator` | string | yes | Signer. Must be the current manager. |
| `collectionId` | Uint | yes | Collection to update. |
| `tokenMetadata` | `TokenMetadata[]` | yes | Full replacement list. Each entry: `uri`, `customData`, `tokenIds`. `{id}` in a URI is replaced per token by clients. |
| `canUpdateTokenMetadata` | `TokenIdsActionPermission[]` | no | New permission, scoped by `tokenIds`. |

The response contains `collectionId`.

## Behavior

- Builds a [MsgUniversalUpdateCollection](msg-universal-update-collection.md) with `updateTokenMetadata: true` and `updateCollectionPermissions: true`. Every other permission is copied from the stored collection.
- The change is checked against the stored `canUpdateTokenMetadata` for the token IDs whose metadata actually changes.
- Errors: `ErrCollectionNotExists`, `ErrSenderIsNotManager`, `ErrCollectionIsArchived`, `ErrInvalidURI`, permission forbidden.

## Related

- [MsgSetCollectionMetadata](msg-set-collection-metadata.md)
- [MsgUpdateCollection](msg-update-collection.md)
- [Collections](../concepts/collections.md)

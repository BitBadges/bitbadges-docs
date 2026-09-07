---
description: "Read, update, and remove per-token metadata with the TokenMetadataDetails helpers in the bitbadges SDK."
---

# Token Metadata

`TokenMetadataDetails` pairs a range of token IDs with a `uri`, `customData`, and the fetched `metadata`. It is the element type of `tokenMetadata` on a `BitBadgesCollection` returned by the API. The static helpers below edit an array of them.

## Example

```ts
import { TokenMetadataDetails, UintRangeArray, BitBadgesAPI, BigIntify } from 'bitbadges';

const api = new BitBadgesAPI({ convertFunction: BigIntify, apiKey: process.env.BITBADGES_API_KEY });
const { collection } = await api.getCollection('1');
const current: TokenMetadataDetails<bigint>[] = collection.tokenMetadata;

// Remove metadata for token IDs 5 to 10
const withoutFiveToTen = TokenMetadataDetails.removeTokenMetadata(current, UintRangeArray.From([{ start: 5n, end: 10n }]));

// Update (or insert) metadata for token 7
const updated = TokenMetadataDetails.updateTokenMetadata(
  current,
  new TokenMetadataDetails<bigint>({
    tokenIds: [{ start: 7n, end: 7n }],
    uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/7.json', // or 'Placeholder'
    customData: '',
    metadata: { name: 'Token 7', description: 'The seventh demo token.', image: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/7.png' }
  })
);

// Read the details (tokenIds, uri, customData, metadata) that cover token 12
const details = TokenMetadataDetails.getMetadataDetailsForTokenId(12n, current); // TokenMetadataDetails | undefined

// Read only the fetched metadata object for token 15
const metadata = TokenMetadataDetails.getMetadataForTokenId(15n, current); // Metadata | undefined
```

## Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokenIds` | `UintRangeArray<T>` | yes | Token IDs this entry covers |
| `uri` | `string` | yes | Where the metadata was or will be fetched from. May contain `{id}` |
| `customData` | `string` | yes | Arbitrary on-chain string |
| `metadata` | `Metadata<T>` | no | The fetched JSON (`name`, `description`, `image`, and the rest) |
| `fetchedUri` | `string` | no | The URI actually fetched after `{id}` substitution |
| `toUploadToIpfs` | `boolean` | no | Frontend flag: upload `metadata` and replace `uri` before submit |

## Behavior

- `removeTokenMetadata(current, tokenIds)` returns a new array. Entries that partly overlap are split so only the removed IDs disappear.
- `updateTokenMetadata(current, details)` returns a new array. It overwrites the IDs in `details.tokenIds` and keeps the rest. `batchUpdateTokenMetadata(current, details[])` does the same for many entries.
- `getMetadataDetailsForTokenId(tokenId, arr)` and `getMetadataForTokenId(tokenId, arr)` return `undefined` when no entry covers the ID.
- These helpers do not touch the chain. To publish, put the resulting `{ tokenIds, uri, customData }` entries in `MsgSetTokenMetadata` or `MsgUniversalUpdateCollection`.

## Related

- [Collections](../../token-standard/concepts/collections.md)
- [MsgSetTokenMetadata](../../token-standard/messages/msg-set-token-metadata.md)

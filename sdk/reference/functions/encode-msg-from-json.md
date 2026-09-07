---
description: "Turn a single JSON-shaped message into a proto Message. Accepts both { typeUrl, value } and { \"@type\", ... }; values can live either on .value or directly on…"
---

# Function: encodeMsgFromJson()

> **encodeMsgFromJson**(`msg`): `Message`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/fromJson.ts:140](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/fromJson.ts#L140)

Turn a single JSON-shaped message into a proto `Message`. Accepts both
`{ typeUrl, value }` and `{ "@type", ... }`; values can live either on
`.value` or directly on the top-level object.

## Parameters

### msg

`any`

## Returns

`Message`

## Throws

if the typeUrl isn't in either
  the tokenization tier or the Cosmos baseline tier.

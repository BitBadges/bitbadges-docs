---
description: "Turn a single JSON-shaped tokenization message into a proto Message."
---

# Function: encodeTokenizationMsgFromJson()

> **encodeTokenizationMsgFromJson**(`msg`): `Message`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts:138](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/bitbadges/tokenization/fromJson.ts#L138)

Turn a single JSON-shaped tokenization message into a proto `Message`.

Accepts both `{ typeUrl, value }` (what the builder pipeline emits) and
`{ '@type', ... }` (what Cosmos-style Amino JSON uses). Also tolerates
the entire value living on the top-level object when `value` is absent.

## Parameters

### msg

`any`

## Returns

`Message`

## Throws

if the typeUrl isn't a known
  tokenization request message.

## Throws

if the typeUrl is known but the
  wrapper-class constructor crashed on the malformed value (missing
  required fields, wrong types). Wraps the underlying TypeError with
  the typeUrl baked into the message so agents see context-rich
  errors instead of "Cannot read properties of undefined".

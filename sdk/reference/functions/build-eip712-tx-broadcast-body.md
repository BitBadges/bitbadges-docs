---
description: "Convenience wrapper around buildEip712TxRaw that returns the application/json POST body Cosmos LCD /cosmos/tx/v1beta1/txs (and our own /api/v0/broadcast proxy)…"
---

# Function: buildEip712TxBroadcastBody()

> **buildEip712TxBroadcastBody**(`args`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/eip712/broadcast.ts:58](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/broadcast.ts#L58)

Convenience wrapper around `buildEip712TxRaw` that returns the
`application/json` POST body Cosmos LCD `/cosmos/tx/v1beta1/txs`
(and our own `/api/v0/broadcast` proxy) accepts.

## Parameters

### args

[`BuildEip712TxRawArgs`](/sdk/reference/interfaces/build-eip712-tx-raw-args)

## Returns

`string`

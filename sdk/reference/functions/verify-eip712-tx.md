---
description: "Uint8Array"
---

# Function: verifyEip712Tx()

> **verifyEip712Tx**(`bytes`, `options`): `Promise`\<\{ `memo`: `string`; `signer`: `string`; \}\>

Defined in: [packages/bitbadgesjs-sdk/src/eip712/verify.ts:17](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/eip712/verify.ts#L17)

## Parameters

### bytes

`Uint8Array`

### options

#### cosmosChainId

`string`

#### eip155ChainId

`number`

#### getAccountNumber

(`signer`) => `Promise`\<`bigint`\>

## Returns

`Promise`\<\{ `memo`: `string`; `signer`: `string`; \}\>

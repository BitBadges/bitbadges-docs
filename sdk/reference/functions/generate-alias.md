---
description: "Generates a non-claimable alias address. For module derivations, use module name = \"tokenization\". Get the detivation keys from getAliasDerivationKeysForBadge…"
---

# Function: generateAlias()

> **generateAlias**(`moduleName`, `derivationKeys`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/aliases.ts:52](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/aliases.ts#L52)

Generates a non-claimable alias address. For module derivations, use module name = "tokenization". Get the detivation keys from `getAliasDerivationKeysForBadge` or `getAliasDerivationKeysForCollection`.
For lists, get the derivation keys from `getAliasDerivationKeysForList`.

## Parameters

### moduleName

`string`

### derivationKeys

`Buffer`\<`ArrayBufferLike`\>[]

## Returns

`string`

---
description: "Check if all messages in an array are tokenization messages Tokenization messages use TOKENIZATIONPRECOMPILEADDRESS (not SendManager or Gamm)"
---

# Function: areAllTokenizationMessages()

> **areAllTokenizationMessages**(`messages`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts:364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/utils.ts#L364)

Check if all messages in an array are tokenization messages
Tokenization messages use TOKENIZATION_PRECOMPILE_ADDRESS (not SendManager or Gamm)

## Parameters

### messages

`unknown`[]

Array of SDK messages to check

## Returns

`boolean`

true if all messages are tokenization messages, false otherwise

---
description: "Map a message type to its corresponding precompile function name"
---

# Function: mapMessageToFunction()

> **mapMessageToFunction**(`messageType`): [`PrecompileFunction`](/sdk/reference/enumerations/precompile-function)

Defined in: [packages/bitbadgesjs-sdk/src/transactions/precompile/function-mapper.ts:106](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/precompile/function-mapper.ts#L106)

Map a message type to its corresponding precompile function name

## Parameters

### messageType

[`MessageType`](/sdk/reference/enumerations/message-type)

The detected message type

## Returns

[`PrecompileFunction`](/sdk/reference/enumerations/precompile-function)

The precompile function name to call

## Throws

Error if the message type has no corresponding function

---
description: "Normalizes messages by ensuring they have the proper structure. Because the current and other code doesn't support Msgs with optional / empty fields, we need…"
---

# Function: normalizeMessagesIfNecessary()

> **normalizeMessagesIfNecessary**(`messages`): [`MessageGenerated`](/sdk/reference/interfaces/message-generated)\<`AnyMessage`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/transactions/messages/utils.ts:29](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/messages/utils.ts#L29)

Normalizes messages by ensuring they have the proper structure.
Because the current and other code doesn't support Msgs with optional / empty fields,
we need to populate undefined fields with empty default values.

## Parameters

### messages

[`MessageGenerated`](/sdk/reference/interfaces/message-generated)\<`AnyMessage`\>[]

## Returns

[`MessageGenerated`](/sdk/reference/interfaces/message-generated)\<`AnyMessage`\>[]

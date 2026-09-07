---
description: "If an error occurs, the response will be an ErrorResponse."
---

# Interface: ErrorResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:28](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L28)

If an error occurs, the response will be an ErrorResponse.

400 - Bad Request (e.g. invalid request body)
401 - Unauthorized
500 - Internal Server Error

## Properties

### error?

> `optional` **error?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:32](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L32)

Serialized error object for debugging purposes. Technical users can use this to debug issues.

***

### errorMessage

> **errorMessage**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:36](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L36)

UX-friendly error message that can be displayed to the user. Always present if error.

***

### unauthorized?

> `optional` **unauthorized?**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/base.ts:40](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/base.ts#L40)

Authentication error. Present if the user is not authenticated.

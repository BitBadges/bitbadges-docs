---
description: "Success response of the verification check. Use this to determine if the verification was successful."
---

# Interface: iGenericVerifyAssetsSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1787](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1787)

## Properties

### errorMessage?

> `optional` **errorMessage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1795](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1795)

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1793](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1793)

Success response of the verification check. Use this to determine if the verification was successful.

Status code will be 200 both if the user meets or does not meet requirements, so you must check this success field to determine the result.

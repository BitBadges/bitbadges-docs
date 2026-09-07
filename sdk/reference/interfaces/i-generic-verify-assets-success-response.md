---
description: "Success response of the verification check. Use this to determine if the verification was successful."
---

# Interface: iGenericVerifyAssetsSuccessResponse

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1786](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1786)

## Properties

### errorMessage?

> `optional` **errorMessage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1794](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1794)

***

### success

> **success**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:1792](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L1792)

Success response of the verification check. Use this to determine if the verification was successful.

Status code will be 200 both if the user meets or does not meet requirements, so you must check this success field to determine the result.

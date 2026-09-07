---
description: "Details about the user's push notification preferences."
---

# Interface: iNotificationPreferences\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L89)

Details about the user's push notification preferences.

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### discord?

> `optional` **discord?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L93)

The Discord ID to receive push notifications.

#### discriminator

> **discriminator**: `string` \| `undefined`

#### id

> **id**: `string`

#### token

> **token**: `string`

#### username

> **username**: `string`

***

### email?

> `optional` **email?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L91)

The email to receive push notifications.

***

### emailVerification?

> `optional` **emailVerification?**: [`iEmailVerificationStatus`](/sdk/reference/interfaces/i-email-verification-status)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L95)

The verification status of the email.

***

### preferences?

> `optional` **preferences?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/interfaces.ts#L97)

The preferences for the notifications. What type of notifications does the user want to receive?

#### claimActivity?

> `optional` **claimActivity?**: `boolean`

#### ignoreIfInitiator?

> `optional` **ignoreIfInitiator?**: `boolean`

#### signInAlertsEnabled?

> `optional` **signInAlertsEnabled?**: `boolean`

#### transferActivity?

> `optional` **transferActivity?**: `boolean`

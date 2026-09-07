---
description: "The banner image URL."
---

# Interface: iUpdateAccountInfoPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:825](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L825)

## Properties

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:874](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L874)

The banner image URL.

***

### bluesky?

> `optional` **bluesky?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:849](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L849)

The Bluesky username.

***

### discord?

> `optional` **discord?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:829](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L829)

The Discord username.

***

### github?

> `optional` **github?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:839](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L839)

The GitHub username.

***

### hiddenTokens?

> `optional` **hiddenTokens?**: [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:864](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L864)

The tokens to hide and not view for this profile's portfolio

***

### notifications?

> `optional` **notifications?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:889](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L889)

The notification preferences for the user. Will only be returned if user is authenticated with full access.

#### antiPhishingCode?

> `optional` **antiPhishingCode?**: `string`

#### discord?

> `optional` **discord?**: `object`

##### discord.discriminator

> **discriminator**: `string` \| `undefined`

##### discord.id

> **id**: `string`

##### discord.username

> **username**: `string`

#### email?

> `optional` **email?**: `string`

#### preferences?

> `optional` **preferences?**: `object`

##### preferences.ignoreIfInitiator?

> `optional` **ignoreIfInitiator?**: `boolean`

##### preferences.signInAlertsEnabled?

> `optional` **signInAlertsEnabled?**: `boolean`

##### preferences.transferActivity?

> `optional` **transferActivity?**: `boolean`

***

### profilePicImageFile?

> `optional` **profilePicImageFile?**: `any`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:884](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L884)

The profile picture image file to set. We will then upload to our CDN.

***

### profilePicUrl?

> `optional` **profilePicUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:869](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L869)

The profile picture URL.

***

### readme?

> `optional` **readme?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:859](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L859)

The README details (markdown supported).

***

### seenActivity?

> `optional` **seenActivity?**: [`NumberType`](/sdk/reference/type-aliases/number-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:854](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L854)

The last seen activity timestamp.

***

### telegram?

> `optional` **telegram?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:844](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L844)

The Telegram username.

***

### twitter?

> `optional` **twitter?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:834](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L834)

The Twitter username.

***

### username?

> `optional` **username?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:879](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L879)

The username.

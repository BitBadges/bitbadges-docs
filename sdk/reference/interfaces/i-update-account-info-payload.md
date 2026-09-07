---
description: "The banner image URL."
---

# Interface: iUpdateAccountInfoPayload

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:826](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L826)

## Properties

### bannerImage?

> `optional` **bannerImage?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:875](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L875)

The banner image URL.

***

### bluesky?

> `optional` **bluesky?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:850](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L850)

The Bluesky username.

***

### discord?

> `optional` **discord?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:830](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L830)

The Discord username.

***

### github?

> `optional` **github?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:840](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L840)

The GitHub username.

***

### hiddenTokens?

> `optional` **hiddenTokens?**: [`iBatchTokenDetails`](/sdk/reference/interfaces/i-batch-token-details)\<[`NumberType`](/sdk/reference/type-aliases/number-type)\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:865](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L865)

The tokens to hide and not view for this profile's portfolio

***

### notifications?

> `optional` **notifications?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:890](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L890)

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

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:885](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L885)

The profile picture image file to set. We will then upload to our CDN.

***

### profilePicUrl?

> `optional` **profilePicUrl?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:870](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L870)

The profile picture URL.

***

### readme?

> `optional` **readme?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:860](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L860)

The README details (markdown supported).

***

### seenActivity?

> `optional` **seenActivity?**: [`NumberType`](/sdk/reference/type-aliases/number-type)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:855](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L855)

The last seen activity timestamp.

***

### telegram?

> `optional` **telegram?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:845](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L845)

The Telegram username.

***

### twitter?

> `optional` **twitter?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:835](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L835)

The Twitter username.

***

### username?

> `optional` **username?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts:880](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/requests/requests.ts#L880)

The username.

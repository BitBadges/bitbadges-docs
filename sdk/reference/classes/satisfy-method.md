---
description: "iSatisfyMethod"
---

# Class: SatisfyMethod

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:123](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L123)

## Implements

- [`iSatisfyMethod`](/sdk/reference/interfaces/i-satisfy-method)

## Constructors

### Constructor

> **new SatisfyMethod**(`data`): `SatisfyMethod`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:130](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L130)

#### Parameters

##### data

[`iSatisfyMethod`](/sdk/reference/interfaces/i-satisfy-method)

#### Returns

`SatisfyMethod`

## Properties

### conditions

> **conditions**: (`string` \| `SatisfyMethod`)[]

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L125)

Conditions can either be the instance ID string of the plugin to check success for or another satisfyMethod object.

#### Implementation of

[`iSatisfyMethod`](/sdk/reference/interfaces/i-satisfy-method).[`conditions`](/sdk/reference/interfaces/i-satisfy-method#conditions)

***

### options?

> `optional` **options?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:126](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L126)

#### minNumSatisfied?

> `optional` **minNumSatisfied?**: `number`

#### Implementation of

[`iSatisfyMethod`](/sdk/reference/interfaces/i-satisfy-method).[`options`](/sdk/reference/interfaces/i-satisfy-method#options)

***

### type

> **type**: `"AND"` \| `"OR"` \| `"NOT"`

Defined in: [packages/bitbadgesjs-sdk/src/core/approvals.ts:124](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/approvals.ts#L124)

#### Implementation of

[`iSatisfyMethod`](/sdk/reference/interfaces/i-satisfy-method).[`type`](/sdk/reference/interfaces/i-satisfy-method#type)

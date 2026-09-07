---
description: "T extends NumberType"
---

# Class: CollectionDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:349](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L349)

## Extends

- [`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class)\<`CollectionDoc`\<`T`\>\>

## Extended by

- [`BitBadgesCollection`](/sdk/reference/classes/bit-badges-collection)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`CollectionDoc`\<`T`\>\>

## Constructors

### Constructor

> **new CollectionDoc**\<`T`\>(`data`): `CollectionDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:375](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L375)

#### Parameters

##### data

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc)\<`T`\>

#### Returns

`CollectionDoc`\<`T`\>

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`constructor`](/sdk/reference/classes/base-number-type-class#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:353](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L353)

A unique stringified document ID

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`_docId`](/sdk/reference/interfaces/i-collection-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:354](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L354)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`_id`](/sdk/reference/interfaces/i-collection-doc#_id)

***

### aliasPaths

> **aliasPaths**: [`AliasPath`](/sdk/reference/classes/alias-path)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:372](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L372)

The alias (non-wrapping) paths for the collection

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`aliasPaths`](/sdk/reference/interfaces/i-collection-doc#aliaspaths)

***

### collectionApprovals

> **collectionApprovals**: [`CollectionApproval`](/sdk/reference/classes/collection-approval)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:361](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L361)

The collection approved transfers timeline

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionApprovals`](/sdk/reference/interfaces/i-collection-doc#collectionapprovals)

***

### collectionId

> **collectionId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:355](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L355)

The collection ID

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionId`](/sdk/reference/interfaces/i-collection-doc#collectionid)

***

### collectionMetadata

> **collectionMetadata**: [`CollectionMetadata`](/sdk/reference/classes/collection-metadata)

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:356](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L356)

The collection metadata

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionMetadata`](/sdk/reference/interfaces/i-collection-doc#collectionmetadata)

***

### collectionPermissions

> **collectionPermissions**: [`CollectionPermissions`](/sdk/reference/classes/collection-permissions)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:360](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L360)

The collection permissions

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`collectionPermissions`](/sdk/reference/interfaces/i-collection-doc#collectionpermissions)

***

### cosmosCoinWrapperPaths

> **cosmosCoinWrapperPaths**: [`CosmosCoinWrapperPath`](/sdk/reference/classes/cosmos-coin-wrapper-path)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:371](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L371)

The IBC wrapper paths for the collection

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`cosmosCoinWrapperPaths`](/sdk/reference/interfaces/i-collection-doc#cosmoscoinwrapperpaths)

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:366](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L366)

The block number when this collection was created

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`createdBlock`](/sdk/reference/interfaces/i-collection-doc#createdblock)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:365](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L365)

The BitBadges address of the user who created this collection

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`createdBy`](/sdk/reference/interfaces/i-collection-doc#createdby)

***

### createdTimestamp

> **createdTimestamp**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:367](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L367)

The timestamp when this collection was created (milliseconds since epoch)

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`createdTimestamp`](/sdk/reference/interfaces/i-collection-doc#createdtimestamp)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:358](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L358)

The custom data

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`customData`](/sdk/reference/interfaces/i-collection-doc#customdata)

***

### defaultBalances

> **defaultBalances**: [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:364](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L364)

The default balances for users who have not interacted with the collection yet. Only used if collection has "Standard" balance type.

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`defaultBalances`](/sdk/reference/interfaces/i-collection-doc#defaultbalances)

***

### invariants

> **invariants**: [`CollectionInvariants`](/sdk/reference/classes/collection-invariants)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:373](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L373)

Collection-level invariants that cannot be broken. These are set upon genesis and cannot be modified.

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`invariants`](/sdk/reference/interfaces/i-collection-doc#invariants)

***

### isArchived

> **isArchived**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:363](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L363)

The is archived flag

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`isArchived`](/sdk/reference/interfaces/i-collection-doc#isarchived)

***

### manager

> **manager**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:359](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L359)

The manager

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`manager`](/sdk/reference/interfaces/i-collection-doc#manager)

***

### mintEscrowAddress

> **mintEscrowAddress**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:370](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L370)

Mint escrow address

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`mintEscrowAddress`](/sdk/reference/interfaces/i-collection-doc#mintescrowaddress)

***

### standards

> **standards**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:362](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L362)

The standards

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`standards`](/sdk/reference/interfaces/i-collection-doc#standards)

***

### tokenMetadata

> **tokenMetadata**: [`TokenMetadata`](/sdk/reference/classes/token-metadata)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:357](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L357)

The token metadata

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`tokenMetadata`](/sdk/reference/interfaces/i-collection-doc#tokenmetadata)

***

### updateHistory

> **updateHistory**: [`UpdateHistory`](/sdk/reference/classes/update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:368](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L368)

The update history of this collection

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`updateHistory`](/sdk/reference/interfaces/i-collection-doc#updatehistory)

***

### validTokenIds

> **validTokenIds**: [`UintRangeArray`](/sdk/reference/classes/uint-range-array)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:369](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L369)

Valid token IDs for the collection

#### Implementation of

[`iCollectionDoc`](/sdk/reference/interfaces/i-collection-doc).[`validTokenIds`](/sdk/reference/interfaces/i-collection-doc#validtokenids)

## Methods

### clone()

> **clone**(): `CollectionDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:416](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L416)

Deep copies the object and returns a new instance.

#### Returns

`CollectionDoc`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`clone`](/sdk/reference/classes/base-number-type-class#clone)

***

### convert()

> **convert**\<`U`\>(`convertFunction`, `options?`): `CollectionDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:412](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L412)

Converts the object to a different NumberType equivalent.

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`val`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`CollectionDoc`\<`U`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`convert`](/sdk/reference/classes/base-number-type-class#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:147](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L147)

Compares this object's fields to another object's fields for equality. Equality is determined by comparing the JSON representations of the objects.

If `normalizeNumberTypes` is true, then all number types will be compared as strings (i.e. "1n" === "1" === 1). Else, they will be compared as their native types (i.e. 1n !== 1 !== "1").

#### Type Parameters

##### U

`U` *extends* [`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\>

#### Parameters

##### other

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`U`\> \| `null` \| `undefined`

##### normalizeNumberTypes?

`boolean`

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`equals`](/sdk/reference/interfaces/custom-type#equals)

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`equals`](/sdk/reference/classes/base-number-type-class#equals)

***

### getDefaultUserBalance()

> **getDefaultUserBalance**(): [`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:404](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L404)

Creates a blank balance object with the genesis default approvals and balances.

#### Returns

[`UserBalanceStore`](/sdk/reference/classes/user-balance-store)\<`T`\>

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:408](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L408)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Overrides

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`getNumberFieldNames`](/sdk/reference/classes/base-number-type-class#getnumberfieldnames)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:161](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L161)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`hasNumberFields`](/sdk/reference/classes/base-number-type-class#hasnumberfields)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:139](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L139)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJson`](/sdk/reference/classes/base-number-type-class#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:143](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L143)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`BaseNumberTypeClass`](/sdk/reference/classes/base-number-type-class).[`toJsonString`](/sdk/reference/classes/base-number-type-class#tojsonstring)

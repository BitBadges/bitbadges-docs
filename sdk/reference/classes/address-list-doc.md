---
description: "T extends NumberType"
---

# Class: AddressListDoc\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:911](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L911)

## Extends

- [`AddressList`](/sdk/reference/classes/address-list)

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Implements

- [`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc)\<`T`\>
- [`CustomType`](/sdk/reference/interfaces/custom-type)\<`AddressListDoc`\<`T`\>\>

## Constructors

### Constructor

> **new AddressListDoc**\<`T`\>(`data`): `AddressListDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:927](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L927)

#### Parameters

##### data

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc)\<`T`\>

#### Returns

`AddressListDoc`\<`T`\>

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`constructor`](/sdk/reference/classes/address-list#constructor)

## Properties

### \_docId

> **\_docId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:912](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L912)

A unique stringified document ID

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`_docId`](/sdk/reference/interfaces/i-address-list-doc#_docid)

***

### \_id?

> `optional` **\_id?**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:913](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L913)

A unique document ID (Mongo DB ObjectID)

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`_id`](/sdk/reference/interfaces/i-address-list-doc#_id)

***

### addresses

> **addresses**: `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:922](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L922)

The addresses of the address list. If this is a tracker list, the addresses are the tracker IDs.

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`addresses`](/sdk/reference/interfaces/i-address-list-doc#addresses)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`addresses`](/sdk/reference/classes/address-list#addresses)

***

### createdBlock

> **createdBlock**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:917](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L917)

The block number when this list was created

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`createdBlock`](/sdk/reference/interfaces/i-address-list-doc#createdblock)

***

### createdBy

> **createdBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:914](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L914)

The BitBadges address of the user who created this list

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`createdBy`](/sdk/reference/interfaces/i-address-list-doc#createdby)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`createdBy`](/sdk/reference/classes/address-list#createdby)

***

### customData

> **customData**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:925](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L925)

Arbitrary custom data that can be stored. Leave blank for no custom data.

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`customData`](/sdk/reference/interfaces/i-address-list-doc#customdata)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`customData`](/sdk/reference/classes/address-list#customdata)

***

### lastUpdated

> **lastUpdated**: `T`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:918](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L918)

The timestamp of when this list was last updated (milliseconds since epoch)

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`lastUpdated`](/sdk/reference/interfaces/i-address-list-doc#lastupdated)

***

### listId

> **listId**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:921](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L921)

The ID of the address list.

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`listId`](/sdk/reference/interfaces/i-address-list-doc#listid)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`listId`](/sdk/reference/classes/address-list#listid)

***

### managedBy

> **managedBy**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:915](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L915)

The BitBadges address of the user who is currently managing this

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`managedBy`](/sdk/reference/interfaces/i-address-list-doc#managedby)

***

### nsfw?

> `optional` **nsfw?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:919](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L919)

The NSFW reason if this list is NSFW

#### reason

> **reason**: `string`

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`nsfw`](/sdk/reference/interfaces/i-address-list-doc#nsfw)

***

### reported?

> `optional` **reported?**: `object`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:920](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L920)

The reported reason if this list is reported

#### reason

> **reason**: `string`

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`reported`](/sdk/reference/interfaces/i-address-list-doc#reported)

***

### updateHistory

> **updateHistory**: [`iUpdateHistory`](/sdk/reference/interfaces/i-update-history)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:916](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L916)

The update history of this list

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`updateHistory`](/sdk/reference/interfaces/i-address-list-doc#updatehistory)

***

### uri

> **uri**: `string`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:924](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L924)

The URI where to fetch the address list metadata from.

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`uri`](/sdk/reference/interfaces/i-address-list-doc#uri)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`uri`](/sdk/reference/classes/address-list#uri)

***

### whitelist

> **whitelist**: `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:923](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L923)

Whether or not to include ONLY the addresses or include all EXCEPT the addresses.

#### Implementation of

[`iAddressListDoc`](/sdk/reference/interfaces/i-address-list-doc).[`whitelist`](/sdk/reference/interfaces/i-address-list-doc#whitelist)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`whitelist`](/sdk/reference/classes/address-list#whitelist)

## Methods

### checkAddress()

> **checkAddress**(`address`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:44](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L44)

Checks if a specific account is in the given address list. This means added to a whitelist or NOT included in a blacklist.

#### Parameters

##### address

`string`

#### Returns

`boolean`

#### Remarks

The double negative may get confusing.

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`checkAddress`](/sdk/reference/classes/address-list#checkaddress)

***

### clone()

> **clone**(): `AddressListDoc`\<`T`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:953](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L953)

Deep copies the object and returns a new instance.

#### Returns

`AddressListDoc`\<`T`\>

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`clone`](/sdk/reference/interfaces/custom-type#clone)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`clone`](/sdk/reference/classes/address-list#clone)

***

### ~~convert()~~

> **convert**\<`U`\>(`convertFunction`, `options?`): `AddressListDoc`\<`U`\>

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:949](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L949)

#### Type Parameters

##### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

#### Parameters

##### convertFunction

(`item`) => `U`

##### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

#### Returns

`AddressListDoc`\<`U`\>

#### Deprecated

This function is unnecessary as this field has no numeric types.
Please use the `.clone()` method instead.

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`convert`](/sdk/reference/interfaces/custom-type#convert)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`convert`](/sdk/reference/classes/address-list#convert)

***

### equals()

> **equals**\<`U`\>(`other`, `normalizeNumberTypes?`): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L101)

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

[`AddressList`](/sdk/reference/classes/address-list).[`equals`](/sdk/reference/classes/address-list#equals)

***

### getNumberFieldNames()

> **getNumberFieldNames**(): `string`[]

Defined in: [packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts:945](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/api-indexer/docs-types/docs.ts#L945)

Internal helper method to convert the number fields of the object to a different NumberType equivalent.

#### Returns

`string`[]

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`getNumberFieldNames`](/sdk/reference/interfaces/custom-type#getnumberfieldnames)

#### Overrides

[`AddressList`](/sdk/reference/classes/address-list).[`getNumberFieldNames`](/sdk/reference/classes/address-list#getnumberfieldnames)

***

### getOverlapDetails()

> **getOverlapDetails**(`addressList`): \[[`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list)\]

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:187](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L187)

Gets the overlap details for two address lists. Returns [inFirstListButNotSecond, inBothLists, inSecondListButNotFirst].

#### Parameters

##### addressList

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

\[[`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list)\]

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`getOverlapDetails`](/sdk/reference/classes/address-list#getoverlapdetails)

***

### getOverlaps()

> **getOverlaps**(`addressList`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:179](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L179)

Gets the addresses that are in both lists.

Note the returned value can be a whitelist or a blacklist, depending on the input lists.
For example, all addresses except Bob (blacklist) overlap or just Bob (whitelist) overlap.

#### Parameters

##### addressList

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`getOverlaps`](/sdk/reference/classes/address-list#getoverlaps)

***

### hasNumberFields()

> **hasNumberFields**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:115](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L115)

Checks if the object has number fields.

#### Returns

`boolean`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`hasNumberFields`](/sdk/reference/interfaces/custom-type#hasnumberfields)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`hasNumberFields`](/sdk/reference/classes/address-list#hasnumberfields)

***

### invert()

> **invert**(): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:61](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L61)

Inverts the list in-place. Simply done by invert the whitelist property.

#### Returns

`this`

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`invert`](/sdk/reference/classes/address-list#invert)

***

### isEmpty()

> **isEmpty**(): `boolean`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:54](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L54)

#### Returns

`boolean`

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`isEmpty`](/sdk/reference/classes/address-list#isempty)

***

### remove()

> **remove**(`addresses`): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L80)

Removes addresses from the list in-place.

If this is a whitelist, the address will be removed (if it is currently added).
If this is a blacklist, the address will be added (if it is not currently added).
Otherwise, it is a no-op since it is already removed.

#### Parameters

##### addresses

`string` \| [`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

`this`

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`remove`](/sdk/reference/classes/address-list#remove)

***

### toInverted()

> **toInverted**(): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:69](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L69)

Returns a new list with the addresses inverted.

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`toInverted`](/sdk/reference/classes/address-list#toinverted)

***

### toJson()

> **toJson**(): `JsonObject`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L93)

Converts the object to a JSON object with all primitive types.

#### Returns

`JsonObject`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJson`](/sdk/reference/interfaces/custom-type#tojson)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`toJson`](/sdk/reference/classes/address-list#tojson)

***

### toJsonString()

> **toJsonString**(): `string`

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L97)

Converts the object to a JSON string.

#### Returns

`string`

#### Implementation of

[`CustomType`](/sdk/reference/interfaces/custom-type).[`toJsonString`](/sdk/reference/interfaces/custom-type#tojsonstring)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`toJsonString`](/sdk/reference/classes/address-list#tojsonstring)

***

### toProto()

> **toProto**(): `AddressList`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:429](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L429)

#### Returns

`AddressList`

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`toProto`](/sdk/reference/classes/address-list#toproto)

***

### toRemoved()

> **toRemoved**(`addresses`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:103](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L103)

Wrapper for [remove](/sdk/reference/classes/address-list#remove) that returns a new list instead of modifying the current one.

#### Parameters

##### addresses

`string` \| [`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`toRemoved`](/sdk/reference/classes/address-list#toremoved)

***

### toUnion()

> **toUnion**(`other`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:127](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L127)

Wrapper for [union](/sdk/reference/classes/address-list#union) that returns a new list instead of modifying the current one.

#### Parameters

##### other

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`toUnion`](/sdk/reference/classes/address-list#tounion)

***

### union()

> **union**(`other`): `this`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L117)

Computes the union of two address lists in-place.
The result contains all addresses that are in either list.

Cases:
- Whitelist ∪ Whitelist = Whitelist with combined addresses
- Whitelist ∪ Blacklist = Blacklist with addresses in blacklist that are NOT in whitelist
- Blacklist ∪ Whitelist = Blacklist with addresses in blacklist that are NOT in whitelist
- Blacklist ∪ Blacklist = Blacklist with intersection of excluded addresses

#### Parameters

##### other

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

`this`

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`union`](/sdk/reference/classes/address-list#union)

***

### AllAddresses()

> `static` **AllAddresses**(): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:196](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L196)

Returns the reserved 'All' address list.

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`AllAddresses`](/sdk/reference/classes/address-list#alladdresses)

***

### computeUnion()

> `static` **computeUnion**(`first`, `second`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:135](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L135)

Computes the union of two address lists.
The result contains all addresses that are in either list.

#### Parameters

##### first

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

##### second

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`computeUnion`](/sdk/reference/classes/address-list#computeunion)

***

### fromJson()

> `static` **fromJson**(`jsonValue`, `options?`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:433](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L433)

#### Parameters

##### jsonValue

`JsonValue`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`fromJson`](/sdk/reference/classes/address-list#fromjson)

***

### fromJsonString()

> `static` **fromJsonString**(`jsonString`, `options?`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:437](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L437)

#### Parameters

##### jsonString

`string`

##### options?

`Partial`\<`JsonReadOptions`\>

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`fromJsonString`](/sdk/reference/classes/address-list#fromjsonstring)

***

### fromProto()

> `static` **fromProto**(`item`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:441](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L441)

#### Parameters

##### item

`AddressList`

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`fromProto`](/sdk/reference/classes/address-list#fromproto)

***

### generateReservedListId()

> `static` **generateReservedListId**(`addressList`): `string`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:406](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L406)

Generates a list ID for a given address list.

#### Parameters

##### addressList

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

The address list to generate the ID for

#### Returns

`string`

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`generateReservedListId`](/sdk/reference/classes/address-list#generatereservedlistid)

***

### getOverlapDetails()

> `static` **getOverlapDetails**(`firstList`, `secondList`): \[[`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list)\]

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:286](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L286)

Gets the overlap details between two address lists. Returns [inFirstButNotSecond, overlaps, inSecondButNotFirst].

#### Parameters

##### firstList

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

##### secondList

[`iAddressList`](/sdk/reference/interfaces/i-address-list)

#### Returns

\[[`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list), [`AddressList`](/sdk/reference/classes/address-list)\]

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`getOverlapDetails`](/sdk/reference/classes/address-list#getoverlapdetails-1)

***

### getReservedAddressList()

> `static` **getReservedAddressList**(`addressListId`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:303](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L303)

Returns the address list for a list ID, if it is a reserved ID (i.e. Mint, Manager, All, None, validly formatted address, ...)

#### Parameters

##### addressListId

`string`

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`getReservedAddressList`](/sdk/reference/classes/address-list#getreservedaddresslist)

***

### getReservedTrackerList()

> `static` **getReservedTrackerList**(`trackerListId`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:296](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L296)

Returns the tracker list for a tracker ID list. Little different logic because tracker ID lists can only be reserved IDs (no storage)
and can be nonvalid addresses

#### Parameters

##### trackerListId

`string`

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`getReservedTrackerList`](/sdk/reference/classes/address-list#getreservedtrackerlist)

***

### Reserved()

> `static` **Reserved**(`addressListId`): [`AddressList`](/sdk/reference/classes/address-list)

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:203](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L203)

Returns a reserved address list by ID.

#### Parameters

##### addressListId

`string`

#### Returns

[`AddressList`](/sdk/reference/classes/address-list)

#### Inherited from

[`AddressList`](/sdk/reference/classes/address-list).[`Reserved`](/sdk/reference/classes/address-list#reserved)

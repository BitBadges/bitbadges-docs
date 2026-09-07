---
description: "T extends NumberType"
---

# Interface: iCollectionPermissionsWithDetails\<T\>

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:168](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L168)

## Extends

- [`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions)\<`T`\>

## Type Parameters

### T

`T` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Properties

### canAddMoreAliasPaths

> **canAddMoreAliasPaths**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:105](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L105)

The permissions for adding more alias paths to the collection.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canAddMoreAliasPaths`](/sdk/reference/interfaces/i-collection-permissions#canaddmorealiaspaths)

***

### canAddMoreCosmosCoinWrapperPaths

> **canAddMoreCosmosCoinWrapperPaths**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:107](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L107)

The permissions for adding more cosmos coin wrapper paths to the collection.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canAddMoreCosmosCoinWrapperPaths`](/sdk/reference/interfaces/i-collection-permissions#canaddmorecosmoscoinwrapperpaths)

***

### canArchiveCollection

> **canArchiveCollection**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:89](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L89)

The permissions for archiving the collection.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canArchiveCollection`](/sdk/reference/interfaces/i-collection-permissions#canarchivecollection)

***

### canDeleteCollection

> **canDeleteCollection**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L87)

The permissions for deleting the collection.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canDeleteCollection`](/sdk/reference/interfaces/i-collection-permissions#candeletecollection)

***

### canUpdateCollectionApprovals

> **canUpdateCollectionApprovals**: [`iCollectionApprovalPermissionWithDetails`](/sdk/reference/interfaces/i-collection-approval-permission-with-details)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:169](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L169)

The permissions for updating the collection approved transfers.

#### Overrides

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateCollectionApprovals`](/sdk/reference/interfaces/i-collection-permissions#canupdatecollectionapprovals)

***

### canUpdateCollectionMetadata

> **canUpdateCollectionMetadata**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:97](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L97)

The permissions for updating the collection metadata.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateCollectionMetadata`](/sdk/reference/interfaces/i-collection-permissions#canupdatecollectionmetadata)

***

### canUpdateCustomData

> **canUpdateCustomData**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:93](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L93)

The permissions for updating the custom data.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateCustomData`](/sdk/reference/interfaces/i-collection-permissions#canupdatecustomdata)

***

### canUpdateManager

> **canUpdateManager**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:95](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L95)

The permissions for updating the manager.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateManager`](/sdk/reference/interfaces/i-collection-permissions#canupdatemanager)

***

### canUpdateStandards

> **canUpdateStandards**: [`iActionPermission`](/sdk/reference/interfaces/i-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:91](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L91)

The permissions for updating the standards.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateStandards`](/sdk/reference/interfaces/i-collection-permissions#canupdatestandards)

***

### canUpdateTokenMetadata

> **canUpdateTokenMetadata**: [`iTokenIdsActionPermission`](/sdk/reference/interfaces/i-token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:101](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L101)

The permissions for updating the token metadata.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateTokenMetadata`](/sdk/reference/interfaces/i-collection-permissions#canupdatetokenmetadata)

***

### canUpdateValidTokenIds

> **canUpdateValidTokenIds**: [`iTokenIdsActionPermission`](/sdk/reference/interfaces/i-token-ids-action-permission)\<`T`\>[]

Defined in: [packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts:99](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/interfaces/types/permissions.ts#L99)

The permissions for creating more tokens.

#### Inherited from

[`iCollectionPermissions`](/sdk/reference/interfaces/i-collection-permissions).[`canUpdateValidTokenIds`](/sdk/reference/interfaces/i-collection-permissions#canupdatevalidtokenids)

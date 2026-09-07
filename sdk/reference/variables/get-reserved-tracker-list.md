---
description: "Returns the tracker list for a tracker ID list. Little different logic because tracker ID lists can only be reserved IDs (no storage) and can be nonvalid…"
---

# Variable: getReservedTrackerList

> `const` **getReservedTrackerList**: (`trackerListId`) => [`AddressList`](/sdk/reference/classes/address-list) = `AddressList.getReservedTrackerList`

Defined in: [packages/bitbadgesjs-sdk/src/core/addressLists.ts:476](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/core/addressLists.ts#L476)

Returns the tracker list for a tracker ID list. Little different logic because tracker ID lists can only be reserved IDs (no storage)
and can be nonvalid addresses

Returns the tracker list for a tracker ID list. Little different logic because tracker ID lists can only be reserved IDs (no storage)
and can be nonvalid addresses

## Parameters

### trackerListId

`string`

## Returns

[`AddressList`](/sdk/reference/classes/address-list)

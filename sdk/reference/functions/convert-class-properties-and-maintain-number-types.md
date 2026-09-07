---
description: "Converts the number fields of a class instance to their new type, while maintaining the rest of the class structure."
---

# Function: convertClassPropertiesAndMaintainNumberTypes()

> **convertClassPropertiesAndMaintainNumberTypes**\<`U`\>(`obj`, `convertFunction`, `options?`, `depth?`): [`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

Defined in: [packages/bitbadgesjs-sdk/src/common/base.ts:395](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/common/base.ts#L395)

Converts the number fields of a class instance to their new type, while maintaining the rest of the class structure.

Lastly, it recalls the constructor of the class with the new JSON object.

## Type Parameters

### U

`U` *extends* [`NumberType`](/sdk/reference/type-aliases/number-type)

## Parameters

### obj

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

### convertFunction

(`item`) => `U`

### options?

[`ConvertOptions`](/sdk/reference/interfaces/convert-options)

### depth?

`number` = `0`

## Returns

[`CustomType`](/sdk/reference/interfaces/custom-type)\<`any`\>

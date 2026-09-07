---
description: "T extends Message<T> = AnyMessage"
---

# Function: createAminoConverter()

> **createAminoConverter**\<`T`\>(`ProtoMessage`, `aminoType`, `toAmino?`, `fromAmino?`): `object`

Defined in: [packages/bitbadgesjs-sdk/src/transactions/amino/objectConverter.ts:299](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/transactions/amino/objectConverter.ts#L299)

## Type Parameters

### T

`T` *extends* `Message`\<`T`\> = `AnyMessage`

## Parameters

### ProtoMessage

*typeof* `Message`

### aminoType

`string`

### toAmino?

\<`T`\>(`protoValue`, `ProtoMessage`) => `any`

### fromAmino?

\<`T`\>(`aminoValue`, `ProtoMessage`) => `any`

## Returns

`object`

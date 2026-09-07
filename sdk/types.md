---
description: "How SDK types are exported (classes, interfaces, typed arrays, proto), the NumberType generic, and the BigIntify, Numberify, and Stringify converters."
---

# Types

Every SDK type is generic over a number type and ships as both a class and an interface. Read this before you pass values between the API, the SDK helpers, and your own code.

## NumberType and the Converters

```ts
import { BigIntify, Numberify, Stringify, NumberifyIfPossible, TokenMetadata, type NumberType } from 'bitbadges';

// Every numeric field in the SDK is generic over NumberType.
// export type NumberType = bigint | number | string;
// export type JSPrimitiveNumberType = string | number;

const stringified: TokenMetadata<string> = new TokenMetadata({
  uri: 'ipfs://bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi/{id}.json',
  customData: '',
  tokenIds: [{ start: '1', end: '10' }]
});
const asBigInt = stringified.convert(BigIntify); // TokenMetadata<bigint>
const asNumber = asBigInt.convert(Numberify); // TokenMetadata<number>, silently rounds above Number.MAX_SAFE_INTEGER
const backToString = asNumber.convert(Stringify); // TokenMetadata<string>
```

JavaScript's `number` cannot hold values above `Number.MAX_SAFE_INTEGER`, and the chain allows amounts, IDs, and times far above that (`GO_MAX_UINT_64` is `18446744073709551615n`). So every SDK type takes a type parameter `T extends NumberType`.

| Converter | Result type | Use |
| --- | --- | --- |
| `BigIntify` | `bigint` | Recommended. Exact for every chain value. Most SDK helper functions expect bigint. |
| `Stringify` | `string` | Exact. What the API sends over HTTP and what proto JSON expects. |
| `Numberify` | `number` | Convenience for UI. Silently rounds above 2^53; it does not throw. |
| `NumberifyIfPossible` | `number \| string` | `number` when safe, `string` otherwise. |

The API stringifies every number before it sends a response. `BitBadgesAPI` applies your `convertFunction` to each response, so you pick the type once. Account numbers and sequences on v34 and later are hash-derived 64-bit values, so never run them through `Number()`. See [Transactions](transactions/README.md).

## Classes

```ts
import { Balance, Numberify } from 'bitbadges';

const balance = new Balance<bigint>({
  amount: 1n,
  tokenIds: [{ start: 1n, end: 100n }],
  ownershipTimes: [{ start: 1n, end: 100n }]
});
const converted = balance.convert(Numberify); // amount: 1, start: 1, end: 100
const json = balance.toJson();
const same = balance.equals(balance.clone()); // true
```

Class names start with a capital letter. Every class extends `CustomTypeClass` and has these methods. Specific classes add more (for example `Balance` has no extras, but `BalanceArray` and `UintRangeArray` have many).

```ts
export declare class CustomTypeClass<T extends CustomType<T>> implements CustomType<T> {
  toJson(): JsonObject;
  toJsonString(): string;
  equals<U extends CustomType<U>>(other: CustomType<U> | null | undefined, normalizeNumberTypes?: boolean): boolean;
  clone(): T;
  getNumberFieldNames(): string[]; // used internally by convert()
  convert<U extends NumberType>(convertFunction?: (val: NumberType) => U): CustomType<any>;
}
```

`equals` with `normalizeNumberTypes: true` treats `1n`, `1`, and `"1"` as equal.

## Interfaces

```ts
export interface iBalance<T extends NumberType> {
  amount: T;
  tokenIds: iUintRange<T>[];
  ownershipTimes: iUintRange<T>[];
}
```

Each class has a matching interface with an `i` prefix: the same fields, no methods. Most SDK functions accept either. Class constructors accept the interface, so `new Balance(plainObject)` is the conversion in one direction and `.toJson()` is the other. Prefer classes when you call helper methods; interfaces are fine for plain data.

## Typed Arrays

```ts
import { BalanceArray } from 'bitbadges';

const balances = BalanceArray.From([{ amount: 1n, tokenIds: [{ start: 1n, end: 1n }], ownershipTimes: [{ start: 1n, end: 1n }] }]);
balances.push({ amount: 2n, tokenIds: [{ start: 2n, end: 2n }], ownershipTimes: [{ start: 1n, end: 1n }] });
balances.addBalances([{ amount: 1n, tokenIds: [{ start: 1n, end: 2n }], ownershipTimes: [{ start: 1n, end: 1n }] }]); // in place
const first = balances.find((b) => b.amount === 3n);
```

`BalanceArray` and `UintRangeArray` extend the native array. `find`, `map`, and `filter` work as usual, and each adds domain methods (`addBalances`, `sortAndMerge`, `search`, and more). Build one with `.From(...)` or `new` plus `push`. See [Balances](snippets/balances.md) and [Uint Ranges](snippets/uint-ranges.md).

## Proto Types

```ts
import { proto } from 'bitbadges';

const MsgCreateCollection = proto.tokenization.MsgCreateCollection;
const MsgSend = proto.cosmos.bank.v1beta1.MsgSend;
```

The chain speaks protobuf. The SDK generates a class for every proto message and exports them under the `proto` namespace, grouped by module (`proto.tokenization`, `proto.cosmos`, `proto.gamm`, `proto.ibc`, and the rest). Use them only when you build a raw transaction. For everything else use the SDK classes, which have the same names, carry `NumberType` generics, and expose `.toProto()` when a transaction needs them.

Some names exist in both places. If an import resolves to `bitbadges/dist/proto/...`, that is the proto class, not the SDK class. Prefer `proto.module.Name` so the intent is visible.

```ts
import { MsgTransferTokens } from 'bitbadges'; // SDK class: generic, has toProto()
const protoMsg = proto.tokenization.MsgTransferTokens; // proto class: string numbers, for raw txs
```

## Related

- [Snippets](snippets/README.md)
- [Transactions](transactions/README.md)
- [SDK reference](reference/README.md)

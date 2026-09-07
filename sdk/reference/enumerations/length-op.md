---
description: "LengthOp defines how to process the key and value of the LeafOp to include length information. After encoding the length with the given algorithm, the length…"
---

# Enumeration: LengthOp

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:67](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L67)

*
LengthOp defines how to process the key and value of the LeafOp
to include length information. After encoding the length with the given
algorithm, the length will be prepended to the key and value bytes.
(Each one with it's own encoded length)

## Generated

from enum ics23.LengthOp

## Enumeration Members

### FIXED32\_BIG

> **FIXED32\_BIG**: `3`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:94](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L94)

FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer

#### Generated

from enum value: FIXED32_BIG = 3;

***

### FIXED32\_LITTLE

> **FIXED32\_LITTLE**: `4`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:102](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L102)

FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit
integer

#### Generated

from enum value: FIXED32_LITTLE = 4;

***

### FIXED64\_BIG

> **FIXED64\_BIG**: `5`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:109](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L109)

FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer

#### Generated

from enum value: FIXED64_BIG = 5;

***

### FIXED64\_LITTLE

> **FIXED64\_LITTLE**: `6`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:117](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L117)

FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit
integer

#### Generated

from enum value: FIXED64_LITTLE = 6;

***

### NO\_PREFIX

> **NO\_PREFIX**: `0`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:73](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L73)

NO_PREFIX don't include any length info

#### Generated

from enum value: NO_PREFIX = 0;

***

### REQUIRE\_32\_BYTES

> **REQUIRE\_32\_BYTES**: `7`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:125](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L125)

REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32
bytes (sha256 output)

#### Generated

from enum value: REQUIRE_32_BYTES = 7;

***

### REQUIRE\_64\_BYTES

> **REQUIRE\_64\_BYTES**: `8`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:133](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L133)

REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64
bytes (sha512 output)

#### Generated

from enum value: REQUIRE_64_BYTES = 8;

***

### VAR\_PROTO

> **VAR\_PROTO**: `1`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:80](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L80)

VAR_PROTO uses protobuf (and go-amino) varint encoding of the length

#### Generated

from enum value: VAR_PROTO = 1;

***

### VAR\_RLP

> **VAR\_RLP**: `2`

Defined in: [packages/bitbadgesjs-sdk/src/proto/proofs\_pb.ts:87](https://github.com/BitBadges/bitbadgesjs/blob/master/packages/bitbadgesjs-sdk/src/proto/proofs_pb.ts#L87)

VAR_RLP uses rlp int encoding of the length

#### Generated

from enum value: VAR_RLP = 2;

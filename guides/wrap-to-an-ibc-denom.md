---
description: "Add a cosmos coin wrapper path so BitBadges tokens convert 1:1 into an x/bank coin that moves over IBC, with the wrapper and unwrapper approvals it needs."
---

# Wrap to an IBC denom

At the end your collection has a wrapper path, a wrapper address, and the two approvals that let anyone wrap tokens into a native Cosmos SDK coin and unwrap them back.

A cosmos coin wrapper path creates a new custom denom (not an existing IBC denom) and a keyless wrapper address. Sending tokens to that address burns them and mints x/bank coins; sending the coins back burns the coins and mints tokens. See [Cosmos coin wrapper paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md). To back a token with an existing IBC coin instead, see [Smart tokens and vaults](smart-tokens-and-vaults.md).

## 1. Define the wrapper path

Add one entry per denom to `cosmosCoinWrapperPathsToAdd` when you create the collection. `conversion.sideA` is the coin side; `conversion.sideB` is the token side.

```ts
const collection = {
    ...BaseCollectionDetails,
    validTokenIds: [{ start: 1n, end: 100n }],
    cosmosCoinWrapperPathsToAdd: [
        {
            denom: 'utoken',
            conversion: {
                sideA: {
                    amount: '1', // Required: amount of wrapped coin
                },
                sideB: [
                    {
                        amount: 1n,
                        tokenIds: [{ start: 1n, end: 100n }],
                        ownershipTimes: [
                            { start: 1n, end: 18446744073709551615n },
                        ],
                    },
                ],
            },
            symbol: 'TOKEN',
            denomUnits: [
                {
                    decimals: 6n,
                    symbol: 'TOKEN',
                    isDefaultDisplay: true,
                },
            ],
            allowOverrideWithAnyValidToken: false,
            metadata: { uri: '', customData: '' }, // Optional metadata
        },
    ],
};
```

`BaseCollectionDetails` is from [Create a collection](create-a-collection.md). The `denom`, `conversion`, `denomUnits`, `allowOverrideWithAnyValidToken`, `{id}` placeholder, and metadata rules are on [Cosmos coin wrapper paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md). Paths can be added after creation only while the `canAddMoreCosmosCoinWrapperPaths` permission is not frozen; see [Lock permissions](lock-permissions.md).

## 2. Derive the wrapper address

The chain generates one address per wrapper path from the denom. The BitBadges site shows it on the collection page, and the SDK derives it locally.

```ts
import { generateAliasAddressForDenom } from 'bitbadges';

const denom = 'utoken1';
const wrapperAddress = generateAliasAddressForDenom(denom);
console.log('Wrapper Address:', wrapperAddress);
```

When the denom contains an `{id}` placeholder, the placeholder stays in the hash preimage. There is one address per wrapper path regardless of token ID.

## 3. Add the wrapper and unwrapper approvals

Wrapping and unwrapping are ordinary transfers, so they must match approvals. The wrapper address has no key and cannot set its own user-level approvals, so the collection approvals override on its side. Both approvals need `allowSpecialWrapping: true` and `mustPrioritize: true`; the chain rejects special-wrapping approvals without them. See [Special address flags](../token-standard/approval-criteria/special-address-flags.md).

Wrapper approval (users send tokens to the wrapper address):

```ts
export const wrapperApproval = ({
    specialAddress,
    tokenIds,
    ownershipTimes,
    approvalId,
}: {
    specialAddress: string;
    tokenIds: iUintRange<bigint>[];
    ownershipTimes: iUintRange<bigint>[];
    approvalId: string;
}): RequiredApprovalProps => {
    const id = approvalId;
    const toSet: RequiredApprovalProps = {
        version: 0n,
        toListId: specialAddress,
        toList: AddressList.getReservedAddressList(specialAddress),
        fromListId: 'AllWithoutMint',
        fromList: AddressList.getReservedAddressList('AllWithoutMint'),
        initiatedByListId: 'All',
        initiatedByList: AddressList.AllAddresses(),
        transferTimes: UintRangeArray.FullRanges(),
        tokenIds: tokenIds,
        ownershipTimes: ownershipTimes,
        approvalId: id,
        approvalCriteria: {
            ...EmptyApprovalCriteria,
            allowSpecialWrapping: true, // Required for wrapper path operations
            mustPrioritize: true, // Chain-enforced: must be true for special wrapping approvals
            overridesToIncomingApprovals: true,
        },
    };

    return toSet;
};
```

If `defaultBalances.autoApproveAllIncomingTransfers` is `true`, the wrapper address already accepts all incoming transfers and `overridesToIncomingApprovals` is not strictly needed. Setting it keeps the path working if the default ever changes.

Unwrapper approval (the wrapper address sends tokens back to users):

```ts
export const unwrapperApproval = ({
    specialAddress,
    tokenIds,
    ownershipTimes,
    approvalId,
}: {
    specialAddress: string;
    tokenIds: iUintRange<bigint>[];
    ownershipTimes: iUintRange<bigint>[];
    approvalId: string;
}): RequiredApprovalProps => {
    const id = approvalId;
    const toSet: RequiredApprovalProps = {
        version: 0n,
        fromListId: specialAddress,
        fromList: AddressList.getReservedAddressList(specialAddress),
        toListId: 'All',
        toList: AddressList.AllAddresses(),
        initiatedByListId: 'All',
        initiatedByList: AddressList.AllAddresses(),
        transferTimes: UintRangeArray.FullRanges(),
        tokenIds: tokenIds,
        ownershipTimes: ownershipTimes,
        approvalId: id,
        approvalCriteria: {
            ...EmptyApprovalCriteria,
            allowSpecialWrapping: true, // Required for wrapper path operations
            mustPrioritize: true, // Chain-enforced: must be true for special wrapping approvals
            overridesFromOutgoingApprovals: true,
        },
    };

    return toSet;
};
```

`overridesFromOutgoingApprovals: true` is required here: the wrapper address cannot approve its own outgoing transfers.

Put both next to your other approvals:

```ts
const collection = {
    ...BaseCollectionDetails,
    collectionApprovals: [
        ...otherApprovals,
        wrapperApproval({ specialAddress: wrapperAddress, tokenIds, ownershipTimes, approvalId: 'wrap' }),
        unwrapperApproval({ specialAddress: wrapperAddress, tokenIds, ownershipTimes, approvalId: 'unwrap' }),
    ],
};
```

`EmptyApprovalCriteria` is the template in [Set transferability](set-transferability.md). Customize the criteria as you like (limits, allowlists, time windows); the two flags above are the only hard requirement.

## 4. Deploy and check the conversion

```bash
bb check ./collection.json
bb deploy --msg-file ./collection.json --browser
```

Once the collection exists, preview conversions through the path before moving anything:

```bash
# Given raw backing-coin base units, how many wrapped tokens result?
bb amount wrap-preview <collection-id> --coin-amount 1000000

# Given a token count, how much coin does unwrapping release?
bb amount unwrap-preview <collection-id> --token-amount 5
```

Both accept `--path-index <n>` (default `0`) and `--path-kind cosmos-coin | alias` (default `cosmos-coin`). Smart tokens populate alias paths, not wrapper paths, so pass `--path-kind alias` for those.

## 5. Wrap and unwrap

Wrap: transfer tokens to the wrapper address, prioritizing the wrapper approval. The chain burns the tokens and credits the x/bank coin to the sender.

```bash
bb build transfer --collection-id <id> --from bb1you... --to <wrapperAddress> --amount 5 | bb deploy --browser
```

Pick the wrapper approval in the walkthrough. `mustPrioritize: true` means the approval is never auto-scanned; the transfer must list it in `prioritizedApprovals`. See [Prioritized approvals](../token-standard/concepts/prioritized-approvals.md).

Unwrap: send the coin back to the wrapper address with a bank send. The chain burns the coin and mints tokens to the sender under the unwrapper approval.

```bash
bb build send --from bb1you... --to <wrapperAddress> --amount 5000000 --denom utoken | bb deploy --browser
```

`bb build send` treats `--amount` as base units when `--denom` is a raw chain denom and as display units for known symbols; `--base-units` forces base units.

The coin is now a regular x/bank balance: send it with a bank transfer, trade it in a pool (see [Trade on the DEX](trade-on-the-dex.md)), or move it over IBC. For rate limits on outbound IBC transfers, see [Rate limits](../chain/modules/ibc-rate-limit.md).

## Next steps

- [Cosmos coin wrapper paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md)
- [Alias denoms](../token-standard/ibc/alias-denoms.md)
- [IBC overview](../token-standard/ibc/README.md)
- [Smart tokens and vaults](smart-tokens-and-vaults.md)

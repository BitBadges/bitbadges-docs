---
description: "Add a cosmos coin wrapper path so BitBadges tokens convert 1:1 into an x/bank coin that moves over IBC, with the wrapper and unwrapper approvals it needs."
---

# Wrap to an IBC Denom

At the end your collection has a wrapper path, a wrapper address, and the two approvals that let anyone wrap tokens into a native Cosmos SDK coin and unwrap them back.

A cosmos coin wrapper path creates a new custom denom (not an existing IBC denom) and a keyless wrapper address. Sending tokens to that address burns them and mints x/bank coins; sending the coins back burns the coins and mints tokens. See [Cosmos Coin Wrapper Paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md). To back a token with an existing IBC coin instead, see [Smart Tokens and Vaults](smart-tokens-and-vaults.md).

## 1. Define the Wrapper Path

Add one entry per denom to `cosmosCoinWrapperPathsToAdd` when you create the collection. `conversion.sideA` is the coin side; `conversion.sideB` is the token side.

This example wraps one raw unit of token ID 1 into one raw unit of the new coin. Six display decimals mean 1,000,000 raw coin units display as 1 TOKEN.

```ts
const collectionWithWrapper = {
    ...BaseCollectionDetails,
    standards: ['Fungible Tokens'],
    validTokenIds: [{ start: 1n, end: 1n }],
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
                        tokenIds: [{ start: 1n, end: 1n }],
                        ownershipTimes: [
                            { start: 1n, end: 18446744073709551615n },
                        ],
                    },
                ],
            },
            symbol: 'utoken', // the base unit
            denomUnits: [
                {
                    decimals: 6n,
                    symbol: 'TOKEN',
                    isDefaultDisplay: true,
                    metadata: { uri: '', customData: '' },
                },
            ],
            allowOverrideWithAnyValidToken: false,
            metadata: { uri: '', customData: '' }, // Optional metadata
        },
    ],
};
```

`BaseCollectionDetails` is from [Create a Collection](create-a-collection.md). The `denom`, `conversion`, `denomUnits`, `allowOverrideWithAnyValidToken`, `{id}` placeholder, and metadata rules are on [Cosmos Coin Wrapper Paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md). Paths can be added after creation only while the `canAddMoreCosmosCoinWrapperPaths` permission is not frozen; see [Lock Permissions](lock-permissions.md).

{% hint style="info" %}
**Ask your agent.** With the MCP builder tools installed, paste one of these:

```text
Add a cosmos coin wrapper path to my collection for denom utoken with symbol TOKEN and 6 decimals, add the wrap and unwrap approvals, and give me the review link.
```

```text
Generate the wrapper address for denom utoken.
```
{% endhint %}

## 2. Derive the Wrapper Address

The chain generates one address per wrapper path from the denom. The BitBadges site shows it on the collection page, and the SDK derives it locally.

```ts
import { generateAliasAddressForDenom } from 'bitbadges';

const denom = 'utoken';
const wrapperAddress = generateAliasAddressForDenom(denom);
console.log('Wrapper Address:', wrapperAddress); // bb1epzsfvc4snsrnefpcvuvp60l2q8ke92ax05m55xtszpt6flxkg7qc38zch
```

When the denom contains an `{id}` placeholder, the placeholder stays in the hash preimage. There is one address per wrapper path regardless of token ID.

## 3. Add the Wrapper and Unwrapper Approvals

Wrapping and unwrapping are ordinary transfers, so they must match approvals. The wrapper address has no key and cannot set its own user-level approvals, so the collection approvals override on its side. Both approvals need `allowSpecialWrapping: true` and `mustPrioritize: true`; the chain rejects special-wrapping approvals without them. See [Special Address Flags](../token-standard/approval-criteria/special-address-flags.md).

Wrapper approval (users send tokens to the wrapper address):

```ts
import { UintRangeArray, type iCollectionApproval, type iUintRange } from 'bitbadges';

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
}): iCollectionApproval<bigint> => ({
    version: 0n,
    toListId: specialAddress,
    fromListId: 'AllWithoutMint',
    initiatedByListId: 'All',
    transferTimes: UintRangeArray.FullRanges(),
    tokenIds,
    ownershipTimes,
    approvalId,
    uri: '',
    customData: '',
    approvalCriteria: {
        ...EmptyApprovalCriteria,
        allowSpecialWrapping: true, // Required for wrapper path operations
        mustPrioritize: true, // Chain-enforced: must be true for special wrapping approvals
        overridesToIncomingApprovals: true,
    },
});
```

:::widget{name="transferability-row" caption="The wrap approval as the transferability tab lists it: any holder sends token 1 to the wrapper address derived in step 2."}
{
  "approvalId": "wrap",
  "fromListId": "AllWithoutMint",
  "toListId": "bb1epzsfvc4snsrnefpcvuvp60l2q8ke92ax05m55xtszpt6flxkg7qc38zch",
  "initiatedByListId": "All",
  "tokenIds": [
    {
      "start": "1",
      "end": "1"
    }
  ],
  "criteria": [
    "Special wrapping",
    "Must prioritize",
    "Skips recipient incoming approvals"
  ]
}
:::

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
}): iCollectionApproval<bigint> => ({
    version: 0n,
    fromListId: specialAddress,
    toListId: 'All',
    initiatedByListId: 'All',
    transferTimes: UintRangeArray.FullRanges(),
    tokenIds,
    ownershipTimes,
    approvalId,
    uri: '',
    customData: '',
    approvalCriteria: {
        ...EmptyApprovalCriteria,
        allowSpecialWrapping: true, // Required for wrapper path operations
        mustPrioritize: true, // Chain-enforced: must be true for special wrapping approvals
        overridesFromOutgoingApprovals: true,
    },
});
```

`overridesFromOutgoingApprovals: true` is required here: the wrapper address cannot approve its own outgoing transfers.

Put both next to your other approvals:

```ts
const tokenIds = [{ start: 1n, end: 1n }];
const ownershipTimes = UintRangeArray.FullRanges();

const collection = {
    ...collectionWithWrapper,
    collectionApprovals: [
        mintApproval, // from Mint and distribute
        transferableApproval, // from Set transferability
        wrapperApproval({ specialAddress: wrapperAddress, tokenIds, ownershipTimes, approvalId: 'wrap' }),
        unwrapperApproval({ specialAddress: wrapperAddress, tokenIds, ownershipTimes, approvalId: 'unwrap' }),
    ],
};
```

`EmptyApprovalCriteria` and `transferableApproval` are from [Set Transferability](set-transferability.md); `mintApproval` is from [Mint and Distribute](mint-and-distribute.md). Keep the wrapper path from step 1 when assembling the collection. Customize limits, allowlists, and time windows while preserving the special-wrapping flags and required user-level overrides.

## 4. Deploy and Check the Conversion

Serialize the assembled message to `collection.json`, converting bigint values to strings. Supply `creator` (your signing address) and `collectionPermissions` from [Create a Collection](create-a-collection.md) and [Lock Permissions](lock-permissions.md):

```ts
import { writeFileSync } from 'node:fs';

const transaction = {
    typeUrl: '/tokenization.MsgCreateCollection',
    value: { ...collection, creator, collectionPermissions },
};
writeFileSync('collection.json', JSON.stringify(transaction, (_, value) =>
    typeof value === 'bigint' ? value.toString() : value, 2));
```

```bash
bb check ./collection.json
bb deploy --msg-file ./collection.json --browser
```

Once the collection exists, preview conversions through the path before moving anything:

```bash
# Given raw backing-coin base units, how many wrapped tokens result?
bb amount wrap-preview 1 --coin-amount 1000000

# Given a token count, how much coin does unwrapping release?
bb amount unwrap-preview 1 --token-amount 5
```

Both accept `--path-index <n>` (default `0`) and `--path-kind cosmos-coin | alias` (default `cosmos-coin`). Smart tokens populate alias paths, not wrapper paths, so pass `--path-kind alias` for those.

## 5. Wrap and Unwrap

Wrap: transfer tokens to the wrapper address, prioritizing the wrapper approval. The chain burns the tokens and credits the x/bank coin to the sender.

```bash
bb build transfer --collection-id 1 --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1epzsfvc4snsrnefpcvuvp60l2q8ke92ax05m55xtszpt6flxkg7qc38zch --token-ids 1 --amount 5000000 | bb deploy --browser
```

Pick the wrapper approval in the walkthrough. `mustPrioritize: true` means the approval is never auto-scanned; the transfer must list it in `prioritizedApprovals`. See [Prioritized Approvals](../token-standard/concepts/prioritized-approvals.md).

For collection 1, the generated bank denom is `badges:1:utoken`; `utoken` alone is only the path name. Replace `1` with your deployed collection ID in both commands. The wrap example exchanges 5,000,000 raw token units for 5 TOKEN.

Unwrap: send the coin back to the wrapper address with a bank send. The chain burns the coin and mints tokens to the sender under the unwrapper approval.

```bash
bb build send --from bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d --to bb1epzsfvc4snsrnefpcvuvp60l2q8ke92ax05m55xtszpt6flxkg7qc38zch --amount 5000000 --denom badges:1:utoken --base-units | bb deploy --browser
```

`bb build send` treats `--amount` as base units when `--denom` is a raw chain denom and as display units for known symbols; `--base-units` forces base units.

The coin is now a regular x/bank balance: send it with a bank transfer, trade it in a pool (see [Trade on the DEX](trade-on-the-dex.md)), or move it over IBC. For rate limits on outbound IBC transfers, see [Rate limits](../chain/modules/ibc-rate-limit.md).

## Next Steps

- [Cosmos Coin Wrapper Paths](../token-standard/ibc/cosmos-coin-wrapper-paths.md)
- [Alias Denoms](../token-standard/ibc/alias-denoms.md)
- [IBC overview](../token-standard/ibc/README.md)
- [Smart Tokens and Vaults](smart-tokens-and-vaults.md)

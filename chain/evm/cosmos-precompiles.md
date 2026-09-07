---
description: "The upstream cosmos/evm precompiles on BitBadges (P256, bech32, staking, distribution, IBC, bank, governance, slashing, ICS02) with addresses and methods."
---

# Cosmos SDK precompiles

These precompiles come from the upstream [cosmos/evm](https://github.com/cosmos/evm) module and give Solidity contracts direct access to standard Cosmos SDK modules. Unlike the BitBadges precompiles, which take JSON, these use ordinary ABI-encoded parameters.

```solidity
IBech32 bech32 = IBech32(0x0000000000000000000000000000000000000400);
string memory cosmosAddr = bech32.hexToBech32(msg.sender, "bb");
```

## Addresses

| Precompile | Address | Type |
| --- | --- | --- |
| P256 | `0x0000000000000000000000000000000000000100` | Cryptography |
| Bech32 | `0x0000000000000000000000000000000000000400` | Utility |
| Staking | `0x0000000000000000000000000000000000000800` | Transactions + queries |
| Distribution | `0x0000000000000000000000000000000000000801` | Transactions + queries |
| ICS20 (IBC transfer) | `0x0000000000000000000000000000000000000802` | Transactions + queries |
| Bank | `0x0000000000000000000000000000000000000804` | Queries only |
| Governance | `0x0000000000000000000000000000000000000805` | Transactions + queries |
| Slashing | `0x0000000000000000000000000000000000000806` | Transactions + queries |
| ICS02 (IBC light clients) | `0x0000000000000000000000000000000000000807` | Transactions + queries |

`app/evm.go` registers this set through `DefaultStaticPrecompiles` from cosmos/evm v0.7.x. A precompile also has to be in the EVM params' `active_static_precompiles` list to be callable. Check the live list with:

```bash
bb query evm params --node https://rpc.bitbadges.io
```

## P256

Address `0x0000000000000000000000000000000000000100`. Implements secp256r1 (P-256) signature verification per [RIP-7212](https://github.com/ethereum/RIPs/blob/master/RIPS/rip-7212.md).

Low-level call with 160 bytes of input:

- Bytes 0-31: hash of the signed data
- Bytes 32-63: `r` component of the signature
- Bytes 64-95: `s` component of the signature
- Bytes 96-127: `x` coordinate of the public key
- Bytes 128-159: `y` coordinate of the public key

Returns 32 bytes with value `1` if valid, empty if invalid. Gas: 3,450.

## Bech32

Address `0x0000000000000000000000000000000000000400`. Converts between hex and bech32 addresses.

```solidity
interface IBech32 {
    /// @notice Convert hex address to bech32 string
    function hexToBech32(address addr, string calldata prefix) external pure returns (string memory);

    /// @notice Convert bech32 string to hex address
    function bech32ToHex(string calldata bech32Addr) external pure returns (address);
}
```

```solidity
IBech32 bech32 = IBech32(0x0000000000000000000000000000000000000400);

// Convert EVM address to Cosmos address
string memory cosmosAddr = bech32.hexToBech32(msg.sender, "bb");
// Result: "bb1abc123..."

// Convert Cosmos address to EVM address
address evmAddr = bech32.bech32ToHex("bb1abc123...");
```

The tokenization precompile exposes the same conversion as `convertEvmAddressToBech32` and `convertBech32ToEvmAddress` with the `bb` prefix fixed.

## Staking

Address `0x0000000000000000000000000000000000000800`.

Transaction methods:

| Method | Description |
| --- | --- |
| `createValidator(...)` | Create a new validator |
| `editValidator(...)` | Edit validator parameters |
| `delegate(address validator, uint256 amount)` | Delegate tokens to a validator |
| `undelegate(address validator, uint256 amount)` | Undelegate tokens from a validator |
| `redelegate(address srcValidator, address dstValidator, uint256 amount)` | Redelegate tokens between validators |
| `cancelUnbondingDelegation(address validator, uint256 amount, int64 creationHeight)` | Cancel an unbonding delegation |

Query methods:

| Method | Description |
| --- | --- |
| `delegation(address delegator, address validator)` | Get delegation info |
| `unbondingDelegation(address delegator, address validator)` | Get unbonding delegation info |
| `validator(address validator)` | Get validator info |
| `validators(string status, PageRequest pagination)` | Get all validators |
| `redelegation(address delegator, address srcValidator, address dstValidator)` | Get redelegation info |
| `redelegations(address delegator, address srcValidator, address dstValidator, PageRequest pagination)` | Get all redelegations |

## Distribution

Address `0x0000000000000000000000000000000000000801`. Staking rewards.

Transaction methods:

| Method | Description |
| --- | --- |
| `setWithdrawAddress(address withdrawAddr)` | Set the withdrawal address for rewards |
| `withdrawDelegatorRewards(address validator)` | Withdraw rewards from a validator |
| `withdrawValidatorCommission(address validator)` | Withdraw validator commission |
| `fundCommunityPool(Coin[] amount)` | Fund the community pool |
| `claimRewards(address delegator, uint32 maxRetrieve)` | Claim all rewards |
| `depositValidatorRewardsPool(address validator, Coin[] amount)` | Deposit to validator rewards pool |

Query methods:

| Method | Description |
| --- | --- |
| `validatorDistributionInfo(address validator)` | Get validator distribution info |
| `validatorOutstandingRewards(address validator)` | Get validator outstanding rewards |
| `validatorCommission(address validator)` | Get validator commission |
| `validatorSlashes(address validator, uint64 startingHeight, uint64 endingHeight, PageRequest pagination)` | Get validator slashes |
| `delegationRewards(address delegator, address validator)` | Get delegation rewards |
| `delegationTotalRewards(address delegator)` | Get total rewards for a delegator |
| `delegatorValidators(address delegator)` | Get validators for a delegator |
| `delegatorWithdrawAddress(address delegator)` | Get withdraw address |
| `communityPool()` | Get community pool balance |

## ICS20 (IBC transfer)

Address `0x0000000000000000000000000000000000000802`.

```solidity
interface IICS20 {
    /// @notice Transfer tokens via IBC
    function transfer(
        string calldata sourcePort,
        string calldata sourceChannel,
        string calldata denom,
        uint256 amount,
        string calldata receiver,
        Height calldata timeoutHeight,
        uint64 timeoutTimestamp,
        string calldata memo
    ) external returns (uint64 sequence);
}
```

Query methods:

| Method | Description |
| --- | --- |
| `denom(string hash)` | Get denom trace from hash |
| `denoms(PageRequest pagination)` | Get all denom traces |
| `denomHash(string trace)` | Get hash from denom trace |

Outbound IBC transfers are subject to the chain's [rate limits](../modules/ibc-rate-limit.md).

## Bank

Address `0x0000000000000000000000000000000000000804`. Read-only.

```solidity
interface IBank {
    /// @notice Get all balances for an account
    function balances(address account, PageRequest pagination) external view returns (Coin[] memory, PageResponse memory);

    /// @notice Get total supply of all tokens
    function totalSupply(PageRequest pagination) external view returns (Coin[] memory, PageResponse memory);

    /// @notice Get supply of a specific denom
    function supplyOf(string calldata denom) external view returns (Coin memory);
}
```

Gas: `balances` 2,851; `totalSupply` 2,477; `supplyOf` 2,477.

To send native coins from a contract, use the [send manager precompile](send-manager-precompile.md).

## Governance

Address `0x0000000000000000000000000000000000000805`.

Transaction methods:

| Method | Description |
| --- | --- |
| `submitProposal(...)` | Submit a governance proposal |
| `deposit(uint64 proposalId, Coin[] amount)` | Deposit tokens to a proposal |
| `cancelProposal(uint64 proposalId)` | Cancel a proposal (proposer only) |
| `vote(uint64 proposalId, VoteOption option, string metadata)` | Vote on a proposal |
| `voteWeighted(uint64 proposalId, WeightedVoteOption[] options, string metadata)` | Vote with weights |

Query methods:

| Method | Description |
| --- | --- |
| `getVotes(uint64 proposalId, PageRequest pagination)` | Get votes for a proposal |
| `getVote(uint64 proposalId, address voter)` | Get a specific vote |
| `getDeposit(uint64 proposalId, address depositor)` | Get a deposit |
| `getDeposits(uint64 proposalId, PageRequest pagination)` | Get all deposits |
| `getTallyResult(uint64 proposalId)` | Get tally result |
| `getProposal(uint64 proposalId)` | Get proposal info |
| `getProposals(ProposalStatus status, address voter, address depositor, PageRequest pagination)` | Get all proposals |
| `getParams()` | Get governance params |
| `getConstitution()` | Get chain constitution |

## Slashing

Address `0x0000000000000000000000000000000000000806`.

```solidity
interface ISlashing {
    /// @notice Unjail a jailed validator
    function unjail(address validatorAddr) external;
}
```

Query methods:

| Method | Description |
| --- | --- |
| `getSigningInfo(address consAddr)` | Get signing info for a validator |
| `getSigningInfos(PageRequest pagination)` | Get all signing infos |
| `getParams()` | Get slashing params |

## ICS02 (IBC light clients)

Address `0x0000000000000000000000000000000000000807`. The ICS-02 client router.

```solidity
interface ICS02I {
    /// @notice The result of an update operation
    enum UpdateResult {
        Update,
        Misbehaviour
    }

    /// @notice Update the client with the given client identifier
    /// @param updateMsg The encoded update message, e.g. a protobuf Any
    function updateClient(string calldata clientId, bytes calldata updateMsg) external returns (UpdateResult);

    /// @notice Verify membership of a key-value pair. Not view: may update
    /// client state for caching. Returns the unix timestamp (seconds) of the
    /// verification height on the counterparty chain.
    function verifyMembership(
        string calldata clientId,
        bytes calldata proof,
        Height calldata proofHeight,
        bytes[] calldata path,
        bytes calldata value
    ) external returns (uint256);

    /// @notice Verify non-membership of a key. Not view: may update client
    /// state for caching. Returns the unix timestamp (seconds) of the
    /// verification height on the counterparty chain.
    function verifyNonMembership(
        string calldata clientId,
        bytes calldata proof,
        Height calldata proofHeight,
        bytes[] calldata path
    ) external returns (uint256);
}
```

Query methods:

| Method | Description |
| --- | --- |
| `getClientState(string clientId)` | Get the client state (returns raw bytes) |

## Common types

```solidity
struct Coin {
    string denom;
    uint256 amount;
}

struct PageRequest {
    bytes key;
    uint64 offset;
    uint64 limit;
    bool countTotal;
    bool reverse;
}

struct PageResponse {
    bytes nextKey;
    uint64 total;
}

struct Height {
    uint64 revisionNumber;
    uint64 revisionHeight;
}

enum VoteOption {
    Unspecified,
    Yes,
    Abstain,
    No,
    NoWithVeto
}
```

## Related

- [EVM overview](README.md)
- [Send manager precompile](send-manager-precompile.md)
- [Cosmos EVM documentation](https://docs.cosmos.network/evm/)
- [Cosmos EVM precompiles source](https://github.com/cosmos/evm/tree/v0.7.2/precompiles)

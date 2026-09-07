# Inventory B: protocol reference slice (condensed)

## Chain truth (bitbadgeschain proto)
tokenization Msgs (27): UpdateParams, UniversalUpdateCollection, CreateAddressLists, TransferTokens, UpdateUserApprovals, SetIncomingApproval, DeleteIncomingApproval, SetOutgoingApproval, DeleteOutgoingApproval, PurgeApprovals, DeleteCollection, UpdateCollection, CreateCollection, CreateDynamicStore, UpdateDynamicStore, DeleteDynamicStore, SetDynamicStoreValue, SetValidTokenIds, SetManager, SetCollectionMetadata, SetTokenMetadata, SetCustomData, SetStandards, SetCollectionApprovals, SetIsArchived, SetReservedProtocolAddress, CastVote.
tokenization Queries (16): Params, GetCollection, GetAddressList, GetApprovalTracker, GetChallengeTracker, GetETHSignatureTracker, GetBalance, GetDynamicStore, GetDynamicStoreValue, GetWrappableBalances, IsAddressReservedProtocol, GetAllReservedProtocolAddresses, GetVote, GetVotes, GetCollectionStats, GetBalanceForToken.
- No documented Msg/Query is stale. Undocumented: Msgs SetReservedProtocolAddress, UpdateParams; Queries IsAddressReservedProtocol, GetAllReservedProtocolAddresses, GetVote, GetVotes, GetBalanceForToken.
- Orphans msg-cast-vote, msg-set-token-metadata, get-collection-stats, get-wrappable-balances are VALID, just missing from SUMMARY.
- gamm: 12 Msgs, docs cover 5 (missing SwapExactAmountOut, JoinSwapExternAmountIn, JoinSwapShareAmountOut, ExitSwapExternAmountOut, ExitSwapShareAmountIn, CreateStableswapPool, StableSwapAdjustScalingFactors) + 16 queries undocumented.
- managersplitter: 5 Msgs (UpdateParams undocumented), 3 queries undocumented.
- ibcratelimit: Msgs UpdateParams, UpdateRateLimit undocumented.
- ibchooks: no tx/query proto; middleware only.
- sendmanager (SendWithAliasRouting) + poolmanager: real modules, NO docs except sendmanager precompile page.
- x/pot DOES NOT EXIST. proof-of-token-voting-power.md must be app-level only or dropped/corrected.
- Precompiles: exactly 3: tokenization 0x..1001, gamm 0x..1002, sendmanager 0x..1003 (app/evm.go:229-243). gamm docs accurate (14/14 fns). sendmanager doc WRONG: says sendTokens(), real ABI is send(). tokenization API.md omits 17 live ABI fns (getApprovalTracker, getChallengeTracker, getETHSignatureTracker, getVote, getVotes, getWrappableBalances, isAddressReservedProtocol, getAllReservedProtocolAddresses, purgeApprovals, setCollectionApprovals, setCollectionMetadata, setCustomData, setIsArchived, setManager, setStandards, setTokenMetadata, setValidTokenIds, universalUpdateCollection, updateUserApprovals). Regenerate from x/tokenization/precompile/abi.json.

## Key file findings
- Twins: msg-delete-incoming/outgoing-approval (identical), msg-set-incoming/outgoing-approval (identical). msg-update-collection is a subset of msg-universal-update-collection. msg-delete-dynamic-store & get-dynamic-store-value: thin, merge.
- examples/approvals/* (5 snippets, 77-181 words each): fold into building-collection-approvals or wrapper page.
- examples/building-*-permissions, permissions/locking-* (3 clones): overlap learn/permissions.md (17K, deeper). Merge into permissions concept + one "locking patterns" page.
- examples/cosmos-coin-wrapper-example + wrapper/unwrapper approvals: fully contained by learn/cosmos-coin-wrapper-paths.md (21K).
- examples/defining-circulating-supply + mint-all-to-self: overlap learn/minting-and-circulating-supply.md.
- examples/txs/*: three index stubs (drop); quest-badge-collection dupes skills/quest; tradable-nft-collection dupes skills/nft-collection.
- skills/* (23): VERBATIM dumps of bitbadgesjs/packages/bitbadgesjs-sdk/src/builder/resources/skillInstructions.ts (SKILL_INSTRUCTIONS; fields id/name/category/description/summary/instructions). Source of truth = SDK. Generator bugs: leaked escaped backticks, missing code fences (auction, bounty, liquidity-pools). Em-dash floods (payment-protocol 37, smart-token 30...). System-prompt voice (MUST/DO NOT ladders). skills/bb-402 dupes token-standard/bb-402.
- Empty stubs (drop): token-standard/messages/msgsettokenmetadata.md, token-standard/examples/approvals/README.md, token-standard/integrating-the-module/README.md, other-modules/x-*/README.md (4), other-modules/README.md, evm/evm-precompiles/SUMMARY.md, evm/EVM_POC_COMPLETION_SUMMARY.md (internal status report, hype).
- EVM orphans worth keeping: evm/evm-precompiles/README.md (landing), cosmos-precompiles.md, gamm-precompile/{README,API,gotchas} (gotchas = 22 code blocks), sendmanager-precompile/README (fix), solidity-quickstart.md (best on-ramp). evm/EVM_INTEGRATION.md links stale evm-poc branch -> merge into precompiles README.
- EVM thin: gas.md (238w, 0 code; rewrite from gas.go), security.md (179w; rewrite from security.go 8.8K).
- Anchors (substantial): tokenization-precompile/API.md, developer-guide.md, setup-and-configuration.md, bb-402/spec.md, msg-transfer-tokens.md, errors.md, x-custom-ibc-hooks/overview.md, ante-handler-token-gates.md, gamm gotchas.
- Module README/overview pairs (gamm, custom-ibc-hooks, ibc-rate-limit, managersplitter) restate each other: merge each into one page. x-gamm/introduction merges into README.
- bb-402: README index, overview (1184), spec (1750), middleware-recipes (489, 8 blocks), collection-recipes (722, 6 blocks). Keep all; overview overlaps spec.
- integrating-the-module: ante-handler-token-gates (1431/8), custom-extension-hooks (410, thin), proof-of-token-voting-power (892, x/pot claim), support-multiple-standards (755/7).
- Naming drift: badge vs token in file names (simple-badge-transfer, quest-badge-collection).

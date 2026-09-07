---
description: "Three app.go registration points for chain-wide invariants: approval criteria checkers, global transfer checkers, and collection verifiers."
---

# Extension Hooks

A chain that embeds `x/tokenization` can register Go callbacks that run at fixed points for every collection. Use them for small global invariants that the built-in approval criteria cannot express. Each callback receives `ctx` and may read state; if any callback returns an error, the transaction's state changes roll back.

```go
// app.go
app.BadgesKeeper.RegisterCustomApprovalCriteriaChecker(approvalCriteriaFactory)
app.BadgesKeeper.RegisterCustomGlobalTransferChecker(globalTransferFactory)
app.BadgesKeeper.RegisterCustomCollectionVerifier(NewRequireSpecificManagerVerifier("bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"))
```

| Hook | Runs when | Sees | Typical use |
| --- | --- | --- | --- |
| Approval criteria checker | While an approval is evaluated, at every level (collection, incoming, outgoing), alongside the native criteria | The approval, collection, `to`, `from`, `initiator` | Extra per-approval rules keyed by `approvalId` |
| Global transfer checker | Before `HandleTransfer()` | `from`, `to`, `initiatedBy`, collection, transfer balances, memo | Chain-wide transfer policy that can inspect balances |
| Collection verifier | Before a collection is stored | The full `TokenCollection` | Collection-level invariants such as a required manager |

## Custom Approval Criteria Checkers

The factory receives each `CollectionApproval` and returns zero or more checkers for it. Checkers run together with the native approval criteria.

```go
// Usage in app.go:
app.BadgesKeeper.RegisterCustomApprovalCriteriaChecker(func(approval *types.CollectionApproval) []approvalcriteria.ApprovalCriteriaChecker {
	if approval.ApprovalId == "special-approval" {
		return []approvalcriteria.ApprovalCriteriaChecker{
			NewRequireSpecificAddressChecker("bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"),
		}
	}
	return nil
})

// Implementation
type RequireSpecificAddressChecker struct {
	requiredAddress string
}

func (c *RequireSpecificAddressChecker) Name() string {
	return "RequireSpecificAddressChecker"
}

func (c *RequireSpecificAddressChecker) Check(
	ctx sdk.Context,
	approval *types.CollectionApproval,
	collection *types.TokenCollection,
	to string,
	from string,
	initiator string,
	approvalLevel string,
	approverAddress string,
	merkleProofs []*types.MerkleProof,
	ethSignatureProofs []*types.ETHSignatureProof,
	memo string,
	isPrioritized bool,
) (detErrMsg string, err error) {
	if initiator != c.requiredAddress {
		return "initiator must be " + c.requiredAddress,
			fmt.Errorf("initiator address mismatch")
	}
	return "", nil
}
```

`Check` returns two values: a deterministic error message that is safe to surface to users and an error that fails the check.

## Custom Global Transfer Checkers

The factory receives the transfer context and returns checkers that run before `HandleTransfer()`. This is the hook that can see the balances being moved.

```go
// Usage in app.go:
app.BadgesKeeper.RegisterCustomGlobalTransferChecker(func(
	ctx sdk.Context,
	from string,
	to string,
	initiatedBy string,
	collection *types.TokenCollection,
	transferBalances []*types.Balance,
	memo string,
) []badgesmodulekeeper.GlobalTransferChecker {
	if collection.CollectionId.String() == "1" {
		return []badgesmodulekeeper.GlobalTransferChecker{
			NewRequireSpecificMemoChecker("approved-transfer"),
		}
	}
	return nil
})

// Implementation
type RequireSpecificMemoChecker struct {
	requiredMemo string
}

func (c *RequireSpecificMemoChecker) Name() string {
	return "RequireSpecificMemoChecker"
}

func (c *RequireSpecificMemoChecker) Check(
	ctx sdk.Context,
	from string,
	to string,
	initiatedBy string,
	collection *types.TokenCollection,
	transferBalances []*types.Balance,
	memo string,
) (detErrMsg string, err error) {
	if memo != c.requiredMemo {
		return fmt.Sprintf("memo must be '%s'", c.requiredMemo),
			fmt.Errorf("memo mismatch")
	}
	return "", nil
}
```

## Custom Collection Verifiers

Verifiers run before a collection is written to the store, on creation and on every update.

```go
// Usage in app.go:
app.BadgesKeeper.RegisterCustomCollectionVerifier(
	NewRequireSpecificManagerVerifier("bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d"),
)

// Implementation
type RequireSpecificManagerVerifier struct {
	requiredManager string
}

func (v *RequireSpecificManagerVerifier) Name() string {
	return "RequireSpecificManagerVerifier"
}

func (v *RequireSpecificManagerVerifier) VerifyCollection(ctx sdk.Context, collection *types.TokenCollection) error {
	currentManager := collection.GetManager(ctx.BlockTime().Unix())

	if currentManager != v.requiredManager {
		return fmt.Errorf("collection manager must be %s, got %s",
			v.requiredManager, currentManager)
	}

	return nil
}
```

## Related

- [Approval Criteria](../approval-criteria/README.md)
- [Ante Handler Token Gates](ante-handler-token-gates.md)
- [Transferability](../concepts/transferability.md)

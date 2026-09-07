import type { ReactNode } from 'react';
import { z } from 'zod';

import { AddressChip, Card, CardHeader, Chip, formatCoin, formatIdRanges, Icon, rangesSchema, rangeSchema, uintSchema, WidgetFrame, type IconName } from './shared';

/**
 * The grid of criteria cards from the collection page's approval details. Input
 * is a subset of the on-chain `approvalCriteria` object, so authors can paste
 * the JSON they already show; every core card renders, dimmed when unset.
 */
const trackerSchema = z.object({
  amountTrackerId: z.string().optional(),
  resetTimeIntervals: z.object({ startTime: uintSchema, intervalLength: uintSchema }).optional(),
});

export const schema = z.object({
  mustOwnTokens: z
    .array(
      z.object({
        collectionId: z.union([z.string(), z.number()]).transform(String),
        tokenIds: rangesSchema.default([{ start: '1', end: '18446744073709551615' }]),
        amountRange: rangeSchema.default({ start: '1', end: '18446744073709551615' }),
        mustSatisfyForAllAssets: z.boolean().optional(),
      }),
    )
    .default([]),
  coinTransfers: z
    .array(
      z.object({
        to: z.string().min(1),
        coins: z.array(z.object({ denom: z.string(), amount: uintSchema })).min(1),
        overrideFromWithApproverAddress: z.boolean().optional(),
        overrideToWithInitiator: z.boolean().optional(),
      }),
    )
    .default([]),
  merkleChallenges: z
    .array(
      z.object({
        root: z.string().optional(),
        expectedProofLength: uintSchema.optional(),
        useCreatorAddressAsLeaf: z.boolean().optional(),
        maxUsesPerLeaf: uintSchema.optional(),
        challengeTrackerId: z.string().optional(),
      }),
    )
    .default([]),
  predeterminedBalances: z
    .object({
      manualBalances: z.array(z.unknown()).optional(),
      incrementedBalances: z
        .object({
          startBalances: z.array(z.object({ amount: uintSchema, tokenIds: rangesSchema })).optional(),
          incrementTokenIdsBy: uintSchema.optional(),
          incrementOwnershipTimesBy: uintSchema.optional(),
          durationFromTimestamp: uintSchema.optional(),
        })
        .optional(),
      orderCalculationMethod: z
        .object({
          useOverallNumTransfers: z.boolean().optional(),
          usePerToAddressNumTransfers: z.boolean().optional(),
          usePerFromAddressNumTransfers: z.boolean().optional(),
          usePerInitiatedByAddressNumTransfers: z.boolean().optional(),
          useMerkleChallengeLeafIndex: z.boolean().optional(),
        })
        .optional(),
    })
    .optional(),
  approvalAmounts: trackerSchema
    .extend({
      overallApprovalAmount: uintSchema.optional(),
      perToAddressApprovalAmount: uintSchema.optional(),
      perFromAddressApprovalAmount: uintSchema.optional(),
      perInitiatedByAddressApprovalAmount: uintSchema.optional(),
    })
    .optional(),
  maxNumTransfers: trackerSchema
    .extend({
      overallMaxNumTransfers: uintSchema.optional(),
      perToAddressMaxNumTransfers: uintSchema.optional(),
      perFromAddressMaxNumTransfers: uintSchema.optional(),
      perInitiatedByAddressMaxNumTransfers: uintSchema.optional(),
    })
    .optional(),
  requireToEqualsInitiatedBy: z.boolean().optional(),
  requireFromEqualsInitiatedBy: z.boolean().optional(),
  requireToDoesNotEqualInitiatedBy: z.boolean().optional(),
  requireFromDoesNotEqualInitiatedBy: z.boolean().optional(),
  overridesFromOutgoingApprovals: z.boolean().optional(),
  overridesToIncomingApprovals: z.boolean().optional(),
  autoDeletionOptions: z.object({ afterOneUse: z.boolean().optional(), afterOverallMaxNumTransfers: z.boolean().optional() }).optional(),
});

export type Props = z.output<typeof schema>;

const isZero = (v?: string) => v === undefined || v === '0';

function limitLines(prefix: string, values: Record<string, string | undefined>): string[] {
  const labels: Record<string, string> = { overall: 'Overall', perToAddress: 'Per recipient', perFromAddress: 'Per sender', perInitiatedByAddress: 'Per initiator' };
  return Object.entries(labels)
    .filter(([key]) => !isZero(values[`${key}${prefix}`]))
    .map(([key, label]) => `${label}: ${values[`${key}${prefix}`]}`);
}

type CardSpec = { key: string; icon: IconName; color: string; title: string; enabled: boolean; body: ReactNode };

function cards(p: Props): CardSpec[] {
  const amountLines = limitLines('ApprovalAmount', (p.approvalAmounts ?? {}) as Record<string, string | undefined>);
  const transferLines = limitLines('MaxNumTransfers', (p.maxNumTransfers ?? {}) as Record<string, string | undefined>);
  const inc = p.predeterminedBalances?.incrementedBalances;
  const order = p.predeterminedBalances?.orderCalculationMethod ?? {};
  const orderLabel = Object.entries(order).find(([, v]) => v)?.[0];
  const predetermined = !!(inc?.startBalances?.length || p.predeterminedBalances?.manualBalances?.length);
  const flags = [
    ['requireToEqualsInitiatedBy', 'Recipient must be the initiator'],
    ['requireFromEqualsInitiatedBy', 'Sender must be the initiator'],
    ['requireToDoesNotEqualInitiatedBy', 'Recipient must not be the initiator'],
    ['requireFromDoesNotEqualInitiatedBy', 'Sender must not be the initiator'],
  ].filter(([key]) => p[key as keyof Props]) as [string, string][];

  return [
    {
      key: 'mustOwnTokens',
      icon: 'clipboard',
      color: '#10B981',
      title: 'Token Ownership Requirements',
      enabled: p.mustOwnTokens.length > 0,
      body: p.mustOwnTokens.length ? (
        <ul className="m-0 list-none p-0">
          {p.mustOwnTokens.map((m, i) => (
            <li key={i} className="m-0 p-0">
              Own {formatIdRanges([m.amountRange])} of token IDs {formatIdRanges(m.tokenIds)} in collection {m.collectionId}
              {m.mustSatisfyForAllAssets ? ' (every ID)' : ''}
            </li>
          ))}
        </ul>
      ) : (
        'No ownership check'
      ),
    },
    {
      key: 'coinTransfers',
      icon: 'coins',
      color: '#F59E0B',
      title: 'Coin Transfers per Use',
      enabled: p.coinTransfers.length > 0,
      body: p.coinTransfers.length ? (
        <ul className="m-0 flex list-none flex-col gap-1 p-0">
          {p.coinTransfers.map((c, i) => (
            <li key={i} className="m-0 flex flex-wrap items-center gap-1 p-0">
              <span className="font-semibold text-[var(--fg)]">{c.coins.map((coin) => formatCoin(coin.amount, coin.denom)).join(' + ')}</span>
              <Icon name="arrowRight" size={12} />
              {c.overrideToWithInitiator ? <Chip>the initiator</Chip> : <AddressChip address={c.to} />}
            </li>
          ))}
        </ul>
      ) : (
        'No payment attached'
      ),
    },
    {
      key: 'merkleChallenges',
      icon: 'tree',
      color: '#8B5CF6',
      title: 'Merkle Challenges',
      enabled: p.merkleChallenges.length > 0,
      body: p.merkleChallenges.length ? (
        <ul className="m-0 list-none p-0">
          {p.merkleChallenges.map((m, i) => (
            <li key={i} className="m-0 p-0">
              {m.useCreatorAddressAsLeaf ? 'Whitelist proof (leaf = initiator address)' : 'Code proof'}
              {m.maxUsesPerLeaf && m.maxUsesPerLeaf !== '0' ? `, ${m.maxUsesPerLeaf} use per leaf` : ''}
              {m.expectedProofLength ? `, depth ${m.expectedProofLength}` : ''}
            </li>
          ))}
        </ul>
      ) : (
        'No proof required'
      ),
    },
    {
      key: 'predeterminedBalances',
      icon: 'list',
      color: '#0EA5E9',
      title: 'Predetermined Balances',
      enabled: predetermined,
      body: predetermined ? (
        <>
          {inc?.startBalances?.length ? (
            <div>
              Start: {inc.startBalances.map((b) => `x${b.amount} of IDs ${formatIdRanges(b.tokenIds)}`).join(', ')}
              {inc.incrementTokenIdsBy && inc.incrementTokenIdsBy !== '0' ? `, then +${inc.incrementTokenIdsBy} ID per transfer` : ''}
              {inc.durationFromTimestamp && inc.durationFromTimestamp !== '0' ? `, ownership for ${Number(inc.durationFromTimestamp) / 86400000} days` : ''}
            </div>
          ) : (
            <div>{p.predeterminedBalances?.manualBalances?.length} manual balance sets</div>
          )}
          {orderLabel && <div className="text-xs text-[var(--fg-faint)]">Order: {orderLabel}</div>}
        </>
      ) : (
        'Any amount in range'
      ),
    },
    {
      key: 'approvalAmounts',
      icon: 'scale',
      color: '#3B82F6',
      title: 'Amount Restrictions',
      enabled: amountLines.length > 0,
      body: amountLines.length ? amountLines.map((l) => <div key={l}>{l}</div>) : 'No amount limit',
    },
    {
      key: 'maxNumTransfers',
      icon: 'hash',
      color: '#EC4899',
      title: 'Max Transfers',
      enabled: transferLines.length > 0,
      body: transferLines.length ? transferLines.map((l) => <div key={l}>{l}</div>) : 'Unlimited uses',
    },
    {
      key: 'flags',
      icon: 'userCheck',
      color: '#14B8A6',
      title: 'Address Checks',
      enabled: flags.length > 0,
      body: flags.length ? flags.map(([k, label]) => <div key={k}>{label}</div>) : 'No initiator check',
    },
    {
      key: 'overrides',
      icon: 'shield',
      color: '#EF4444',
      title: 'Sender and Recipient Approvals',
      enabled: !!(p.overridesFromOutgoingApprovals || p.overridesToIncomingApprovals),
      body: (
        <>
          <div className="flex items-center gap-1">
            {p.overridesFromOutgoingApprovals ? <Icon name="warning" size={12} className="text-[#d98324]" /> : null}
            {p.overridesFromOutgoingApprovals ? "Skips the sender's outgoing approvals" : "Must satisfy the sender's outgoing approvals"}
          </div>
          <div className="flex items-center gap-1">
            {p.overridesToIncomingApprovals ? <Icon name="warning" size={12} className="text-[#d98324]" /> : null}
            {p.overridesToIncomingApprovals ? "Skips the recipient's incoming approvals" : "Must satisfy the recipient's incoming approvals"}
          </div>
        </>
      ),
    },
  ];
}

export function Component(props: Props) {
  const list = cards(props);
  const autoDelete = props.autoDeletionOptions?.afterOneUse || props.autoDeletionOptions?.afterOverallMaxNumTransfers;
  return (
    <WidgetFrame name="approval-criteria">
      <div className="grid gap-2 sm:grid-cols-2">
        {list.map((card) => (
          <Card key={card.key} muted={!card.enabled} className="flex flex-col gap-2">
            <CardHeader
              icon={card.icon}
              color={card.color}
              title={card.title}
              right={card.enabled ? <Chip tone="good">On</Chip> : <Chip>Off</Chip>}
            />
            <div className="text-sm text-[var(--fg-muted)]">{card.body}</div>
          </Card>
        ))}
        {autoDelete && (
          <Card className="flex flex-col gap-2">
            <CardHeader icon="x" color="#EF4444" title="Auto Deletion" right={<Chip tone="warn">On</Chip>} />
            <div className="text-sm text-[var(--fg-muted)]">
              {props.autoDeletionOptions?.afterOneUse ? 'Deleted after one use' : 'Deleted once the overall max is reached'}
            </div>
          </Card>
        )}
      </div>
    </WidgetFrame>
  );
}

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  {
    name: 'paid-mint',
    props: {
      coinTransfers: [{ to: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', coins: [{ denom: 'ubadge', amount: '1000000' }] }],
      maxNumTransfers: { overallMaxNumTransfers: '100', perInitiatedByAddressMaxNumTransfers: '1' },
      predeterminedBalances: {
        incrementedBalances: { startBalances: [{ amount: '1', tokenIds: [{ start: '1', end: '1' }] }], incrementTokenIdsBy: '1' },
        orderCalculationMethod: { useOverallNumTransfers: true },
      },
      requireToEqualsInitiatedBy: true,
      overridesFromOutgoingApprovals: true,
    },
  },
  {
    name: 'gated-by-ownership',
    props: {
      mustOwnTokens: [{ collectionId: 1, tokenIds: [{ start: '1', end: '100' }], amountRange: { start: '1', end: '18446744073709551615' } }],
      merkleChallenges: [{ useCreatorAddressAsLeaf: true, maxUsesPerLeaf: '1', expectedProofLength: '4' }],
      approvalAmounts: { perFromAddressApprovalAmount: '5' },
    },
  },
  { name: 'empty', props: {} },
];

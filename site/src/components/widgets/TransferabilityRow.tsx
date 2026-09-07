import type { ReactNode } from 'react';
import { z } from 'zod';

import { AddressChip, Chip, formatIdRanges, formatTimeRanges, Icon, rangesSchema, WidgetFrame } from './shared';

/**
 * One approval as the transferability tab lists it: sender, recipient and
 * initiator columns, then the time and ID columns, then criteria chips.
 */
const FULL = [{ start: '1', end: '18446744073709551615' }];

const listSchema = z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]);

export const schema = z.object({
  approvalId: z.string().min(1),
  fromListId: listSchema.default('All'),
  toListId: listSchema.default('All'),
  initiatedByListId: listSchema.default('All'),
  transferTimes: rangesSchema.default(FULL),
  tokenIds: rangesSchema.default(FULL),
  ownershipTimes: rangesSchema.default(FULL),
  /** Criteria chips; strings like "Merkle challenge" or "1 BADGE per use". */
  criteria: z.array(z.string()).default([]),
  /** Row title, as inline `customData` metadata names it on bitbadges.io. */
  name: z.string().optional(),
  level: z.enum(['collection', 'outgoing', 'incoming']).default('collection'),
  /** Grey the row out, as the frontend does for a disapproved or deleted approval. */
  disabled: z.boolean().default(false),
});

export type Props = z.output<typeof schema>;

function ListCell({ title, value }: { title: string; value: string | string[] }) {
  let body: ReactNode;
  if (Array.isArray(value)) {
    body = (
      <span className="flex max-w-full flex-col items-center gap-1">
        {value.map((a) => (
          <AddressChip key={a} address={a} />
        ))}
      </span>
    );
  } else if (value === 'All' || value === 'Mint') {
    body = <AddressChip address={value} />;
  } else if (value.startsWith('!')) {
    body = (
      <span className="flex flex-col items-center gap-0.5">
        <span className="text-xs font-semibold text-[#e0443e]">All except</span>
        <AddressChip address={value.slice(1)} />
      </span>
    );
  } else if (value.startsWith('bb1') || value.startsWith('0x')) {
    body = <AddressChip address={value} />;
  } else {
    body = (
      <span className="inline-flex items-center gap-1 text-sm font-bold text-[var(--fg)]">
        <Icon name="users" size={14} className="text-[var(--accent)]" />
        {value}
      </span>
    );
  }
  return (
    <div className="flex min-w-0 flex-col items-center gap-1.5 text-center">
      <span className="text-sm font-bold text-[var(--fg-muted)]">{title}</span>
      {body}
    </div>
  );
}

function Fact({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      <span className="text-xs font-bold text-[var(--fg-muted)]">{title}</span>
      <span className="text-sm text-[var(--fg)]">{value}</span>
    </div>
  );
}

export function Component(p: Props) {
  return (
    <WidgetFrame name="transferability-row" className={`@container p-3 ${p.disabled ? 'opacity-50' : ''}`}>
      <div>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-base font-bold text-[var(--fg)]">{p.name ?? p.approvalId}</span>
          <span className="inline-flex items-center gap-1.5">
            <Chip tone="brand">{p.level}</Chip>
            <Chip>ID: {p.approvalId}</Chip>
          </span>
        </div>
        <div className="widget-panel grid grid-cols-1 gap-3 p-3 @[28rem]:grid-cols-3">
          <ListCell title="Sender" value={p.fromListId} />
          <ListCell title="Recipient" value={p.toListId} />
          <ListCell title="Initiator" value={p.initiatedByListId} />
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3 @[28rem]:grid-cols-3">
          <Fact title="Transfer Times" value={formatTimeRanges(p.transferTimes)} />
          <Fact title="Token IDs" value={formatIdRanges(p.tokenIds)} />
          <Fact title="Ownership Times" value={formatTimeRanges(p.ownershipTimes)} />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5">
          {p.criteria.length === 0 ? (
            <Chip tone="good">
              <Icon name="check" size={12} />
              No extra criteria
            </Chip>
          ) : (
            p.criteria.map((c) => (
              <Chip key={c} tone="neutral">
                <Icon name="lock" size={12} />
                {c}
              </Chip>
            ))
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  {
    name: 'mint-to-anyone',
    props: {
      approvalId: 'mint-phase-1',
      name: 'Public mint',
      fromListId: 'Mint',
      toListId: 'All',
      initiatedByListId: 'All',
      transferTimes: [{ start: '1788739200000', end: '1791331200000' }],
      tokenIds: [{ start: '1', end: '100' }],
      criteria: ['1 BADGE per use', '1 per address', 'Predetermined balances'],
    },
  },
  {
    name: 'transferable-except',
    props: {
      approvalId: 'transferable',
      fromListId: '!Mint',
      toListId: 'All',
      initiatedByListId: 'All',
    },
  },
  {
    name: 'whitelisted-outgoing',
    props: {
      approvalId: 'to-bob-only',
      level: 'outgoing',
      fromListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      toListId: ['bb1py4mfpg6uf59qkyzg0nmau322c5873eeysp5ue'],
      initiatedByListId: 'bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d',
      tokenIds: [{ start: '1', end: '1' }],
      criteria: ['Max 1 transfer'],
      disabled: true,
    },
  },
];

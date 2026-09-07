import { z } from 'zod';

import { Icon, TokenMark, WidgetFrame } from './shared';

/** The DEX swap panel (`SkipSwapWidget`): pay box, flip button, receive box, quote lines, disabled submit. */
const sideSchema = z.object({
  symbol: z.string().min(1),
  amount: z.string().min(1),
  usd: z.string().optional(),
  balance: z.string().optional(),
  chain: z.string().optional(),
});

export const schema = z.object({
  from: sideSchema,
  to: sideSchema,
  rate: z.string().optional(),
  slippage: z.string().default('1%'),
  fee: z.string().optional(),
  route: z.string().optional(),
  estimatedTime: z.string().optional(),
  button: z.string().default('Swap'),
  warning: z.string().optional(),
});

export type Props = z.output<typeof schema>;

function Side({ label, side, showMax }: { label: string; side: z.output<typeof sideSchema>; showMax?: boolean }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-raised)] p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-[var(--fg-muted)]">{label}</span>
        {side.balance && (
          <span className="flex items-center gap-2 text-xs text-[var(--fg-faint)]">
            Available: {side.balance}
            {showMax && <span className="rounded bg-[var(--bg-inset)] px-1.5 py-0.5 font-semibold text-[var(--accent)]">MAX</span>}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between gap-3">
        <span className="text-2xl font-semibold tabular-nums text-[var(--fg)]">{side.amount}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-subtle)] py-1 pl-1.5 pr-3">
          <TokenMark symbol={side.symbol} size={24} />
          <span className="text-sm font-bold text-[var(--fg)]">{side.symbol}</span>
          <Icon name="arrowDown" size={12} className="text-[var(--fg-faint)]" />
        </span>
      </div>
      {(side.usd || side.chain) && (
        <div className="mt-1 flex items-center justify-between text-xs text-[var(--fg-faint)]">
          <span>{side.usd ? `≈ ${side.usd}` : ''}</span>
          <span>{side.chain ?? ''}</span>
        </div>
      )}
    </div>
  );
}

export function Component({ from, to, rate, slippage, fee, route, estimatedTime, button, warning }: Props) {
  return (
    <WidgetFrame name="swap">
      <div className="w-[24rem] max-w-full rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-4 shadow-[var(--shadow-sm)]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-base font-bold text-[var(--fg)]">Swap</span>
          <span className="inline-flex items-center gap-2 text-xs text-[var(--fg-faint)]">
            <span>Slippage {slippage}</span>
            <Icon name="cog" size={14} />
          </span>
        </div>
        <Side label="You pay" side={from} showMax />
        <div className="relative z-10 -my-3 flex justify-center">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--bg-subtle)] text-white"
            style={{ background: 'linear-gradient(90deg, #1890ff, #da0c91)' }}
          >
            <Icon name="arrowDown" size={16} />
          </span>
        </div>
        <Side label="You receive" side={to} />
        <div className="mt-3 flex flex-col gap-1 text-xs text-[var(--fg-faint)]">
          {rate && (
            <div className="flex justify-between">
              <span>Rate</span>
              <span className="text-[var(--fg-muted)]">{rate}</span>
            </div>
          )}
          {fee && (
            <div className="flex justify-between">
              <span>Fee</span>
              <span className="text-[var(--fg-muted)]">{fee}</span>
            </div>
          )}
          {route && (
            <div className="flex justify-between">
              <span>Route</span>
              <span className="text-[var(--fg-muted)]">{route}</span>
            </div>
          )}
          {estimatedTime && (
            <div className="flex items-center justify-between">
              <span>Estimated time</span>
              <span className="inline-flex items-center gap-1 text-[var(--fg-muted)]">
                <Icon name="clock" size={12} />
                {estimatedTime}
              </span>
            </div>
          )}
        </div>
        {warning && (
          <div className="mt-3 flex items-start gap-2 rounded-lg border border-[#d98324]/30 bg-[#d98324]/8 p-3 text-xs text-[#d98324]">
            <Icon name="warning" size={14} className="mt-0.5 shrink-0" />
            <span>{warning}</span>
          </div>
        )}
        <button
          type="button"
          disabled
          className="mt-4 w-full cursor-not-allowed rounded-lg px-4 py-2.5 text-base font-bold text-white opacity-90"
          style={{ background: 'linear-gradient(90deg, #1890ff, #ea1795)' }}
        >
          {button}
        </button>
      </div>
    </WidgetFrame>
  );
}

export const examples: { name: string; props: z.input<typeof schema> }[] = [
  {
    name: 'badge-to-usdc',
    props: {
      from: { symbol: 'BADGE', amount: '100', usd: '$12.40', balance: '2,500 BADGE', chain: 'BitBadges' },
      to: { symbol: 'USDC', amount: '12.31', usd: '$12.31', chain: 'BitBadges' },
      rate: '1 BADGE = 0.1231 USDC',
      fee: '0.3% pool fee',
      route: 'Pool 1 (BADGE / USDC)',
    },
  },
  {
    name: 'cross-chain',
    props: {
      from: { symbol: 'ATOM', amount: '5', usd: '$31.20', balance: '18.4 ATOM', chain: 'Cosmos Hub' },
      to: { symbol: 'BADGE', amount: '248.7', usd: '$30.84', chain: 'BitBadges' },
      rate: '1 ATOM = 49.74 BADGE',
      route: 'Cosmos Hub → Osmosis → BitBadges',
      estimatedTime: '~45s',
      warning: 'Route crosses two IBC hops. Funds arrive after both channels relay.',
      button: 'Swap via Skip:Go',
    },
  },
];

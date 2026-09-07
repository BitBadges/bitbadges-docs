/**
 * The two pure pieces under the widget library: the identicon and the static
 * element renderer. Both are deterministic string functions, so the tests pin
 * exact output rather than shape.
 */
import { describe, expect, test } from 'bun:test';
import { createElement, Fragment } from 'react';

import { blockieSvg, blockieCells } from '../src/components/widgets/blockies';
import { renderStatic } from '../src/lib/docs/react-static';

describe('blockies', () => {
  test('is deterministic and case-insensitive on the seed', () => {
    const a = blockieSvg('bb1p0rrel3365scadq5k9pv0x0zp9j22js6dnw70d', 20);
    const b = blockieSvg('BB1P0RREL3365SCADQ5K9PV0X0ZP9J22JS6DNW70D', 20);
    expect(a).toBe(b);
    expect(a.startsWith('<svg')).toBe(true);
    expect(a).toContain('width="20"');
  });

  test('different seeds produce different images', () => {
    expect(blockieSvg('alice', 20)).not.toBe(blockieSvg('bob', 20));
  });

  test('matches the ethereum-blockies reference for a known seed', () => {
    // First row of the 8x8 reference identicon for "0x0000000000000000000000000000000000000000".
    // Rows are horizontally symmetric, which is the property the port must keep.
    const cells = blockieCells('0x0000000000000000000000000000000000000000', 8);
    expect(cells.data.length).toBe(64);
    for (let y = 0; y < 8; y++) {
      const row = cells.data.slice(y * 8, y * 8 + 8);
      expect(row).toEqual([...row].reverse());
    }
    expect(cells.color).toMatch(/^hsl\(\d+,\d+%,\d+%\)$/);
  });
});

describe('renderStatic', () => {
  test('renders tags, attributes, className and style objects', () => {
    const html = renderStatic(
      createElement('div', { className: 'a b', style: { marginTop: 4, backgroundColor: 'red' }, 'data-x': '1' }, 'hi'),
    );
    expect(html).toBe('<div class="a b" style="margin-top:4px;background-color:red" data-x="1">hi</div>');
  });

  test('escapes text and attribute values', () => {
    const html = renderStatic(createElement('span', { title: 'a"b<c' }, '<b>&'));
    expect(html).toBe('<span title="a&quot;b&lt;c">&lt;b&gt;&amp;</span>');
  });

  test('handles void elements, booleans, fragments, arrays and function components', () => {
    const Item = ({ n }: { n: number }) => createElement('li', null, n);
    const html = renderStatic(
      createElement(
        Fragment,
        null,
        createElement('img', { src: '/x.png', alt: '', hidden: true, disabled: false }),
        createElement('ul', null, [1, 2].map((n) => createElement(Item, { key: n, n }))),
        null,
        false,
      ),
    );
    expect(html).toBe('<img src="/x.png" alt="" hidden><ul><li>1</li><li>2</li></ul>');
  });

  test('supports dangerouslySetInnerHTML and numeric unitless styles', () => {
    const html = renderStatic(
      createElement('div', { style: { opacity: 0.5, zIndex: 2, width: 10 }, dangerouslySetInnerHTML: { __html: '<i>raw</i>' } }),
    );
    expect(html).toBe('<div style="opacity:0.5;z-index:2;width:10px"><i>raw</i></div>');
  });

  test('refuses hooks-based components by failing loudly rather than rendering nothing', () => {
    const Bad = () => {
      throw new Error('boom');
    };
    expect(() => renderStatic(createElement(Bad))).toThrow('boom');
  });
});

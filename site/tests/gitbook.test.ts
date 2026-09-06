import { describe, expect, test } from 'bun:test';
import { gitbookToDirectives } from '../src/lib/docs/gitbook';

describe('gitbookToDirectives', () => {
  test('converts a hint block into a hint container directive', () => {
    const out = gitbookToDirectives(
      '{% hint style="warning" %}\n**Experimental** — not production-ready.\n{% endhint %}',
    );
    expect(out).toBe(':::hint{style="warning"}\n**Experimental** — not production-ready.\n:::');
  });

  test('defaults a hint with no style to info', () => {
    expect(gitbookToDirectives('{% hint %}\nhi\n{% endhint %}')).toBe(':::hint{style="info"}\nhi\n:::');
  });

  test('converts a content-ref block and keeps the inner link', () => {
    const out = gitbookToDirectives(
      '{% content-ref url="../overview/what-is-bitbadges.md" %}\n[what-is-bitbadges.md](../overview/what-is-bitbadges.md)\n{% endcontent-ref %}',
    );
    expect(out).toBe(
      ':::content-ref{url="../overview/what-is-bitbadges.md"}\n[what-is-bitbadges.md](../overview/what-is-bitbadges.md)\n:::',
    );
  });

  test('converts a standalone embed into a leaf directive', () => {
    expect(gitbookToDirectives('{% embed url="https://example.com/a" %}')).toBe(
      '::embed{url="https://example.com/a"}',
    );
  });

  test('converts a file block into a leaf directive', () => {
    expect(gitbookToDirectives('{% file src="../assets/badge_logo.png" %}')).toBe(
      '::file{src="../assets/badge_logo.png"}',
    );
  });

  test('strips an unrecognised liquid tag rather than leaking it', () => {
    expect(gitbookToDirectives('before\n{% tabs %}\nafter')).toBe('before\nafter');
  });

  test('leaves liquid syntax inside a fenced code block alone', () => {
    const src = ['text', '```liquid', '{% hint style="info" %}', 'x', '{% endhint %}', '```', 'tail'].join('\n');
    expect(gitbookToDirectives(src)).toBe(src);
  });

  test('leaves a tilde-fenced code block alone', () => {
    const src = ['~~~', '{% embed url="https://x.dev" %}', '~~~'].join('\n');
    expect(gitbookToDirectives(src)).toBe(src);
  });

  test('does not disturb ordinary markdown', () => {
    const src = '# Title\n\nSome **bold** text with a [link](./a.md).\n';
    expect(gitbookToDirectives(src)).toBe(src);
  });

  test('handles several blocks in one document', () => {
    const out = gitbookToDirectives(
      '{% hint style="info" %}\na\n{% endhint %}\n\ntext\n\n{% hint style="danger" %}\nb\n{% endhint %}',
    );
    expect(out).toBe(':::hint{style="info"}\na\n:::\n\ntext\n\n:::hint{style="danger"}\nb\n:::');
  });
});

describe('gitbookToDirectives — integration blocks', () => {
  test('converts a GitBook integration block into an embed', () => {
    expect(
      gitbookToDirectives(
        '{% @github-files/github-code-block url="https://github.com/BitBadges/bitbadges-wp-plugin" %}',
      ),
    ).toBe('::embed{url="https://github.com/BitBadges/bitbadges-wp-plugin"}');
  });

  test('drops an integration block that carries no url', () => {
    expect(gitbookToDirectives('a\n{% @some/integration %}\nb')).toBe('a\nb');
  });
});

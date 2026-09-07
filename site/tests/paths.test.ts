import { describe, expect, test } from 'bun:test';
import { filePathToRoute, routeToCandidates, resolveAssetPath, resolveDocLink } from '../src/lib/docs/paths';

describe('filePathToRoute', () => {
  test('maps a plain file to its route', () => {
    expect(filePathToRoute('overview/use-cases.md')).toBe('/overview/use-cases');
  });

  test('maps a nested README to its directory', () => {
    expect(filePathToRoute('for-developers/bitbadges-api/README.md')).toBe('/for-developers/bitbadges-api');
  });

  test('maps the root README to the site root', () => {
    expect(filePathToRoute('README.md')).toBe('/');
  });

  test('tolerates a leading ./ and leading slash', () => {
    expect(filePathToRoute('./learn/permissions.md')).toBe('/learn/permissions');
    expect(filePathToRoute('/learn/permissions.md')).toBe('/learn/permissions');
  });

  test('treats a bare directory reference as its route', () => {
    expect(filePathToRoute('for-developers/sign-in-with-bitbadges/authorization-url/')).toBe(
      '/for-developers/sign-in-with-bitbadges/authorization-url',
    );
  });
});

describe('routeToCandidates', () => {
  test('offers both the file and the README form', () => {
    expect(routeToCandidates('/for-developers/bitbadges-api')).toEqual([
      'for-developers/bitbadges-api.md',
      'for-developers/bitbadges-api/README.md',
    ]);
  });

  test('root resolves only to the top-level README', () => {
    expect(routeToCandidates('/')).toEqual(['README.md']);
  });

  test('rejects traversal outside the content root', () => {
    expect(routeToCandidates('/../../etc/passwd')).toEqual([]);
    expect(routeToCandidates('/a/../../b')).toEqual([]);
  });
});

describe('resolveDocLink', () => {
  test('rewrites a sibling .md link to a route', () => {
    expect(resolveDocLink('for-developers/getting-started.md', 'cli/installation.md')).toBe(
      '/for-developers/cli/installation',
    );
  });

  test('rewrites a parent-relative .md link to a route', () => {
    expect(resolveDocLink('token-standard/pre-readings.md', '../overview/what-is-bitbadges.md')).toBe(
      '/overview/what-is-bitbadges',
    );
  });

  test('rewrites a directory link to its README route', () => {
    expect(
      resolveDocLink('for-developers/sign-in-with-bitbadges/approaches/redirected-callback.md', '../authorization-url/'),
    ).toBe('/for-developers/sign-in-with-bitbadges/authorization-url');
  });

  test('preserves an anchor on a rewritten link', () => {
    expect(resolveDocLink('a/b.md', '../c/d.md#some-heading')).toBe('/c/d#some-heading');
  });

  test('leaves external and absolute links untouched', () => {
    expect(resolveDocLink('a/b.md', 'https://bitbadges.io/create')).toBe('https://bitbadges.io/create');
    expect(resolveDocLink('a/b.md', 'mailto:x@y.z')).toBe('mailto:x@y.z');
    expect(resolveDocLink('a/b.md', '/already/absolute')).toBe('/already/absolute');
  });

  test('leaves a bare anchor untouched', () => {
    expect(resolveDocLink('a/b.md', '#section')).toBe('#section');
  });
});

describe('resolveDocLink — over-relative links', () => {
  // GitBook resolves links that climb past the space root by clamping at the
  // root rather than 404ing, and the corpus contains such links.
  test('clamps a link that climbs above the content root', () => {
    expect(resolveDocLink('evm/EVM_INTEGRATION.md', '../../x-tokenization/README.md')).toBe('/x-tokenization');
  });

  test('clamps an over-relative asset path too', () => {
    expect(resolveAssetPath('a/b.md', '../../.gitbook/assets/x.png')).toBe('.gitbook/assets/x.png');
  });
});

describe('resolveAssetPath — .gitbook/assets resolves from the content root', () => {
  // Pages move between directories during the rewrite; an image reference that
  // names `.gitbook/assets/` must keep working regardless of the page's depth.
  test('a deeply nested page with too few ../ segments', () => {
    expect(
      resolveAssetPath('token-standard/evm/tokenization-precompile/api.md', '../.gitbook/assets/diagram.png'),
    ).toBe('.gitbook/assets/diagram.png');
  });

  test('a shallow page with too many ../ segments', () => {
    expect(resolveAssetPath('start/quickstart.md', '../../../.gitbook/assets/hero (1).png')).toBe(
      '.gitbook/assets/hero (1).png',
    );
  });

  test('a root page referencing the folder directly', () => {
    expect(resolveAssetPath('README.md', '.gitbook/assets/logo.svg')).toBe('.gitbook/assets/logo.svg');
  });

  test('other relative assets still resolve from the page directory', () => {
    expect(resolveAssetPath('guides/x.md', './images/a.png')).toBe('guides/images/a.png');
  });
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { subtotal, formatMoney } from '../src/invoice.mjs';

test('subtotal multiplies quantities using integer cents', () => {
  assert.equal(subtotal([{ unitCents: 125, quantity: 2 }, { unitCents: 350, quantity: 1 }]), 600);
  assert.equal(subtotal([]), 0);
});

test('money includes two decimal places', () => {
  assert.equal(formatMoney(105), '$1.05');
  assert.equal(formatMoney(0), '$0.00');
});

test('CLI displays sample subtotal', () => {
  const output = execFileSync(process.execPath, ['src/cli.mjs', 'sample.json'], { encoding: 'utf8' });
  assert.equal(output, 'Total: $6.00\n');
});

test('CLI adds optional tax to the sample subtotal', () => {
  for (const args of [
    ['sample.json', '--tax', '10'],
    ['--tax', '10', 'sample.json'],
  ]) {
    assert.equal(execFileSync(process.execPath, ['src/cli.mjs', ...args], { encoding: 'utf8' }), 'Total: $6.60\n');
  }
  assert.equal(execFileSync(process.execPath, ['src/cli.mjs', 'sample.json', '--tax', '0'], { encoding: 'utf8' }), 'Total: $6.00\n');
});

test('CLI rounds tax once on the whole subtotal', () => {
  const directory = mkdtempSync(join(tmpdir(), 'invoice-tax-'));
  try {
    const invoice = join(directory, 'invoice.json');
    const contents = JSON.stringify([{ unitCents: 5, quantity: 1 }, { unitCents: 5, quantity: 1 }]);
    writeFileSync(invoice, contents);
    assert.equal(execFileSync(process.execPath, ['src/cli.mjs', invoice, '--tax', '5'], { encoding: 'utf8' }), 'Total: $0.11\n');
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test('CLI rejects missing, nonnumeric, negative and non-finite tax rates', () => {
  for (const rate of [undefined, '', ' ', 'abc', '-1', 'NaN', 'Infinity', '-Infinity', '1e309']) {
    const args = ['src/cli.mjs', 'sample.json', '--tax'];
    if (rate !== undefined) args.push(rate);
    const result = spawnSync(process.execPath, args, { encoding: 'utf8' });
    assert.equal(result.status, 1, `rate: ${rate}`);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /Tax rate must/);
  }
});

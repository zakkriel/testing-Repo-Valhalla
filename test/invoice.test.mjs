import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
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

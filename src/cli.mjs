import { readFileSync } from 'node:fs';
import { subtotal, formatMoney } from './invoice.mjs';

const args = process.argv.slice(2);
const taxIndex = args.indexOf('--tax');
let taxRate = 0;
if (taxIndex !== -1) {
  const value = args[taxIndex + 1];
  taxRate = Number(value);
  if (value === undefined || value.trim() === '' || !Number.isFinite(taxRate) || taxRate < 0) {
    console.error('Tax rate must be a finite, nonnegative number.');
    process.exit(1);
  }
  args.splice(taxIndex, 2);
}

const items = JSON.parse(readFileSync(args[0], 'utf8'));
const subtotalCents = subtotal(items);
const taxCents = Math.round(subtotalCents * (taxRate / 100));
console.log(`Total: ${formatMoney(subtotalCents + taxCents)}`);

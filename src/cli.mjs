import { readFileSync } from 'node:fs';
import { subtotal, formatMoney } from './invoice.mjs';

const items = JSON.parse(readFileSync(process.argv[2], 'utf8'));
console.log(`Total: ${formatMoney(subtotal(items))}`);

export function subtotal(items) {
  return items.reduce((sum, item) => sum + item.unitCents * item.quantity, 0);
}

export function formatMoney(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

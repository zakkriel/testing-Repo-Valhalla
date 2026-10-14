# Engineering understanding

src/invoice.mjs exports subtotal(items), summing unitCents multiplied by quantity, and formatMoney(cents), returning dollars with two decimal places. An empty array totals zero.
src/cli.mjs reads the file named by the first positional argument, parses JSON, and prints the formatted subtotal. sample.json supplies the runnable example.
Use Node.js built-ins only; install no dependencies. Preserve existing AGENTS.md constraints and never modify input invoices.
There is no build step (README.md). Existing code does not explicitly validate inputs or handle parsing/file errors; onboarding does not add requirements for those cases.

Tax implementation on 2026-10-14 changes src/cli.mjs and test/invoice.test.mjs. The CLI removes the optional tax pair from arguments, validates the rate, computes subtotal once, then adds `Math.round(subtotalCents * (taxRate / 100))`. The tax flag can precede or follow the invoice path. src/invoice.mjs remains unchanged; input invoices are read only. No dependencies were added.

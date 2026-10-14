# Engineering understanding

src/invoice.mjs exports subtotal(items), summing unitCents multiplied by quantity, and formatMoney(cents), returning dollars with two decimal places. An empty array totals zero.
src/cli.mjs reads the file named by the first positional argument, parses JSON, and prints the formatted subtotal. sample.json supplies the runnable example.
Use Node.js built-ins only; install no dependencies. Preserve existing AGENTS.md constraints and never modify input invoices.
There is no build step (README.md). Existing code does not explicitly validate inputs or handle parsing/file errors; onboarding does not add requirements for those cases.

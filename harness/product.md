# Product understanding

This is a small synthetic invoice CLI for onboarding and fresh-agent proof, not production adoption (README.md).
Users run `node src/cli.mjs sample.json` to read a JSON array of invoice items and print its subtotal. The sample totals `Total: $6.00` (src/cli.mjs, sample.json).
Prices use integer cents. Preserve subtotal semantics, the default `Total: $N.NN` output, and input invoices (AGENTS.md).
Onboarding adds context only; no behavior change was requested or made.

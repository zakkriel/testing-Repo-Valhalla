# Product understanding

This is a small synthetic invoice CLI for onboarding and fresh-agent proof, not production adoption (README.md).
Users run `node src/cli.mjs sample.json` to read a JSON array of invoice items and print its subtotal. The sample totals `Total: $6.00` (src/cli.mjs, sample.json).
Prices use integer cents. Preserve subtotal semantics, the default `Total: $N.NN` output, and input invoices (AGENTS.md).
Onboarding adds context only; no behavior change was requested or made.

Tax request implemented on 2026-10-14: optional `--tax PERCENT` adds the percentage of the subtotal, with tax rounded once to the nearest cent. The sample with `--tax 10` prints `Total: $6.60`; omission preserves `Total: $6.00`. Missing, nonnumeric, negative and non-finite rates exit unsuccessfully.

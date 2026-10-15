# Product understanding

## Intended users and outcome — fixture-confirmed understanding
The recorded [synthetic fixture-owner answers](product-validation.md) identify learners and developers practicing local invoice estimates. They explore how line-item prices and percentage adjustments affect one illustrative dollar total without changing source invoice data. The [README](../README.md) and [proof history](../PROOF.md) describe this repository's synthetic onboarding purpose; the earlier inference that onboarding evaluators were the sole intended audience was too narrow. Actual invoice operators, production adoption and a commercial use case remain unestablished. Fixture evidence is neither Brian's intent nor real-owner approval.

## Observed implementation
- [Subtotal](../src/invoice.mjs) sums `unitCents * quantity`; an empty array totals zero. Money displays two decimal places ([existing checks](../test/invoice.test.mjs)).
- The [CLI](../src/cli.mjs) parses a JSON file and prints `Total: $N.NN` without writing the input. The [sample](../sample.json) totals $6.00.
- `--tax PERCENT` before or after the file adds tax rounded once on the whole subtotal; sample 10% gives $6.60. Omitted/zero tax preserves subtotal. Missing, blank, nonnumeric, negative and non-finite tax rates fail. Existing checks cover these cases and aggregate rounding.
- No price-reduction feature exists in the inspected CLI. Invoice-domain validation is incomplete: code directly parses and sums fields; arbitrary malformed invoices cannot be claimed supported or consistently rejected. Multiple flags and extra arguments have no established intended policy.

## Fixture-intended rules and constraints
The recorded answers specify nonnegative safe integer `unitCents` and nonnegative integer `quantity` values as supported fixture input. Preserve source input, integer cents, two displayed decimals and default output without adjustment flags. Tax is a finite nonnegative percentage, rounded once on the taxable subtotal. These are intended rules, separate from observed implementation and coverage.

Any future price reduction lowers the taxable subtotal before tax: round each aggregate reduction once to cents, then round tax once on the remaining subtotal; reduction cannot make the total negative. This is future intent only. Reduction flags, allowed range and errors require a proposed feature brief after validation; no feature request or implementation scope is approved.

The fixture wants a local teaching tool, with no accounting/invoicing/payment/tax advice, sending, persistent invoice edits, networking, dependencies or service. [Existing instructions](../AGENTS.md) additionally preserve `subtotal(items)` semantics, Node built-ins only and default CLI format. Original instructions and historical evidence remain in place.

## Assumptions, questions and confirmation
No broader usable-numeric-input assumption is retained. Malformed/missing fields, negative/fractional values, inputs outside the fixture domain and unsafe aggregate arithmetic have unspecified acceptance/rejection and errors; whether broader validation belongs in scope remains unanswered. Missing tests do not create a requirement. Multiple flags and extra arguments remain unspecified.

The separate synthetic fixture-owner has now confirmed this understanding against the fixture and inspected app evidence; see the dated verdict in [validation](product-validation.md). This is fixture-only confirmation, not real-owner approval. A subsequent authorized task may produce a feature brief; app implementation and production expansion remain outside this iteration. This status was synchronized after the actual verdict; substantive understanding is unchanged.

## Evidence and source provenance
Prior onboarding on 2026-10-14 recorded six passing tests and sample 10% output `Total: $6.60`; these remain historical evidence, not a new run. This reconciliation inspected the complete source, sample and existing tests; app code, tests, instructions and Engineering/Testing context were not edited.

Workflow source was newly cloned from `https://github.com/zakkriel/valhalla-lite` for this task at acquisition revision [`1fb679721507758b805d603ce24a95f72cc30a7b`](https://github.com/zakkriel/valhalla-lite/commit/1fb679721507758b805d603ce24a95f72cc30a7b). `git ls-files --error-unmatch` verified the exact [Product skill](https://github.com/zakkriel/valhalla-lite/blob/1fb679721507758b805d603ce24a95f72cc30a7b/skills/valhalla-product/SKILL.md) is tracked there. This corrects the prior invalid `c8b85923e2e62d5e11cd29009da3b2d64b5e069c` Product-skill citation; it is not evidence of skill contents at that old revision. Existing read receipts are preserved in [read-log](read-log.md).

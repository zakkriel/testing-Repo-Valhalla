# Percentage discount — proposed feature brief

Status: planning only, requested 2026-10-14. Product understanding is confirmed against the synthetic fixture; the new interface and policies below are proposals, not owner-approved implementation requirements. No runtime change is authorized by this brief.

## User outcome
Learners and developers can explore how a percentage discount changes a local invoice estimate, including its effect on subsequent tax, while keeping the source invoice unchanged and receiving one illustrative dollar total.

## Scope
Add one optional invoice-wide percentage discount to the existing CLI. Proposed syntax: `node src/cli.mjs sample.json --discount 10 --tax 10`, with adjustment flags accepted before or after the invoice path. Preserve `subtotal(items)`, Node built-ins only, integer-cent amounts, two displayed decimal places, and `Total: $N.NN` output. Omitted discount preserves existing subtotal/tax behavior.

Fixture-confirmed calculation intent: compute the aggregate subtotal, round the aggregate discount once to cents, subtract it, then round tax once on the remaining subtotal and add it. The reduction must never make the total negative. Proposed rate policy: finite numeric percentages from 0 through 100 inclusive, allowing decimals and rejecting out-of-range values rather than silently clamping them.

Exclude line-item discounts, fixed-amount reductions, stacked discounts, invoice persistence, sending, networking, dependencies, production accounting/tax guarantees, and broader invoice validation. Existing input-domain and unsafe-arithmetic questions remain outside this proposed feature unless explicitly added.

## Observable acceptance conditions
These are proposed acceptance conditions pending the decisions below; ordering and aggregate-rounding intent comes from the confirmed fixture.

- With no discount, existing default and tax results remain unchanged, including the documented sample outputs `$6.00` and `$6.60` at 10% tax.
- For a 600-cent subtotal, 10% discount prints `Total: $5.40`; adding 10% tax prints `Total: $5.94`. Tax therefore applies to the discounted amount.
- A zero discount leaves the result unchanged. Under the proposed range policy, a 100% discount prints `Total: $0.00`, including when tax is supplied; fractional rates such as 12.5% are accepted.
- Aggregate rounding is observable: two 5-cent items with a 5% discount and 5% tax produce a 1-cent discount, a 9-cent taxable subtotal, zero rounded tax, and `Total: $0.09`. This distinguishes aggregate reduction from per-item rounding and tax-before-discount.
- Under the proposed syntax, equivalent flag orders give identical totals. Missing, blank, nonnumeric, negative, non-finite, or over-100 discount values exit unsuccessfully, explain the invalid discount on stderr, and print no total on stdout.
- Successful and rejected discount invocations leave the invoice file byte-for-byte unchanged. `subtotal(items)` keeps its existing meaning and behavior.

## Unresolved product decisions
1. Confirm `--discount PERCENT`, placement before/after the path, and coexistence with `--tax` as the intended interface.
2. Confirm the proposed inclusive 0–100 range, decimal-rate support, and rejection rather than clamping. Define accepted numeric notation/precision; JavaScript numeric conversion alone is not a product policy.
3. Confirm the rounding tie rule. The examples propose positive half-cent rounding upward, consistent with current tax calculation, but the fixture only specifies rounding once to cents.
4. Define repeated flags, unknown flags, and extra positional arguments. Recommendation: reject ambiguous invocations, rather than silently choose an adjustment or ignore input.
5. Confirm failure exit code and error wording, and whether unsafe aggregate arithmetic or broader invoice validation should be included in a separate task.

Evidence: complete reads of `harness/product.md`, `harness/product-validation.md`, `src/cli.mjs`, `src/invoice.mjs`, `test/invoice.test.mjs`, `README.md`, and `AGENTS.md`. Existing test results cited in Product validation are historical; this planning task did not run tests or change application code.

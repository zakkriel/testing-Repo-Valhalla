# Testing understanding

Onboarding baseline on 2026-10-14:
- `node --test`: passed all 3 tests, zero failures. test/invoice.test.mjs checks quantity multiplication and empty subtotals, two-decimal money formatting, and the exact sample CLI output.
- `node src/cli.mjs sample.json`: exited successfully and printed `Total: $6.00`.

These checks distinguish arithmetic, formatting, and CLI regressions. Run `node --test` for changes as required by AGENTS.md; choose additional checks only when they distinguish the requested behavior.
The suite does not explicitly test input immutability or malformed/missing input. No production environment was exercised. Onboarding alone does not prove future agent discovery or behavior changes; no separate behavior proof was performed.
Only harness context and AGENTS.md discovery instructions were added; app code, tests, and sample data were preserved. The onboarding decision was reapplied unchanged to check idempotence.

Tax task verification on 2026-10-14: `node --test` passed all 6 tests, zero failures. Checks cover unchanged sample output, 10% sample tax yielding $6.60 with both flag positions, zero tax, aggregate rounding (two 5-cent items at 5% yield $0.11), and nonzero exits with no total for missing, blank, nonnumeric, negative, NaN, infinite and overflow-to-infinity rates. These satisfy the requested acceptance criteria. No production environment or new malformed-invoice handling was exercised. Read evidence was cross-checked against complete and partial reads in this task; no unmatched claims or unlogged complete reads remain.

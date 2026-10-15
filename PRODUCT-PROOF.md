# Product-only iteration: goal and observed result

## Goal and boundary

An agent onboards the product, saves accurate understanding, resolves material gaps and obtains confirmation; a fresh agent uses that understanding to produce a grounded feature brief. This iteration ends at the brief. No discount feature or Engineering/Testing harness was implemented.

Pinned prior successful baselines remain accessible: source `c8b85923e2e62d5e11cd29009da3b2d64b5e069c`, target `3918a09f283eedc56b98940872d82fa005878654`. Original POC proof/history, app files, tests, invoice sample, Engineering/Testing contexts and prior instructions/read receipts were preserved.

## Actual sequence

1. Published the self-contained [Product skill](https://github.com/zakkriel/valhalla-lite/blob/1fb679721507758b805d603ce24a95f72cc30a7b/skills/valhalla-product/SKILL.md) and GitHub how-to. Product discovery was appended to AGENTS.md and the existing product document reconciled with code, docs and baseline checks. Two material questions covered intended audience/outcome and supported invoice-input boundaries.
2. A separately assigned test-owner role answered against [an explicitly synthetic fixture](PRODUCT-OWNER-FIXTURE.md). Product consumed those actual answers, updated [understanding](harness/product.md), and left confirmation pending. A separate fixture-owner reviewer then inspected the updated understanding, fixture and app evidence and recorded an actual CONFIRM verdict in [validation](harness/product-validation.md). This is fixture validation, not the real owner's intent or approval of an actual product.
3. A fresh planning task received only an ordinary request: plan percentage discount support for the invoice CLI, save a short user outcome/scope/observable-acceptance/unknowns brief, and do not code. It was given a target location, not a repeated product explanation or harness reminder. It discovered AGENTS.md, read product/validation, and saved [the brief](harness/percentage-discount-brief.md).
4. A separate evaluator read the fixture, context, brief and app evidence individually, checked the examples and evaluated the distinction between observed, confirmed, proposed and unknown. Its [review](harness/product-brief-review.md) passed the planning brief. It ran the six existing tests and explicitly rejected a contradictory tax-first candidate. The integrating reviewer independently checked preservation, public-path privacy and arithmetic before publication.

## Meaningful evidence of understanding

The saved product understanding corrected the initial evaluator-only audience inference to fixture-intended learners/developers and distinguishes implemented subtotal/tax from future reductions. It leaves malformed-invoice rejection policy unresolved instead of inventing it from absent tests. Intended input limits are labeled fixture policy, not enforcement already implemented in code.

The brief applies confirmed reduction-before-tax and aggregate-rounding intent while labeling `--discount`, a 0–100 range, decimal support, error policy and half-cent tie handling as proposals needing decisions. It does not claim discount support exists or that implementation is approved. Acceptance includes input preservation, compatibility, nonnegative totals, concrete outputs and unresolved argument policies.

A cheap discriminator matters: on a 10-cent subtotal, proposed half-up rounding with 5% discount then 5% tax gives 9 cents; taxing first then discounting the tax-inclusive amount gives 10 cents. Both orders can give 594 cents for the larger 600-cent/10%/10% example, so that example alone would not expose the wrong rule. These are arithmetic checks of a proposed brief, not executed discount functionality. A reviewer arithmetic slip in a per-item comparison was corrected from 8 to 11 cents before publication; the brief did not require correction.

## Provenance repair and read evidence

The first Product draft reused a prepared checkout with an uncommitted skill and cited old revision c8b8592, where the Product skill did not exist. This was not accepted as public acquisition evidence. The source workflow was tightened; the reconciliation task cloned a NEW source checkout itself from the actual GitHub URL, obtained revision `1fb679721507758b805d603ce24a95f72cc30a7b`, and verified the Product skill is tracked there. The corrected document preserves a note about the invalid citation. Private task traces retain the initial failed behavior.

Read logs and external private mappings remained in force. The planner's trace records product/validation reads before the brief. Understanding is established by the resulting grounded content and independent comparison, not by receipt counts. Some large combined outputs are capped in task-summary retrieval; no blanket claim that every historical full-read receipt was independently verified from uncapped output is made. The final evaluator used separate reads, all captured untruncated, with 14 receipts matching 14 actions. No private host paths or raw execution traces are published.

## Use and limits

Follow the Product-only instructions in the source README. Supply actual owner answers and confirmation for a real product; the synthetic fixture is only a test oracle. After validation, start a fresh planning conversation with an ordinary feature request and stop at the brief.

Current app regression command: `node --test` (six existing tests pass). No new runtime checks were required because runtime/test bytes stayed unchanged. This is one synthetic test product, not production adoption, and no causal benefit over a no-context control is claimed. New discount-interface, range, error and tie-rule choices remain proposed, not confirmed implementation requirements. Browser work stayed paused; no framework, database, server or learning machinery was added.


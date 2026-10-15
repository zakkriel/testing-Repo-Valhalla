# Synthetic test-owner fixture

This is a test oracle for Product harness validation. It is not Brian's product
intent or approval, and it describes no real customer or production deployment.
Only a separately assigned fixture-owner role should use this document to answer
onboarding questions and confirm the saved understanding against this fixture.

## Intended product

- Users are learners and developers practicing local invoice-estimate workflows.
- The problem is exploring how line-item prices and percentage adjustments affect
  a single illustrative dollar total, without changing source invoice data.
- It is a local teaching tool, not accounting, invoicing, payment, or tax advice.
  No sending, persistent invoice edits, networking, dependencies, or service is wanted.
- Supported fixture input is an array of nonnegative safe integer unitCents and
  nonnegative integer quantity values. Current validation may be incomplete; do
  not claim arbitrary malformed invoices are supported or rejected consistently.
- Intended stable rules: preserve source input; use integer cents and two displayed
  decimal places; no adjustment flag preserves existing default output. Tax is a
  nonnegative finite percentage. Any future price reduction lowers the taxable
  subtotal before tax; round each aggregate reduction once to cents, then round
  tax once on the remaining subtotal. A reduction cannot make the total negative.
- The current code and tests are the evidence for implemented capabilities. Do not
  assert a future reduction feature already exists. New reduction flags, allowed
  input range and error behavior belong in a proposed feature brief, not in a
  claim of owner-approved implementation scope.

## Fixture-owner role protocol

Answer only material questions using these facts; say unspecified when this
fixture is silent. Cite this fixture as the source of intended behavior. After
the Product document is updated, inspect it against the fixture and separately
confirm or reject its intended understanding with reasons. Do not confirm code
observations without checking their cited evidence. Never impersonate Brian.

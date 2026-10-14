# Invoice app instructions

Use Node.js built-ins only; no dependency installation. Prices are integer cents.
Keep `subtotal(items)` semantics unchanged and preserve the default CLI format
`Total: $N.NN`. Never modify input invoices. Run `node --test` for changes.

<!-- valhalla-lite:start -->
## Valhalla Lite context

Before a behavior change, read [product](harness/product.md), [engineering](harness/engineering.md), and [testing](harness/testing.md) context and reconcile it with current code.
Establish the requested outcome and acceptance, preserve repository constraints, and choose checks that distinguish the requested behavior from a wrong result.
Execute relevant checks; persist the request, changed paths, actual outcomes, and remaining gaps in the harness. Update stale understanding as needed.
Append each complete file read, including context and onboarding source/instruction reads, to harness/read-log.md as soon as practical, one entry per read occurrence: `full | path | task-relevant purpose`. A full claim requires receiving complete contents through a recorded read action without truncation. Log partial reads as `partial` with their exact portion; searches, checksums, and internal script access are not complete reads. Before delivery, cross-check both ways that every full claim has a complete read action and every complete read action has an entry; report unmatched claims.

Read-log privacy: Never write a host-absolute private external path or private instruction contents into harness files, including entry purposes. Use repository-relative paths for target files. For external private reads, use a neutral identifier such as `[redacted external instruction A]`; `external:` followed by a literal private path is not redaction. Keep the exact identifier-to-path mapping only in the coding session's private work directory outside the target repository. Check each entry before appending it. Preserve auditability through that private mapping and the recorded read action.
<!-- valhalla-lite:end -->

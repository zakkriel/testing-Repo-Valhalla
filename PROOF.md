# Public-source onboarding proof

This dedicated test repository contains a small synthetic invoice app. It demonstrates the workflow; it is not a mature production-adoption claim.

## Observed sequence

1. Published source: [Valhalla Lite](https://github.com/zakkriel/valhalla-lite), revision `b8b495cdac49b0a0bb86f73d6e3b4bbd7dce1b00`. An anonymous clone with credential helpers disabled verified public acquisition. The source contains only a generic README and self-contained skill; private execution history was not uploaded.
2. Baseline: revision `bbd94b0eb42f78ecb88d5b88de149bda10182044`, with runnable app, three passing tests, and no harness. The app printed `Total: $6.00`.
3. A separate onboarding coding task obtained its own checkout from the real GitHub source URL, read the skill, created product/engineering/testing context plus read-log, and appended AGENTS.md while preserving original instruction bytes. Original app, tests and sample stayed unchanged. Identical reapplication was checked as a no-op.
4. After onboarding completed, a separately created fresh coding task received an ordinary request to add `--tax PERCENT`, with an initial two-line import inspection and no harness reminder. It discovered AGENTS.md, read all three contexts, established outcome, implemented tax, ran six tests, and saved results/gaps in harness/testing.md. No prior conversation was passed into the new task.
5. Independent verification passed six tests, retained no-flag output, and observed `Total: $6.60` for sample tax at 10%. The original implementation with new tests failed, as did an isolated version subtracting rather than adding tax. Original invoice input and subtotal module stayed unchanged.

## Read evidence

Recorded read actions were compared both ways with the log: onboarding has 15 full-file receipts; implementation has 11 full-file receipts and one partial receipt for src/cli.mjs lines 1–2. Complete cat outputs were untruncated. Context reads are included; the partial read is not falsely marked full. The log is plain Markdown, not telemetry. Private raw traces and the external-identifier mapping are retained outside this public repository.

Publication review required one correction: the implementation task initially logged two private external paths directly. The published log replaces those paths with the same redacted identifiers used during onboarding. That privacy correction was performed during publication review; fully automatic privacy compliance is not claimed.

## Reproduce

From the repository root:

```sh
node --test
node src/cli.mjs sample.json
node src/cli.mjs sample.json --tax 10
```

Expected: six passing tests; `Total: $6.00`; `Total: $6.60`.

## Limits

One owner-provided public test repository with a synthetic app. Separate conversation isolation was exercised, not desktop restart or automatic startup-cwd discovery. Input validation beyond tax rates and arithmetic outside JavaScript's safe numeric range remain unspecified. Repeat onboarding was tested on identical content, not conflicting existing harnesses or concurrent user edits. No browser/login automation, global installation, paid service, or production project changes were used for this sequence.

## Privacy instruction repair and fresh follow-up

The original installed AGENTS.md did contain redaction guidance; it was compressed into a relative-path-or-redacted-identifier sentence. The failed agent used `external:` before literal private paths. The trace establishes the output failure, not the agent's internal reasoning. The repair makes the rule explicit: no host-absolute private external paths or private instruction contents in harness entries or purposes; use neutral identifiers and keep exact mappings only outside the repository. The source skill requires that privacy clause to be copied unchanged into installed AGENTS.md.

A new fresh coding task reviewed the existing tax behavior without a harness/logging reminder. It began with a two-line import inspection, read the implementation/context/instructions, ran all six existing tests and both sample commands, and saved verification results without changing runtime code. Its 13 full-file receipts and one partial receipt were cross-checked against complete untruncated read actions. A command reporting a missing package.json still delivered both existing source files completely; no read receipt was claimed for the missing file.

The new entries used redacted external identifiers when first written. Their exact path mapping was saved outside the target repository and matched privately to the recorded reads. The new log/results were published unchanged, with no publication-time path substitution. The original failure and corrected historical entries remain preserved above and in repository history. This demonstrates privacy compliance in this bounded follow-up; it does not guarantee every future agent will follow instructions.

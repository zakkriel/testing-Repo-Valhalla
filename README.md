# Invoice CLI proof target

A deliberately small synthetic app for testing repository onboarding and fresh-agent coding. This is not a production adoption claim.

Run `node src/cli.mjs sample.json` to print the invoice subtotal. Run `node --test` for the built-in checks. Prices are integer cents; no dependencies or build step are needed.

The baseline contains no harness. Product context and rules should be installed by an onboarding agent using the published Valhalla Lite source.

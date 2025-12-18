# DEVELOPMENT.md — Troubleshooting & Developer Notes 🧾

Short reference for developers: common fixes and the exact commands we used while onboarding. Expand **Full development notes** for details.

**Key commands (quick reference)**

- Set Node and install deps:
  ```bash
  nvm install 18 && nvm alias default 18
  npm ci
  ```
- Install macOS build tools (if needed):
  ```bash
  xcode-select --install
  ```
- Run tests & coverage:
  ```bash
  npm run test:unit:coverage
  ```
- Preview:
  ```bash
  npm run preview --silent &
  ```

<details>
<summary>Full development notes & troubleshooting (expand)</summary>

This file contains notes, logs, and exact commands we used while onboarding this repository. Use it if you hit environment or CI issues.

## Environment & Common Fixes

- Node & nvm
  - Use Node LTS (v18) via nvm:
    ```bash
    nvm install 18
    nvm alias default 18
    node -v
    ```

- macOS build tools
  - Install Xcode Command Line Tools:
    ```bash
    xcode-select --install
    ```
  - Ensure Python 3 is installed: `python3 --version` (used by node-gyp)

- Installing dependencies
  - Prefer `npm ci` in CI if `package-lock.json` is present, otherwise `npm install` locally.
  - If `npm ci` fails intermittently in CI, the workflow includes retries.

## Known Issues & Resolutions

- ESLint / Tests failing locally because devDependencies were not installed
  - Fix: run `npm install` to ensure `eslint`, `prettier`, and `sfdx-lwc-jest` are installed.

- Stale LSP diagnostics (Apex complaining about CSS tokens)
  - Symptom: Editor shows a lint/parse error for `%` or CSS content treated as Apex.
  - Fix: Reload VS Code or restart the Apex / language server.

- `@salesforce/lwc-dev-server` plugin install fails with native build errors (node-gyp / fibers)
  - Symptoms: `node-gyp` compilation errors or `fibers` complaining about binary builds.
  - Remedies:
    1. Ensure Node 18 is active (use nvm).
    2. Install build tools: `xcode-select --install` on macOS.
    3. Ensure Python 3 is available for node-gyp.
    4. Try re-running `sf plugins install @salesforce/lwc-dev-server`.
  - If the plugin still fails, use the included static `preview/` to view the component in a browser.

## CI Troubleshooting

- Intermittent `npm ci` failures on GitHub Actions
  - We added a retry loop and verbose `npm ci` debug output to the workflow to mitigate transient network or registry issues.

- Codecov upload failures
  - We temporarily made Codecov upload non-fatal to debug uploads.
  - Then switched to `codecov/codecov-action@v5` and used a `CODECOV_TOKEN` stored in repository secrets for authenticated uploads.
  - If uploads fail, verify `coverage/lcov.info` exists and that Codecov token is set in repo settings.

## Useful commands used during maintenance

- Run lint and tests locally
```bash
npm run prettier
npm run prettier:verify
npm run lint
npm test
npm run test:unit:coverage
```

- Static preview
```bash
npm run preview --silent &
# stop: pkill -f "serve preview" or close terminal
```

- Reproduce CI step locally (debugging)
```bash
# Simulate install step
npm ci --ignore-scripts --no-audit
# Simulate tests and coverage
npm run test:unit:coverage
ls -la coverage
```

## Notes & Recommendations

- If you want the full LWC runtime (instead of static preview), plan to use the `@salesforce/lwc-dev-server` plugin — it may require adjusting Node and system build tools.
- Consider adding `CODECOV_TOKEN` as a repository secret if you want authenticated uploads to Codecov.
- Add a small `preview:open` script in the future to open the browser automatically.

</details>

If you'd like raw CI logs or specific run IDs embedded here, tell me which run ids (I can add them or anonymize them).
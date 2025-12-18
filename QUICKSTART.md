# Quickstart & Developer Setup ⚙️

A short, quick way to get the repo running locally. For full details expand the **Full quickstart** section.

**Quick steps**:
- Use Node LTS (v18) via `nvm`:
  ```bash
  nvm install 18 && nvm alias default 18
  ```
- Install dependencies:
  ```bash
  npm ci
  ```
- Run checks and tests:
  ```bash
  npm run lint && npm test
  ```
- Quick preview:
  ```bash
  npm run preview --silent &
  # open http://localhost:8000
  ```

**Troubleshooting:** For troubleshooting and advanced fixes (CI logs, plugin install issues), see `DEVELOPMENT.md`.

<details>
<summary>Full quickstart & troubleshooting (expand)</summary>

Follow these steps to get the repository ready locally and avoid common environment issues.

1. Install Node & nvm (recommended)
   - Install nvm (if not already): https://github.com/nvm-sh/nvm
   - Install a compatible Node LTS and set it as default:
     ```bash
     nvm install 18
     nvm alias default 18
     node -v # should show v18.x
     ```

2. Install system build tools (macOS)
   - Xcode Command Line Tools:
     ```bash
     xcode-select --install
     ```
   - Ensure Python 3 and build tools are available (node-gyp dependency).

3. Install project dependencies
   ```bash
   npm ci        # preferred when package-lock.json exists
   # or
   npm install
   ```

4. Run local checks
   ```bash
   npm run prettier          # format code
   npm run prettier:verify   # verify formatting
   npm run lint              # run ESLint across LWC files
   npm test                  # run unit tests (sfdx-lwc-jest)
   npm run test:unit:coverage # run unit tests with coverage
   ```

5. Preview the UI (static quick preview)
   - **Recommended (best for quick iterative development):** run the preview server in the background so it stays available while you work:
     ```bash
     npm run preview --silent &    # serves http://localhost:8000 in background
     ```
     - `--silent` reduces server output; the trailing `&` runs it in the background. Use `pkill -f "serve preview"` to stop it, or run in foreground with `npm run preview`.
   - Alternative (simple python server):
     ```bash
     python3 -m http.server 8000 --directory preview
     ```

6. Salesforce/LWC Local Dev Server (optional, advanced)
   - To run the official LWC local dev server plugin (provides full LWC runtime), install the Salesforce CLI and the plugin:
     ```bash
     # install or update Salesforce CLI (https://developer.salesforce.com/tools/sfdxcli)
     sf plugins install @salesforce/lwc-dev-server
     sf force:lightning:lwc:start
     ```
   - Common issues and fixes:
     - If plugin install fails with native build errors (node-gyp/fibers), ensure:
       - You are using Node 18 (see step 1).
       - Xcode Command Line Tools are installed.
       - Python 3 is available for node-gyp.
     - If you see errors like `Found punctuation symbol or operator '%' that isn't valid in Apex` in the editor, reload VS Code or restart the Apex language server — this is typically a stale diagnostic.

</details>

If you want additional notes added here (short troubleshooting logs, CI IDs), say so and I will add them.
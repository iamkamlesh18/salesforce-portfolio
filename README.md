# salesforce-portfolio

[![CI](https://github.com/iamkamlesh18/salesforce-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/iamkamlesh18/salesforce-portfolio/actions) [![Coverage](https://img.shields.io/codecov/c/github/iamkamlesh18/salesforce-portfolio/main.svg)](https://codecov.io/gh/iamkamlesh18/salesforce-portfolio)

A small Salesforce portfolio project demonstrating a Lightning Web Component (LWC) and basic tests.

## Project structure

- `force-app/main/default/lwc/portfolioNav` — LWC component and tests

## Setup

1. Install dependencies: `npm ci` (recommended) or `npm install`.
2. Run lint: `npm run lint` or `npx eslint "**/lwc/**/*.js"`.
3. Run unit tests: `npm test` (`sfdx-lwc-jest`).

## Contributing

- Use Prettier to format before committing: `npm run prettier`.
- Run tests and lint locally before opening a PR.

## CI

This repo includes a GitHub Actions workflow to run lint and unit tests on push and pull requests.

## License

MIT

---

## Quickstart & Developer Setup ⚙️

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
   - A static preview of the `portfolioNav` component is available in `preview/`:
     ```bash
     npm run preview          # serves http://localhost:8000
     # or
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

---

## Useful Git / GitHub commands & notes 🔧

- Initialize and push repository:
  ```bash
  git init
  git add .
  git commit -m "chore: add package-lock.json and format repo"
  git remote add origin https://github.com/<your-username>/salesforce-portfolio.git
  git push -u origin main
  ```

- Create repo via GitHub CLI (if you have `gh`):
  ```bash
  gh repo create salesforce-portfolio --public --source=. --remote=origin --push
  ```

- Revoke a pasted Personal Access Token (PAT) immediately if accidentally exposed: https://github.com/settings/tokens

---

## CI & Coverage 🧪

- The repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs Prettier check, ESLint and unit tests on push and PRs.
- Coverage is uploaded to Codecov. To enable authenticated uploads add `CODECOV_TOKEN` as a repository secret in GitHub Settings → Secrets → Actions.

**Badge examples**:
- CI: `[![CI](https://github.com/iamkamlesh18/salesforce-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/iamkamlesh18/salesforce-portfolio/actions)`
- Coverage: `![Coverage](https://img.shields.io/codecov/c/github/iamkamlesh18/salesforce-portfolio/main.svg)`

---

## Commands we used to resolve issues (log of helpful commands) 🧾

- Install dependencies and setup:
  - `npm install` / `npm ci`
  - `nvm install 18 && nvm alias default 18`
  - `xcode-select --install`
- Fix missing eslint: `npm install` (installs devDependencies including eslint)
- Run tests: `npm test` / `npm run test:unit:coverage`
- Preview: `npm run preview` or `python3 -m http.server 8000 --directory preview`
- Try LWC dev server install: `sf plugins install @salesforce/lwc-dev-server` (may require Node/version fixes)
- Create GitHub repo via API (if needed): use `curl` with a PAT or use `gh repo create`
- Add branch protection (example using `gh api`):
  ```bash
  gh api --method PUT /repos/:owner/:repo/branches/main/protection -f required_status_checks='{"strict":true,"contexts":["CI"]}' -f enforce_admins=true -f required_pull_request_reviews='{"dismiss_stale_reviews":true,"required_approving_review_count":1}'
  ```

---

## Recommended developer tools (install early) 🛠️

- Node.js (LTS v18) and nvm
- Xcode Command Line Tools (macOS) or build-essential (Linux)
- Python 3 (for node-gyp)
- Salesforce CLI (`sf`) for deployments: https://developer.salesforce.com/tools/sfdxcli
- VS Code + Salesforce extensions and Prettier
- GitHub CLI (`gh`) if you prefer command-line repo management

---

## Troubleshooting & notes ⚠️

- If `eslint` is not found: run `npm install` to ensure devDependencies are installed.
- If `@salesforce/lwc-dev-server` plugin fails to install due to native module compilation: ensure Node 18, Xcode CLI, and Python are installed; try reinstalling the plugin after switching Node versions.
- If the Codecov upload step fails in CI: ensure `coverage/lcov.info` is generated (we run `npm run test:unit:coverage`) and consider adding a `CODECOV_TOKEN` secret.

---

If you want, I can also add a `docs/DEVELOPMENT.md` file that contains these steps in a dedicated document and include troubleshooting logs there. Let me know if you'd like me to add that as well.

# salesforce-portfolio

[![CI](https://github.com/iamkamlesh18/salesforce-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/iamkamlesh18/salesforce-portfolio/actions) [![Coverage](https://img.shields.io/codecov/c/github/iamkamlesh18/salesforce-portfolio/main.svg)](https://codecov.io/gh/iamkamlesh18/salesforce-portfolio)

| Quickstart | Development | Contributing | Code of Conduct |
|---|---:|:---:|:---:|
| [Quickstart ⚡](QUICKSTART.md) | [Development 🧾](DEVELOPMENT.md) | [Contributing 🤝](CONTRIBUTING.md) | [Code of Conduct 🧑‍🤝‍🧑](CODE_OF_CONDUCT.md) |
| Get the repo running locally in <5 minutes (see `QUICKSTART.md`). | Troubleshooting & CI / advanced fixes (see `DEVELOPMENT.md`). | How to contribute & commit. | Expected community behavior and reporting. |

**Support:** For help open an issue or see `SUPPORT.md` (Support tab).

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

This repo includes a GitHub Actions workflow to run lint and unit tests on push and pull requests. The workflow runs on GitHub Actions when you push or open a PR — you don't need to execute the Actions YAML locally. To avoid triggering the workflow for a commit, include `[skip ci]` or `[ci skip]` in your commit message.

## License

MIT

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

# salesforce-portfolio

[![CI](https://github.com/iamkamlesh18/salesforce-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/iamkamlesh18/salesforce-portfolio/actions)

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

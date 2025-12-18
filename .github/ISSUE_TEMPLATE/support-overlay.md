---
name: Support overlay missing
about: Ask why the SUPPORT.md overlay/tab is not appearing in the repo UI
title: "Support overlay not appearing for SUPPORT.md"
labels: ['bug', 'help wanted']
assignees: []
---

**Describe the problem**

The repository contains a `SUPPORT.md` file at the repository root (https://github.com/iamkamlesh18/salesforce-portfolio/blob/main/SUPPORT.md) but the GitHub repo UI does not surface a Support overlay tab like other community files (e.g., `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`).

**Steps to reproduce**
1. Visit https://github.com/iamkamlesh18/salesforce-portfolio
2. Confirm that `SUPPORT.md` exists in the repo root.
3. Note that there is no visible Support overlay/tab or that `?tab=support-ov-file` doesn't show expected content.

**Expected behavior**

GitHub should surface `SUPPORT.md` in the repository community area and overlay similar to `CONTRIBUTING.md`/`CODE_OF_CONDUCT.md`, or have documentation stating when and how the Support overlay is visible.

**Additional context / logs**

- I updated `SUPPORT.md` with canonical short support pointers and pushed changes (commit messages: `docs(support): ...`).
- Observed the overlay not visible immediately after commit; waited a short time and rechecked.

**Request**

Please advise whether there are any repository settings, naming/format requirements, or caching delays that prevent the Support overlay from appearing. If there are steps I should take (e.g., settings to enable), please list them.

---

(You can create this issue with `gh issue create --title "Support overlay not appearing for SUPPORT.md" --body-file .github/ISSUE_TEMPLATE/support-overlay.md` if you have `gh` installed.)
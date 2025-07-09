# Contributing to Project Kororā

## Table of Contents

- [Contributing to Project Kororā](#contributing-to-project-kororā)
  - [Table of Contents](#table-of-contents)
  - [Development Workflow](#development-workflow)
    - [Quick Rebase Summary (CLI \& VS Code)](#quick-rebase-summary-cli--vs-code)
    - [(Optional) Open the Pull Request from your terminal](#optional-open-the-pull-request-from-your-terminal)
  - [Commit Messages](#commit-messages)
    - [Commit Types](#commit-types)
    - [Scope](#scope)
    - [Breaking Changes](#breaking-changes)
  - [Signing Commits](#signing-commits)
    - [Setting Up GPG Key](#setting-up-gpg-key)
    - [How to Sign Commits](#how-to-sign-commits)
  - [Pull Requests](#pull-requests)
    - [Best Practices](#best-practices)

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Development Workflow

Follow this 5-step loop for every contribution:

1. **Create a branch** off `main`:
   ```bash
   git checkout -b username/feature
   ```
2. **Commit often & push**:
   ```bash
   git add . # Add all changes to the staging area
   git commit -m "feat: add awesome stuff" # Commit with a descriptive message
   git push -u origin username/feature # Push the changes to the remote repository
   ```
3. **Open a Draft PR early** — CI checks will run.
4. **Keep your branch up-to-date** (rebase, never merge into `main`):
   ```bash
   git fetch origin # Fetch the latest changes from the remote repository
   git rebase origin/main # Rebase the current branch onto the main branch
   git push --force-with-lease # Force push the changes to the remote repository
   ```
5. When approved, use **"Squash and merge"** to keep `main` linear.

> ℹ️ `main` is protected—direct pushes are rejected to enforce code review and CI. All pushes must be signed (`git commit -S`) and fast-forwardable. See [Signing Commits](#signing-commits) for more info.

### Quick Rebase Summary (CLI & VS Code)

Fetch → rebase → push:

```bash
# Make sure you are on your feature branch
git fetch origin          # Grab latest main
git rebase origin/main    # Replay your commits on top of main
# Fix any conflicts, then:
git rebase --continue     # or --abort / --skip as needed
git push --force-with-lease  # Update your PR
```

**Doing the same in VS Code**

1. Open the **Source Control** view (⟲ icon in the Activity Bar).
2. Click the **⋯** menu and choose **Pull (Rebase)** _or_ press `⇧⌘P` and run **Git: Rebase Current Branch…**, selecting `origin/main` as the target.
3. Resolve conflicts inline using **Accept Current / Incoming** buttons; VS Code shows a **Continue Rebase** button when all conflicts are resolved.
4. Finally press **Push**—VS Code automatically uses `--force-with-lease`.

Rebasing keeps the history linear and your pull request easy to review.

---

### (Optional) Open the Pull Request from your terminal

If you have the [GitHub CLI](https://cli.github.com/) installed and authenticated, you can create the PR without leaving the command line:

```bash
# Inside your feature branch
git fetch origin       # ensure local refs are up-to-date (required for --fill)
# --fill copies commit message; --draft opens it as a Draft PR
gh pr create --base main --head username/feature --draft --fill
```

Useful follow-ups:

```bash
# View the PR in your browser
gh pr view --web

# Check PR status (CI, reviews, mergeability)
gh pr checks
```

This is functionally identical to opening the PR in the GitHub UI, but faster for terminal-focused workflows.

---

This workflow helps keep our `main` branch clean and allows for effective collaboration.

## Commit Messages

This project adheres to the [Conventional Commits specification](https://www.conventionalcommits.org/). All commits must follow this standard to maintain a clear and explicit commit history.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>
```

### Commit Types

- **`feat`**: Introduces a new feature to the codebase.
- **`fix`**: Patches a bug in the codebase.
- **Other Allowed Types**: `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others are also permitted.

### Scope

A scope provides additional contextual information and is contained within parentheses.

```
feat(parser): add ability to parse arrays
```

### Breaking Changes

A breaking change is any modification that requires other developers to change their code. Clearly flagging these is critical for communication and versioning.

To indicate a breaking API change, either append a `!` after the type/scope or include a `BREAKING CHANGE:` footer in the commit body. This automatically signals a `MAJOR` version bump in semantic versioning.

**Example with `!`:**

```
# Renaming a function requires a breaking change notification
feat(api)!: rename getUser to fetchUser for clarity
```

**Example with footer:**

```
refactor: simplify user authentication logic

BREAKING CHANGE: The `authenticate` function now returns a Promise instead of a callback.
```

A breaking change can be part of any commit type. For more details, please review the [full specification](https://www.conventionalcommits.org/).

## Signing Commits

To ensure the integrity and authenticity of our commit history, all commits should be signed with a GPG key. Signed commits provide a layer of security by verifying that the commit genuinely comes from the stated author and has not been tampered with.

### Setting Up GPG Key

If you have not set up a GPG key with your GitHub account, please follow GitHub's official documentation:

- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
- [Adding a GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)
- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)

### How to Sign Commits

You can sign an individual commit using the `-S` flag:

```bash
git commit -S -m "feat: your descriptive commit message"
```

To sign all commits by default, you can configure Git globally. This is the recommended approach.

```bash
git config --global commit.gpgsign true
```

This configuration ensures all your future commits in any local repository will be signed automatically.

## Pull Requests

When you are ready to merge your feature branch into `main`, you will need to open a pull request. A well-crafted pull request provides context for reviewers and helps maintain a clean project history.

### Best Practices

- **Write a Clear Title**: Your title should be concise and follow the [Conventional Commits](#commit-messages) format (e.g., `feat(api): add user authentication`). This helps in release automation and changelog generation.

- **Provide a Detailed Description**: The description should clearly explain the "why" behind your changes.

  - What problem does this solve?
  - What are the key changes?
  - Link to any relevant issues using keywords like `Closes #42` or `Fixes #12`.

- **Keep it Focused**: A pull request should address a single concern. If you find yourself making unrelated changes, consider moving them to a separate branch and pull request.

- **Include Documentation**: All changes that introduce or modify code must be accompanied by documentation. This is a critical part of our workflow. For full details on our documentation standards and practices, please read the [**DOCUMENTATION GUIDELINES**](../docs/DOCUMENTATION_GUIDELINES.md).

- **Self-Review First**: Before requesting a review from others, perform a self-review of your changes. Check for typos, logical errors, and adherence to the project's coding standards.

- **Request Reviewers**: Add at least one team member as a reviewer to get feedback. If you have specific people in mind who should review the code, mention them.

- **Ensure Checks Pass**: All automated checks (like linting, tests, and builds) must pass before a pull request can be merged.

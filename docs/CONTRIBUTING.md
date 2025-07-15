# Contributing to Project Kororā

## Table of Contents

- [Contributing to Project Kororā](#contributing-to-project-kororā)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Before You Start](#before-you-start)
    - [Setting Up GPG Key](#setting-up-gpg-key)
    - [How to Sign Commits](#how-to-sign-commits)
  - [Commit Standards](#commit-standards)
    - [Commit Message Format](#commit-message-format)
    - [Commit Types](#commit-types)
    - [Scope](#scope)
    - [Breaking Changes](#breaking-changes)
  - [Development Workflow](#development-workflow)
    - [Quick Merge Summary (CLI \& VS Code)](#quick-merge-summary-cli--vs-code)
  - [Pull Requests](#pull-requests)
    - [Best Practices](#best-practices)

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Getting Started

Before you begin contributing, ensure you have the necessary setup to work with our codebase effectively.

### Prerequisites

- Git installed and configured
- Node.js and npm for the project
- GitHub account with SSH or HTTPS access configured
- GPG key set up for commit signing (required)

### Before You Start

1. **Check for existing issues** - Look through [existing issues](https://github.com/Project-Korora/projectkorora.space/issues) to see if your feature/bug is already being discussed
2. **Run the project locally** - Make sure you can build and run the project:
   ```bash
   npm install
   npm run dev
   npm run build  # Ensure it builds without errors
   ```
3. **Check code quality** - Run linting and formatting:
   ```bash
   npm run lint
   npm run format  # If available
   ```

> ℹ️ `main` is protected—direct pushes are rejected to enforce code review and CI. All pushes must be signed (`git commit -S`).

### Setting Up GPG Key

To ensure the integrity and authenticity of our commit history, all commits must be signed with a GPG key. Signed commits provide a layer of security by verifying that the commit genuinely comes from the stated author and has not been tampered with.

If you have not set up a GPG key with your GitHub account, please follow GitHub's official documentation:

- [Generating a new GPG key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key)
- [Adding a GPG key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)
- [Telling Git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key)

### How to Sign Commits

You can sign an individual commit using the `-S` flag:

```bash
git commit -S -m "feat: your descriptive commit message"
```

To sign all commits by default, you can configure Git globally. This is the recommended approach:

```bash
git config --global commit.gpgsign true
```

This configuration ensures all your future commits in any local repository will be signed automatically.

## Commit Standards

This project adheres to the [Conventional Commits specification](https://www.conventionalcommits.org/). All commits must follow this standard to maintain a clear and explicit commit history.

### Commit Message Format

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

## Development Workflow

Follow this 5-step loop for every contribution:

1.  **Create a branch** off `main`:
    ```bash
    git checkout -b gitUsername/featureName # gitUsername is your GitHub username, featureName is the name of the feature you are working on (this becomes the branch name)
    ```
2.  **Commit often & push** (remember to sign commits):

    ```bash
    git add . # Add all changes to the staging area
    git commit -S -m "feat: add awesome stuff" # Commit with a descriptive message
    git push -u origin gitUsername/featureName # Push the changes to the remote repository (gitUsername/featureName is the name of the branch you created in step 1)
    ```

3.  **Open a Draft PR early** — CI checks will run.

    Create the PR through the GitHub website interface or use the Quick GitHub CLI method (if you have [GitHub CLI](https://cli.github.com/) installed):

    ```bash
    # Inside your feature branch
    git fetch origin # ensure local refs are up-to-date
    # Create a draft PR with custom title and description
    gh pr create --base main --head gitUsername/featureName --draft --title "feat: your feature description" --body "Brief description of what this PR does"
    ```

    **Alternative with --fill** (uses your latest commit message):

    ```bash
     v
    ```

4.  **Keep your branch up-to-date** (merge from `main`):

    ```bash
    git fetch origin # Fetch the latest changes from the remote repository
    git merge origin/main # Merge the latest main branch changes into your feature branch
    git push # Push the changes to the remote repository
    ```

    For merge conflict resolution, see the [Quick Merge Summary](#quick-merge-summary-cli--vs-code) section below.

5.  When approved, you can merge your pull request using the GitHub website.

This workflow helps keep our `main` branch clean and allows for effective collaboration.

### Quick Merge Summary (CLI & VS Code)

Fetch → merge → push:

```bash
# Make sure you are on your feature branch
git fetch origin          # Grab latest main
git merge origin/main     # Merge latest main into your feature branch
# Fix any conflicts, then:
git add .                 # Stage resolved conflicts
git commit                # Complete the merge commit
git push                  # Update your PR
```

**Doing the same in VS Code**

1. Open the **Source Control** view (⟲ icon in the Activity Bar).
2. Click the **⋯** menu and choose **Pull (Merge)** _or_ press `⇧⌘P` and run **Git: Merge Branch…**, selecting `origin/main` as the source.
3. Resolve conflicts inline using **Accept Current / Incoming** buttons; VS Code shows a **Commit** button when all conflicts are resolved.
4. Finally press **Push** to update your PR.

Merging keeps your feature branch up-to-date with main while preserving your development history.

**Handling Merge Conflicts:**
If you encounter conflicts during the merge:

1. Git will mark conflicted files - open them in your editor
2. Look for conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Resolve conflicts by choosing the correct code
4. Remove the conflict markers
5. Stage the resolved files: `git add .`
6. Complete the merge: `git commit`
7. Push your changes: `git push`

## Pull Requests

When you are ready to merge your feature branch into `main`, you will need to open a pull request. A well-crafted pull request provides context for reviewers and helps maintain a clean project history.

### Best Practices

- **Write a Clear Title**: Your title should be concise and follow the [Conventional Commits](#commit-standards) format (e.g., `feat(api): add user authentication`). This helps in release automation and changelog generation.

- **Provide a Detailed Description**: The description should clearly explain the "why" behind your changes.

  - What problem does this solve?
  - What are the key changes?
  - Link to any relevant issues using keywords like `Closes #42` or `Fixes #12`.

- **Keep it Focused**: A pull request should address a single concern. If you find yourself making unrelated changes, consider moving them to a separate branch and pull request.

- **Include Documentation**: All changes that introduce or modify code must be accompanied by documentation. This is a critical part of our workflow. For full details on our documentation standards and practices, please read the [**DOCUMENTATION GUIDELINES**](../docs/DOCUMENTATION_GUIDELINES.md).

- **Self-Review First**: Before requesting a review from others, perform a self-review of your changes. Check for typos, logical errors, and adherence to the project's coding standards.

- **Request Reviewers**: Add at least one team member as a reviewer to get feedback. If you have specific people in mind who should review the code, mention them.

- **Ensure Checks Pass**: All automated checks (like linting, tests, and builds) must pass before a pull request can be merged.

# Project Kororā Website

<div align="center">

[![Website](https://img.shields.io/badge/Website-projectkorora.space-blue?style=for-the-badge&logo=firefox-browser)](https://projectkorora.space/)
[![Status](https://img.shields.io/badge/Status-Coming_Soon-yellow?style=for-the-badge)](https://projectkorora.space/)

</div>

The official website for Project Kororā, a student-led space initiative at Te Herenga Waka—Victoria University of Wellington, focused on developing New Zealand's space economy through CubeSat development.

### Getting Started

To set up the project locally:

#### Prerequisites

- Git installed (https://git-scm.com/)
- Node.js and npm installed (https://nodejs.org/)
- A code editor (e.g., VS Code or Cursor)

#### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Project-Korora/projectkorora.space.git
   ```

2. Navigate to the new website's directory:
   ```bash
   cd projectkorora.space
   ```
3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

A brief overview of the key directories in this project:

- `src/app/`: Contains the core application files, including pages and layouts.
- `src/app/page.tsx`: The main page of the application.
- `src/app/globals.css`: Global styles for the application.
- `public/`: Static assets like images and fonts.
- `legacy_site/`: Contains the files from the previous version of the website.

## Tech Stack

- **[Next.js](https://nextjs.org/docs)**: A React framework that enables server-side rendering and static site generation.
- **[React](https://react.dev/learn)**: A JavaScript library for building dynamic user interfaces.
- **[TypeScript](https://www.typescriptlang.org/docs)**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **[Tailwind CSS](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapidly building custom designs.

## Development Workflow

This project uses a feature branch workflow. When contributing, please follow these steps:

1.  **Create a Feature Branch**: Branch off from the `main` branch. Name your branch with your username and a short description of your task.

    ```bash
    # Example for creating a branch named 'galengreen/new-feature' from 'main'
    git checkout -b galengreen/new-feature main
    ```

2.  **Work and Commit**: Make your changes on your feature branch. Commit your work frequently with clear messages (See section below on commit messages)

3.  **Stay Updated**: Regularly pull changes from the `main` branch into your feature branch to stay in sync and resolve conflicts early.

    ```bash
    git pull origin main
    ```

4.  **Open a Pull Request**: When your feature is complete, open a Pull Request from your feature branch back to the `main` branch.

5.  **Code Review**: Your code will be reviewed by other team members.

6.  **Merge**: Once approved, your code will be merged into the `main` branch.

This workflow helps keep our `main` branch clean and allows for effective collaboration.

## Commit Messages

This project adheres to the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/). All commits must follow this standard to maintain a clear and explicit commit history.

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

A breaking change can be part of any commit type. For more details, please review the [full specification](https://www.conventionalcommits.org/en/v1.0.0/).

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

- **Self-Review First**: Before requesting a review from others, perform a self-review of your changes. Check for typos, logical errors, and adherence to the project's coding standards.

- **Request Reviewers**: Add at least one team member as a reviewer to get feedback. If you have specific people in mind who should review the code, mention them.

- **Ensure Checks Pass**: All automated checks (like linting, tests, and builds) must pass before a pull request can be merged.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

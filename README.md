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

## Tech Stack

- **[Next.js](https://nextjs.org/docs)**: A React framework that enables server-side rendering and static site generation.
- **[React](https://react.dev/learn)**: A JavaScript library for building dynamic user interfaces.
- **[TypeScript](https://www.typescriptlang.org/docs)**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **[Tailwind CSS](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapidly building custom designs.

## Development Workflow

This project uses a feature branch workflow. When contributing, please follow these steps:

1.  **Create a Personal Branch**: Branch off from the main feature branch (`website_version_1.0`). Name your branch with your username and a short description of your task.

    ```bash
    # Example for creating a branch named 'galengreen/new-feature' from 'website_version_1.0'
    git checkout -b galengreen/new-feature website_version_1.0
    ```

2.  **Work and Commit**: Make your changes on your personal branch. Commit your work frequently with clear messages (See section below on commit messages)

3.  **Stay Updated**: Regularly pull changes from the `website_version_1.0` branch into your personal branch to stay in sync and resolve conflicts early.

    ```bash
    git pull origin website_version_1.0
    ```

4.  **Open a Pull Request**: When your task is complete, open a Pull Request from your personal branch back to the `website_version_1.0` branch.

5.  **Code Review**: Your code will be reviewed by other team members.

6.  **Merge**: Once approved, your code will be merged into the feature branch.

This workflow helps keep our `main` branch clean and allows for effective collaboration.

## Commit Messages

This project adheres to the [Conventional Commits specification](https://www.conventionalcommits.org/en/v1.0.0/). This standard provides a set of rules for creating an explicit commit history, which makes it easier to automate changelogs and manage versioning.

All commit messages should be structured as follows:

```
<type>(optional scope): <description>
```

**Common types include:**

- `feat`: A new feature for the user.
- `fix`: A bug fix for the user.
- `docs`: Documentation only changes.
- `style`: Code style changes (e.g., semi-colons, white-space).
- `refactor`: Refactoring production code.
- `test`: Adding or refactoring tests.
- `chore`: Updating build tasks, package manager configs, etc.

**Example:**

```
feat(exploded_satalite): implement a exploded view of the cubesat
```

For more details, please review the [full specification](https://www.conventionalcommits.org/en/v1.0.0/).

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

# projectkorora.space Contributing Guidelines

## Contributing Code

We use Conventional Commits for all commits.

### Format:

- **Fix**: A commit of the type `fix` patches a bug in the codebase.
- **Feat**: A commit of the type `feat` introduces a new feature to the codebase.
- **BREAKING CHANGE**: A commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change.
    - A BREAKING CHANGE can be part of commits of any type.
- **Commit Types**: Types other than `fix:` and `feat:` are allowed:
    - `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
- **Scope**: A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parentheses.
    - e.g., `feat(parser): add ability to parse arrays`.


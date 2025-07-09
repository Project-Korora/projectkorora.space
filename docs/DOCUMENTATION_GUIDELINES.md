# Project Kororā - Documentation Plan

## 1. Introduction & Philosophy

This document defines the official documentation strategy for the Project Kororā Website. Our goal is to create documentation that is clear, useful, easy to maintain, and empowers developers to build effectively and consistently.

Our guiding principles are:

- **Documentation as Code:** Documentation lives in the repository alongside the code it describes. It is version-controlled and reviewed with the same rigor as application code.
- **Single Source of Truth:** We strive to eliminate duplication. The code itself is the ultimate source of truth for implementation details, while our docs provide high-level context.
- **Documentation is Part of "Done":** A feature or task is not complete until it is documented.

---

## 2. Audience

We write documentation primarily for our **internal development team**. This includes current members and any future developers who will be onboarded to the project. The language should be clear and direct, assuming a technical audience but avoiding unnecessary jargon. Don't assume previous knowlage of a topic.

---

## 3. Documentation Structure & Types

We categorize our documentation to ensure every piece of information has a logical home.

### 3.1. Reference Documentation (The "What")

This type of documentation describes the technical details of the codebase. It is generated directly from comments in the source code.

- **Location:** Inline code comments (JSDoc/TSDoc).
- **Content:**
  - **Component Props:** Every React component's props interface must have JSDoc comments explaining what each prop does, its type, and if it's required.
  - **Function & Hook Signatures:** All non-trivial utility functions and custom hooks must have JSDoc explaining their purpose, parameters, and return values.
  - **Theme Tokens:** All CSS custom properties in `globals.css` must have a comment explaining their intended use.
- **Tooling:** `JSDoc` is our standard. We will use an ESLint plugin to enforce its presence and correctness.

**Example (Component JSDoc):**

```typescript
/**
 * A configurable card component with a frosted-glass effect.
 * It uses theme tokens for color, border, and glow effects.
 *
 * @param {string} [color='default'] - The color variant of the card.
 * @param {ReactNode} children - The content to be rendered inside the card.
 * @param {string} [className] - Additional classes to apply to the card.
 */
export const Card = ({ children, color = "default", className }: CardProps) => {
  // ...
};
```

### 3.2. Conceptual Guides (The "Why")

This documentation provides high-level overviews and explains the reasoning behind our technical decisions.

- **Location:** Markdown files within the `/docs` directory.
- **Content:** These are long-form documents that explain our architecture, principles, and strategies.
  - `architecture.md`: An overview of the project structure, data flow, key libraries, and overall technical design.
  - `design-system.md`: Explains the philosophy of our token-driven design system and provides guidance on how to _use_ the core components and theme tokens correctly.
  - `testing-strategy.md`: Outlines our approach to unit, integration, and end-to-end testing.
  - `deployment.md`: Details the CI/CD pipeline, environments, and release process.
- **Key Principle:** These guides should not duplicate reference documentation. Instead of explaining a component's props, they should explain _when and why_ you would use that component.

### 3.3. How-To Guides & Tutorials (The "How")

These are step-by-step instructions for performing common development tasks.

- **Location:** Markdown files within the `/docs` directory, in a `how-to/` subdirectory.
- **Content:** Each guide is a practical walkthrough of a specific task.
  - `how-to/add-a-component.md`: A tutorial for creating a new component that adheres to all project standards (JSDoc, styling, testing).
  - `how-to/update-theme-tokens.md`: A guide on how to safely add or modify theme tokens in `globals.css`.
- **Goal:** To standardize common workflows and reduce the time it takes for a developer to complete a task correctly.

---

## 4. Style Guide & Best Practices

To ensure consistency, all documentation should adhere to the following style guide:

- **Voice & Tone:**
  - **Use the active voice.** (e.g., "This function returns..." instead of "Is returned by this function...")
  - **Be concise and clear.** Avoid ambiguity and overly complex sentences.
- **Formatting:**
  - Use markdown for all conceptual and how-to guides.
  - Use code blocks with correct language identifiers for all code examples.
- **Code Examples:**
  - Examples must be minimal, correct, and directly relevant to the point being made.
  - Always keep code examples up-to-date with the codebase.

---

## 5. Use of AI Assistants

AI-powered assistants are valuable tools in our development workflow. They should be used to accelerate development and improve quality, not to replace developer judgment. The following principles apply:

- **Developer is Always Accountable:** The developer who commits the code is 100% responsible for its quality, correctness, and security, regardless of whether it was partially or wholly generated by an AI.
- **Mandatory Review and Validation:** All output from an AI assistant—including code, documentation, and comments—must be carefully reviewed, understood, and validated by a human developer before being committed. **Never commit AI-generated content blindly.**
- **Adherence to Standards:** AI-generated content must be edited to meet all project standards, including the style guides for code and documentation, and accessibility requirements.

### Recommended Uses

- **Generating Boilerplate:** Creating initial file structures, component shells, or test files.
- **Drafting Documentation:** Generating first drafts of JSDoc comments or markdown explanations.
- **Code Refactoring:** Performing specific, well-defined refactoring tasks.
- **Explaining Concepts:** Clarifying complex code blocks or technical concepts.

---

## 6. Tooling & Automation

- **ESLint (`eslint-plugin-jsdoc`):** We will configure ESLint to automatically check for the presence and basic correctness of JSDoc comments on all functions and components during the linting stage of our CI pipeline.
- **Storybook (Optional but Recommended):** It will automatically consume our JSDoc comments to generate a live, interactive component library, turning our reference documentation into a powerful development tool.

---

## 7. Maintenance & Contribution Workflow

Documentation is a living part of the project and must be maintained. Our general contribution process is defined in the project's [**CONTRIBUTING.md**](CONTRIBUTING.md) guide, which covers the Git workflow and pull request standards. The following rules apply specifically to documentation:

1. **Documentation is Required in Pull Requests:** Every PR that introduces or changes code _must_ include corresponding changes to documentation. This could be updating JSDoc, modifying a conceptual guide, or adding a new how-to.
2. **Documentation in Code Reviews:** Documentation is a first-class citizen in our PR review process. Reviewers are expected to check documentation for clarity, accuracy, and adherence to the style guide, just as they would with code.
3. **Ownership:** The lead for a feature or epic is ultimately responsible for the quality of its documentation.
4. **Quarterly Documentation Audit:** A recurring task will be created to review all documentation, identify outdated or missing information, and create issues to address the gaps.

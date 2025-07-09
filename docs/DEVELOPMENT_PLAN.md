# Project Kororā - Development Plan & Task Breakdown

## 1. Overview & Goals

This document outlines the development plan for Project Kororā, a modern, responsive website built with Next.js and a token-driven Tailwind CSS v4 theme. The primary goal is to create a high-performance, accessible, and easily maintainable website that showcases the project's mission.

**Key Project Goals:**

- **Fully Token-Driven Design:** All styling (colours, spacing, typography, radii, etc.) must be controlled by CSS variables defined in a central theme file.
- **Component-Based Architecture:** The UI will be built from a set of reusable, well-documented React components.
- **Robust CI/CD:** Automate testing, linting, and deployment to ensure code quality and streamline releases.

---

## 2. Suggested Team Roles & Responsibilities

For a team of eight, we can define specialised roles to ensure clear ownership and efficiency.

- **Project Lead: Galen Green**
  - Oversees the entire project, manages timelines, removes blockers, and facilitates communication.
- **Design System & UI Lead: Unknown**
  - Owns the theme (`globals.css`), core component library, and overall visual consistency. Ensures all UI work adheres to the token-driven approach.
- **Frontend Engineering Lead: Unknown**
  - Guides the overall technical architecture, leads code reviews, and is responsible for the quality and structure of the application code.
- **Frontend Engineers: Jessica, Thomas**
  - Implement components and pages, refactor existing code, and collaborate on feature development.
    - Jessica: Contact page
    - Albion: Teams page
    - Unknown: Proposal page
    - Unknown: About page
- **QA & Accessibility Lead: Tatvika**
  - Owns the testing strategy, from unit tests to end-to-end testing. Champions accessibility and performs audits.
- **DevOps & Performance Lead: Tane?**
  - Manages the CI/CD pipeline, deployment environments, and leads performance optimisation efforts.

---

## 3. Documentation Culture & Strategy

See the **[Documentation Guidelines](./DOCUMENTATION_GUIDELINES.md)** for the full documentation philosophy, structure, and style guide.

---

## 4. Development Epics & Tasks

> **What is an Epic?**
> In modern software development (specifically Agile/Scrum), an **Epic** represents a large body of work or a major feature. It's too big to complete in one go, so we break it down into smaller, manageable items called **Tasks** (or "User Stories"). This helps us organize complex work into thematic groups and track progress toward a larger goal.

The project is broken down into the following epics. Each epic contains a list of actionable tasks that can be assigned to the relevant team members.

### Epic 1: Design System & Theming Foundation

- **Lead:** Design System & UI Lead
- **Support:** 1 Frontend Engineer
- **Goal:** Solidify the design token system and create a documented, reusable set of core UI elements.

| Task ID | Description                                 | Acceptance Criteria                                                                                                                                                       |
| :------ | :------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1.1** | **Finalize Theme Tokens**                   | Review and extend `globals.css` to include all necessary tokens for typography, spacing, shadows, and other effects. **All tokens must be commented.**                    |
| **1.2** | **Create Core `Button` Component**          | A fully accessible `Button` component that accepts variants (`primary`, `secondary`, `ghost`) and uses theme tokens exclusively. **Component has full JSDoc for props.**  |
| **1.3** | **Create Core `Input` & `Form` Components** | A set of accessible form elements (Input, Textarea, Label) styled with theme tokens. **All components have full JSDoc for props.**                                        |
| **1.4** | **Refine `Card` Component**                 | Audit the existing `Card` component, ensure it's fully theme-driven, and document its props. **JSDoc is updated and complete.**                                           |
| **1.5** | **Write Design System Documentation**       | Create a new document in `/docs` that explains the theme tokens, their usage, and showcases the core components. **This is the high-level guide on _how to use_ our UI.** |
| **1.6** | **Audit the rest of the Website**           | All components, pages and code utilises the Theme Tokens whenever and wherever possible.                                                                                  |

### Epic 2: Component & Page Refactoring

- **Lead:** Frontend Engineering Lead
- **Support:** 2 Frontend Engineers
- **Goal:** Bring all existing code in line with the finalized design system and best practices.

| Task ID | Description                         | Acceptance Criteria                                                                                                                                                                                                           |
| :------ | :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **2.1** | **Audit & Refactor All Components** | Systematically review every component in `src/app/components` and refactor it to use the finalised theme tokens. Remove all hardcoded values when possible and reasonable. **All refactored components have complete JSDoc.** |
| **2.2** | **Refactor All Pages**              | Update all pages in `src/app/(pages)` to correctly use the newly refactored components and layouts.                                                                                                                           |
| **2.3** | **Implement Responsive Strategy**   | Ensure every component and page is fully responsive, using Tailwind's breakpoint variants which are tied to theme tokens.                                                                                                     |
| **2.4** | **Image Component Implementation**  | Replace all standard `<img>` tags with Next.js's `<Image>` component for optimisation.                                                                                                                                        |
| **2.5** | Create new Components               | Create and add new components for new and old features to further extend the maintainability and scalability of the website. **New components must be fully documented with JSDoc.**                                          |

### Epic 3: Page Content & Feature Implementation

- **Lead:** Frontend Engineering Lead
- **Support:** 3 Frontend Engineers
- **Goal:** Build out the full content and functionality for all pages of the website.

| Task ID | Description                    | Acceptance Criteria                                                                                                                                                   |
| :------ | :----------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **3.1** | **Home Page Finalization**     | Finalize layout and integrate final or placeholder content for the Hero, Mission, Features, and CTA sections.                                                         |
| **3.2** | **About Page Finalization**    | Build out the layout and content for the About page.                                                                                                                  |
| **3.3** | **Team Page Finalization**     | Populate the Team page with member data (can be from a static JSON file) and finalize the layout.                                                                     |
| **3.4** | **Contact Page Logic**         | Implement the logic for the contact form (e.g., using a serverless function or a third-party service). **Any new utility functions or API handlers must have JSDoc.** |
| **3.5** | **Proposal Page Finalisation** | Build out the layout and content for the Proposal page.                                                                                                               |

### Epic 4: Quality Assurance & Testing

- **Lead:** QA & Accessibility Lead
- **Support:** All Engineers
- **Goal:** Ensure the application is bug-free, accessible, and robust.

| Task ID | Description                        | Acceptance Criteria                                                                                                                                                              |
| :------ | :--------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **4.1** | **Setup Testing Framework**        | Configure Jest and React Testing Library for unit/integration tests. Configure Playwright or Cypress for E2E tests. **Testing strategy and setup is documented in `README.md`.** |
| **4.2** | **Write Unit Tests**               | Write unit tests for at least 80% of the components, focusing on props and user interactions. **Test descriptions are clear and explain the expected behavior.**                 |
| **4.3** | **Write E2E Tests**                | Write end-to-end tests for critical user flows (e.g., navigating the site, submitting the contact form). **Test cases are documented.**                                          |
| **4.4** | **Full Accessibility Audit**       | Conduct a full WCAG 2.1 AA audit using automated tools (like Axe) and manual testing (keyboard navigation, screen reader).                                                       |
| **4.5** | **Remediate Accessibility Issues** | Fix all issues identified in the accessibility audit.                                                                                                                            |
| **4.6** | **Cross-Browser/Device Testing**   | Test the application on latest versions of Chrome, Firefox, and Safari, on both desktop and mobile viewports.                                                                    |

### Epic 5: Performance & Deployment

- **Lead:** DevOps & Performance Lead
- **Support:** Frontend Engineering Lead
- **Goal:** Optimize the application for speed and set up a robust deployment pipeline.

| Task ID | Description                       | Acceptance Criteria                                                                                                                                                   |
| :------ | :-------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **5.1** | **CI/CD Pipeline Setup**          | Create a GitHub Actions workflow that runs on every PR: lints, type-checks, tests, and builds the project. **The pipeline stages are documented in the `README.md`.** |
| **5.2** | **Staging/Preview Environment**   | Configure automatic deployments to a staging environment (like Vercel/Netlify previews) for every PR.                                                                 |
| **5.3** | **Production Deployment Setup**   | Configure the production deployment workflow, triggered on merge to the main branch.                                                                                  |
| **5.4** | **Lighthouse Score Optimization** | Run Lighthouse audits and implement changes to achieve scores of 90+ in all categories. **Optimization techniques used are documented in the architecture guide.**    |
| **5.5** | **Bundle Size Analysis**          | Use `@next/bundle-analyzer` to inspect the production bundle and identify opportunities for optimization.                                                             |
| **5.6** | **Docker Environment Setup**      | Implement Docker-based development and production environments. **Docker setup and usage documented in `docs/how-to/docker-setup.md`.**                               |
| **5.7** | **Container Optimization**        | Optimize Docker images for size and security. Implement multi-stage builds and proper caching strategies. **Document optimization techniques.**                       |

### Epic 6: Final Documentation & Knowledge Transfer

- **Lead:** Project Lead
- **Support:** All Leads
- **Goal:** Review, consolidate, and finalize all project documentation to ensure it's accurate, useful, and ready for future developers.

| Task ID | Description                             | Acceptance Criteria                                                                                                               |
| :------ | :-------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| **6.1** | **Final Review of All Documentation**   | Review all JSDoc and markdown documents for accuracy, clarity, and consistency. Fix any outdated information.                     |
| **6.2** | **Finalize `README.md`**                | Ensure the main `README.md` is complete with project setup, development workflow, and CI/CD overview.                             |
| **6.3** | **Finalize Architecture Document**      | Ensure the architecture document in `/docs` accurately reflects the final state of the project.                                   |
| **6.4** | **Component Documentation (Storybook)** | (Optional but recommended) Set up Storybook to provide interactive documentation for the component library, generated from JSDoc. |

---

## 5. High-Level Timeline & Milestones

This is a suggested 4-sprint (8-week) timeline.

- **Sprint 1: Foundation & Setup**
  - **Focus:** Epics 1, 4.1, 5.1.
  - **Goal:** Finalize the design system, set up testing frameworks, and establish the CI pipeline. All new work will build on this foundation.
- **Sprint 2: Refactoring & Implementation**
  - **Focus:** Epics 2 & 3.
  - **Goal:** Refactor all existing code to meet standards and build out all pages with content.
- **Sprint 3: Quality & Testing**
  - **Focus:** Epic 4.
  - **Goal:** Intensive QA phase. Write all tests, perform the A11y audit, and fix all identified bugs and issues.
- **Sprint 4: Optimization & Launch**
  - **Focus:** Epics 5 & 6.
  - **Goal:** Final performance tuning, complete all documentation, and prepare for production launch.

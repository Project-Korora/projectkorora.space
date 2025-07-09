# Project Kororā – Beginner Onboarding Guide

## Table of Contents

- [Project Kororā – Beginner Onboarding Guide](#project-kororā--beginner-onboarding-guide)
  - [Table of Contents](#table-of-contents)
  - [1. Prerequisites](#1-prerequisites)
    - [Using `nvm` (optional but handy)](#using-nvm-optional-but-handy)
  - [2. Clone the Repository](#2-clone-the-repository)
  - [3. Install Dependencies \& Run the App](#3-install-dependencies--run-the-app)
    - [Common npm Scripts](#common-npm-scripts)
  - [4. Project Tour](#4-project-tour)
    - [How Routing Works (Next.js App Router)](#how-routing-works-nextjs-app-router)
    - [Component Conventions](#component-conventions)
  - [5. Tailwind CSS Crash Course](#5-tailwind-css-crash-course)
    - [Using Design Tokens (`globals.css`)](#using-design-tokens-globalscss)
      - [How to apply tokens in JSX/Tailwind](#how-to-apply-tokens-in-jsxtailwind)
      - [Mapping tokens in `tailwind.config.ts` (optional)](#mapping-tokens-in-tailwindconfigts-optional)
  - [6. Git Workflow \& Pull Requests](#6-git-workflow--pull-requests)
  - [7. Linting \& Formatting](#7-linting--formatting)
  - [8. Testing (future)](#8-testing-future)
  - [9. Troubleshooting](#9-troubleshooting)
  - [10. Further Learning](#10-further-learning)

Welcome! This guide walks you through setting up the project, understanding its tech stack (Next.js + Tailwind CSS), and adopting the team's workflow. It's written for people who have minimal prior experience with Node.js, React, or Tailwind.

---

## 1. Prerequisites

| Tool                      | Why you need it                         | Install Command                                                                                       |
| ------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Git**                   | Version control & collaboration         | [Download](https://git-scm.com/downloads) or `brew install git` (macOS)                               |
| **Node.js & npm**         | Runs/bundles the app & manages packages | `brew install node` (macOS) / `choco install nodejs` (Windows) / see [nodejs.org](https://nodejs.org) |
| **VS Code** (recommended) | Text editor with rich JS/TS support     | [Download](https://code.visualstudio.com/)                                                            |

> _New to any of these tools?_—Each link provides an official quick-start guide.

### Using `nvm` (optional but handy)

`nvm` lets you install multiple Node versions:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
nvm install --lts      # install latest LTS release
nvm use --lts
```

The project currently targets **Node ≥18**.

---

## 2. Clone the Repository

```bash
# Navigate to a directory to store the project
git clone https://github.com/Project-Korora/projectkorora.space.git
cd projectkorora.space
```

---

## 3. Install Dependencies & Run the App

```bash
npm install       # downloads all packages
npm run dev       # starts Next.js in development mode
```

Visit **http://localhost:3000** — the site auto-reloads as you edit files.

### Common npm Scripts

| Command         | Purpose                          |
| --------------- | -------------------------------- |
| `npm run dev`   | Start dev server with hot reload |
| `npm run lint`  | Run ESLint checks                |
| `npm run build` | Create a production build        |
| `npm run start` | Run the production build locally |

---

## 4. Project Tour

```
projectkorora.space/
├─ src/app/           # Next.js 13+ App Router code
│  ├─ (pages)/        # Route groups (about, contact, etc.)
│  ├─ components/     # Re-usable UI components
│  ├─ globals.css     # Global Tailwind styles (design tokens)
│  └─ layout.tsx      # Root layout (shared across pages)
├─ public/            # Static assets served at /<file>
├─ docs/              # Project documentation (incl. **this file**)
├─ tailwind.config.ts # Tailwind configuration & token mapping
└─ ...
```

### How Routing Works (Next.js App Router)

- Every folder inside `src/app` can be a route.
- A `page.tsx` file inside a folder becomes `/folder` in the URL.
- Shared layouts/helpers live in `src/app/components`.

### Component Conventions

- Use **functional components** with **TypeScript**.
- Co-locate component-specific styles (if any).
- Keep components ≤300 LOC for readability.

---

## 5. Tailwind CSS Crash Course

1. **Utility-first** — compose styles such as `flex`, `mt-4`, `text-center` directly in the class list.
2. **Responsive variants** — e.g. `md:hidden`, `lg:w-1/2`.
3. **Custom themes** live in `globals.css`

### Using Design Tokens (`globals.css`)

Our design system is expressed as **CSS custom properties** (aka design tokens) declared inside `src/app/globals.css` under an `@theme` block. Each token has either a _raw_ value (e.g. `--color-primary-500`) or a _semantic_ alias (e.g. `--color-primary`). Components should reference **semantic aliases** so the palette can evolve without touching component code.

Example tokens (excerpt):

```css
/* globals.css */
--color-primary: rgb(5 68 109);
--radius: 1rem;
```

#### How to apply tokens in JSX/Tailwind

Use Tailwind's **arbitrary value** syntax to inject a CSS variable:

```tsx
<div className="bg-[var(--color-primary)] text-[var(--color-light)] p-4 rounded">
  Themed card using tokens
</div>
```

Because Tailwind simply outputs the value you provide, this works for colors, spacing, radii, animations, etc.

#### Mapping tokens in `tailwind.config.ts` (optional)

For commonly-used tokens you can create shorthand utilities:

```ts
// tailwind.config.ts
export default {
  theme: {
    colors: {
      primary: "var(--color-primary)",
    },
    borderRadius: {
      DEFAULT: "var(--radius)",
    },
  },
};
```

Then use them like normal Tailwind classes:

```html
<button class="bg-primary rounded px-4 py-2 text-white">Buy now</button>
```

Either approach keeps styles consistent and centralized—updates to `globals.css` automatically propagate across the entire app.

Helpful Resources:

- Official docs: <https://tailwindcss.com/docs>
- Tailwind Play (sandbox): <https://play.tailwindcss.com>

---

## 6. Git Workflow & Pull Requests

For branching, commit conventions, signed commits, and pull-request requirements, refer to the authoritative **[Contributing Guide](CONTRIBUTING.md)**.

---

## 7. Linting & Formatting

We use **ESLint** and **Prettier** (via `eslint-plugin-tailwindcss`) to maintain a consistent code style.

```bash
npm run lint        # lists problems
npm run lint -- --fix   # auto-fix where possible
```

Your editor should auto-format on save. Install the **ESLint** and **Prettier** VS Code extensions.

---

## 8. Testing (future)

The project will adopt **Vitest + React Testing Library**. When tests land, run:

```bash
npm test
```

---

## 9. Troubleshooting

| Symptom                            | Fix                                                      |
| ---------------------------------- | -------------------------------------------------------- |
| `command not found: npm`           | Verify Node installation or add it to PATH               |
| Styles not updating                | Restart `npm run dev`; Tailwind may need a fresh compile |
| Push rejected (`protected branch`) | Open a PR or push to your branch only                    |

---

## 10. Further Learning

- **JavaScript** – <https://javascript.info>
- **TypeScript** – <https://www.typescriptlang.org/docs/handbook/intro.html>
- **React** – <https://react.dev/learn>
- **Next.js** – <https://nextjs.org/learn>
- **GitHub Flow** – <https://docs.github.com/en/get-started/quickstart/github-flow>

Welcome aboard, and happy hacking! 🎉

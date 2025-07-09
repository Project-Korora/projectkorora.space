# Project Kororā Website

<div align="center">

[![Website](https://img.shields.io/badge/Website-projectkorora.space-blue?style=for-the-badge&logo=firefox-browser)](https://projectkorora.space/)
[![Status](https://img.shields.io/badge/Status-Coming_Soon-yellow?style=for-the-badge)](https://projectkorora.space/)

</div>

The official website for Project Kororā, a student-led space initiative at Te Herenga Waka—Victoria University of Wellington, focused on developing New Zealand's space economy through CubeSat development.

### Getting Started

There are two ways to set up the project locally: using Docker (recommended) or traditional setup.

#### Option 1: Docker Setup (Recommended)

Prerequisites:

- Docker installed ([Get Docker](https://docs.docker.com/get-docker/))
- Docker Compose installed (comes with Docker Desktop)

1. Clone the repository:

   ```bash
   git clone https://github.com/Project-Korora/projectkorora.space.git
   cd projectkorora.space
   ```

2. Start the development server:

   ```bash
   # For development (with hot reload)
   docker compose up web

   # For production build
   docker compose up web-prod
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

Note for Apple Silicon (M1/M2) users:

- Uncomment the `platform: linux/amd64` line in `docker-compose.yml` if you experience any issues.

#### Option 2: Traditional Setup

Prerequisites:

- Git installed (https://git-scm.com/)
- Node.js and npm installed (https://nodejs.org/)

1. Clone the repository:

   ```bash
   git clone https://github.com/Project-Korora/projectkorora.space.git
   ```

2. Navigate to the website's directory:

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

_For a step-by-step walkthrough (Node install, token system, Git workflow), see the [Beginner Onboarding Guide](docs/BEGINNER_GUIDE.md)._

## Contributing, Documentation and Guides

> We welcome contributions! Please read the docs for more information on how to get started.

- 📘 **Beginner Onboarding Guide** – step-by-step setup & workflow: [docs/BEGINNER_GUIDE.md](docs/BEGINNER_GUIDE.md)
- 🤝 **Contributing Guide** – branching, commits, PR process: [.github/CONTRIBUTING.md](.github/CONTRIBUTING.md)
- 📝 **Documentation Guidelines** – style & formatting rules: [docs/DOCUMENTATION_GUIDELINES.md](docs/DOCUMENTATION_GUIDELINES.md)
- 🛣️ **Development Plan** – roadmap & milestones: [docs/DEVELOPMENT_PLAN.md](docs/DEVELOPMENT_PLAN.md)

## Project Structure

> A brief overview of the key directories in this project:

- `src/app/`: Contains the core application files, including layouts and components.
- `src/app/(pages)/`: Route group containing all main pages.
- `src/app/(pages)/page.tsx`: The main homepage of the application.
- `src/app/components/`: Component library.
- `src/app/globals.css`: Global styles for the application.
- `tailwind.config.ts`: Configuration file for Tailwind CSS utilities and theme customization.
- `src/app/layout.tsx`: Root layout component that defines the overall structure
- `public/`: Static assets like images and fonts.
- `legacy_site/`: Contains the files from the previous version of the website.

## Tech Stack

- **[Next.js](https://nextjs.org/docs)**: A React framework that enables server-side rendering and static site generation.
- **[React](https://react.dev/learn)**: A JavaScript library for building dynamic user interfaces.
- **[TypeScript](https://www.typescriptlang.org/docs)**: A statically typed superset of JavaScript that enhances code quality and maintainability.
- **[Tailwind CSS](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapidly building custom designs.
- **[Docker](https://docs.docker.com/)**: Containerization platform for consistent development and deployment environments.

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

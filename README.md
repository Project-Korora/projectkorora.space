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

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for more information on how to get started.

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

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.


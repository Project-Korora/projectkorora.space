# Docker Setup Guide

This guide explains how to use Docker with Project Kororā's website. Docker provides a consistent development environment across all team members and simplifies the setup process.

## Prerequisites

Before you begin, ensure you have:

- [Docker](https://docs.docker.com/get-docker/) installed on your machine
- [Docker Compose](https://docs.docker.com/compose/install/) (comes with Docker Desktop)
- Basic familiarity with terminal/command line

## Quick Start

1. Clone the repository and navigate to it:

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

## Docker Configuration Overview

Our Docker setup consists of several key files:

### Dockerfile

The `Dockerfile` uses a multi-stage build process to optimize the final image size and build efficiency:

1. **deps stage**: Installs dependencies
2. **builder stage**: Builds the Next.js application
3. **runner stage**: Creates the final production image

Key features:

- Uses Node.js 20 Alpine for minimal image size
- Implements security best practices (non-root user)
- Optimizes for production builds
- Configures proper permissions for Next.js

### docker-compose.yml

Provides two services:

1. **web** (Development):

   - Hot-reload enabled
   - Source code mounted as volume
   - Development environment variables

   ```bash
   docker compose up web
   ```

2. **web-prod** (Production):
   - Optimized production build
   - No source code mounting
   - Production environment variables
   ```bash
   docker compose up web-prod
   ```

## Common Tasks

### Rebuilding the Container

If you've updated dependencies (package.json):

```bash
docker compose build web
```

### Viewing Logs

```bash
# Follow logs in real-time
docker compose logs -f web

# View recent logs
docker compose logs web
```

### Stopping the Container

```bash
# Stop and remove containers
docker compose down

# Stop, remove containers, and clear volumes
docker compose down -v
```

### Running Commands Inside the Container

```bash
# Run npm commands
docker compose exec web npm run type-check

# Open a shell
docker compose exec web sh
```

## Troubleshooting

### Apple Silicon (M1/M2) Issues

If you experience issues on Apple Silicon:

1. Uncomment the platform configuration in `docker-compose.yml`:

   ```yaml
   services:
     web:
       # ... other config
       platform: linux/amd64
   ```

2. Rebuild the container:
   ```bash
   docker compose build web
   ```

### Common Issues

1. **Port Already in Use**

   ```bash
   Error: listen tcp 0.0.0.0:3000: bind: address already in use
   ```

   Solution: Stop any running processes on port 3000 or modify the port mapping in `docker-compose.yml`.

2. **Node Modules Not Updating**
   ```bash
   Module not found: Can't resolve 'some-package'
   ```
   Solution: Rebuild the container with `docker compose build web`.

## Best Practices

1. **Development Workflow**

   - Use the `web` service for development
   - Keep the container running while working
   - Use `docker compose exec` for one-off commands

2. **Production Builds**

   - Test production builds locally with `web-prod` service
   - Always verify the production build before deployment
   - Monitor resource usage in production

3. **Environment Variables**
   - Use `.env` files for local development
   - Never commit sensitive environment variables
   - Use proper secrets management in production

## Security Considerations

1. **Image Security**

   - We use official Node.js images
   - Regular security updates are applied
   - Non-root user is configured

2. **Volume Mounts**
   - Only necessary files are mounted
   - Node modules are properly isolated
   - Sensitive files are in `.dockerignore`

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Docker Compose Documentation](https://docs.docker.com/compose/)

## Contributing

When making changes to the Docker configuration:

1. Document any new environment variables
2. Update this guide if workflows change
3. Test changes on both development and production setups
4. Follow security best practices
5. Consider impact on CI/CD pipelines

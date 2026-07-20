# CLAUDE.md

## Project

This is a full-stack AI & Machine Learning capstone project.

The goal is to build a clean, scalable, and maintainable application using modern development practices and AI-assisted coding.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS

### Backend
- FastAPI
- Python 3.12+
- SQLAlchemy
- Pydantic

### Database
- PostgreSQL

### Version Control
- Git
- GitHub

---

## Coding Conventions

### General
- Write clean, readable, and modular code.
- Keep functions small and focused.
- Reuse existing code whenever possible.
- Use meaningful variable and function names.
- Avoid unnecessary dependencies.

### Python
- Follow PEP 8.
- Use type hints.
- Validate request data with Pydantic.
- Prefer async endpoints where appropriate.

### React & TypeScript
- Use functional components.
- Use React Hooks.
- Enable strict TypeScript.
- Keep components reusable.

---

## Folder Structure

```
backend/
frontend/
docs/
assets/
```

---

## Git Commit Conventions

Use the **Conventional Commits 1.0.0** specification.

Format:

```
<type>[optional scope]: <description>
```

Examples:

```
feat: add user authentication
fix(api): validate login input
docs: update README
refactor(frontend): simplify navbar
test(auth): add login tests
chore: configure GitHub Actions
```

Common commit types:

- feat
- fix
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore
- revert

---

## AI Assistant Guidelines

When generating code:

- Follow the existing project structure.
- Write maintainable and modular code.
- Do not introduce unnecessary libraries.
- Preserve existing functionality.
- Update documentation when needed.
- Generate Conventional Commit messages for code changes.

---

## Repository Rules

- Never commit secrets or API keys.
- Use environment variables for configuration.
- Keep documentation updated.
- Ensure all commits follow Conventional Commits.

# CLAUDE.md

<<<<<<< HEAD
## Project

This is a full-stack AI & Machine Learning capstone project.

The goal is to build a clean, scalable, and maintainable application using modern development practices and AI-assisted coding.
=======
## Project Overview

This project is part of the FlyRank AI Frontend Engineering Internship. It demonstrates AI-assisted frontend development by comparing two workflows:

* **feature/vague-ai** – Code generated from a minimal, vague prompt.
* **feature/structured-ai** – Code generated using detailed specifications, constraints, verification, and testing.

The goal is to show that effective AI engineering comes from writing clear prompts, reviewing outputs, and validating results—not simply accepting AI-generated code.
>>>>>>> 152f826 (Add StampQuest Vite app)

---

## Tech Stack

<<<<<<< HEAD
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
=======
* React
* TypeScript
* Tailwind CSS
* Vite
* Git & GitHub
* React Testing Library (for tests)

---

## Coding Standards

* Use functional React components.
* Use TypeScript for all components.
* Keep components modular and reusable.
* Follow consistent naming conventions.
* Remove unused imports and variables.
* Write readable, maintainable code.

---

## AI Development Rules

### 1. Always provide project context

Prompts should include the framework, file paths, expected behaviour, and any project-specific constraints.

### 2. Define clear requirements

Specify validation rules, accessibility requirements, responsive behaviour, and expected user interactions before asking AI to generate code.

### 3. Require verification

Ask AI to write tests, explain assumptions, and verify that the implementation satisfies all requirements before accepting the output.

### 4. Review every AI response

Never commit AI-generated code without checking correctness, code quality, and project compatibility.

### 5. Test before committing

Run the application and execute all available tests before creating a commit.

### 6. Prioritise accessibility

All form controls must have labels, keyboard accessibility, meaningful error messages, and appropriate ARIA attributes where needed.

### 7. Handle edge cases

Validate invalid inputs, empty fields, password mismatches, and other common user errors before considering the feature complete.

---

## Git Workflow

* Create a dedicated branch for each feature.
* Use Conventional Commits.
* Keep commits focused and descriptive.
* Push changes regularly to GitHub.

Example commit messages:

* `feat: add validated settings form`
* `fix: resolve password confirmation validation`
* `test: add form validation tests`
* `docs: update workflow documentation`

---

## Definition of Done

A feature is complete only when:

* Requirements are fully implemented.
* Validation works correctly.
* Accessibility requirements are satisfied.
* Tests pass successfully.
* Code has been reviewed.
* No console errors or warnings remain.
* Changes are committed using Conventional Commits.

---

## Lessons Learned

This project reinforced that high-quality AI-assisted development depends on:

* Writing precise and detailed prompts.
* Breaking complex work into smaller tasks.
* Reviewing AI-generated code critically.
* Verifying functionality through testing.
* Using AI as a collaborative engineering tool rather than accepting its first response.
>>>>>>> 152f826 (Add StampQuest Vite app)

# `nova init` Command Reference

The `nova init` command initializes a new NovaServe TypeScript project from pre-configured application templates.

---

## Syntax

```bash
nova init <project-name> [options]
```

---

## Arguments & Options

- `<project-name>` *(Required)*: Name of the project directory to create.
- `--template <template-name>`: Project boilerplate template to scaffold.
  - Options: `serverless-api` *(default)*, `nextjs-edge`, `queue-worker`, `minimal`
- `--path <directory>`: Target directory path (defaults to `./<project-name>`).

---

## Examples

### 1. Basic Serverless API Project
```bash
nova init my-api
cd my-api
```

### 2. Next.js Edge Boilerplate
```bash
nova init my-edge-app --template nextjs-edge
```

---

## Scaffolding Output

```text
✓ Created project directory: ./my-api
✓ Initialized App.ts (Application & Infrastructure definition)
✓ Initialized nova.config.ts (Compiler settings)
✓ Initialized tsconfig.json (TypeScript configuration)
✓ Installed novaserve@2.1.6 dependency

Project successfully initialized!
Run 'cd my-api && nova dev' to start local emulation.
```

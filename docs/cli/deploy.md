# `nova deploy` Command Reference

The `nova deploy` command compiles your TypeScript AST, verifies the execution plan, provisions cloud resources via target provider APIs, and locks state.

---

## Syntax

```bash
nova deploy [options]
```

---

## Options

- `--target <provider>`: Target cloud driver (`aws`, `cloudflare`, `docker`, `gcp`).
- `--env <namespace>`: Environment namespace (defaults to `production`).
- `--yes`, `-y`: Skip interactive confirmation prompt in CI/CD environments.

---

## Examples

### 1. Interactive Deployment to AWS
```bash
nova deploy --target aws
```

### 2. Automated CI/CD Deployment
```bash
nova deploy --target aws --env staging --yes
```

---

## Output & State Update

Upon successful deployment, `nova deploy` emits live resource endpoints and updates `.nova/state.json` with the SHA-256 state lock hash.

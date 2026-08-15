# NovaServe CLI Command Reference

The `novaserve` command-line interface provides binary tooling for project scaffolding, local development emulation, static AST compilation, infrastructure planning, cloud deployment, and drift auditing.

---

## Global CLI Binary Syntax

```bash
nova <command> [options]
```

Or using the full package name:

```bash
novaserve <command> [options]
```

---

## Central Command Summary

| Command | Purpose | Primary Options |
| :--- | :--- | :--- |
| [`nova init`](init.md) | Scaffold a new NovaServe project | `<name>`, `--template`, `--path` |
| [`nova dev`](../getting-started/quickstart.md) | Start sub-second local emulator | `--port`, `--env` |
| [`nova compile`](compile.md) | Static AST verification & Nova IR export | `--target`, `--out` |
| [`nova plan`](plan.md) | Preview deterministic infrastructure changes | `--target`, `--env` |
| [`nova deploy`](deploy.md) | Execute deployment & state lock update | `--target`, `--env`, `--yes` |
| [`nova drift`](drift.md) | Audit & remediate cloud console drift | `--fix`, `--target` |
| `nova destroy` | Destroy all managed cloud resources | `--target`, `--env`, `--force` |
| `nova doctor` | Verify system environment readiness | N/A |

---

## Global Flags & Environment Variables

- `--help`, `-h`: Display command syntax and options.
- `--version`, `-v`: Output current CLI binary version.
- `--json`: Format CLI stdout as machine-readable JSON.
- `NOVA_ENV`: Default deployment environment namespace (e.g. `staging`, `production`, `pr-104`).
- `NOVA_TARGET`: Default cloud provider target (`aws`, `cloudflare`, `docker`, `gcp`).

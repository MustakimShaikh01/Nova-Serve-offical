# `nova drift` Command Reference

The `nova drift` command audits live cloud resources against your SHA-256 state lock hash and remediates manual console modifications.

---

## Syntax

```bash
nova drift [options]
```

---

## Options

- `--fix`: Automatically remediate drift by overwriting live cloud resource attributes to match state lock values.
- `--target <provider>`: Target cloud driver (`aws`, `cloudflare`, `docker`, `gcp`).
- `--env <namespace>`: Environment namespace.

---

## Examples

### 1. Audit Live Cloud Infrastructure for Drift
```bash
nova drift --target aws
```

### 2. Automatically Restore Infrastructure to Code State
```bash
nova drift --target aws --fix
```

# `nova compile` Command Reference

The `nova compile` command performs static AST parsing on your TypeScript source code, validates resource bindings, synthesizes IAM policies, and serializes Nova Intermediate Representation (Nova IR).

---

## Syntax

```bash
nova compile [options]
```

---

## Options

- `--target <provider>`: Cloud target driver (`aws`, `cloudflare`, `docker`, `gcp`).
- `--out <file>`: Output path to write serialized Nova IR JSON (defaults to stdout or `.nova/ir.json`).
- `--strict`: Enable strict AST validation (fails compilation if unused declared resources are detected).

---

## Examples

### 1. Standard Compilation to stdout
```bash
nova compile --target aws
```

### 2. Export Nova IR Payload to File
```bash
nova compile --target aws --out ./build/nova-ir.json
```

---

## Exit Codes

- `0`: Successful compilation; Nova IR generated cleanly.
- `1`: AST parsing error or invalid TypeScript syntax in `App.ts`.
- `2`: Resource reference validation failure (e.g. API endpoint referencing undeclared storage primitive).

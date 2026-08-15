# Compiler Error Reference

This document catalogs NovaServe compiler error codes, their causes, and concrete troubleshooting solutions.

---

## Catalog of Error Codes

### `ERR_AST_DYNAMIC_NAME` (Code 1001)
- **Meaning**: A cloud resource primitive (`storage`, `queue`) was declared using a dynamic runtime expression.
- **Cause**: NovaServe static analysis requires resource names to be string literals.
- **Fix**: Replace dynamic expressions with literal strings:
  ```typescript
  // ❌ Bad
  export const bucket = storage("bucket-" + Math.random());

  // ✓ Good
  export const bucket = storage("user-bucket-prod");
  ```

---

### `ERR_UNBOUND_RESOURCE` (Code 1002)
- **Meaning**: A route handler references a resource object that is not exported at top-level scope.
- **Cause**: The compiler cannot infer DAG edges if constructs are scoped locally inside function blocks.
- **Fix**: Export the resource construct at the module top level:
  ```typescript
  // ❌ Bad
  const myQueue = queue("task-queue");

  // ✓ Good
  export const myQueue = queue("task-queue");
  ```

---

### `ERR_DRIFT_CHECKSUM_MISMATCH` (Code 2001)
- **Meaning**: Live cloud infrastructure hash does not match state lock checksum (`.nova/state.json`).
- **Cause**: Resource was modified out-of-band via AWS Console or external CLI.
- **Fix**: Run `nova drift --fix` to restore cloud resources to match code state.

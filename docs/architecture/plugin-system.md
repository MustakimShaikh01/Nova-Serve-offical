# Plugin System Architecture

This document describes extending NovaServe through custom plugins and custom target providers.

---

## Extension Points

NovaServe provides two extension interfaces:

1. **AST Transformer Plugins**: Intercept AST traversal to support custom primitives or decorators.
2. **Provider Driver Plugins**: Package custom target drivers (e.g. `novaserve-provider-docker`).

---

## Example Provider Plugin Implementation

```typescript
import { TargetDriver, NovaIR, PlanSummary } from "novaserve";

export class CustomDockerProvider implements TargetDriver {
  name = "custom-docker";

  async plan(ir: NovaIR): Promise<PlanSummary> {
    // Generate Dockerfile build context plan
    return { toCreate: ir.resources.length, toUpdate: 0, toDestroy: 0 };
  }

  async deploy(ir: NovaIR) {
    // Build and push OCI image
    return { status: "success", outputs: {} };
  }

  async auditDrift() {
    return { driftDetected: false, diffs: [] };
  }

  async destroy() {
    // Teardown containers
  }
}
```

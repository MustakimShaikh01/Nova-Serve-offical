# Deployment Engine & Target Drivers

This document covers the execution model of NovaServe's deployment engine and target driver interface.

---

## Target Driver Architecture

Target drivers implement a standard provider interface:

```typescript
export interface TargetDriver {
  name: string;
  plan(ir: NovaIR): Promise<PlanSummary>;
  deploy(ir: NovaIR): Promise<DeploymentResult>;
  auditDrift(ir: NovaIR, state: StateLock): Promise<DriftReport>;
  destroy(state: StateLock): Promise<void>;
}
```

---

## Provisioning Pipeline

1. **Diff Computation**: The driver compares desired resources in Nova IR against existing resource state.
2. **Parallel Provisioning Engine**: Independent DAG nodes are provisioned concurrently using a worker pool.
3. **State Lock Update**: Upon completion, live ARNs/Endpoints and SHA-256 state hashes are written to `.nova/state.json`.

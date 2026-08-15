# Migrating from Pulumi to NovaServe

This guide maps Pulumi concepts to NovaServe and compares execution models.

---

## Architectural Comparison

While Pulumi allows writing infrastructure in TypeScript, Pulumi executes imperative Node.js scripts to generate resource graphs that call cloud provider APIs directly.

NovaServe takes a **compiler approach**:
- **Static AST Analysis**: Code is analyzed statically without executing application logic at deploy time.
- **Automated IAM Policy Synthesis**: IAM policies are derived from method calls (`uploads.put()`) rather than requiring manual construct bindings.
- **Sub-Second Emulation**: Built-in local emulation (`nova dev`) runs API routes and queues locally in under 200ms.

---

## Concept Mapping

| Pulumi Primitive | NovaServe Equivalent |
| :--- | :--- |
| `new aws.s3.Bucket("name")` | `export const bucket = storage("name")` |
| `new aws.sqs.Queue("name")` | `export const q = queue("name")` |
| `new aws.lambda.CallbackFunction(...)` | `export const handler = api.post(...)` |
| `pulumi up` | `nova deploy --target aws` |

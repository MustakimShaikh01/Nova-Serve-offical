# NovaServe Documentation

Welcome to the official technical documentation for **NovaServe** (`novaserve@2.1.6`), the open-source, TypeScript-native cloud application compiler.

NovaServe decouples application definition from raw infrastructure provisioning scripts. By treating infrastructure as a compilation target, NovaServe converts high-level TypeScript code ASTs into deterministic intermediate representations (Nova IR), synthesizes zero-trust least-privilege IAM policies, and deploys serverless resources across cloud providers with zero manual YAML or HCL configuration.

---

## 🚀 Quick Navigation

<div grid grid-cols-1 md:grid-cols-2 gap-4>

### 1. Getting Started
- [Introduction](getting-started/introduction.md) — What is NovaServe and why it exists.
- [Installation](getting-started/installation.md) — Installing the `novaserve` CLI and prerequisites.
- [Quickstart](getting-started/quickstart.md) — Scaffold and run your first application locally in 2 minutes.
- [First Deployment](getting-started/first-deployment.md) — Compile and deploy your first cloud app.

### 2. Core Concepts
- [Compiler Architecture](concepts/compiler.md) — The 4-stage AST parsing pipeline.
- [Static Analysis & AST](concepts/ast.md) — How NovaServe extracts resources from TypeScript code.
- [Dependency Graph](concepts/dependency-graph.md) — Constructing DAGs and synthesizing IAM policies.
- [Nova IR](concepts/nova-ir.md) — Intermediate Representation schema and SHA-256 state hashing.
- [State & Locking](concepts/state.md) — Deterministic state locks and change tracking.
- [Drift Remediation](concepts/drift.md) — Auditing and fixing console configuration drift.
- [Provider Model](concepts/providers.md) — Multi-cloud target abstraction layers.

### 3. CLI Command Reference
- [CLI Overview](cli/index.md) — Commands, flags, and global configuration.
- [`nova init`](cli/init.md) — Scaffold new NovaServe projects.
- [`nova compile`](cli/compile.md) — Static AST verification and IR serialization.
- [`nova plan`](cli/plan.md) — Preview deterministic infrastructure changes.
- [`nova deploy`](cli/deploy.md) — Execute cloud provisioning and lock state.
- [`nova drift`](cli/drift.md) — Audit and remediate cloud console drift.

### 4. Guides & Tutorials
- [AWS Target Guide](guides/aws.md) — Deploying to AWS Lambda, S3, SQS, and API Gateway.
- [Serverless API Tutorial](guides/serverless-api.md) — Type-safe HTTP APIs, queues, and object storage.
- [CI/CD Automation](guides/ci-cd.md) — Continuous deployment with GitHub Actions and GitLab CI.
- [Preview Environments](guides/preview-environments.md) — Ephemeral pull request environments.
- [Zero-Trust Security](guides/security.md) — Automated least-privilege IAM policy generation.

### 5. Reference & Architecture
- [Configuration Reference](reference/configuration.md) — `App.ts` and `nova.config.ts` options.
- [Resource API Reference](reference/resources.md) — `defineApp`, `api`, `storage`, `queue`, `database`.
- [Provider Support Matrix](reference/providers.md) — AWS, Cloudflare, Docker, and GCP stability status.
- [Compiler Error Codes](reference/errors.md) — Error definitions, root causes, and fixes.
- [System Architecture](architecture/overview.md) — Deep architectural specification.
- [Migration Guides](migrations/terraform.md) — Migrating from Terraform, Pulumi, or Serverless Framework.

</div>

---

## 📦 Official Package Information

- **NPM Package**: [`novaserve@2.1.6`](https://www.npmjs.com/package/novaserve)
- **GitHub Repository**: [`novaserve-cloud/novaserve`](https://github.com/novaserve-cloud/novaserve)
- **License**: Apache-2.0 (Open source and free for individuals)
- **Official Domain**: [https://novaserve.cloud](https://novaserve.cloud)
- **Core Maintainers**: Md Shadab Azam Ansari & Mustakim Shaikh

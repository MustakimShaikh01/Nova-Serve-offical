# Introduction to NovaServe

**NovaServe — TypeScript-first infrastructure for modern cloud applications.**

NovaServe is an open-source, TypeScript-native cloud application compiler. Open source and 100% free for individuals, NovaServe transforms application definitions written in TypeScript directly into deterministic infrastructure plans and provider-specific deployments.

- **GitHub Repository**: [`novaserve-cloud/novaserve`](https://github.com/novaserve-cloud/novaserve)
- **License**: Apache-2.0 (Open source & free for individuals)

---

## What Problem Does NovaServe Solve?

Traditional cloud application development forces a sharp divide between **application logic** (written in languages like TypeScript, Python, or Go) and **infrastructure configuration** (written in raw YAML, HCL, or JSON manifests for tools like Terraform, CloudFormation, or Kubernetes).

This operational separation introduces four critical friction points:

1. **Context Switching & Duplication**: Defining an S3 bucket name or API route in YAML requires duplicating resource identifiers and environment variables across your app code and infrastructure scripts.
2. **Over-Privileged Security (Wildcard IAM)**: Writing granular AWS IAM JSON policies manually is verbose and complex. Developers frequently resort to wildcard permissions (e.g. `Action: s3:*`), exposing cloud accounts to security risks.
3. **Runtime Configuration Disconnect**: Missing cloud resources or mismatched environment variable names are only discovered at deployment or runtime when an application crashes.
4. **State Drift & Friction**: Out-of-band modifications made via cloud consoles bypass version control, leading to untracked environment drift.

---

## How NovaServe Solves This

NovaServe eliminates the split between infrastructure and application code. With NovaServe:

- **Infrastructure is Application-Defined**: Cloud resources (`api`, `storage`, `queue`, `database`) are declared using type-safe primitives inside your TypeScript codebase.
- **Compiler-Driven Static Analysis**: NovaServe parses your TypeScript Abstract Syntax Tree (AST) at compile time. It understands which function calls reference which cloud resources.
- **Automated Least-Privilege IAM Synthesis**: When your route handler invokes `uploads.put()`, NovaServe automatically derives the exact permission scope (`s3:PutObject`) required for that specific resource ARN, eliminating wildcard permissions.
- **Multi-Cloud Intermediate Representation (Nova IR)**: Infrastructure state is compiled into a deterministic, provider-neutral representation before generating execution plans for AWS, Cloudflare Edge, Docker, or GCP.
- **Cryptographic State Locking & Drift Remediation**: Deployments enforce SHA-256 state locks. Running `nova drift --fix` audits live cloud resources and restores them to the code's exact state.

---

## Core Positioning

> **NovaServe is a cloud application compiler that transforms application definitions into deterministic infrastructure plans and provider-specific deployments.**

---

## Key Feature Matrix

| Feature | NovaServe | Traditional IaC (Terraform) | Code-based IaC (Pulumi / AWS CDK) |
| :--- | :--- | :--- | :--- |
| **Language** | Native TypeScript | HCL / Domain DSL | TypeScript / Python / Go |
| **Model** | Application-Defined Compiler | Infrastructure-only Provider | Infrastructure-only Imperative |
| **IAM Generation** | **Automated AST Inference** | Manual JSON / HCL | Manual Construct Bindings |
| **Local Emulation** | Built-in (`nova dev`) | Third-party / LocalStack | Limited / Provider Specific |
| **Multi-Cloud IR** | **Yes (Nova IR)** | Provider-Specific State | Provider-Specific State |
| **State Hashing** | SHA-256 Lockfile | Unhashed JSON State File | Unhashed JSON State File |

---

## Next Steps

- Proceed to [Installation](installation.md) to set up the `novaserve` CLI on your machine.
- Explore [Compiler Architecture](../concepts/compiler.md) to understand how AST transformation works under the hood.

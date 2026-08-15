# Deep System Architecture

This document presents the system architecture of NovaServe, its execution primitives, state isolation mechanisms, and hyper-scaler integration model.

---

## Architectural Principles

1. **Application-Defined Infrastructure**: Infrastructure declarations reside inside application code, allowing compiler-driven static optimization.
2. **Deterministic State Compilation**: Given identical source code ASTs, the compiler guarantees identical Nova IR schemas and SHA-256 state lock hashes.
3. **Zero-Trust Privilege Boundary**: Security roles and IAM policies are generated algorithmically by inspecting code AST references without human configuration.
4. **Cloud Hyper-scaler Abstraction**: Nova IR decouples high-level cloud abstractions (`api`, `storage`, `queue`, `database`) from provider specific APIs.

---

## High-Level System Architecture Diagram

```mermaid
graph TB
    subgraph Client Layer
        CLI["novaserve CLI Binary"]
        Config["nova.config.ts"]
        Code["App.ts Application AST"]
    end

    subgraph Compiler Core
        AST["TypeScript Compiler AST Parser"]
        DAG["Dependency Graph & IAM Engine"]
        IR["Nova IR Generator"]
    end

    subgraph State & Lock Layer
        StateFile[".nova/state.json"]
        Hash["SHA-256 Checksum Engine"]
    end

    subgraph Target Emitter Layer
        AWSDriver["AWS Provider Driver (Cloud Control API)"]
        CFDriver["Cloudflare Provider Driver (Workers API)"]
        DockerDriver["Docker OCI Driver (Build Context)"]
    end

    CLI --> Code
    Code --> AST
    AST --> DAG
    DAG --> IR
    IR --> Hash
    Hash --> StateFile
    IR --> AWSDriver
    IR --> CFDriver
    IR --> DockerDriver
```

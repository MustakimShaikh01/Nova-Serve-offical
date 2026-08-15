# Multi-Cloud Provider Abstraction Layer

This document describes NovaServe's provider model and resource mapping layer across cloud targets.

---

## Provider Architecture Model

NovaServe decouples your application logic from hyper-scaler vendor APIs using a target driver model. When you write code using primitives (`api`, `storage`, `queue`, `database`), the NovaServe compiler compiles those constructs into normalized Nova IR.

During `nova deploy --target <provider>`, the emitter delegates execution to the specified provider driver.

---

## Resource Mapping Across Cloud Targets

| NovaServe Primitive | AWS Target Driver | Cloudflare Edge Driver | Docker OCI Driver | GCP Target Driver `[Roadmap]` |
| :--- | :--- | :--- | :--- | :--- |
| `api.get / post` | AWS API Gateway v2 + Lambda | Workers Fetch Handler | Express / Fastify OCI Container | Cloud Run Service |
| `storage(name)` | Amazon S3 Bucket | Cloudflare R2 Bucket | Local Volume Mount | GCP Cloud Storage Bucket |
| `queue(name)` | Amazon SQS Queue | Cloudflare Queues | Redis / RabbitMQ Container | GCP Pub/Sub Topic |
| `database(name)` | Amazon DynamoDB / RDS | Cloudflare D1 SQL | PostgreSQL Container | GCP Cloud SQL / Firestore |

---

## Provider Stability Levels

NovaServe explicitly tags all provider integrations with stability indicators:

- **Stable**: Fully implemented, covered by unit/integration tests, recommended for production workloads.
- **Preview**: Implemented for testing, key features stable, breaking changes possible.
- **Experimental**: Early implementation, incomplete resource coverage, active development.
- **Roadmap / Planned**: Feature specified in architecture design, implementation in progress.

### Provider Status Matrix

- **AWS Provider**: **Stable** (Lambda, S3, SQS, API Gateway, IAM)
- **Cloudflare Provider**: **Stable** (Workers, R2, KV, D1)
- **Docker Provider**: **Preview** (OCI Container Multi-Stage Builds)
- **GCP Provider**: **Roadmap** (Cloud Run, Pub/Sub, Cloud Storage)

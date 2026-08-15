# Provider Support Reference & Matrix

This reference documents feature capabilities and stability tiers across supported NovaServe cloud targets.

---

## Stability Level Classifications

- **Stable**: Fully tested in production; covered by integration suites.
- **Preview**: Active implementation; available for testing.
- **Roadmap**: Planned architectural capability.

---

## Detailed Capability Matrix

| Feature / Resource | AWS Provider | Cloudflare Provider | Docker Target | GCP Provider `[Roadmap]` |
| :--- | :--- | :--- | :--- | :--- |
| **HTTP API Endpoints** | **Stable** (API Gateway v2) | **Stable** (Workers Fetch) | **Preview** (Express Container) | **Roadmap** (Cloud Run) |
| **Object Storage** | **Stable** (Amazon S3) | **Stable** (Cloudflare R2) | **Preview** (Local Volume) | **Roadmap** (Cloud Storage) |
| **Message Queues** | **Stable** (Amazon SQS) | **Stable** (CF Queues) | **Preview** (Redis / RabbitMQ) | **Roadmap** (Pub/Sub) |
| **Relational DB** | **Stable** (RDS Postgres) | **Stable** (D1 SQL) | **Preview** (Postgres Container) | **Roadmap** (Cloud SQL) |
| **IAM Policy Synthesis** | **Stable** (Zero Wildcards) | **Stable** (Worker Scopes) | N/A (Container Permissions)| **Roadmap** |
| **State Hashing** | **Stable** (SHA-256 Lock) | **Stable** (SHA-256 Lock) | **Stable** | **Roadmap** |

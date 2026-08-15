# `nova plan` Command Reference

The `nova plan` command previews deterministic infrastructure additions, updates, or deletions by comparing compiled Nova IR against your current deployment state lock.

---

## Syntax

```bash
nova plan [options]
```

---

## Options

- `--target <provider>`: Target cloud driver (`aws`, `cloudflare`, `docker`, `gcp`).
- `--env <namespace>`: Environment namespace (defaults to `production`).
- `--out <file>`: Save execution plan artifact to file.

---

## Example Output

```text
[NovaServe Plan] Target: AWS us-east-1 (Environment: production)

Resource Actions:
  + [CREATE] S3 Bucket: user-receipts-prod
  + [CREATE] SQS Queue: notification-queue-prod
  + [CREATE] Lambda Handler: POST /checkout
  ~ [UPDATE] API Gateway v2 CORS Configuration
  - [NO ACTION] IAM Role: ExecutionRole (Unchanged)

Plan Summary: 3 to create, 1 to update, 0 to destroy.
State Hash: a9f8e7d...
```

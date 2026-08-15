# State & Locking Mechanisms

This document covers NovaServe state management, state file structure, locking semantics, and state storage options.

---

## What is NovaServe State?

In Infrastructure as Code, **State** is the binding record between your code declarations and real-world cloud provider resource IDs (such as AWS Lambda ARNs, S3 bucket names, or Cloudflare Worker IDs).

Without a state record, IaC engines cannot determine whether a code change requires creating a new resource, updating an existing resource in-place, or deleting an obsolete resource.

---

## State File Location & Structure

By default, NovaServe stores local state in `.nova/state.json`:

```json
{
  "version": 1,
  "stateHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  "lastDeployedAt": "2026-08-15T21:16:00.000Z",
  "provider": "aws",
  "outputs": {
    "apiEndpoint": "https://a1b2c3d4.execute-api.us-east-1.amazonaws.com/tasks"
  },
  "resources": {
    "storage:user-uploads": {
      "providerId": "user-uploads-prod-us-east-1",
      "arn": "arn:aws:s3:::user-uploads-prod-us-east-1",
      "status": "PROVISIONED"
    },
    "queue:task-processing": {
      "providerId": "https://sqs.us-east-1.amazonaws.com/123456789012/task-processing",
      "arn": "arn:aws:sqs:us-east-1:123456789012:task-processing",
      "status": "PROVISIONED"
    }
  }
}
```

---

## State Locking & Concurrency Protection

To prevent race conditions during concurrent CI/CD deployments:

- **Local Lock**: `nova deploy` creates a `.nova/deploy.lock` file during active execution.
- **Remote Lock (AWS S3 / DynamoDB)**: When configured for team environments, NovaServe uses DynamoDB conditional writes to acquire a distributed lock before applying plans.

---

## Recommended Git Configuration

Add `.nova/deploy.lock` and local environment files to `.gitignore`:

```text
# .gitignore
.nova/deploy.lock
.env
.env.local
```

Commit `.nova/state.json` to version control only if using local file state for single-developer projects. For team workflows, configure a remote state backend in `nova.config.ts`.

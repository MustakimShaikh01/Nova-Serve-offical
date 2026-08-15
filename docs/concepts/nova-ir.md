# Nova Intermediate Representation (Nova IR)

This document describes the specification, schema, and serialization format of **Nova IR**, NovaServe's provider-neutral intermediate representation for cloud infrastructure.

---

## What is Nova IR?

Nova IR is a standardized, declarative JSON schema emitted by the NovaServe compiler after AST analysis and graph construction. It acts as an architectural boundary between application code definitions and cloud-specific provider drivers.

---

## Schema Structure Specification

A valid Nova IR payload contains five top-level objects:

```json
{
  "$schema": "https://novaserve.cloud/schemas/v1/ir.json",
  "version": "1.0.0",
  "meta": {
    "appName": "ecommerce-backend",
    "compilerVersion": "2.1.6",
    "timestamp": "2026-08-15T21:16:00.000Z",
    "stateHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
  },
  "resources": [
    {
      "id": "storage:user-uploads",
      "type": "novaserve/storage",
      "name": "user-uploads",
      "properties": {
        "public": false,
        "encryption": "AES256"
      },
      "dependencies": []
    },
    {
      "id": "queue:task-processing",
      "type": "novaserve/queue",
      "name": "task-processing",
      "properties": {
        "fifo": false,
        "retentionPeriodSeconds": 345600
      },
      "dependencies": []
    },
    {
      "id": "api:post-tasks",
      "type": "novaserve/api",
      "name": "create-task-handler",
      "properties": {
        "method": "POST",
        "path": "/tasks",
        "runtime": "nodejs20.x",
        "architecture": "arm64"
      },
      "dependencies": [
        "storage:user-uploads",
        "queue:task-processing"
      ]
    }
  ],
  "iam": {
    "roles": [
      {
        "name": "create-task-handler-role",
        "boundTo": "api:post-tasks",
        "permissions": [
          {
            "action": "s3:PutObject",
            "resource": "arn:aws:s3:::user-uploads/*"
          },
          {
            "action": "sqs:SendMessage",
            "resource": "arn:aws:sqs:us-east-1:123456789012:task-processing"
          }
        ]
      }
    ]
  }
}
```

---

## State Hashing Mechanism

Nova IR calculates a deterministic **SHA-256 state lock hash** across all normalized resource properties, ordering, and dependencies.

### Hash Calculation Rule

1. Sort all resources deterministically by `resource.id`.
2. Serialize properties into canonical JSON strings with key sorting.
3. Compute `SHA-256` checksum of the serialized payload.

This SHA-256 hash is saved to `.nova/state.json` and used by `nova drift` to verify deployment integrity.

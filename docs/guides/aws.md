# AWS Provider Guide

This guide covers deploying NovaServe applications to Amazon Web Services (AWS), including credentials, resource mapping, IAM policy synthesis, and multi-region deployment options.

---

## AWS Provider Prerequisites

Ensure you have configured AWS credentials with permissions to manage IAM roles, Lambda functions, S3 buckets, SQS queues, and API Gateway v2 endpoints:

```bash
export AWS_ACCESS_KEY_ID="AKIAXXXXXXXXXXXXXXXX"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export AWS_REGION="us-east-1"
```

---

## Configuration (`nova.config.ts`)

Configure AWS target defaults in your project's `nova.config.ts` file:

```typescript
import { defineConfig } from "novaserve";

export default defineConfig({
  target: "aws",
  aws: {
    region: "us-east-1",
    architecture: "arm64", // 'arm64' (AWS Graviton2) or 'x86_64'
    runtime: "nodejs20.x",
    memorySize: 512, // MB
    timeout: 10, // seconds
    s3: {
      forcePathStyle: false,
      sseAlgorithm: "AES256",
    },
  },
});
```

---

## Deployment Workflow

### 1. Compile & Plan
```bash
nova plan --target aws
```

### 2. Apply Deployment
```bash
nova deploy --target aws
```

---

## Provisioned AWS Resource Specifications

- **AWS Lambda**: Code handlers are bundled into ESZip/Zip assets and deployed with Node.js 20 on AWS Graviton2 (Arm64) for maximum price performance.
- **Amazon S3**: Storage buckets are created with public access blocks enabled by default and AES256 server-side encryption.
- **Amazon SQS**: Message queues are created with standard dead-letter queue (DLQ) retention policy support.
- **AWS API Gateway v2**: HTTP APIs are provisioned with payload version `2.0` and direct CORS policy support.
- **AWS IAM**: Execution roles are provisioned with minimal actions (`s3:PutObject`, `sqs:SendMessage`) bound strictly to the resource ARNs touched in code.

---

## Troubleshooting AWS Deployments

### Issue: `ExpiredToken` / `AccessDenied`
**Solution**: Verify environment variables using `nova doctor`. If using AWS SSO or temporary credentials, refresh your session with `aws sso login`.

### Issue: S3 Bucket Name Conflict (`BucketAlreadyExists`)
**Solution**: S3 bucket names are globally unique across all AWS accounts. Update your resource declaration in `App.ts` to include your organization or project prefix:
```typescript
export const uploads = storage("myorg-user-uploads-prod");
```

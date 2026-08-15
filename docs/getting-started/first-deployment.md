# Your First Deployment

In this tutorial, you will compile your TypeScript application into Nova Intermediate Representation (Nova IR), inspect the execution plan, and deploy your infrastructure to AWS.

---

## Step 1: Compile & Verify Infrastructure Plan (`nova plan`)

Before making live changes to your cloud provider account, run `nova plan` to compile your TypeScript code AST and inspect the exact infrastructure changes:

```bash
nova plan --target aws
```

**CLI Execution Output:**
```text
[1/4] Parsing TypeScript AST (App.ts)... (0.04s)
[2/4] Constructing Dependency Graph Engine... Done
[3/4] Synthesizing Least-Privilege IAM Policies... Done
[4/4] Serializing Nova IR (SHA-256 State Lock: e3b0c442...)... Done

Infrastructure Plan Summary:
+ Create S3 Bucket: user-uploads
+ Create SQS Queue: task-processing
+ Create AWS Lambda Function: POST /tasks (Node.js 20, Arm64)
+ Create API Gateway v2 HTTP Route: POST /tasks
+ Create Scoped IAM Role: my-nova-app-execution-role
  └── Scoped Action: s3:PutObject on arn:aws:s3:::user-uploads/*
  └── Scoped Action: sqs:SendMessage on arn:aws:sqs:us-east-1:123456789012:task-processing

Plan: 5 to add, 0 to change, 0 to destroy.
```

---

## Step 2: Execute Deployment (`nova deploy`)

Deploy your application to AWS:

```bash
nova deploy --target aws
```

**CLI Execution Output:**
```text
[NovaServe Deploy] Target Provider: AWS (us-east-1)
  ✓ Provisioned S3 Bucket: user-uploads (0.8s)
  ✓ Provisioned SQS Queue: task-processing (0.4s)
  ✓ Synthesized IAM Policy: my-nova-app-execution-role (1.1s)
  ✓ Bundled Lambda Asset & Uploaded (1.2s)
  ✓ Provisioned API Gateway v2 Endpoint (0.9s)
  ✓ Updated SHA-256 State Lock File (.nova/state.json)

Deployment Complete! 🚀
Endpoint URL: https://a1b2c3d4.execute-api.us-east-1.amazonaws.com/tasks
```

---

## Step 3: Test the Live Cloud Deployment

Test your production AWS deployment using `curl`:

```bash
curl -X POST https://a1b2c3d4.execute-api.us-east-1.amazonaws.com/tasks \
  -H "Content-Type: application/json" \
  -d '{"id": "prod-1", "action": "send_notification", "user": "bob"}'
```

**Response:**
```json
{
  "status": "created",
  "taskId": "prod-1",
  "timestamp": "2026-08-15T21:16:00.000Z"
}
```

---

## Step 4: Audit & Verify State Lock (`nova drift`)

NovaServe writes a cryptographic SHA-256 state lock hash into `.nova/state.json`. Run `nova drift` to verify that your live cloud environment matches your code state:

```bash
nova drift
```

**Expected Output:**
```text
[NovaServe Drift Audit] Comparing live cloud provider state against SHA-256 state lock...
  ✓ S3 Bucket (user-uploads): Synchronized
  ✓ SQS Queue (task-processing): Synchronized
  ✓ IAM Role (my-nova-app-execution-role): Synchronized
  ✓ Lambda Code Checksum: Synchronized

Result: 0 drift detected. Infrastructure state is 100% in sync with App.ts.
```

---

## Next Steps

- Explore [Core Concepts](../concepts/compiler.md) to understand the compiler pipeline.
- View the [AWS Provider Guide](../guides/aws.md) for advanced multi-region configurations.

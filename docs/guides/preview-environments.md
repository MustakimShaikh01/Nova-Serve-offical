# Ephemeral Preview Environments

This guide covers setting up ephemeral, pull-request-scoped cloud infrastructure environments using NovaServe environment namespacing.

---

## What is a Preview Environment?

A **Preview Environment** is a temporary, isolated deployment of your application stack created specifically for a pull request. Preview environments allow developers, QA testers, and reviewers to test live cloud endpoints in parallel without interfering with production infrastructure or shared staging environments.

---

## Environment Namespacing in NovaServe

NovaServe supports dynamic environment namespacing via the `--env` CLI flag or `NOVA_ENV` environment variable:

```bash
nova deploy --target aws --env pr-104
```

When an environment namespace is specified, NovaServe automatically prefixes resource names, S3 buckets, queues, and API Gateway paths:

- **S3 Bucket**: `user-uploads` -> `pr-104-user-uploads`
- **SQS Queue**: `task-processing` -> `pr-104-task-processing`
- **Lambda Function**: `my-nova-app` -> `pr-104-my-nova-app`

---

## Automated GitHub Actions Preview Flow

Add preview environment creation and teardown steps to your pull request workflow:

```yaml
name: Pull Request Preview Environment

on:
  pull_request:
    types: [opened, synchronize, reopened, closed]

jobs:
  preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Dependencies & NovaServe CLI
        run: |
          npm ci
          npm install -g novaserve@2.1.6

      - name: Configure AWS Credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      # 1. Deploy Ephemeral Environment on PR Open / Sync
      - name: Deploy Ephemeral Preview Environment
        if: github.event.action != 'closed'
        run: |
          nova deploy --target aws --env pr-${{ github.event.number }}

      # 2. Teardown Ephemeral Environment on PR Close / Merge
      - name: Teardown Ephemeral Preview Environment
        if: github.event.action == 'closed'
        run: |
          nova destroy --target aws --env pr-${{ github.event.number }} --force
```

---

## Benefits of NovaServe Preview Environments

1. **Zero Resource Collisions**: S3 bucket names and queues are uniquely isolated per pull request.
2. **Automated Teardown (`nova destroy`)**: Complete cleanup of all temporary cloud resources upon PR closure prevents orphaned cloud spending.
3. **Exact IAM Security Mirroring**: Preview environments synthesize identical, granular IAM policies as production.

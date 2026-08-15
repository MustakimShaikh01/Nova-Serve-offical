# Migrating from Serverless Framework to NovaServe

This guide covers migrating applications from Serverless Framework (`serverless.yml`) to NovaServe (`App.ts`).

---

## Direct Code Translation

### Before (`serverless.yml`)

```yaml
service: my-service
provider:
  name: aws
  runtime: nodejs20.x
  iamRoleStatements:
    - Effect: Allow
      Action:
        - s3:PutObject
      Resource: "arn:aws:s3:::my-uploads-bucket/*"

functions:
  createTask:
    handler: handler.createTask
    events:
      - httpApi:
          path: /tasks
          method: post

resources:
  Resources:
    MyUploadsBucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: my-uploads-bucket
```

---

### After (`App.ts` in NovaServe)

```typescript
import { defineApp, api, storage } from "novaserve";

export const app = defineApp({ name: "my-service", region: "us-east-1" });
export const uploads = storage("my-uploads-bucket");

export const createTask = api.post("/tasks", async (req) => {
  const body = await req.json();
  await uploads.put(`task-${body.id}.json`, JSON.stringify(body));
  return { status: "success" };
});
```

---

## Migration Benefits

1. **Delete 100+ Lines of YAML**: Replace complex `serverless.yml` and CloudFormation syntax with pure TypeScript.
2. **Zero IAM Policy Statements**: NovaServe synthesizes `s3:PutObject` automatically from `uploads.put()`.
3. **Local Dev Emulator**: Replace Serverless Offline plugins with sub-second `nova dev`.

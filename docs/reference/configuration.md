# Configuration Reference (`nova.config.ts`)

This document describes all configuration options supported in `nova.config.ts`.

---

## Example `nova.config.ts`

```typescript
import { defineConfig } from "novaserve";

export default defineConfig({
  name: "my-nova-app",
  target: "aws",
  region: "us-east-1",

  compiler: {
    strictAstValidation: true,
    optimizeMemoryMB: 512,
  },

  aws: {
    region: "us-east-1",
    architecture: "arm64",
    runtime: "nodejs20.x",
    memorySize: 512,
    timeout: 10,
    s3: {
      forcePathStyle: false,
      sseAlgorithm: "AES256",
    },
  },

  cloudflare: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    compatibilityDate: "2024-01-01",
  },

  state: {
    backend: "local", // 'local' or 's3'
    lockTable: "novaserve-locks",
  },
});
```

---

## Configuration Property Schema

- `name` *(string)*: Unique application identifier.
- `target` *('aws' | 'cloudflare' | 'docker' | 'gcp')*: Default cloud target provider.
- `region` *(string)*: Primary hyper-scaler cloud region (e.g. `us-east-1`, `eu-west-1`).
- `compiler.strictAstValidation` *(boolean)*: Fails build if undeclared primitives exist.
- `aws.architecture` *('arm64' | 'x86_64')*: CPU architecture for Lambda handlers.
- `state.backend` *('local' | 's3')*: State storage backend mechanism.

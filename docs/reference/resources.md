# Resource API Reference

This document provides the authoritative API reference for NovaServe's core primitives exported from the `novaserve` npm package.

---

## 1. `defineApp(options)`

Defines top-level application metadata.

```typescript
function defineApp(options: AppOptions): AppDefinition;
```

### Parameters
- `options.name` *(string)*: Unique application name.
- `options.region` *(string)*: Default target cloud region.

---

## 2. `storage(name, options)`

Declares an object storage bucket (Amazon S3 / Cloudflare R2 / GCP Cloud Storage).

```typescript
function storage(name: string, options?: StorageOptions): StorageBucket;
```

### Instance Methods
- `put(key: string, data: string | Buffer): Promise<void>`
  - Inferred Policy: `s3:PutObject`
- `get(key: string): Promise<Buffer>`
  - Inferred Policy: `s3:GetObject`
- `delete(key: string): Promise<void>`
  - Inferred Policy: `s3:DeleteObject`

---

## 3. `queue(name, options)`

Declares a message queue (Amazon SQS / Cloudflare Queues / GCP PubSub).

```typescript
function queue(name: string, options?: QueueOptions): MessageQueue;
```

### Instance Methods
- `push(message: any): Promise<void>`
  - Inferred Policy: `sqs:SendMessage`
- `pop(): Promise<any>`
  - Inferred Policy: `sqs:ReceiveMessage`, `sqs:DeleteMessage`

---

## 4. `api.get / post / put / delete(path, handler)`

Declares an HTTP API endpoint handler (AWS API Gateway v2 + Lambda / Cloudflare Workers).

```typescript
api.post(path: string, handler: (req: Request) => Promise<any>): HttpEndpoint;
```

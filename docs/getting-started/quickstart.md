# Quickstart: Build Your First Application

In this tutorial, you will build and test a type-safe serverless application locally using NovaServe in under 2 minutes.

---

## Step 1: Scaffold a New Project

Use the `nova init` CLI command to generate a pre-configured TypeScript application template:

```bash
nova init my-nova-app --template serverless-api
cd my-nova-app
```

### Generated Project Structure

```text
my-nova-app/
├── App.ts                 # Main application & infrastructure definition
├── nova.config.ts         # Compiler & provider target settings
├── package.json           # Node.js dependencies
└── tsconfig.json          # TypeScript compiler options
```

---

## Step 2: Define Infrastructure and Business Logic

Open `App.ts`. In NovaServe, cloud resources and application routes are declared natively in pure TypeScript:

```typescript
import { defineApp, api, storage, queue } from "novaserve";

// 1. Define main application metadata
export const app = defineApp({
  name: "my-nova-app",
  region: "us-east-1",
});

// 2. Declare an S3 storage bucket
export const uploads = storage("user-uploads", {
  public: false,
});

// 3. Declare an SQS message queue
export const taskQueue = queue("task-processing");

// 4. Declare an HTTP POST endpoint
export const createTaskApi = api.post("/tasks", async (req) => {
  const task = await req.json();

  // Save task payload to S3 storage bucket
  await uploads.put(`task-${task.id}.json`, JSON.stringify(task));

  // Enqueue task for background worker processing
  await taskQueue.push(task);

  return {
    status: "created",
    taskId: task.id,
    timestamp: new Date().toISOString(),
  };
});
```

---

## Step 3: Run the Local Emulator (`nova dev`)

Start NovaServe's sub-second local emulator:

```bash
nova dev
```

**CLI Terminal Output:**
```text
[NovaServe Emulator] Parsing App.ts AST... (0.04s)
[NovaServe Emulator] Resources detected:
  - HTTP API Endpoint: POST http://localhost:3000/tasks
  - Object Storage: user-uploads (Local Directory Emulation)
  - Message Queue: task-processing (In-Memory Queue Engine)

[NovaServe Emulator] Ready! Listening on http://localhost:3000
```

---

## Step 4: Test the HTTP Endpoint Locally

Open a new terminal and send a test HTTP request using `curl`:

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"id": "101", "action": "process_image", "user": "alice"}'
```

**Expected JSON Response:**
```json
{
  "status": "created",
  "taskId": "101",
  "timestamp": "2026-08-15T21:15:00.000Z"
}
```

Check your `nova dev` terminal window. You will see live request logs showing the HTTP payload, storage write, and queue push operations executed locally in under 200ms.

---

## Next Steps

- Proceed to [First Deployment](first-deployment.md) to compile and deploy your app to live cloud infrastructure.

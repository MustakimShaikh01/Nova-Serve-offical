# Static Analysis & AST Parsing

This document explains how NovaServe uses static AST parsing to discover infrastructure resources directly from TypeScript source code.

---

## What is an Abstract Syntax Tree (AST)?

An **Abstract Syntax Tree (AST)** is a tree structure representing the syntactic structure of source code. When you write TypeScript, the compiler breaks down strings of code into nested nodes representing variables, imports, call expressions, function definitions, and type references.

---

## How NovaServe Uses Static Analysis

Traditional IaC tools (like AWS CDK or Pulumi) evaluate your program by executing JavaScript/Python scripts imperatively at deploy time. If code evaluation hits a runtime error or unexpected external variable, evaluation fails.

NovaServe takes a **static compiler approach**:

1. **No Code Execution During Parsing**: NovaServe scans your source code using TypeScript's Compiler API without executing application logic.
2. **Primitive Recognition**: The parser scans call expressions matching exported NovaServe constructs:
   - `defineApp({...})`
   - `storage(name, options)`
   - `queue(name, options)`
   - `database(name, options)`
   - `api.get()`, `api.post()`, `api.put()`, `api.delete()`
3. **Property Extraction**: Literal parameters (such as bucket names, public flags, and route paths) are statically extracted from AST object literals.

---

## Code Example: AST Parsing Walkthrough

Consider the following `App.ts` code snippet:

```typescript
import { defineApp, api, storage } from "novaserve";

export const app = defineApp({ name: "analytics-app" });
export const logs = storage("system-logs", { public: false });

export const logApi = api.post("/log", async (req) => {
  const data = await req.json();
  await logs.put(`log-${Date.now()}.json`, JSON.stringify(data));
  return { ok: true };
});
```

### Extracted AST Call Expressions

During static analysis, the NovaServe parser identifies:

1. **App Node**: `name: "analytics-app"`
2. **Storage Node**: Identifier `logs`, Name `"system-logs"`, `public: false`.
3. **API Node**: Route `"POST /log"`, referencing identifier `logs` inside function scope.
4. **Method Calls inside Handler**: AST traversal finds `logs.put(...)`.

---

## Common Mistakes & Limitations

- **Dynamic Resource Names**: Resource names must be static string literals or statically resolvable expressions. Dynamic runtime construction (e.g. `storage("bucket-" + Math.random())`) cannot be parsed at compile time.
- **Top-Level Exports**: Resource primitives (`storage`, `queue`, `api`) must be exported at top-level scope so NovaServe can link dependencies.

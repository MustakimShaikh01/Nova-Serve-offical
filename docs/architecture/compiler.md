# Compiler Internals & AST Traversal

This document details the internal mechanisms of NovaServe's static analyzer, AST visitor pattern, and graph optimization algorithms.

---

## AST Visitor Pattern Implementation

The static analyzer implements a custom visitor pattern using the TypeScript Compiler API (`ts.createSourceFile`):

```typescript
import * as ts from "typescript";

export function analyzeAST(sourceCode: string): ParsedNodes {
  const sourceFile = ts.createSourceFile(
    "App.ts",
    sourceCode,
    ts.ScriptTarget.Latest,
    true
  );

  const resources: ResourceNode[] = [];

  function visit(node: ts.Node) {
    if (ts.isCallExpression(node)) {
      // 1. Identify NovaServe Primitives (storage, queue, api)
      const expressionText = node.expression.getText(sourceFile);
      if (expressionText === "storage") {
        resources.push(extractStorageNode(node, sourceFile));
      } else if (expressionText === "queue") {
        resources.push(extractQueueNode(node, sourceFile));
      }
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return { resources };
}
```

---

## Graph Optimization & Pruning

After node extraction:
1. **Unreachable Node Pruning**: Declared resources that are never referenced by application endpoints or workers are flagged during `--strict` compilation.
2. **Cycle Detection**: The DAG engine executes Tarjan's strongly connected components algorithm to guarantee the graph is acyclic before emitting Nova IR.

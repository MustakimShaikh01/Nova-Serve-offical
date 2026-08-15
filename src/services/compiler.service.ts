/**
 * SOLID Principle: Single Responsibility & Strategy Pattern
 * Encapsulates multi-language code compilation strategies and AST representations.
 */

export interface CodeLanguageStrategy {
  id: string;
  name: string;
  filename: string;
  color: string;
  iconName: string;
  code: string;
  targetServices: string[];
}

export class CompilerService {
  private static instance: CompilerService;

  private languages: CodeLanguageStrategy[] = [
    {
      id: "ts",
      name: "TypeScript",
      filename: "App.ts",
      color: "#3178C6",
      iconName: "TypeScript",
      code: `import { NovaApp, Lambda, EdgeKV } from "@novaserve/core";

const app = new NovaApp({ region: "multi-cloud" });
const kv = new EdgeKV("user-sessions");
const api = new Lambda("users-api", { memory: 512 });

export default app.deploy({ kv, api });`,
      targetServices: ["AWS Lambda", "Cloudflare Edge KV"],
    },
    {
      id: "python",
      name: "Python",
      filename: "main.py",
      color: "#3572A5",
      iconName: "Python",
      code: `import novaserve as nova

app = nova.App(region="multi-cloud")
kv = nova.EdgeKV("user-sessions")
api = nova.Lambda("users-api", memory=512)

app.deploy(kv=kv, api=api)`,
      targetServices: ["AWS Lambda", "Cloudflare Edge KV"],
    },
    {
      id: "go",
      name: "Go",
      filename: "main.go",
      color: "#00ADD8",
      iconName: "Go",
      code: `package main
import "github.com/novaserve/core/sdk"

func main() {
    app := sdk.NewApp("multi-cloud")
    kv  := sdk.NewEdgeKV("user-sessions")
    api := sdk.NewLambda("users-api")
    app.Deploy(kv, api)
}`,
      targetServices: ["AWS Lambda", "Cloudflare Edge KV"],
    },
    {
      id: "java",
      name: "Java",
      filename: "Application.java",
      color: "#b07219",
      iconName: "Java",
      code: `import com.novaserve.sdk.*;

public class Application {
    public static void main(String[] args) {
        var app = new NovaApp("multi-cloud");
        var kv  = new EdgeKV("user-sessions");
        var api = new Lambda("users-api");
        app.deploy(kv, api);
    }
}`,
      targetServices: ["AWS Lambda", "Cloudflare Edge KV"],
    },
    {
      id: "csharp",
      name: "C#",
      filename: "Program.cs",
      color: "#178600",
      iconName: "C#",
      code: `using NovaServe.Sdk;
using NovaServe.Aws;

return await Deployment.RunAsync(() => {
    var vpc = new NovaVpc("prod-vpc");
    var kv  = new EdgeKV("user-sessions");
    return new { VpcId = vpc.Id };
});`,
      targetServices: ["AWS VPC", "Cloudflare Edge KV"],
    },
    {
      id: "yaml",
      name: "YAML Spec",
      filename: "nova.yaml",
      color: "#cb171e",
      iconName: "YAML",
      code: `name: nova-multi-cloud-app
runtime: multi-lang
targets:
  - aws: lambda-arm64
  - cloudflare: workers-kv
resources:
  user-sessions:
    type: edge-kv`,
      targetServices: ["AWS Lambda", "Cloudflare Workers KV"],
    },
  ];

  public static getInstance(): CompilerService {
    if (!CompilerService.instance) {
      CompilerService.instance = new CompilerService();
    }
    return CompilerService.instance;
  }

  public getLanguages(): CodeLanguageStrategy[] {
    return this.languages;
  }

  public getLanguageById(id: string): CodeLanguageStrategy | undefined {
    return this.languages.find((lang) => lang.id === id);
  }
}

export const compilerService = CompilerService.getInstance();

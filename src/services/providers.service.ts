/**
 * SOLID Principle: Single Responsibility & Repository Pattern
 * Manages native cloud provider specifications and resource bindings with accurate stability tiers.
 */

export interface CloudProviderSpec {
  id: string;
  name: string;
  category: string;
  status: "Production-Ready" | "Experimental" | "Planned Roadmap";
  badge: string;
  badgeBg: string;
  resources: string[];
  desc: string;
}

export class ProvidersService {
  private static instance: ProvidersService;

  private providers: CloudProviderSpec[] = [
    {
      id: "local",
      name: "Local Emulator",
      category: "Developer Sandbox",
      status: "Production-Ready",
      badge: "PRODUCTION-READY",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
      resources: ["Hono HTTP Sandbox", "Local S3 Bucket Mock", "SQS Queue Mock", "SQLite / Memory DB"],
      desc: "Sub-200ms local development environment running entirely on your workstation without cloud credentials.",
    },
    {
      id: "aws",
      name: "Amazon Web Services (AWS)",
      category: "Target Cloud",
      status: "Production-Ready",
      badge: "PRODUCTION-READY",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300",
      resources: ["AWS Lambda (Node.js/Arm64)", "Amazon S3 Storage", "Amazon SQS Queues", "API Gateway v2"],
      desc: "Full production target compiler generating scoped IAM policies and deterministic CloudFormation/CDK plans.",
    },
    {
      id: "cloudflare",
      name: "Cloudflare Edge",
      category: "Edge Network",
      status: "Experimental",
      badge: "EXPERIMENTAL",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
      resources: ["Cloudflare Workers", "Workers KV Storage", "Cloudflare Queues"],
      desc: "Experimental target emitting V8 isolate worker bundles and Workers KV bindings.",
    },
    {
      id: "docker",
      name: "Docker Container Target",
      category: "Container Engine",
      status: "Experimental",
      badge: "EXPERIMENTAL",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300",
      resources: ["Docker Engine", "Docker Compose v2", "Multi-stage OCI Container Build"],
      desc: "Experimental target emitting optimized multi-stage Dockerfiles for local testing and container runtimes.",
    },
    {
      id: "gcp",
      name: "Google Cloud (GCP)",
      category: "Hyperscale Cloud",
      status: "Planned Roadmap",
      badge: "PLANNED ROADMAP",
      badgeBg: "bg-gray-100 text-gray-800 border-gray-300",
      resources: ["GCP Cloud Run", "Cloud Storage", "GCP Pub/Sub"],
      desc: "Planned provider adapter on our multi-cloud roadmap for Cloud Run and GCP Pub/Sub mapping.",
    },
    {
      id: "azure",
      name: "Microsoft Azure",
      category: "Enterprise Cloud",
      status: "Planned Roadmap",
      badge: "PLANNED ROADMAP",
      badgeBg: "bg-gray-100 text-gray-800 border-gray-300",
      resources: ["Azure Container Apps", "Blob Storage", "Azure Event Grid"],
      desc: "Planned provider adapter on our multi-cloud roadmap for Azure ARM template generation.",
    },
  ];

  public static getInstance(): ProvidersService {
    if (!ProvidersService.instance) {
      ProvidersService.instance = new ProvidersService();
    }
    return ProvidersService.instance;
  }

  public getProviders(): CloudProviderSpec[] {
    return this.providers;
  }

  public getProviderById(id: string): CloudProviderSpec | undefined {
    return this.providers.find((p) => p.id === id);
  }
}

export const providersService = ProvidersService.getInstance();

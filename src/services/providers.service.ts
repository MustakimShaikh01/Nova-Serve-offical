/**
 * SOLID Principle: Single Responsibility & Repository Pattern
 * Manages native cloud provider specifications and resource bindings.
 */

export interface CloudProviderSpec {
  id: string;
  name: string;
  category: string;
  status: string;
  color: string;
  badge: string;
  resources: string[];
  latency: string;
  sla: string;
  desc: string;
}

export class ProvidersService {
  private static instance: ProvidersService;

  private providers: CloudProviderSpec[] = [
    {
      id: "aws",
      name: "Amazon Web Services (AWS)",
      category: "Hyperscale Cloud",
      status: "100% OPERATIONAL",
      color: "#FF9900",
      badge: "TIER 1 PRIMARY",
      resources: ["AWS Lambda", "DynamoDB", "Amazon S3", "Amazon ECS / Fargate", "Route53", "AWS IAM", "CloudFront CDN"],
      latency: "12ms avg",
      sla: "99.999%",
      desc: "Native SDK compilation to CloudFormation / CDK AST primitives with sub-second execution.",
    },
    {
      id: "cloudflare",
      name: "Cloudflare Edge Engine",
      category: "Edge Anycast Network",
      status: "100% OPERATIONAL",
      color: "#F38020",
      badge: "GLOBAL EDGE",
      resources: ["Cloudflare Workers", "Workers KV", "Durable Objects", "Cloudflare D1 SQL", "R2 Object Storage", "Vectorize"],
      latency: "4ms avg",
      sla: "99.999%",
      desc: "Instant V8 isolates deployment across 320+ edge global PoPs with zero cold starts.",
    },
    {
      id: "docker",
      name: "Docker Container Spec",
      category: "Container Runtime",
      status: "100% OPERATIONAL",
      color: "#2496ED",
      badge: "PORTABLE IaC",
      resources: ["Docker Engine", "Docker Compose v2", "OCI Image Registry", "Kubernetes Pods", "Containerd Engine"],
      latency: "18ms avg",
      sla: "99.99%",
      desc: "Automated multi-stage Dockerfile compilation with slim layer optimization.",
    },
    {
      id: "gcp",
      name: "Google Cloud Platform (GCP)",
      category: "Hyperscale Cloud",
      status: "100% OPERATIONAL",
      color: "#4285F4",
      badge: "HIGH-COMPUTE",
      resources: ["GCP Cloud Run", "Firestore KV", "Cloud Storage", "BigQuery ML", "GCP Pub/Sub", "Artifact Registry"],
      latency: "14ms avg",
      sla: "99.99%",
      desc: "Direct integration with GCP IAM and Cloud Run container autoscaling engine.",
    },
    {
      id: "azure",
      name: "Microsoft Azure",
      category: "Enterprise Cloud",
      status: "100% OPERATIONAL",
      color: "#0089D6",
      badge: "ENTERPRISE",
      resources: ["Azure Functions", "Cosmos DB", "Blob Storage", "Azure Container Apps", "Key Vault", "Front Door"],
      latency: "16ms avg",
      sla: "99.99%",
      desc: "Enterprise Azure Active Directory (Entra ID) token binding and ARM template AST output.",
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

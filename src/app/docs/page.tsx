"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  BookOpen,
  Terminal,
  Cpu,
  Layers,
  ShieldCheck,
  Search,
  Copy,
  Check,
  ChevronRight,
  Zap,
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Boxes,
  Code2,
  Server,
  FileCode2,
  Lock,
  Sparkles,
  Command,
  Download,
  CheckCircle2,
  Hash,
  Globe,
  Share2,
  Scale,
  RefreshCw,
  FolderTree,
  User,
  Package,
  Activity,
  FileText,
  AlertTriangle,
  Heart,
  HelpCircle,
  Github,
  ChevronDown,
  Info,
} from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

interface CodeSnippet {
  filename: string;
  language: string;
  code: string;
}

interface ApiParam {
  name: string;
  type: string;
  description: string;
}

interface DocArticle {
  id: string;
  sidebarTitle: string;
  section: "Getting Started" | "Guides" | "API Reference" | "Examples" | "Resources";
  title: string;
  subtitle: string;
  description: string;
  version: string;
  lastUpdated: string;
  content?: string[];
  callout?: {
    type: "tip" | "note" | "warning" | "security";
    title: string;
    message: string;
  };
  installTabs?: boolean;
  codeSnippets?: CodeSnippet[];
  apiDetails?: {
    syntax: string;
    params: ApiParam[];
    returns: string;
    related: string[];
  };
  tableOfContents: { id: string; label: string }[];
}

const docArticles: DocArticle[] = [
  // GETTING STARTED SECTION
  {
    id: "introduction",
    sidebarTitle: "Introduction",
    section: "Getting Started",
    title: "Introduction to NovaServe",
    subtitle: "Build Fast. Deploy Anywhere. Scale Automatically.",
    description: "The modern open-source framework for building, deploying, and scaling cloud applications with pure TypeScript.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    callout: {
      type: "note",
      title: "Open Source & Free for Individuals",
      message: "NovaServe is 100% open source under the Apache-2.0 license. Free forever for independent builders, developers, and open-source projects."
    },
    content: [
      "Welcome to NovaServe! Maintained by Md Shadab Azam Ansari and Mustakim Shaikh, NovaServe bridges the gap between application logic and cloud infrastructure.",
      "Traditional DevOps forces developers to write application handlers in TypeScript while managing hundreds of lines of separate YAML or Terraform HCL files. This leads to configuration drift, security misconfigurations, and slow deployment pipelines.",
      "NovaServe solves this by treating cloud infrastructure as a compilation target. You declare resources—such as API endpoints, S3 storage buckets, SQS message queues, and PostgreSQL databases—natively in TypeScript.",
      "When you run `nova deploy`, NovaServe parses your TypeScript Abstract Syntax Tree (AST), infers exact least-privilege IAM policies, and generates deterministic cloud plans for AWS, Cloudflare Edge, Docker, and GCP."
    ],
    codeSnippets: [
      {
        filename: "App.ts",
        language: "typescript",
        code: `import { defineApp, api, storage, queue } from "novaserve";

export const app = defineApp({ name: "my-nova-app" });

// 1. Declare storage bucket & queue natively
export const uploads = storage("user-uploads");
export const ordersQueue = queue("order-processing");

// 2. Define HTTP endpoint with automatic IAM scoping
export const router = api.post("/checkout", async (req) => {
  const data = await req.json();
  await uploads.put(\`order-\${data.id}.json\`, JSON.stringify(data));
  await ordersQueue.push(data);
  return { status: "created", id: data.id };
});`
      }
    ],
    tableOfContents: [
      { id: "overview", label: "Overview & Mission" },
      { id: "the-problem", label: "Traditional IaC Problems" },
      { id: "how-novaserve-works", label: "How NovaServe Works" },
      { id: "next-steps", label: "Next Steps" }
    ]
  },
  {
    id: "installation",
    sidebarTitle: "Installation",
    section: "Getting Started",
    title: "Installing NovaServe",
    subtitle: "Install the `novaserve` CLI and package across npm, pnpm, yarn, or bun.",
    description: "NovaServe supports all major Node.js package managers on macOS, Linux, and Windows.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    installTabs: true,
    callout: {
      type: "tip",
      title: "Global CLI Recommendation",
      message: "We recommend installing `novaserve` globally to use the `nova` terminal command anywhere on your machine."
    },
    content: [
      "To start building with NovaServe, install the official package into your project or globally as a CLI tool.",
      "System Requirements:",
      "• Node.js version 18.0.0 or higher (Node 20+ recommended)",
      "• TypeScript 5.0+ installed in your project",
      "• Git for version control and state checksum tracking"
    ],
    tableOfContents: [
      { id: "install-command", label: "Package Manager Commands" },
      { id: "requirements", label: "System Requirements" },
      { id: "verify-install", label: "Verifying Installation" }
    ]
  },
  {
    id: "quick-start",
    sidebarTitle: "Quick Start (5-Min)",
    section: "Getting Started",
    title: "5-Minute Quick Start Guide",
    subtitle: "Scaffold, test locally, and deploy your first cloud app in under 5 minutes.",
    description: "Follow this step-by-step guide to get a working NovaServe serverless API running on your machine.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    content: [
      "Step 1: Scaffold a new project using the NovaServe CLI:",
      "`nova init my-first-app`",
      "Step 2: Change into the directory and install dependencies:",
      "`cd my-first-app && npm install`",
      "Step 3: Start the instant local emulator sandbox (`sub-200ms` hot-reloading):",
      "`nova dev`",
      "Step 4: Test your local endpoint:",
      "`curl http://localhost:3000/api/hello`",
      "Expected Response: `{\"message\":\"Hello from NovaServe!\"}`"
    ],
    codeSnippets: [
      {
        filename: "App.ts",
        language: "typescript",
        code: `import { defineApp, api } from "novaserve";

export const app = defineApp({ name: "my-first-app" });

export const hello = api.get("/api/hello", async () => {
  return { message: "Hello from NovaServe!", timestamp: Date.now() };
});`
      }
    ],
    tableOfContents: [
      { id: "step-1", label: "1. Scaffold Project" },
      { id: "step-2", label: "2. Install Dependencies" },
      { id: "step-3", label: "3. Run Local Sandbox" },
      { id: "step-4", label: "4. Test Endpoint" }
    ]
  },
  {
    id: "project-structure",
    sidebarTitle: "Project Structure",
    section: "Getting Started",
    title: "Project Directory Structure",
    subtitle: "Recommended file organization for scalable NovaServe applications.",
    description: "Learn how NovaServe discovers application modules, environment variables, and cloud configurations.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    content: [
      "NovaServe projects follow a clean, intuitive layout where code and infrastructure definition coexist seamlessly.",
      "Standard Project Layout:",
      "├── App.ts                 # Main application & resource definitions",
      "├── nova.config.ts         # Multi-cloud target & deployment config",
      "├── src/",
      "│   ├── routes/            # Route handlers & controller logic",
      "│   ├── services/          # Business logic & external API clients",
      "│   └── models/            # TypeScript interfaces & database schemas",
      "├── package.json",
      "└── tsconfig.json"
    ],
    tableOfContents: [
      { id: "layout-overview", label: "Directory Layout" },
      { id: "app-ts", label: "The App.ts Entrypoint" },
      { id: "nova-config", label: "The nova.config.ts File" }
    ]
  },

  // GUIDES SECTION
  {
    id: "basic-usage",
    sidebarTitle: "Basic Usage",
    section: "Guides",
    title: "Basic Usage & Route Handling",
    subtitle: "Define HTTP routes, request validation, and JSON responses with full type-safety.",
    description: "Learn how to build clean, RESTful APIs with NovaServe's intuitive route handlers.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    content: [
      "NovaServe provides a lightweight, expressive API for defining HTTP endpoints (GET, POST, PUT, DELETE, PATCH).",
      "Handlers accept a standard `Request` object and return JSON objects, Response instances, or streams.",
      "All route parameters are automatically parsed and typed."
    ],
    codeSnippets: [
      {
        filename: "src/routes/users.ts",
        language: "typescript",
        code: `import { api } from "novaserve";

// GET Route with query params
export const getUsers = api.get("/users", async (req) => {
  const url = new URL(req.url);
  const limit = url.searchParams.get("limit") || "10";
  return { users: [], limit: parseInt(limit, 10) };
});

// POST Route with body parsing
export const createUser = api.post("/users", async (req) => {
  const body = await req.json();
  if (!body.email) {
    return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
  }
  return { id: "usr_123", email: body.email };
});`
      }
    ],
    tableOfContents: [
      { id: "http-methods", label: "HTTP Methods" },
      { id: "request-parsing", label: "Request & Query Parsing" },
      { id: "responses", label: "JSON & Custom Responses" }
    ]
  },
  {
    id: "configuration",
    sidebarTitle: "Configuration",
    section: "Guides",
    title: "NovaServe Configuration (`nova.config.ts`)",
    subtitle: "Customize build targets, cloud regions, and environment variable bindings.",
    description: "Configure options for AWS Lambda, Cloudflare Workers, Docker, and GCP Cloud Run.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    content: [
      "The `nova.config.ts` file lives at the root of your project and controls how NovaServe compiles and deploys your codebase."
    ],
    codeSnippets: [
      {
        filename: "nova.config.ts",
        language: "typescript",
        code: `import { defineConfig } from "novaserve/config";

export default defineConfig({
  project: "my-cloud-app",
  target: "aws", // Options: "aws" | "cloudflare" | "docker" | "gcp"
  aws: {
    region: "us-east-1",
    architecture: "arm64", // Graviton2 cost optimization
    memorySize: 512,
  },
  cloudflare: {
    compatibilityDate: "2026-08-01",
  },
});`
      }
    ],
    tableOfContents: [
      { id: "config-options", label: "Configuration Options" },
      { id: "target-providers", label: "Target Provider Options" },
      { id: "env-vars", label: "Environment Variables" }
    ]
  },

  // API REFERENCE SECTION
  {
    id: "define-app",
    sidebarTitle: "defineApp()",
    section: "API Reference",
    title: "Core API: `defineApp(options)`",
    subtitle: "Initializes the NovaServe application container.",
    description: "The root initialization call that configures application namespace, version, and global middleware.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    apiDetails: {
      syntax: "defineApp({ name: string, version?: string, region?: string }): NovaApp",
      params: [
        { name: "name", type: "string", description: "Unique application identifier used in cloud resource naming." },
        { name: "version", type: "string (optional)", description: "Semantic version tag applied to deployment artifacts." },
        { name: "region", type: "string (optional)", description: "Default cloud region (e.g., 'us-east-1', 'eu-west-1')." }
      ],
      returns: "Returns a configured NovaApp instance for route registration.",
      related: ["api", "storage", "queue", "database"]
    },
    codeSnippets: [
      {
        filename: "App.ts",
        language: "typescript",
        code: `import { defineApp } from "novaserve";

export const app = defineApp({
  name: "billing-service",
  version: "2.1.0",
  region: "us-east-1",
});`
      }
    ],
    tableOfContents: [
      { id: "syntax", label: "Syntax & Parameters" },
      { id: "examples", label: "Code Example" },
      { id: "returns", label: "Return Value" }
    ]
  },
  {
    id: "api-gateway",
    sidebarTitle: "api.get() / api.post()",
    section: "API Reference",
    title: "HTTP Gateway: `api.<method>(path, handler)`",
    subtitle: "Registers HTTP endpoints with automatic IAM scoping.",
    description: "Binds serverless route handlers to API Gateway v2, Cloudflare Workers, or GCP HTTP triggers.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    apiDetails: {
      syntax: "api.get(path: string, handler: (req: Request) => Promise<any>): RouteRef",
      params: [
        { name: "path", type: "string", description: "URL path pattern (e.g. '/items/:id')." },
        { name: "handler", type: "AsyncFunction", description: "Request handler callback receiving standard Fetch Request." }
      ],
      returns: "Returns a compiled RouteRef handle.",
      related: ["defineApp", "storage"]
    },
    codeSnippets: [
      {
        filename: "src/routes/api.ts",
        language: "typescript",
        code: `import { api } from "novaserve";

export const getItem = api.get("/items/:id", async (req) => {
  return { id: "123", name: "Cloud Server" };
});`
      }
    ],
    tableOfContents: [
      { id: "syntax", label: "Syntax & Parameters" },
      { id: "examples", label: "Code Example" }
    ]
  },
  {
    id: "storage",
    sidebarTitle: "storage()",
    section: "API Reference",
    title: "Object Storage: `storage(bucketName, options)`",
    subtitle: "Declares S3 or Cloudflare R2 object storage buckets.",
    description: "Provisions cloud object storage with automatic IAM write/read permission synthesis.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    apiDetails: {
      syntax: "storage(name: string, options?: StorageOptions): StorageBucket",
      params: [
        { name: "name", type: "string", description: "Storage bucket name." },
        { name: "public", type: "boolean (optional)", description: "Whether public HTTP read access is enabled. Default: false." }
      ],
      returns: "StorageBucket instance with .get(), .put(), .delete() methods.",
      related: ["api", "queue"]
    },
    codeSnippets: [
      {
        filename: "App.ts",
        language: "typescript",
        code: `import { storage, api } from "novaserve";

export const avatars = storage("user-avatars", { public: true });

export const uploadAvatar = api.post("/avatar", async (req) => {
  const blob = await req.arrayBuffer();
  await avatars.put("avatar-1.png", blob);
  return { status: "uploaded" };
});`
      }
    ],
    tableOfContents: [
      { id: "syntax", label: "Syntax & Parameters" },
      { id: "examples", label: "Code Example" }
    ]
  },
  {
    id: "queue",
    sidebarTitle: "queue()",
    section: "API Reference",
    title: "Message Queue: `queue(queueName, options)`",
    subtitle: "Provisions AWS SQS or Cloudflare Queues for asynchronous processing.",
    description: "Declarative event queues with automatic batching, retry policies, and dead-letter queues.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    apiDetails: {
      syntax: "queue(name: string, options?: QueueOptions): EventQueue",
      params: [
        { name: "name", type: "string", description: "Queue resource identifier." },
        { name: "maxRetries", type: "number (optional)", description: "Maximum retry attempts before DLQ. Default: 3." }
      ],
      returns: "EventQueue instance with .push() and .process() methods.",
      related: ["api", "storage"]
    },
    codeSnippets: [
      {
        filename: "App.ts",
        language: "typescript",
        code: `import { queue } from "novaserve";

export const emailQueue = queue("send-emails");

// Push message to queue
await emailQueue.push({ to: "dev@example.com", subject: "Welcome!" });

// Process queue messages
emailQueue.process(async (batch) => {
  for (const msg of batch) {
    console.log("Sending email to:", msg.to);
  }
});`
      }
    ],
    tableOfContents: [
      { id: "syntax", label: "Syntax & Parameters" },
      { id: "examples", label: "Code Example" }
    ]
  },

  // EXAMPLES SECTION
  {
    id: "real-world-example",
    sidebarTitle: "Serverless API Example",
    section: "Examples",
    title: "Real-World E-Commerce Serverless API",
    subtitle: "Complete working backend with S3 storage, SQS queues, and HTTP routes.",
    description: "Learn how to build a production-grade e-commerce checkout backend with NovaServe.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    content: [
      "This example demonstrates a complete serverless application combining HTTP route handlers, S3 document storage, and SQS queue processing."
    ],
    codeSnippets: [
      {
        filename: "src/server.ts",
        language: "typescript",
        code: `import { defineApp, api, storage, queue } from "novaserve";

export const app = defineApp({ name: "ecommerce-backend" });

export const invoices = storage("customer-invoices");
export const fulfillmentQueue = queue("order-fulfillment");

export const checkout = api.post("/checkout", async (req) => {
  const order = await req.json();
  const invoicePdf = \`Invoice for order #\${order.id}\`;
  
  await invoices.put(\`inv_\${order.id}.txt\`, invoicePdf);
  await fulfillmentQueue.push({ orderId: order.id, items: order.items });
  
  return { success: true, orderId: order.id };
});`
      }
    ],
    tableOfContents: [
      { id: "architecture", label: "Example Architecture" },
      { id: "code", label: "Complete Code" }
    ]
  },

  // RESOURCES SECTION
  {
    id: "faq",
    sidebarTitle: "FAQ & Troubleshooting",
    section: "Resources",
    title: "Frequently Asked Questions & Troubleshooting",
    subtitle: "Common questions about deployment, state locks, and compiler error resolution.",
    description: "Find quick answers to common questions about NovaServe and multi-cloud compilation.",
    version: "v2.1.6",
    lastUpdated: "August 15, 2026",
    content: [
      "Q: Is NovaServe completely free?",
      "A: Yes! NovaServe is 100% open source under the Apache-2.0 license and free for individuals.",
      "Q: How does NovaServe differ from Terraform or Pulumi?",
      "A: Terraform and Pulumi require writing separate imperative scripts or CDK manifests. NovaServe compiles your application code AST directly into IAM policies and deployment plans automatically.",
      "Q: What happens if someone modifies a cloud console setting manually?",
      "A: Running `nova drift` will detect the SHA-256 checksum mismatch, and `nova drift --fix` will restore your cloud resources to your code's exact state."
    ],
    tableOfContents: [
      { id: "licensing", label: "Licensing & Open Source" },
      { id: "comparison", label: "NovaServe vs Terraform" },
      { id: "drift-fix", label: "Fixing Console Drift" }
    ]
  }
];

export default function DocsPage() {
  const [activeArticleId, setActiveArticleId] = useState<string>("introduction");
  const [activeInstallTab, setActiveInstallTab] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm");
  const [selectedVersion, setSelectedVersion] = useState<string>("v2.1.6");
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentArticle = docArticles.find((a) => a.id === activeArticleId) || docArticles[0];
  const currentIdx = docArticles.findIndex((a) => a.id === activeArticleId);
  const prevArticle = currentIdx > 0 ? docArticles[currentIdx - 1] : null;
  const nextArticle = currentIdx < docArticles.length - 1 ? docArticles[currentIdx + 1] : null;

  // Keyboard shortcut listener for Command+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIndex(idx);
    setTimeout(() => setCopiedSnippetIndex(null), 2000);
  };

  const getInstallCmd = (pkg: "npm" | "pnpm" | "yarn" | "bun") => {
    switch (pkg) {
      case "npm":
        return "npm install -g novaserve";
      case "pnpm":
        return "pnpm add -g novaserve";
      case "yarn":
        return "yarn global add novaserve";
      case "bun":
        return "bun add -g novaserve";
    }
  };

  const filteredSearchArticles = docArticles.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.section.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-24 pb-24 selection:bg-[#FFB020]/40 selection:text-black">
      
      {/* Search Bar / Header Sub-Bar for Docs */}
      <div className="border-b border-gray-200 bg-gray-50/50 py-3 sticky top-16 z-30 backdrop-blur-md">
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 font-semibold truncate">
            <Link href="/" prefetch={true} className="hover:text-black transition-colors">
              Docs
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-700">{currentArticle.section}</span>
            <ChevronRight className="w-3 h-3 text-gray-400" />
            <span className="text-gray-900 font-bold truncate">{currentArticle.sidebarTitle}</span>
          </div>

          {/* Controls: Search Trigger & Version Selector */}
          <div className="flex items-center space-x-3">
            {/* Version Dropdown */}
            <div className="relative">
              <select
                value={selectedVersion}
                onChange={(e) => setSelectedVersion(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-2.5 py-1 text-xs font-mono font-bold text-gray-800 focus:outline-none focus:border-[#FFB020] cursor-pointer"
              >
                <option value="v2.1.6">v2.1.6 (Latest)</option>
                <option value="v2.0.0">v2.0.0</option>
                <option value="v1.x">v1.x (Legacy)</option>
              </select>
            </div>

            {/* Quick Search Button */}
            <button
              onClick={() => setSearchModalOpen(true)}
              className="px-3 py-1.5 rounded-lg bg-white border border-gray-300 text-xs font-mono text-gray-500 hover:text-black hover:border-[#FFB020] flex items-center space-x-2 shadow-xs cursor-pointer transition-all"
            >
              <Search className="w-3.5 h-3.5 text-gray-400" />
              <span className="hidden sm:inline">Search docs...</span>
              <kbd className="hidden sm:inline bg-gray-100 border border-gray-300 px-1.5 py-0.5 rounded text-[10px] text-gray-600 font-mono font-bold">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </div>

      {/* Main Documentation Grid Container */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-8">
        
        {/* Mobile Topic Selector */}
        <div className="lg:hidden mb-6">
          <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
            Select Documentation Page:
          </label>
          <select
            value={activeArticleId}
            onChange={(e) => setActiveArticleId(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-mono text-gray-900 font-bold outline-none focus:border-[#FFB020]"
          >
            {docArticles.map((art) => (
              <option key={art.id} value={art.id}>
                {art.section} › {art.sidebarTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT SIDEBAR NAVIGATION */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-4 shadow-xs font-mono text-sm sticky top-32 space-y-5 max-h-[80vh] overflow-y-auto">
              
              {["Getting Started", "Guides", "API Reference", "Examples", "Resources"].map((sec) => {
                const sectionArticles = docArticles.filter((a) => a.section === sec);
                return (
                  <div key={sec} className="space-y-1.5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 px-2">
                      {sec}
                    </div>
                    {sectionArticles.map((art) => {
                      const isActive = art.id === currentArticle.id;
                      return (
                        <button
                          key={art.id}
                          onClick={() => setActiveArticleId(art.id)}
                          className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center justify-between cursor-pointer ${
                            isActive
                              ? "bg-[#FFB020] text-black font-extrabold shadow-xs"
                              : "text-gray-700 hover:text-black hover:bg-gray-200/70 font-semibold"
                          }`}
                        >
                          <span className="truncate">{art.sidebarTitle}</span>
                        </button>
                      );
                    })}
                  </div>
                );
              })}

              {/* Free & Open Source Badge in Sidebar */}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 font-sans space-y-1">
                  <div className="text-xs font-black text-gray-900 flex items-center space-x-1.5">
                    <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                    <span>Open source and free for individuals.</span>
                  </div>
                  <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                    Licensed under Apache-2.0. Completely free for independent builders.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN DOCUMENTATION CONTENT */}
          <main className="lg:col-span-6 space-y-8">
            
            {/* Article Header */}
            <div className="space-y-3 border-b border-gray-200 pb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-mono font-bold">
                  {currentArticle.version} • {currentArticle.section}
                </span>
                <span className="text-gray-500 font-semibold">{currentArticle.lastUpdated}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                {currentArticle.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
                {currentArticle.subtitle}
              </p>
            </div>

            {/* Optional Callout Box */}
            {currentArticle.callout && (
              <div
                className={`p-5 rounded-2xl border text-xs sm:text-sm font-sans leading-relaxed space-y-1 shadow-xs ${
                  currentArticle.callout.type === "note"
                    ? "bg-amber-50 border-amber-300 text-amber-950 border-l-4 border-l-[#FFB020]"
                    : currentArticle.callout.type === "tip"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950 border-l-4 border-l-emerald-500"
                    : currentArticle.callout.type === "warning"
                    ? "bg-red-50 border-red-300 text-red-950 border-l-4 border-l-red-500"
                    : "bg-indigo-50 border-indigo-300 text-indigo-950 border-l-4 border-l-indigo-500"
                }`}
              >
                <div className="font-extrabold text-gray-900 flex items-center space-x-1.5">
                  <Info className="w-4 h-4 text-amber-600" />
                  <span>{currentArticle.callout.title}</span>
                </div>
                <p className="text-gray-700 font-medium">{currentArticle.callout.message}</p>
              </div>
            )}

            {/* Main Article Paragraphs */}
            {currentArticle.content && currentArticle.content.length > 0 && (
              <div className="space-y-4 text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                {currentArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            )}

            {/* Installation Tabs Component (if article has installTabs) */}
            {currentArticle.installTabs && (
              <div className="space-y-3 rounded-2xl bg-gray-900 text-white p-5 border border-gray-800 shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-800 pb-3">
                  <div className="flex items-center space-x-2">
                    {(["npm", "pnpm", "yarn", "bun"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveInstallTab(tab)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                          activeInstallTab === tab
                            ? "bg-[#FFB020] text-black shadow"
                            : "text-gray-400 hover:text-white"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => handleCopyCode(getInstallCmd(activeInstallTab), 99)}
                    className="text-xs text-gray-400 hover:text-[#FFB020] font-mono flex items-center space-x-1 transition-colors cursor-pointer"
                  >
                    {copiedSnippetIndex === 99 ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="font-mono text-xs text-[#FFB020] py-2">
                  $ {getInstallCmd(activeInstallTab)}
                </div>
              </div>
            )}

            {/* API Reference Parameters & Returns Section */}
            {currentArticle.apiDetails && (
              <div className="space-y-6 pt-4">
                {/* Syntax signature */}
                <div className="space-y-2">
                  <h3 className="text-sm font-mono font-bold text-gray-500 uppercase tracking-wider">Syntax Signature</h3>
                  <div className="p-4 rounded-xl bg-gray-900 text-[#FFB020] font-mono text-xs sm:text-sm border border-gray-800">
                    {currentArticle.apiDetails.syntax}
                  </div>
                </div>

                {/* Parameters Table */}
                <div className="space-y-2">
                  <h3 className="text-sm font-mono font-bold text-gray-500 uppercase tracking-wider">Parameters</h3>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-left text-xs font-sans">
                      <thead className="bg-gray-100 border-b border-gray-200 text-gray-700 font-mono uppercase font-bold">
                        <tr>
                          <th className="p-3">Parameter</th>
                          <th className="p-3">Type</th>
                          <th className="p-3">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-800">
                        {currentArticle.apiDetails.params.map((param, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="p-3 font-mono font-bold text-amber-700">{param.name}</td>
                            <td className="p-3 font-mono text-gray-600">{param.type}</td>
                            <td className="p-3 font-medium">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Return Value */}
                <div className="space-y-1">
                  <h3 className="text-sm font-mono font-bold text-gray-500 uppercase tracking-wider">Returns</h3>
                  <p className="text-xs sm:text-sm text-gray-800 font-medium">{currentArticle.apiDetails.returns}</p>
                </div>
              </div>
            )}

            {/* Code Snippets */}
            {currentArticle.codeSnippets && (
              <div className="space-y-4 pt-4">
                <div className="rounded-2xl bg-gray-950 border border-gray-800 shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-gray-900 border-b border-gray-800 text-xs font-mono text-gray-300">
                    <span className="flex items-center space-x-2">
                      <FileCode2 className="w-4 h-4 text-amber-500" />
                      <span>{currentArticle.codeSnippets[0].filename}</span>
                    </span>
                    <button
                      onClick={() => handleCopyCode(currentArticle.codeSnippets![0].code, 0)}
                      className="px-3 py-1 rounded-lg bg-[#FFB020] hover:bg-[#FFC44D] text-black font-extrabold transition-all text-[11px] cursor-pointer shadow-xs"
                    >
                      {copiedSnippetIndex === 0 ? "Copied!" : "Copy Code"}
                    </button>
                  </div>
                  <pre className="p-5 text-xs sm:text-sm font-mono text-gray-100 overflow-x-auto leading-relaxed">
                    <code>{currentArticle.codeSnippets[0].code}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Pagination Previous / Next Links */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              {prevArticle ? (
                <button
                  onClick={() => setActiveArticleId(prevArticle.id)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 hover:border-[#FFB020] hover:bg-amber-50 text-gray-800 font-bold flex items-center space-x-2 transition-all cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-amber-600" />
                  <span>Previous: {prevArticle.sidebarTitle}</span>
                </button>
              ) : <div />}

              {nextArticle ? (
                <button
                  onClick={() => setActiveArticleId(nextArticle.id)}
                  className="px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white font-bold flex items-center space-x-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Next: {nextArticle.sidebarTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB020]" />
                </button>
              ) : <div />}
            </div>

            {/* Edit this page on GitHub */}
            <div className="pt-4 flex items-center justify-between text-xs font-mono text-gray-500">
              <a
                href="https://github.com/novaserve-cloud/novaserve"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black flex items-center space-x-1.5 font-semibold transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Edit this page on GitHub ↗</span>
              </a>
              <span>Updated August 2026</span>
            </div>
          </main>

          {/* RIGHT SIDEBAR (On This Page TOC) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-4 shadow-xs sticky top-32 space-y-4">
              <div className="text-xs font-mono uppercase font-bold tracking-wider text-gray-500 border-b border-gray-200 pb-2">
                On this page
              </div>

              <div className="space-y-1 font-mono text-xs">
                {currentArticle.tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="block text-gray-600 hover:text-black hover:bg-gray-200/60 p-1.5 rounded-md transition-all font-medium truncate"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-200 space-y-2 font-mono text-xs">
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                  Open Source Project Links
                </div>
                <div className="flex flex-col space-y-2 text-gray-800 font-semibold">
                  <a
                    href="https://www.npmjs.com/package/novaserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-700 flex items-center space-x-1.5 transition-colors"
                  >
                    <Package className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>NPM Package (v2.1.6)</span>
                  </a>
                  <a
                    href="https://github.com/novaserve-cloud/novaserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-700 flex items-center space-x-1.5 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-gray-900 shrink-0" />
                    <span>GitHub: novaserve-cloud</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>

      {/* SEARCH MODAL (Command + K) */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-24 p-4">
          <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl border border-gray-200 overflow-hidden space-y-4 p-4">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                autoFocus
                placeholder="Search documentation, APIs, commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 font-mono font-semibold focus:outline-none focus:border-[#FFB020]"
              />
              <button
                onClick={() => setSearchModalOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-gray-400 hover:text-black"
              >
                ESC
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-2">
              {filteredSearchArticles.length === 0 ? (
                <div className="text-center py-8 text-xs text-gray-500 font-mono">
                  No matching documentation articles found.
                </div>
              ) : (
                filteredSearchArticles.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      setActiveArticleId(art.id);
                      setSearchModalOpen(false);
                    }}
                    className="p-3 rounded-xl bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-[#FFB020] transition-all cursor-pointer space-y-1"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-gray-900">{art.title}</span>
                      <span className="text-[10px] text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                        {art.section}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 line-clamp-1 font-sans">{art.subtitle}</p>
                  </div>
                ))
              )}
            </div>

            <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>Navigate with arrow keys</span>
              <span>ESC to close</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

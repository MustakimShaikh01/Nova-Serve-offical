"use client";

import { useState } from "react";
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
  Smile
} from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

interface DocArticle {
  id: string;
  sidebarTitle: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  lastUpdated: string;
  content: string[];
  codeSnippets?: {
    filename: string;
    language: string;
    code: string;
  }[];
  interactiveSnippet?: {
    target: string;
    status: string;
    inputCode: string;
    outputLog: string;
    explanation: string;
  };
  tableOfContents: { id: string; label: string }[];
}

const docArticles: DocArticle[] = [
  {
    id: "getting-started",
    sidebarTitle: "1. What is NovaServe?",
    category: "Getting Started",
    title: "1. What is NovaServe?",
    subtitle: "The simple, TypeScript-native way to build, compile, and deploy serverless cloud applications.",
    description: "Think of NovaServe as your TypeScript-powered supercharger for cloud development. If you have ever felt frustrated by writing hundreds of lines of YAML or wrestling with complex CloudFormation and Terraform scripts just to deploy a basic serverless API, NovaServe was built for you.",
    badge: "novaserve@2.1.6 • Public",
    lastUpdated: "1,046 Weekly Downloads • Apache-2.0 License",
    content: [
      "Welcome to NovaServe! Maintained by Md Shadab Azam Ansari and Mustakim Shaikh, NovaServe makes cloud infrastructure simple, fast, and 100% type-safe for modern software engineers.",
      "Traditional cloud development forces developers to juggle separate application code and complex infrastructure config files (like raw YAML, CloudFormation, or HCL scripts). This leads to syntax errors, forgotten permissions, and slow deployment cycles.",
      "NovaServe solves this by bringing infrastructure directly inside your TypeScript project. You declare high-level cloud resources—such as HTTP API gateways, serverless compute functions, PostgreSQL databases, message queues, S3 storage, and scheduled cron workers—natively in TypeScript.",
      "When you execute `nova deploy`, NovaServe compiles your code into a unified Intermediate Representation (IR) state graph, infers least-privilege IAM policies, and deploys your resources deterministically with zero manual configuration."
    ],
    interactiveSnippet: {
      target: "AWS Lambda & Cloudflare KV Edge",
      status: "Verified Zero-Drift Compiled AST",
      inputCode: `import { defineApp, api, storage } from "novaserve";
export default defineApp({ name: "my-nova-app" });`,
      outputLog: `✓ AST parsed in 0.04s\n✓ Synthesized IAM policy with zero wildcards\n✓ Deployed to AWS us-east-1 and Cloudflare Edge PoPs`,
      explanation: "NovaServe automatically isolates compute handlers and provisions minimal IAM policies at compile time."
    },
    codeSnippets: [
      {
        filename: "App.ts",
        language: "typescript",
        code: `import { defineApp, api, storage, queue } from "novaserve";

export const app = defineApp({
  name: "ecommerce-backend",
  region: "us-east-1",
});

// 1. Storage Bucket
export const uploads = storage("user-uploads", { public: false });

// 2. Event Queue
export const orderQueue = queue("order-processing");

// 3. HTTP API Endpoint with IAM & S3 bindings
export const httpApi = api.post("/orders", async (req) => {
  const order = await req.json();
  await uploads.put(\`order-\${order.id}.json\`, JSON.stringify(order));
  await orderQueue.push(order);
  return { status: "success", orderId: order.id };
});`
      }
    ],
    tableOfContents: [
      { id: "overview", label: "Overview & Mission" },
      { id: "how-it-works", label: "How Compiling Works" },
      { id: "cli-install", label: "CLI Installation" },
      { id: "next-steps", label: "Next Steps" }
    ]
  },
  {
    id: "architecture",
    sidebarTitle: "2. Architecture Overview",
    category: "Core Architecture",
    title: "2. Compiler Pipeline Architecture",
    subtitle: "Understand how NovaServe converts TypeScript code ASTs into multi-cloud deployments.",
    description: "Unlike traditional terraform tools that manipulate cloud provider APIs imperatively, NovaServe treats infrastructure as a compilation target.",
    lastUpdated: "Updated August 2026",
    content: [
      "The NovaServe architecture consists of 4 deterministic pipeline stages: AST Parser, Dependency Graph Engine, Intermediate Representation (IR) Generator, and Cloud Target Emitter.",
      "1. AST Parser: Extracts all static resource calls (api, storage, database, queue) from your TypeScript source code in 0.04 seconds.",
      "2. Graph Engine: Builds an execution DAG (Directed Acyclic Graph) of resource dependencies and constructs strict least-privilege IAM policies without wildcards.",
      "3. IR Generator: Serializes your architecture into a cryptographic SHA-256 state lock hash to prevent manual state drift.",
      "4. Target Emitter: Translates the state graph into native provider manifests for AWS (Lambda, S3, SQS), Cloudflare (Workers KV), Docker, and GCP."
    ],
    tableOfContents: [
      { id: "ast-parser", label: "1. AST Parser Stage" },
      { id: "graph-engine", label: "2. Graph Engine Stage" },
      { id: "ir-generator", label: "3. IR Generator Stage" },
      { id: "target-emitter", label: "4. Target Emitter Stage" }
    ]
  },
  {
    id: "cli-reference",
    sidebarTitle: "3. CLI Command Guide",
    category: "Tooling",
    title: "3. Complete CLI Command Reference",
    subtitle: "Learn every terminal command provided by the `novaserve` CLI binary.",
    description: "The NovaServe CLI provides sub-second feedback for local development, state verification, and production deployments.",
    lastUpdated: "CLI v2.1.6",
    content: [
      "Here are the core CLI commands you will use daily:",
      "• `nova init <name>`: Scaffolds a new NovaServe app with pre-configured multi-cloud templates.",
      "• `nova dev`: Starts the instant local emulator with live-reload for API routes, queues, and storage in sub-200ms.",
      "• `nova plan`: Compiles your TypeScript AST and previews exact cloud infrastructure changes before applying.",
      "• `nova deploy`: Executes a deterministic deployment and updates your SHA-256 state checksum lock.",
      "• `nova drift`: Audits your live cloud account against your state lock and fixes manual drift automatically."
    ],
    tableOfContents: [
      { id: "nova-init", label: "nova init" },
      { id: "nova-dev", label: "nova dev" },
      { id: "nova-plan", label: "nova plan" },
      { id: "nova-deploy", label: "nova deploy" }
    ]
  },
  {
    id: "providers",
    sidebarTitle: "4. Cloud Target Support",
    category: "Targets",
    title: "4. Supported Cloud Targets & Runtimes",
    subtitle: "Deploy to AWS, Cloudflare Edge, Docker OCI containers, and GCP Cloud Run without code modifications.",
    description: "NovaServe decouples your application logic from hyper-scaler APIs, giving you true cloud portability.",
    lastUpdated: "Updated August 2026",
    content: [
      "NovaServe natively supports the following target providers out of the box:",
      "• AWS Target: Lambda (Node.js/Arm64), S3, SQS, API Gateway v2, DynamoDB, RDS Postgres.",
      "• Cloudflare Target: Workers Edge, KV Storage, R2 Storage, D1 SQL, Durable Objects.",
      "• Docker / Container Target: Multi-stage OCI images compiled for Kubernetes & ECS.",
      "• GCP Target: Cloud Run container instances, Pub/Sub, Cloud Storage."
    ],
    tableOfContents: [
      { id: "aws", label: "Amazon Web Services (AWS)" },
      { id: "cloudflare", label: "Cloudflare Edge" },
      { id: "docker", label: "Docker OCI Images" },
      { id: "gcp", label: "Google Cloud Platform" }
    ]
  },
  {
    id: "security",
    sidebarTitle: "5. Security & IAM Synthesis",
    category: "Security",
    title: "5. Automated Least-Privilege IAM Policies",
    subtitle: "How NovaServe eliminates security vulnerabilities by deriving IAM permissions directly from AST references.",
    description: "Security misconfigurations account for over 80% of cloud security incidents. NovaServe prevents over-privileged access by default.",
    lastUpdated: "SOC 2 Compliant",
    content: [
      "In traditional IaC, developers often grant wildcard permissions (e.g. `Action: s3:*`) because writing exact IAM JSON is tedious.",
      "NovaServe analyzes your code during compilation. If your route handler invokes `uploads.put()`, NovaServe synthesizes an IAM policy scoped strictly to `s3:PutObject` on that specific bucket ARN.",
      "This guarantees zero-trust security and guarantees your application adheres to SOC 2 Type II compliance standards."
    ],
    tableOfContents: [
      { id: "wildcard-risk", label: "The Risk of Wildcard IAM" },
      { id: "ast-synthesis", label: "Automated Policy Synthesis" },
      { id: "soc2-compliance", label: "SOC 2 Audit Compliance" }
    ]
  },
  {
    id: "deployment",
    sidebarTitle: "6. Production Zero-Drift Deployments",
    category: "Production",
    title: "6. Zero-Drift State Locks & Rollbacks",
    subtitle: "Ensure 100% reproducible deployments with SHA-256 state lock verification.",
    description: "Stop worrying about someone modifying a cloud console setting manually. NovaServe enforces state locking at deployment time.",
    lastUpdated: "Updated August 2026",
    content: [
      "Whenever `nova deploy` runs, NovaServe generates a SHA-256 cryptographic hash of your application state.",
      "If a developer or automated script manually changes a cloud security group or S3 bucket setting outside of NovaServe, `nova drift` will detect the checksum mismatch.",
      "You can run `nova drift --fix` to instantly restore your cloud infrastructure to your exact code state."
    ],
    tableOfContents: [
      { id: "state-locking", label: "SHA-256 State Locks" },
      { id: "drift-detection", label: "Drift Detection Pass" },
      { id: "rollback-engine", label: "1-Click Rollback Engine" }
    ]
  }
];

export default function DocsPage() {
  const [activeArticleId, setActiveArticleId] = useState<string>("getting-started");
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);
  const [copiedBanner, setCopiedBanner] = useState<boolean>(false);

  const currentArticle = docArticles.find((a) => a.id === activeArticleId) || docArticles[0];

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("npm install -g novaserve");
    setCopiedBanner(true);
    setTimeout(() => setCopiedBanner(false), 2000);
  };

  const handleCopySnippet = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetIndex(idx);
    setTimeout(() => setCopiedSnippetIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-24 pb-24 selection:bg-[#FFB020]/40 selection:text-black">
      {/* Full Screen Width Workspace Container (Pulumi Layout Style) */}
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 pt-4">
        
        {/* Mobile Quick Topic Switcher Dropdown */}
        <div className="lg:hidden mb-6">
          <label className="block text-xs font-mono font-bold text-gray-700 uppercase mb-2">
            Select Documentation Topic:
          </label>
          <select
            value={activeArticleId}
            onChange={(e) => setActiveArticleId(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-mono text-gray-900 font-bold outline-none focus:border-[#FFB020]"
          >
            {docArticles.map((art) => (
              <option key={art.id} value={art.id} className="bg-white text-gray-900 font-medium">
                {art.sidebarTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* LEFT SIDEBAR (Pulumi-Exact Typography & Navigation Hierarchy) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-4">
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-4 shadow-xs space-y-1.5 font-mono text-sm sticky top-28">
              <div className="px-2 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gray-500 border-b border-gray-200 mb-2 flex items-center justify-between">
                <span>DOCUMENTATION DIRECTORY</span>
                <span className="px-2 py-0.5 rounded bg-[#FFB020] text-black font-extrabold text-[10px]">OPEN SOURCE</span>
              </div>

              {docArticles.map((art) => {
                const isActive = art.id === currentArticle.id;
                return (
                  <button
                    key={art.id}
                    onClick={() => setActiveArticleId(art.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-[#FFB020] text-black shadow-sm font-extrabold ring-1 ring-[#FFB020]"
                        : "text-gray-700 hover:text-black hover:bg-gray-200/70"
                    }`}
                  >
                    <span className="truncate">{art.sidebarTitle}</span>
                  </button>
                );
              })}

              <div className="pt-3 border-t border-gray-200 space-y-1">
                <a
                  href="https://github.com/sazamansari/NovaServe-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-gray-700 hover:text-black hover:bg-gray-200/70 flex items-center justify-between transition-colors"
                >
                  <span>GitHub Repository ↗</span>
                </a>
                <a
                  href="https://www.npmjs.com/package/novaserve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-gray-700 hover:text-black hover:bg-gray-200/70 flex items-center justify-between transition-colors"
                >
                  <span>NPM Package (2.1.6) ↗</span>
                </a>
                <a
                  href="https://md-shadab-azam-ansari.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-gray-700 hover:text-black hover:bg-gray-200/70 flex items-center justify-between transition-colors"
                >
                  <span>Author Portfolio ↗</span>
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CENTER CONTENT (Pulumi Content Sizing: H1 text-4xl/5xl, Subtitle text-lg/xl, Body text-base leading-7) */}
          <main className="lg:col-span-6 space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
              <Home className="w-3.5 h-3.5 text-gray-500" />
              <span>›</span>
              <span className="text-gray-900 font-bold uppercase">{currentArticle.category}</span>
            </div>

            {/* Article Header Title */}
            <div className="space-y-3 border-b border-gray-200 pb-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {currentArticle.title}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-normal leading-relaxed">
                {currentArticle.subtitle}
              </p>
            </div>

            {/* Header Open Source Callout Banner */}
            {currentArticle.id === "getting-started" && (
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 space-y-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
                <div className="space-y-1.5">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-amber-700" />
                    <h3 className="text-base font-bold text-gray-900">
                      NovaServe is 100% Free & Open Source
                    </h3>
                  </div>
                  <p className="text-xs text-gray-700 font-medium max-w-md leading-relaxed">
                    Published under the Apache-2.0 open-source license by Md Shadab Azam Ansari & Mustakim Shaikh.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="px-2.5 py-1 rounded-lg bg-[#FFB020] text-black text-xs font-mono font-extrabold shadow-xs">
                      OPEN SOURCE (Apache-2.0)
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-950 text-xs font-mono font-bold border border-emerald-300">
                      1,046 Weekly Downloads
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-950 text-xs font-mono font-bold border border-blue-300">
                      v2.1.6
                    </span>
                  </div>
                </div>

                {/* Quick 1-Click Install Command */}
                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2 w-full md:w-auto shrink-0 z-10 shadow-md">
                  <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">Quick Install Open Source CLI</div>
                  <div className="flex items-center space-x-2 bg-slate-900 px-3.5 py-2.5 rounded-xl text-xs font-mono text-gray-100 border border-slate-800">
                    <code className="text-[#FFB020] font-bold">npm i -g novaserve</code>
                    <button
                      onClick={handleCopyInstall}
                      className="px-3 py-1 rounded-lg bg-[#FFB020] hover:bg-[#FFC44D] text-black font-extrabold text-[11px] transition-all cursor-pointer shadow-xs"
                    >
                      {copiedBanner ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Description Summary Callout Box */}
            <div className="bg-amber-50/80 border-l-4 border-[#FFB020] p-5 rounded-r-2xl shadow-xs text-base sm:text-lg text-gray-900 font-bold leading-relaxed space-y-4">
              <div className="font-extrabold text-gray-900">
                {currentArticle.description}
              </div>

              {currentArticle.content.map((paragraph, index) => (
                <p key={index} className="text-gray-800 text-base font-normal leading-7">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interactive Playground Spec */}
            {currentArticle.interactiveSnippet && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-amber-700" />
                  <h3 className="text-xs font-mono font-bold text-gray-900 uppercase tracking-wider">
                    Interactive Playground Spec
                  </h3>
                </div>

                <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 shadow-xl text-white">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs font-mono text-[#FFB020] font-bold">
                      Target: {currentArticle.interactiveSnippet.target}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">
                      {currentArticle.interactiveSnippet.status}
                    </span>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs text-gray-300">
                    <div>
                      Code Spec:{" "}
                      <span className="text-white font-bold">{currentArticle.interactiveSnippet.inputCode}</span>
                    </div>
                    <div>
                      Compilation Output:{" "}
                      <span className="text-emerald-400 font-bold">{currentArticle.interactiveSnippet.outputLog}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed border-t border-slate-800/80 pt-3">
                    {currentArticle.interactiveSnippet.explanation}
                  </p>
                </div>
              </div>
            )}

            {/* Code Snippets Viewer Box */}
            {currentArticle.codeSnippets && currentArticle.codeSnippets.length > 0 && (
              <div className="space-y-2 pt-2">
                <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono text-gray-200">
                    <span className="font-bold flex items-center gap-2">
                      <FileCode2 className="w-3.5 h-3.5 text-[#FFB020]" />
                      <span>{currentArticle.codeSnippets[0]?.filename}</span>
                    </span>
                    <button
                      onClick={() =>
                        handleCopySnippet(currentArticle.codeSnippets![0]?.code || "", 0)
                      }
                      className="px-3 py-1 rounded-lg bg-[#FFB020] hover:bg-[#FFC44D] text-black font-extrabold transition-all text-[11px] cursor-pointer shadow-xs"
                    >
                      {copiedSnippetIndex === 0 ? "Copied!" : "Copy Code"}
                    </button>
                  </div>

                  <pre className="p-5 text-xs sm:text-sm font-mono text-gray-100 overflow-x-auto leading-relaxed max-h-[440px]">
                    <code>{currentArticle.codeSnippets[0]?.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </main>

          {/* RIGHT SIDEBAR ("On this page" TOC - Pulumi Style) */}
          <aside className="lg:col-span-3 space-y-4">
            <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-4 shadow-xs sticky top-28 space-y-4">
              <div className="text-xs font-mono uppercase font-bold tracking-wider text-gray-500 border-b border-gray-200 pb-2">
                On this page
              </div>

              <div className="space-y-1 font-mono text-xs sm:text-sm">
                {currentArticle.tableOfContents.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.id}`}
                    className="block text-gray-600 hover:text-black hover:bg-gray-100 p-1.5 rounded-md transition-all font-medium truncate"
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
                    <span>NPM Package (2.1.6)</span>
                  </a>
                  <a
                    href="https://github.com/sazamansari/NovaServe-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-700 flex items-center space-x-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-gray-900 shrink-0" />
                    <span>GitHub: sazamansari</span>
                  </a>
                  <a
                    href="https://github.com/MustakimShaikh01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-700 flex items-center space-x-1.5 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>GitHub: MustakimShaikh01</span>
                  </a>
                  <a
                    href="https://md-shadab-azam-ansari.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-700 flex items-center space-x-1.5 transition-colors"
                  >
                    <User className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                    <span>Author Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

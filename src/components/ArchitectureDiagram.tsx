"use client";

import { useState } from "react";
import { Cpu, Layers, Boxes, ShieldCheck, Zap, ArrowRight, FileCode2, CheckCircle2 } from "lucide-react";
import { DiamondIcon, AwsIcon, CloudflareIcon, DockerIcon } from "./Icons";

interface StageData {
  title: string;
  desc: string;
  badge: string;
  inputTitle: string;
  inputDesc: string;
  transformTitle: string;
  transformDesc: string;
  targetTitle: string;
  targetDesc: string;
  codeSnippet: string;
}

export function ArchitectureDiagram() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: StageData[] = [
    {
      title: "1. AST Parser",
      desc: "Extracts application resources and security parameters",
      badge: "Parsing Pass • 0.04s",
      inputTitle: "TypeScript nova.config.ts",
      inputDesc: "Esbuild AST Static Evaluation",
      transformTitle: "Type & Security Analysis",
      transformDesc: "Extracts api, storage, queue & secrets",
      targetTitle: "Validated AST Nodes",
      targetDesc: "Type-checked resource primitives",
      codeSnippet: `// Stage 1: Esbuild AST Parser (0.04s)
import { parseNovaConfig } from "@novaserve/core";

const ast = await parseNovaConfig("nova.config.ts");
// Extracts: API routes, PostgreSQL DB, S3 Bucket, SQS Queue`
    },
    {
      title: "2. Graph Engine",
      desc: "Resolves inter-resource dependencies & network topology",
      badge: "DAG Solver • 0.08s",
      inputTitle: "Resource Primitive Tree",
      inputDesc: "Nodes: API, S3, DB, Queue, Cron",
      transformTitle: "Topological Cycle Solver",
      transformDesc: "Kahn's DAG algorithm execution",
      targetTitle: "Deterministic DAG Graph",
      targetDesc: "Zero cyclic references (0 cycles)",
      codeSnippet: `// Stage 2: DAG Dependency Solver
const graph = buildDependencyGraph(ast.resources);

const executionOrder = graph.topologicalSort();
// Output: [Database -> Queue -> Storage -> API]`
    },
    {
      title: "3. IR Emission",
      desc: "Generates multi-provider Intermediate Representation AST",
      badge: "Nova IR 1.0.0 • SHA-256",
      inputTitle: "Topological Execution Graph",
      inputDesc: "Vendor-Neutral Primitive DAG",
      transformTitle: "SHA-256 Hashing & Auto-IAM",
      transformDesc: "Generates least-privilege IAM JSON",
      targetTitle: "Portable Nova IR Artifact",
      targetDesc: "Canonical SHA-256 verified blueprint",
      codeSnippet: `{
  "irVersion": "1.0.0",
  "sha256": "8f9b2c4e1a709...",
  "iamPolicies": [{ "Action": ["s3:GetObject"], "Resource": "arn:aws:s3:::uploads/*" }]
}`
    },
    {
      title: "4. Provider Target",
      desc: "Emits native AWS, Cloudflare & Docker manifests",
      badge: "Cloud Adapter • Deploy",
      inputTitle: "Verified Nova IR Blueprint",
      inputDesc: "Vendor-Neutral Specification",
      transformTitle: "Diff Engine & Cost Planner",
      transformDesc: "Create / Update / Replace diffs",
      targetTitle: "Atomic Cloud Deployment",
      targetDesc: "AWS Lambda, Cloudflare R2, Docker, Hono",
      codeSnippet: `// Stage 4: Cloud Provider Deployment
const adapter = getProviderAdapter(options.provider);
const result = await adapter.deploy(irArtifact);

// Success: Deployed to AWS ap-south-1 in 2.1s`
    }
  ];

  const current = stages[activeStage];

  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>INTERACTIVE ARCHITECTURE SCHEMATIC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            NovaServe Compiler Pipeline
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            Select a stage below to inspect how NovaServe transforms source code into zero-drift cloud deployments.
          </p>
        </div>

        {/* Stage Selection Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          {stages.map((stg, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`p-4 rounded-2xl border text-left font-mono transition-all cursor-pointer ${
                activeStage === i
                  ? "bg-[#FFB020] text-black border-[#FFB020] font-black shadow-lg scale-102"
                  : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 font-bold"
              }`}
            >
              <div className="text-xs uppercase opacity-90">{stg.title}</div>
              <div className="text-[11px] mt-1 line-clamp-1 opacity-80">{stg.desc}</div>
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Stage Display Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200 shadow-2xl space-y-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 pb-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFB020] text-black p-1.5 flex items-center justify-center font-bold shadow-md">
                <DiamondIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-black text-gray-900">{current.title} Details</h3>
                <p className="text-xs text-gray-500 font-semibold">{current.desc}</p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono text-xs font-bold">
              {current.badge}
            </span>
          </div>

          {/* 3 Step Cards: Input -> Transformation -> Output */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            
            {/* Input Spec */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-wider">
                1. INPUT SPEC
              </span>
              <div className="text-sm font-black text-gray-900">{current.inputTitle}</div>
              <div className="text-xs text-gray-600 font-medium">{current.inputDesc}</div>
            </div>

            {/* Transformation Pass */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
              <span className="text-[10px] font-mono text-amber-900 uppercase font-extrabold tracking-wider">
                2. TRANSFORMATION PASS
              </span>
              <div className="text-sm font-black text-gray-900">{current.transformTitle}</div>
              <div className="text-xs text-gray-700 font-medium">{current.transformDesc}</div>
            </div>

            {/* Target Emission */}
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <span className="text-[10px] font-mono text-gray-500 uppercase font-bold tracking-wider">
                3. TARGET EMISSION
              </span>
              <div className="text-sm font-black text-gray-900 flex items-center space-x-2">
                <span>{current.targetTitle}</span>
                {activeStage === 3 && (
                  <span className="flex items-center space-x-1.5 shrink-0 ml-1">
                    <AwsIcon size={14} />
                    <CloudflareIcon size={14} />
                    <DockerIcon size={14} />
                  </span>
                )}
              </div>
              <div className="text-xs text-emerald-700 font-bold">{current.targetDesc}</div>
            </div>

          </div>

          {/* Dynamic Code & Terminal Snippet Box */}
          <div className="rounded-2xl bg-[#0B0C12] border border-[#212534] p-4 overflow-hidden space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 border-b border-[#1E2336] pb-2">
              <span className="flex items-center space-x-2">
                <FileCode2 className="w-3.5 h-3.5 text-[#FFB020]" />
                <span className="font-bold text-gray-200">{current.title} Inspection Code</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1F2436] text-[#38BDF8] font-bold">
                Nova Compiler Output
              </span>
            </div>
            <pre className="text-xs font-mono text-gray-200 overflow-x-auto p-2 leading-relaxed">
              <code>{current.codeSnippet}</code>
            </pre>
          </div>

        </div>
      </div>
    </section>
  );
}

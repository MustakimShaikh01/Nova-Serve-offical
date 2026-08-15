import { FileText, GitCommit, CheckCircle2, Zap } from "lucide-react";

export default function ChangelogPage() {
  const releases = [
    {
      version: "v2.1.6",
      date: "August 15, 2026",
      title: "Full Production Architecture & Open Source Release",
      features: [
        "Published official open-source package novaserve@2.1.6 to NPM registry",
        "Deterministic SHA-256 state verification & automated least-privilege IAM policy generator",
        "Full support for AWS Lambda, S3, SQS, API Gateway v2 & local Hono emulator",
      ],
      diff: `+ import { defineApp, api, storage } from "novaserve";
+ export default defineApp({ name: "my-nova-app" });`,
    },
    {
      version: "v1.4.2",
      date: "August 10, 2026",
      title: "Zero-Drift State Lock Checksumming & OTel Spans",
      features: [
        "Added SHA-256 cryptographic state checksum verification pass",
        "OpenTelemetry distributed tracing headers automatically compiled into binaries",
        "Sub-second deployment pipeline performance optimizations for AWS us-east-1",
      ],
      diff: `+ const stateHash = sha256(compiledIR);
+ assertZeroDrift(stateHash);`,
    },
    {
      version: "v1.4.0",
      date: "July 24, 2026",
      title: "GCP Cloud Run & Pinecone Vector Store Integration",
      features: [
        "Introduced GCP Cloud Run target provider compilation",
        "Native VectorStore primitive for AI RAG inference apps",
        "Multi-stage Dockerfile automatic layer optimization",
      ],
      diff: `+ import { GPUWorker, VectorStore } from "@novaserve/core";
+ export const model = new GPUWorker("llama-3");`,
    },
    {
      version: "v1.3.0",
      date: "June 18, 2026",
      title: "Cloudflare Workers KV & Anycast Edge Sharding",
      features: [
        "Sub-5ms global KV read latency via 320 Cloudflare PoPs",
        "Automatic sharding between AWS Lambda and Cloudflare Edge",
        "Instant zero-downtime rollback CLI engine",
      ],
      diff: `+ export const cache = new EdgeKV("global-sessions");`,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold">
            <FileText className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>OPEN SOURCE RELEASE HISTORY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            NovaServe Changelog
          </h1>
          <p className="text-base text-gray-600 font-medium">
            Continuous improvements to the open-source cloud application compiler.
          </p>
        </div>

        <div className="space-y-8">
          {releases.map((rel, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-lg bg-[#FFB020] text-black font-mono font-extrabold text-sm shadow-sm">
                    {rel.version}
                  </span>
                  <h2 className="text-xl font-extrabold text-gray-900">{rel.title}</h2>
                </div>
                <span className="text-xs font-mono text-gray-500 font-bold">{rel.date}</span>
              </div>

              <ul className="space-y-2 text-xs font-mono text-gray-700">
                {rel.features.map((f, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-gray-800">{f}</span>
                  </li>
                ))}
              </ul>

              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto">
                <code>{rel.diff}</code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Boxes, Copy, Check, Terminal, ArrowRight, ExternalLink } from "lucide-react";

export default function ExamplesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const templates = [
    {
      id: "nextjs-edge",
      title: "Next.js 15 + Cloudflare Edge KV",
      desc: "Full-stack SSR web app compiled to Cloudflare Workers and AWS RDS Postgres.",
      cloneCmd: "nova init my-app --template nextjs-edge",
      badge: "WEB & FULL-STACK",
      accent: "#D97706",
    },
    {
      id: "ai-rag-pipeline",
      title: "Streaming AI RAG Pipeline",
      desc: "Real-time vector search API sharded to Pinecone and AWS EC2 GPU worker pool.",
      cloneCmd: "nova init my-app --template ai-rag-pipeline",
      badge: "AI & ML WORKLOADS",
      accent: "#059669",
    },
    {
      id: "gcp-cloud-run",
      title: "Docker Microservice on GCP Cloud Run",
      desc: "Containerized order fulfillment microservice with Pub/Sub queue bindings.",
      cloneCmd: "nova init my-app --template gcp-cloud-run",
      badge: "CONTAINER IaC",
      accent: "#D97706",
    },
    {
      id: "multi-region-auth",
      title: "Multi-Region Auth & Session Store",
      desc: "Sub-5ms global authentication service compiled to 320 Cloudflare PoPs.",
      cloneCmd: "nova init my-app --template multi-region-auth",
      badge: "GLOBAL EDGE",
      accent: "#D97706",
    },
  ];

  const handleCopy = (id: string, cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold">
            <Boxes className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>OPEN SOURCE TEMPLATE GALLERY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            NovaServe Starter Templates
          </h1>
          <p className="text-base text-gray-600 font-medium">
            Deploy pre-configured multi-cloud application architectures in a single terminal command.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((tpl) => (
            <div
              key={tpl.id}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-200 space-y-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-mono font-extrabold">
                  {tpl.badge}
                </span>
                <h3 className="text-xl font-extrabold text-gray-900">{tpl.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">{tpl.desc}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-950 text-white border border-slate-800 flex items-center justify-between font-mono text-xs shadow-md">
                <span className="truncate mr-2 text-[11px] text-[#FFB020]">{tpl.cloneCmd}</span>
                <button
                  onClick={() => handleCopy(tpl.id, tpl.cloneCmd)}
                  className="p-2 rounded-xl bg-slate-900 border border-slate-700 hover:text-[#FFB020] transition-colors shrink-0 cursor-pointer"
                >
                  {copiedId === tpl.id ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-gray-300" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

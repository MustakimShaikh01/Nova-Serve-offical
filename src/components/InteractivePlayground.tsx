"use client";

import { useState } from "react";
import { Terminal, Play, Copy, Check, Cpu, Layers, Sparkles } from "lucide-react";
import { DiamondIcon } from "./Icons";

export function InteractivePlayground() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "plan" | "ast">("code");

  const sampleCode = `import { NovaApp, Lambda, EdgeKV, Postgres } from "@novaserve/core";

const app = new NovaApp({ region: "multi-cloud" });

const db  = new Postgres("primary-db", { engine: "aurora-postgresql" });
const kv  = new EdgeKV("sessions-kv");
const api = new Lambda("user-api", {
  memory: 512,
  environment: { DB_URL: db.connectionString, KV_NAME: kv.name },
});

export default app.deploy({ db, kv, api });`;

  const samplePlan = `+ Resource: aws:rds:AuroraCluster (primary-db) -> CREATE [us-east-1]
+ Resource: cloudflare:workers:KV (sessions-kv) -> CREATE [320 PoPs]
+ Resource: aws:lambda:Function (user-api) -> CREATE [memory: 512MB]
~ IAM Binding: Auto-generated Zero-Trust policy attached to user-api

Plan: 3 to add, 0 to change, 0 to destroy.
Execution Time: 0.38s (Zero-drift verified)`;

  const sampleAst = `{
  "kind": "NovaApplicationSpec",
  "version": "v1.4.2",
  "nodes": [
    { "id": "primary-db", "type": "Database", "provider": "aws:rds" },
    { "id": "sessions-kv", "type": "EdgeStorage", "provider": "cloudflare:kv" },
    { "id": "user-api", "type": "ServerlessFunction", "provider": "aws:lambda" }
  ]
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(
      activeTab === "code" ? sampleCode : activeTab === "plan" ? samplePlan : sampleAst
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Terminal className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>INTERACTIVE PLAYGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Write Code. Inspect Plan. Deploy.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            Experience how NovaServe compiles your application code into deterministic multi-cloud plan manifests.
          </p>
        </div>

        {/* Playground Window */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex space-x-1 pl-4">
                <button
                  onClick={() => setActiveTab("code")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeTab === "code"
                      ? "bg-[#FFB020] text-black"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  App.ts
                </button>
                <button
                  onClick={() => setActiveTab("plan")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeTab === "plan"
                      ? "bg-[#FFB020] text-black"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  Compiled Plan
                </button>
                <button
                  onClick={() => setActiveTab("ast")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeTab === "ast"
                      ? "bg-[#FFB020] text-black"
                      : "text-gray-600 hover:text-black hover:bg-gray-100"
                  }`}
                >
                  AST Output
                </button>
              </div>
            </div>

            <button
              onClick={copyCode}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gray-100 border border-gray-300 hover:border-[#FFB020] text-xs font-mono text-gray-900 font-bold transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-600" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          {/* Editor Area */}
          <div className="mt-4">
            <pre className="p-5 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] text-[#111827] font-mono text-xs overflow-x-auto min-h-[220px] leading-relaxed shadow-inner font-semibold">
              <code>
                {activeTab === "code" && sampleCode}
                {activeTab === "plan" && samplePlan}
                {activeTab === "ast" && sampleAst}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Cpu, FileCode, Layers, Server, Zap, CheckCircle2, DollarSign, ShieldCheck } from "lucide-react";
import { DiamondIcon } from "./Icons";

const pipelineSteps = [
  {
    step: "01",
    title: "TypeScript App & SDK",
    desc: "Declare routes, storage buckets, queues, and databases directly in pure TypeScript.",
    icon: <FileCode className="w-5 h-5 text-blue-600" />,
  },
  {
    step: "02",
    title: "Nova Compiler",
    desc: "Parses source code AST statically in sub-second speed without runtime reflection.",
    icon: <Cpu className="w-5 h-5 text-amber-500" />,
  },
  {
    step: "03",
    title: "Dependency Graph (DAG)",
    desc: "Builds resource relationships, detects cycles, and synthesizes least-privilege IAM policies.",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
  },
  {
    step: "04",
    title: "Nova IR 1.0.0",
    desc: "Emits a provider-neutral Intermediate Representation JSON spec with SHA-256 state locks.",
    icon: <DiamondIcon size={20} />,
  },
  {
    step: "05",
    title: "Planner & Cost Engine",
    desc: "Calculates precise diffs (Create/Update/Replace/Delete) and monthly line-item cost projections.",
    icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
  },
  {
    step: "06",
    title: "Provider Adapter & Cloud",
    desc: "Executes journaled deployments to target cloud infrastructure (AWS or Local Emulator).",
    icon: <Zap className="w-5 h-5 text-purple-600" />,
  },
];

export function CompilerPipelineSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>COMPILER-DRIVEN ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            From TypeScript AST to Cloud Deployment
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            NovaServe treats infrastructure as a compilation target. Understand how source code transforms into deterministic cloud execution plans.
          </p>
        </div>

        {/* Horizontal Flow Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {pipelineSteps.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-black text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md">
                  STAGE {s.step}
                </span>
                <div className="p-2 rounded-xl bg-gray-100 border border-gray-200 group-hover:border-[#FFB020] transition-colors">
                  {s.icon}
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-sm font-extrabold text-gray-900 group-hover:text-[#FFB020] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="flex items-center space-x-1 text-emerald-600 font-bold">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Text Pipeline Representation */}
        <div className="mt-12 p-6 rounded-3xl bg-gray-950 text-white border border-gray-800 space-y-3 font-mono text-xs text-center shadow-xl">
          <div className="text-gray-400 uppercase tracking-wider text-[11px] font-bold">Documented Compilation Pipeline</div>
          <div className="text-amber-400 font-bold overflow-x-auto whitespace-nowrap py-1">
            TypeScript Application  →  SDK Layer  →  Nova Compiler  →  Dependency Graph (DAG)  →  Nova IR 1.0.0  →  Planner & Cost Engine  →  Provider Adapter  →  Target Cloud
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Cpu, FileCode, Layers, Server, Zap, CheckCircle2 } from "lucide-react";
import { DiamondIcon } from "./Icons";

const pipelineSteps = [
  {
    step: "01",
    title: "TypeScript AST Parsing",
    desc: "Analyzes application code definitions into a language-agnostic Abstract Syntax Tree.",
    icon: <FileCode className="w-5 h-5 text-blue-600" />,
  },
  {
    step: "02",
    title: "Static Dependency Graph",
    desc: "Infers zero-trust IAM policies, networking routes, and data dependencies automatically.",
    icon: <Layers className="w-5 h-5 text-indigo-600" />,
  },
  {
    step: "03",
    title: "Multi-Cloud IR Generation",
    desc: "Emits an Intermediate Representation (IR) mapping resources to target provider engines.",
    icon: <Cpu className="w-5 h-5 text-amber-500" />,
  },
  {
    step: "04",
    title: "Deterministic Execution Plan",
    desc: "Calculates precise diffs and guarantees 100% zero-drift resource state transitions.",
    icon: <DiamondIcon size={20} />,
  },
  {
    step: "05",
    title: "Parallel Multi-Cloud Deploy",
    desc: "Deploys to AWS Lambda, Cloudflare Workers, and GCP Cloud Run concurrently in <2s.",
    icon: <Zap className="w-5 h-5 text-emerald-600" />,
  },
];

export function CompilerPipelineSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>5-STAGE COMPILER WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            How NovaServe Compiles Your Cloud Stack
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            From single-file TypeScript code to parallel multi-cloud infrastructure deployment in under 2 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {pipelineSteps.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-black text-amber-900 bg-amber-100 px-2.5 py-1 rounded-lg">
                  STAGE {s.step}
                </span>
                <div className="p-2 rounded-xl bg-gray-100 border border-gray-200 group-hover:border-[#FFB020] transition-colors">
                  {s.icon}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-extrabold text-gray-900 group-hover:text-[#FFB020] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified AST</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

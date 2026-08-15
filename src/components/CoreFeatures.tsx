"use client";

import { Cpu, ShieldCheck, Zap, Layers, Boxes, Globe, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Zero-Drift Execution",
    desc: "NovaServe calculates exact state diffs before applying any changes, preventing accidental cloud infrastructure drift.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
  },
  {
    title: "Multi-Cloud Target IR",
    desc: "Single codebase compiles simultaneously to AWS Lambda, Cloudflare Workers, Docker OCI images, and GCP Cloud Run.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "Automatic IAM Inference",
    desc: "Eliminate security misconfigurations. NovaServe infers minimal required IAM permissions from code references.",
    icon: <Cpu className="w-6 h-6 text-[#D97706]" />,
  },
  {
    title: "Sub-Second Compilation",
    desc: "Built in Rust and TypeScript, NovaServe parses ASTs and generates deployment plans in under 400ms.",
    icon: <Zap className="w-6 h-6 text-[#FFB020]" />,
  },
];

export function CoreFeatures() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Boxes className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>PLATFORM CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Engineered for Modern Cloud Architecture
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Everything you need to build, test, and scale cloud applications without DevOps complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 group"
            >
              <div className="p-3 rounded-2xl bg-white border border-gray-200 w-fit group-hover:border-[#FFB020] transition-colors shadow-xs">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-gray-900 group-hover:text-amber-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-gray-700 font-medium leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { BarChart3, Zap, ShieldCheck } from "lucide-react";

export function BenchmarksSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <BarChart3 className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>PERFORMANCE BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Unrivaled Compile & Deploy Speeds
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            NovaServe compiles AST dependencies and executes deployment plans up to 10x faster than legacy IaC engines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4">
            <div className="text-xs font-mono font-bold text-gray-500 uppercase">INCREMENTAL COMPILE TIME</div>
            <div className="text-4xl font-black text-gray-900">0.38s</div>
            <div className="text-xs text-emerald-700 font-bold">10x faster than Terraform</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4">
            <div className="text-xs font-mono font-bold text-gray-500 uppercase">EDGE COLD START LATENCY</div>
            <div className="text-4xl font-black text-gray-900">4ms</div>
            <div className="text-xs text-blue-700 font-bold">Zero-V8 isolate warmup</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4">
            <div className="text-xs font-mono font-bold text-gray-500 uppercase">ZERO-DRIFT GUARANTEE</div>
            <div className="text-4xl font-black text-gray-900">100%</div>
            <div className="text-xs text-amber-800 font-bold">Deterministic AST hashing</div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { ArrowRight, Layers, ShieldAlert, Cpu, Sparkles } from "lucide-react";

export function WhatIsNovaServe() {
  return (
    <section className="py-24 bg-white relative z-10 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>PARADIGM SHIFT IN IaC</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            What makes NovaServe fundamentally different?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            Legacy IaC tools deploy infrastructure resources. NovaServe compiles entire application architectures into deterministic cloud plans.
          </p>
        </div>

        {/* Side by side comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Legacy IaC Card */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-red-100 border border-red-200 text-red-700">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">Traditional IaC</h3>
                  <span className="text-xs text-gray-500 font-mono">Terraform / HCL / Manual CDK</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-mono font-bold">
                FRAGMENTED
              </span>
            </div>

            <ul className="space-y-4 text-sm font-sans text-gray-700">
              <li className="flex items-start space-x-3">
                <span className="text-red-500 font-extrabold">✕</span>
                <span className="font-medium">Decoupled application logic from cloud infrastructure definitions</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 font-extrabold">✕</span>
                <span className="font-medium">Manual IAM policy writing & credential leak risks</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 font-extrabold">✕</span>
                <span className="font-medium">State drift & lock-in to single hyperscaler APIs</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-500 font-extrabold">✕</span>
                <span className="font-medium">Slow 15+ minute CI/CD plan & apply pipeline cycles</span>
              </li>
            </ul>
          </div>

          {/* NovaServe Card */}
          <div className="p-8 rounded-3xl bg-white border-2 border-[#FFB020] shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2.5 rounded-xl bg-amber-100 border border-amber-300 text-amber-900">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">NovaServe Compiler</h3>
                  <span className="text-xs text-amber-900 font-mono font-extrabold">Unified Application AST</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#FFB020] text-black text-xs font-mono font-black">
                MODERN PLATFORM
              </span>
            </div>

            <ul className="space-y-4 text-sm font-sans text-gray-900">
              <li className="flex items-start space-x-3">
                <span className="text-[#D97706] font-black">✓</span>
                <span className="font-bold">Application code & infrastructure defined in single TypeScript file</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D97706] font-black">✓</span>
                <span className="font-bold">Automated Zero-Trust IAM policy inference during compilation</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D97706] font-black">✓</span>
                <span className="font-bold">Multi-cloud targeting (AWS, Cloudflare, Docker, GCP, Azure)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D97706] font-black">✓</span>
                <span className="font-bold">Sub-second incremental compilation with instant local sandbox</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

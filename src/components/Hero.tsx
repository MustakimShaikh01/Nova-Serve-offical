"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { HeroPipeline } from "./HeroPipeline";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-36 pb-16 flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-[1550px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Pulumi-style Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-extrabold">
                OPEN SOURCE
              </span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-mono font-extrabold">
                TYPESCRIPT NATIVE
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-mono font-extrabold">
                SERVERLESS FRAMEWORK
              </span>
            </div>

            {/* Main Hero Tagline & Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.08]">
                <span className="text-[#FFB020] block">Build Serverless.</span>
                <span>Compile to the Cloud.</span>
              </h1>
              <div className="text-sm sm:text-base font-mono text-amber-800 font-bold uppercase tracking-wide">
                The TypeScript-Native Serverless Framework
              </div>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-medium leading-relaxed pt-1">
                Build, develop, plan, and deploy serverless applications with TypeScript—powered by a compiler-driven infrastructure engine.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/docs"
                prefetch={true}
                className="px-6 py-3.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black font-bold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center space-x-2 group cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://github.com/novaserve-cloud/novaserve"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gray-900 hover:bg-black text-white font-semibold text-base transition-all cursor-pointer shadow-md flex items-center space-x-2"
              >
                <span>View on GitHub</span>
              </a>

              <Link
                href="/docs"
                prefetch={true}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-base transition-all cursor-pointer"
              >
                Documentation
              </Link>
            </div>
          </div>

          {/* Right Column: Pulumi Signature Code Editor + Visualizer */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroPipeline />
          </div>
        </div>
      </div>
    </section>
  );
}

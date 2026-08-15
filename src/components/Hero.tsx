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
            {/* Version Announcement Pill (Pulumi Style) */}
            <Link
              href="/changelog"
              prefetch={true}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50/80 border border-amber-200 hover:border-amber-300 text-xs font-mono transition-all group cursor-pointer"
            >
              <span className="text-amber-800 font-bold tracking-wider uppercase text-[11px]">
                LATEST RELEASE: FULL SUPPORT FOR TERRAFORM AND HCL
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Pulumi Exact Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 leading-[1.08]">
                <span className="text-[#FFB020] block">Next-level</span>
                <span>infrastructure as code</span>{" "}
                <span className="block">for humans and agents.</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl font-normal leading-relaxed pt-2">
                Ship cloud infrastructure at the speed of AI with languages and tools that stay out of your way.
              </p>
            </div>

            {/* CTAs (Exact Pulumi Buttons) */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/docs"
                prefetch={true}
                className="px-6 py-3.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black font-bold text-base shadow-lg hover:shadow-xl transition-all transform active:scale-95 flex items-center space-x-2 group cursor-pointer"
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/docs"
                prefetch={true}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-300 text-gray-900 font-semibold text-base transition-all cursor-pointer"
              >
                Download open source
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

"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-12 rounded-3xl bg-amber-50 border-2 border-[#FFB020] shadow-2xl text-center space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Ready to compile your cloud application?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-semibold">
            Start building for free with NovaServe open source CLI or launch an enterprise team deployment in minutes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/docs"
              className="px-8 py-4 rounded-2xl bg-[#FFB020] hover:bg-[#FFC44D] text-black font-black text-sm shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pricing"
              className="px-8 py-4 rounded-2xl bg-white hover:bg-gray-100 border border-gray-300 text-gray-900 font-bold text-sm transition-all"
            >
              View Pricing Tier
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Check, Zap, ShieldCheck } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>TRANSPARENT PRICING</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900">
            Simple Predictable Pricing
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            Open-source CLI is 100% free forever. Upgrade for team collaboration and automated state management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-6">
            <h3 className="text-2xl font-black text-gray-900">Open Source</h3>
            <div className="text-4xl font-black text-gray-900">$0 <span className="text-xs text-gray-500 font-normal">/ forever</span></div>
            <ul className="space-y-3 text-xs font-mono text-gray-700 font-bold">
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>Unlimited Local CLI Compiles</span></li>
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>All Provider Specs Included</span></li>
            </ul>
            <Link href="/docs" className="block text-center py-3 rounded-xl bg-gray-100 border border-gray-300 font-bold text-xs text-gray-900 hover:border-[#FFB020] hover:bg-[#FFB020]">Install CLI</Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border-2 border-[#FFB020] shadow-2xl space-y-6 relative">
            <span className="absolute top-4 right-4 px-2.5 py-1 rounded bg-[#FFB020] text-black font-mono text-[10px] font-black">POPULAR</span>
            <h3 className="text-2xl font-black text-gray-900">Team Cloud</h3>
            <div className="text-4xl font-black text-gray-900">$49 <span className="text-xs text-gray-500 font-normal">/ member / mo</span></div>
            <ul className="space-y-3 text-xs font-mono text-gray-900 font-bold">
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>Centralized State Management</span></li>
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>Team RBAC & Audit Trail</span></li>
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>Automated CI/CD Webhooks</span></li>
            </ul>
            <Link href="/docs" className="block text-center py-3 rounded-xl bg-[#FFB020] text-black font-black text-xs hover:bg-[#FFC44D]">Start 14-Day Trial</Link>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-6">
            <h3 className="text-2xl font-black text-gray-900">Enterprise</h3>
            <div className="text-4xl font-black text-gray-900">Custom</div>
            <ul className="space-y-3 text-xs font-mono text-gray-700 font-bold">
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>Dedicated Cloud Sandbox</span></li>
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>99.999% SLA Guarantee</span></li>
              <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-emerald-600" /><span>SOC2 Type II & HIPAA</span></li>
            </ul>
            <Link href="/about" className="block text-center py-3 rounded-xl bg-gray-100 border border-gray-300 font-bold text-xs text-gray-900 hover:border-[#FFB020] hover:bg-[#FFB020]">Contact Sales</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

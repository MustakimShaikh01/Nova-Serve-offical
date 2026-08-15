"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Lock,
  Mail,
  ArrowRight,
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Sparkles,
  Terminal,
  Package,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-28 pb-24 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-lg w-full space-y-8 relative z-10">
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-[#FFB020] p-1 flex items-center justify-center text-black font-bold shadow-md group-hover:scale-105 transition-all">
              <DiamondIcon size={24} />
            </div>
            <span className="text-2xl font-black tracking-tight text-gray-900">NovaServe</span>
          </Link>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>CLOUD CONSOLE BETA • COMING SOON</span>
          </div>

          <h1 className="text-3xl font-black text-gray-900 tracking-tight pt-2">
            Sign In to NovaServe Cloud
          </h1>
          <p className="text-sm text-gray-600 max-w-sm mx-auto leading-relaxed font-medium">
            The hosted control plane for NovaServe is currently in private preview. Join the waitlist for early access.
          </p>
        </div>

        {/* Card Body */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          {submitted ? (
            <div className="text-center space-y-4 py-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-gray-900">You're on the early access list!</h3>
              <p className="text-xs text-gray-700 font-medium leading-relaxed max-w-xs mx-auto">
                We've reserved your spot for <span className="text-amber-900 font-mono font-bold">{email}</span>. We'll send your invite token as soon as hosted console clusters open up.
              </p>
              <div className="p-3.5 rounded-xl bg-white border border-gray-200 text-xs font-mono text-gray-800 shadow-sm">
                Waitlist position: <span className="text-[#D97706] font-extrabold">#1,482</span>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-gray-600 hover:text-black underline pt-2 cursor-pointer font-bold"
              >
                Register another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono font-bold text-gray-700 uppercase tracking-wider block">
                  Work Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-xs font-mono text-gray-900 placeholder-gray-400 outline-none focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Requesting Access...</span>
                ) : (
                  <>
                    <span>Request Console Beta Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-[10px] font-mono uppercase">
                  <span className="bg-gray-50 px-2 text-gray-500 font-bold">Or use open-source CLI today</span>
                </div>
              </div>

              {/* CLI Command Alternative */}
              <div className="p-4 rounded-2xl bg-slate-950 text-white space-y-2 text-xs font-mono shadow-md">
                <div className="flex items-center justify-between text-gray-300 text-[11px]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-[#FFB020]" />
                    <span>Run Open Source CLI Locally</span>
                  </span>
                  <span className="text-emerald-400 font-bold">v2.1.6</span>
                </div>
                <code className="block text-[#FFB020] text-xs">npm install -g novaserve</code>
              </div>
            </form>
          )}

          {/* Hosted Features Overview */}
          <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-mono text-gray-600">
            <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
              UPCOMING CLOUD CONSOLE FEATURES:
            </div>
            <ul className="space-y-1.5 text-gray-800 font-medium">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Visual AST Dependency DAG Graph Inspector</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Multi-Cloud Cost Analytics & Optimization</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>1-Click Rollbacks & Cryptographic Drift Repairs</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer links */}
        <div className="text-center text-xs text-gray-500 font-mono space-y-2">
          <div>
            Need docs or package links? Check the{" "}
            <Link href="/docs" className="text-black underline hover:text-amber-600 font-bold">
              NovaServe Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

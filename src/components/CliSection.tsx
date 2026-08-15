"use client";

import { Terminal, Copy, Check } from "lucide-react";
import { useState } from "react";

export function CliSection() {
  const [copied, setCopied] = useState(false);
  const command = "npm i -g @novaserve/cli && nova init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Terminal className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>DEVELOPER TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            One CLI to rule them all
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            Install the NovaServe CLI tool and compile your first multi-cloud stack in under 60 seconds.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-6 rounded-3xl bg-white border border-gray-200 shadow-2xl space-y-4">
          <div className="flex items-center justify-between font-mono text-xs text-gray-900 font-bold border-b border-gray-200 pb-3">
            <span>Terminal Quickstart</span>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gray-100 border border-gray-300 hover:border-[#FFB020] text-gray-900 font-bold transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-gray-600" />}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <pre className="p-4 rounded-2xl bg-[#F8F9FA] border border-[#E5E7EB] text-gray-900 font-mono text-xs overflow-x-auto font-bold shadow-inner">
            <code>{`$ ${command}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}

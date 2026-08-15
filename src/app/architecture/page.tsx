"use client";

import Link from "next/link";
import { Cpu, Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Cpu className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>COMPILER ARCHITECTURE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900">
            NovaServe Engine Specifications
          </h1>
          <p className="text-lg text-gray-600 font-semibold">
            How NovaServe transforms single-file TypeScript code into deterministic multi-cloud infrastructure plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-4">
            <h3 className="text-xl font-black text-gray-900">1. AST Parser</h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">
              Extracts application endpoints, Edge KV references, and storage bindings into an abstract syntax graph in under 40ms.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-4">
            <h3 className="text-xl font-black text-gray-900">2. Universal IR</h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">
              Maps resource nodes into vendor-neutral JSON schemas with cryptographic SHA-256 state checksums.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-xl space-y-4">
            <h3 className="text-xl font-black text-gray-900">3. Target Provider Engine</h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed">
              Emits native CloudFormation, Cloudflare Workers, and Docker Compose manifests atomically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { LayoutDashboard, Server, ShieldCheck, Activity, DollarSign, Database, GitBranch, Terminal } from "lucide-react";
import { DiamondIcon } from "./Icons";

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<string>("deployments");

  const tabs = [
    { id: "deployments", label: "Deployments", icon: <Server className="w-4 h-4" /> },
    { id: "resources", label: "Resources", icon: <Database className="w-4 h-4" /> },
    { id: "logs", label: "Realtime Logs", icon: <Terminal className="w-4 h-4" /> },
    { id: "costs", label: "Cost Optimizer", icon: <DollarSign className="w-4 h-4" /> },
    { id: "security", label: "Security Audit", icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <LayoutDashboard className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>ENTERPRISE MANAGEMENT CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Realtime Infrastructure Control Panel
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            Monitor, inspect, and optimize all deployed multi-cloud resources from a single pane of glass.
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 overflow-hidden">
          {/* Tab Selection */}
          <div className="flex items-center space-x-2 border-b border-gray-200 pb-4 overflow-x-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                  activeTab === t.id
                    ? "bg-[#FFB020] text-black shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Console Area */}
          <div className="mt-6 p-6 rounded-2xl bg-gray-50 border border-gray-200 font-mono text-xs text-gray-900 font-bold space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg">
                ● LIVE ENVIRONMENT: PRODUCTION
              </span>
              <span className="text-gray-500 font-normal">LATENCY: 4ms AVG</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                <div className="text-[10px] text-gray-500">ACTIVE REGIONS</div>
                <div className="text-lg font-black text-gray-900">320 Edge PoPs</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                <div className="text-[10px] text-gray-500">ESTIMATED MONTHLY COST</div>
                <div className="text-lg font-black text-gray-900">$42.80 / mo</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                <div className="text-[10px] text-gray-500">ZERO-TRUST SECURITY</div>
                <div className="text-lg font-black text-emerald-700">100% COMPLIANT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

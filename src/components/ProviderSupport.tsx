"use client";

import { useState } from "react";
import { Boxes, CheckCircle2 } from "lucide-react";
import {
  AwsIcon,
  CloudflareIcon,
  DockerIcon,
  GcpIcon,
  AzureIcon,
} from "@/components/Icons";
import { providersService, CloudProviderSpec } from "@/services/providers.service";

export function ProviderSupport() {
  const providers = providersService.getProviders();
  const [selectedProvider, setSelectedProvider] = useState<CloudProviderSpec>(providers[0]);

  const renderProviderIcon = (id: string) => {
    switch (id) {
      case "aws":
        return <AwsIcon size={20} />;
      case "cloudflare":
        return <CloudflareIcon size={20} />;
      case "docker":
        return <DockerIcon size={20} />;
      case "gcp":
        return <GcpIcon size={20} />;
      case "azure":
        return <AzureIcon size={20} />;
      default:
        return <Boxes size={20} />;
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Boxes className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>NATIVE PROVIDER SUPPORT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            Deploy to any cloud provider without lock-in
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            NovaServe compiles your application AST into native provider manifests for AWS, Cloudflare, Docker, GCP, and Azure.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Provider Selector Cards (Left 7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {providers.map((p) => {
              const isSelected = p.id === selectedProvider.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProvider(p)}
                  className={`text-left p-5 rounded-3xl border transition-all flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? "bg-[#FFB020] border-[#FFB020] text-black shadow-xl"
                      : "bg-white border-gray-200 hover:border-[#FFB020] text-gray-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded bg-white/80 border border-gray-300 text-gray-900 text-[10px] font-mono font-black flex items-center space-x-1.5">
                      {renderProviderIcon(p.id)}
                      <span>{p.badge}</span>
                    </span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black flex items-center space-x-2">
                      <span>{renderProviderIcon(p.id)}</span>
                      <span>{p.name}</span>
                    </h3>
                    <span className="text-xs font-mono opacity-80 font-bold mt-0.5 block">
                      {p.category}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-gray-200/50 flex items-center justify-between text-xs font-mono">
                    <span>Execution Latency: {p.latency}</span>
                    <span className="font-extrabold">{p.sla} SLA</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Provider Detail Inspector Card (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-gray-200 shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gray-100 border border-gray-200">
                  {renderProviderIcon(selectedProvider.id)}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-gray-500 font-bold">
                    SUPPORTED CLOUD SPEC
                  </span>
                  <h3 className="text-xl font-black text-gray-900 mt-0.5">
                    {selectedProvider.name}
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-600 font-semibold leading-relaxed">
              {selectedProvider.desc}
            </p>

            <div className="space-y-3">
              <span className="text-xs font-mono text-gray-900 font-black block">
                NATIVELY COMPILED RESOURCES ({selectedProvider.resources.length})
              </span>
              <div className="grid grid-cols-1 gap-2">
                {selectedProvider.resources.map((res, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono text-gray-900 font-bold flex items-center justify-between"
                  >
                    <span className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{res}</span>
                    </span>
                    <span className="text-[10px] text-[#FFB020] font-black">NATIVE AST</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

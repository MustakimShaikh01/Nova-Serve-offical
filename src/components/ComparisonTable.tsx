"use client";

import { Check, X, ShieldCheck } from "lucide-react";

const matrix = [
  { feature: "Language Native (TypeScript/Python/Go)", nova: true, pulumi: true, terraform: false, sst: true },
  { feature: "Multi-Cloud Target Compilation (AWS+CF+GCP)", nova: true, pulumi: false, terraform: false, sst: false },
  { feature: "Automatic Zero-Trust IAM Inference", nova: true, pulumi: false, terraform: false, sst: false },
  { feature: "Sub-Second Incremental Compilation (<0.4s)", nova: true, pulumi: false, terraform: false, sst: false },
  { feature: "Built-in Local Multi-Cloud Sandbox", nova: true, pulumi: false, terraform: false, sst: true },
  { feature: "Zero-Drift AST Hash Verification", nova: true, pulumi: false, terraform: false, sst: false },
];

export function ComparisonTable() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>PLATFORM COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            NovaServe vs Alternative Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold">
            See how NovaServe compares directly to Pulumi, Terraform, and SST.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl bg-white border border-gray-200 shadow-2xl p-6">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-gray-200 text-gray-900 font-black">
                <th className="py-4 px-4 text-sm">Feature</th>
                <th className="py-4 px-4 text-sm text-[#FFB020] bg-amber-50 rounded-t-xl font-extrabold">NovaServe</th>
                <th className="py-4 px-4 text-sm">Pulumi</th>
                <th className="py-4 px-4 text-sm">Terraform</th>
                <th className="py-4 px-4 text-sm">SST</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-bold text-gray-900">{row.feature}</td>
                  <td className="py-4 px-4 bg-amber-50 font-bold text-black">
                    {row.nova ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-red-500" />}
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    {row.pulumi ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-gray-400" />}
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    {row.terraform ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-gray-400" />}
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    {row.sst ? <Check className="w-5 h-5 text-emerald-600" /> : <X className="w-5 h-5 text-gray-400" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check, X, ShieldCheck } from "lucide-react";

const matrix = [
  { feature: "Primary Category", nova: "Serverless Framework", sls: "Serverless Framework", sam: "AWS IaC Tool", sst: "Serverless Framework", terraform: "General IaC", pulumi: "General IaC" },
  { feature: "Compiler / IR Architecture", nova: "Yes (Nova IR)", sls: "No (CloudFormation)", sam: "No (CloudFormation)", sst: "No (AWS CDK)", terraform: "No (HCL DAG)", pulumi: "No (Pulumi Engine)" },
  { feature: "Application-Defined Infrastructure", nova: "Yes (TypeScript)", sls: "Partial (YAML/JS)", sam: "No (YAML)", sst: "Yes (TypeScript)", terraform: "No (HCL)", pulumi: "Yes (TS/Python)" },
  { feature: "Automated Least-Privilege IAM Synthesis", nova: "Yes (Static AST)", sls: "Manual", sam: "Manual", sst: "Manual / CDK", terraform: "Manual", pulumi: "Manual" },
  { feature: "Sub-200ms Local Emulator (`nova dev`)", nova: "Built-in Hono", sls: "Plugin-based", sam: "Docker SAM local", sst: "Live Lambda Proxy", terraform: "No", pulumi: "No" },
  { feature: "Built-in Cost Projections (`nova cost`)", nova: "Yes", sls: "No", sam: "No", sst: "No", terraform: "Infracost Plugin", pulumi: "No" },
];

export function ComparisonTable() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>FAIR ARCHITECTURAL COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            NovaServe vs Alternative Tools
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-semibold leading-relaxed">
            NovaServe combines the developer ergonomics of serverless frameworks with the safety of a compiler-driven infrastructure engine.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl bg-white border border-gray-200 shadow-2xl p-6">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-gray-200 text-gray-900 font-black">
                <th className="py-4 px-3 text-xs uppercase tracking-wider">Capability / Architecture</th>
                <th className="py-4 px-3 text-xs uppercase tracking-wider text-black bg-amber-100 rounded-t-xl font-extrabold border-x border-amber-300">NovaServe</th>
                <th className="py-4 px-3 text-xs uppercase tracking-wider">Serverless Framework</th>
                <th className="py-4 px-3 text-xs uppercase tracking-wider">AWS SAM</th>
                <th className="py-4 px-3 text-xs uppercase tracking-wider">SST</th>
                <th className="py-4 px-3 text-xs uppercase tracking-wider">Terraform</th>
                <th className="py-4 px-3 text-xs uppercase tracking-wider">Pulumi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {matrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-3 font-bold text-gray-900">{row.feature}</td>
                  <td className="py-4 px-3 bg-amber-50 font-black text-black border-x border-amber-200">
                    {row.nova}
                  </td>
                  <td className="py-4 px-3 text-gray-700">{row.sls}</td>
                  <td className="py-4 px-3 text-gray-700">{row.sam}</td>
                  <td className="py-4 px-3 text-gray-700">{row.sst}</td>
                  <td className="py-4 px-3 text-gray-700">{row.terraform}</td>
                  <td className="py-4 px-3 text-gray-700">{row.pulumi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

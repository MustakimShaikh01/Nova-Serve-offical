import { Zap, Heart, Terminal, Cpu, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
            <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>OPEN SOURCE MISSION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            The Modern Way to Build Cloud Applications
          </h1>
          <p className="text-base text-gray-600 font-medium leading-relaxed">
            NovaServe was founded on a simple principle: Developers should write application code in pure TypeScript, and compilers should handle multi-cloud infrastructure orchestration.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-6 shadow-sm text-sm text-gray-700 leading-relaxed font-sans">
          <h3 className="text-xl font-extrabold text-gray-900">Engineering Principles</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-[#D97706] font-mono font-black">01.</span>
              <span><strong className="text-gray-900 font-bold">Static Over Imperative:</strong> If infrastructure logic can be inferred statically at compile time, it should never fail imperatively at runtime.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-emerald-700 font-mono font-black">02.</span>
              <span><strong className="text-gray-900 font-bold">Zero Vendor Lock-in:</strong> Cloud targets are compilation outputs, not runtime prisons. Your TypeScript code remains pure.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D97706] font-mono font-black">03.</span>
              <span><strong className="text-gray-900 font-bold">Sub-Second Feedback Loop:</strong> Local developer experience (`nova dev`) must mirror multi-cloud production state instantly.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

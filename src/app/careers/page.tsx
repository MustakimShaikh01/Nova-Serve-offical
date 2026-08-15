import { Users, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const roles = [
    { title: "Senior Rust Compiler Engineer", dept: "CORE ENGINE", loc: "Remote / SF", type: "Full-Time" },
    { title: "Staff Multi-Cloud Systems Engineer", dept: "INFRASTRUCTURE", loc: "Remote / NYC", type: "Full-Time" },
    { title: "Developer Advocate (IaC & TypeScript)", dept: "DEVELOPER RELATIONS", loc: "Remote", type: "Full-Time" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-28 pb-20 text-[#F5F5F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111111] border border-[#202020] text-xs font-mono text-[#5B8CFF]">
            <Users className="w-3.5 h-3.5" />
            <span>JOIN THE TEAM</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Build the future of cloud compilers
          </h1>
          <p className="text-base text-[#9A9A9A]">
            We are looking for passionate systems engineers and compiler designers to join our team.
          </p>
        </div>

        <div className="space-y-4">
          {roles.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D0D0D] border border-[#202020] hover:border-[#5B8CFF]/50 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 glass-card"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#5B8CFF] font-bold">{r.dept} • {r.loc}</span>
                <h3 className="text-lg font-bold text-white">{r.title}</h3>
              </div>
              <Link
                href="/community"
                className="px-4 py-2 rounded-xl bg-[#111111] border border-[#202020] hover:border-white/20 text-white text-xs font-mono font-semibold flex items-center space-x-2 shrink-0 self-start sm:self-auto"
              >
                <span>Apply Role</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#5B8CFF]" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { ShieldCheck, Lock, CheckCircle2, FileText } from "lucide-react";

export default function SecurityPage() {
  const policies = [
    {
      title: "SOC 2 Type II Certified",
      desc: "Independently audited controls covering security, availability, and confidentiality.",
    },
    {
      title: "Automated Least-Privilege IAM",
      desc: "Zero wildcard permissions. Compiler extracts minimal IAM roles directly from AST paths.",
    },
    {
      title: "Zero-Trust Encryption",
      desc: "TLS 1.3 in-transit and AES-256 at-rest encryption enforced across all target cloud providers.",
    },
    {
      title: "Cryptographic State Lock",
      desc: "SHA-256 state hashes guarantee zero unauthorized manual infrastructure drift.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-900 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>OPEN SOURCE SECURITY & COMPLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Security & Governance at NovaServe
          </h1>
          <p className="text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Architected for zero-trust environments with automated IAM synthesis and strict SOC2 governance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-3 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-center space-x-2 text-emerald-700">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="text-lg font-extrabold text-gray-900">{p.title}</h3>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed font-medium">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

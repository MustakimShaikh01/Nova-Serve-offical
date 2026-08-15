"use client";

import { Github, Users, Star, GitFork, MessageSquare } from "lucide-react";

export function CommunitySection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200 relative z-10 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-extrabold">
          <Users className="w-3.5 h-3.5 text-[#FFB020]" />
          <span>OPEN SOURCE COMMUNITY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
          Join 14,000+ Engineers Building with NovaServe
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-semibold">
          NovaServe is open source and driven by a global community of cloud architects and platform engineers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-2">
            <Star className="w-6 h-6 text-[#FFB020] mx-auto" />
            <div className="text-2xl font-black text-gray-900">14,200+</div>
            <div className="text-xs text-gray-500 font-mono font-bold">GitHub Stars</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-2">
            <GitFork className="w-6 h-6 text-indigo-600 mx-auto" />
            <div className="text-2xl font-black text-gray-900">1,840+</div>
            <div className="text-xs text-gray-500 font-mono font-bold">Forks & Contributions</div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-2">
            <MessageSquare className="w-6 h-6 text-emerald-600 mx-auto" />
            <div className="text-2xl font-black text-gray-900">8,500+</div>
            <div className="text-xs text-gray-500 font-mono font-bold">Discord Members</div>
          </div>
        </div>
      </div>
    </section>
  );
}

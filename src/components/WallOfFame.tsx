"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Trophy,
  Star,
  GitFork,
  GitPullRequest,
  Github,
  Code2,
  Sparkles,
  Search,
  ExternalLink,
  CheckCircle2,
  Copy,
  Check,
  Heart,
  Award,
  Terminal,
  Zap,
  Gift,
  Users,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  PlusCircle,
  Rocket,
} from "lucide-react";

interface Contributor {
  id: string;
  name: string;
  username: string;
  role: string;
  category: "maintainer" | "code" | "docs" | "providers";
  avatarBg: string;
  avatarText: string;
  badge: string;
  bio: string;
  topContribution: string;
  location: string;
  joined: string;
  githubUrl: string;
  featured?: boolean;
}

interface Issue {
  id: string;
  title: string;
  category: string;
  difficulty: "Good First Issue" | "Intermediate" | "Advanced";
  points: number;
  labels: string[];
  url: string;
}

export function WallOfFame() {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeModalContributor, setActiveModalContributor] = useState<Contributor | null>(null);
  const [issueFilter, setIssueFilter] = useState<string>("all");

  const quickstartCommands = [
    "git clone https://github.com/novaserve-cloud/novaserve.git",
    "cd novaserve",
    "npm install",
    "npm run dev",
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  // Real maintainers of NovaServe
  const maintainers: Contributor[] = [
    {
      id: "1",
      name: "Md Shadab Azam Ansari",
      username: "sazamansari",
      role: "Creator & Lead Compiler Architect",
      category: "maintainer",
      avatarBg: "bg-amber-500",
      avatarText: "SA",
      badge: "👑 Creator",
      bio: "Creator of NovaServe. Lead architect behind the TypeScript AST multi-cloud compiler engine, zero-drift state machine, and core NPM package.",
      topContribution: "NovaServe Core AST Compiler & Provider Matrix Engine",
      location: "India",
      joined: "Jan 2025",
      githubUrl: "https://github.com/sazamansari",
      featured: true,
    },
    {
      id: "2",
      name: "Mustakim Shaikh",
      username: "MustakimShaikh01",
      role: "Co-Maintainer & Open Source Core Contributor",
      category: "maintainer",
      avatarBg: "bg-indigo-600",
      avatarText: "MS",
      badge: "⚡ Co-Maintainer",
      bio: "Co-maintainer of NovaServe Cloud. Spearheading infrastructure deployment engines, cloud architecture docs, and multi-provider bindings.",
      topContribution: "Infrastructure Deployment Pipeline & Cloud Architecture Docs",
      location: "India",
      joined: "Feb 2025",
      githubUrl: "https://github.com/MustakimShaikh01",
      featured: true,
    },
  ];

  const goodFirstIssues: Issue[] = [
    {
      id: "#1",
      title: "Add dark mode toggle support in Web Playground component",
      category: "Frontend UI",
      difficulty: "Good First Issue",
      points: 100,
      labels: ["good-first-issue", "react", "ui"],
      url: "https://github.com/novaserve-cloud/novaserve/issues",
    },
    {
      id: "#2",
      title: "Enhance `novaserve status` CLI output with progress spinner animations",
      category: "CLI Tooling",
      difficulty: "Good First Issue",
      points: 150,
      labels: ["good-first-issue", "typescript", "cli"],
      url: "https://github.com/novaserve-cloud/novaserve/issues",
    },
    {
      id: "#3",
      title: "Add Cloudflare Workers KV bindings & JSON schema mapping",
      category: "Providers Matrix",
      difficulty: "Intermediate",
      points: 300,
      labels: ["help-wanted", "cloudflare", "schema"],
      url: "https://github.com/novaserve-cloud/novaserve/issues",
    },
    {
      id: "#4",
      title: "Implement detailed error diagnostics for invalid IAM role wildcards",
      category: "Compiler Engine",
      difficulty: "Intermediate",
      points: 350,
      labels: ["compiler", "security", "ast"],
      url: "https://github.com/novaserve-cloud/novaserve/issues",
    },
  ];

  const filteredIssues = goodFirstIssues.filter((i) => {
    if (issueFilter === "all") return true;
    if (issueFilter === "beginner") return i.difficulty === "Good First Issue";
    if (issueFilter === "intermediate") return i.difficulty === "Intermediate";
    if (issueFilter === "advanced") return i.difficulty === "Advanced";
    return true;
  });

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      {/* Hero Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-white border-b border-gray-100">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white border border-amber-300 shadow-sm text-xs font-mono font-bold text-amber-900 animate-float">
            <Trophy className="w-4 h-4 text-[#FFB020]" />
            <span>OPEN SOURCE WALL OF FAME</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 max-w-5xl mx-auto leading-[1.1]">
            Honoring the Builders Behind <span className="bg-gradient-to-r from-amber-600 via-[#FFB020] to-yellow-500 bg-clip-text text-transparent">NovaServe</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-semibold max-w-3xl mx-auto leading-relaxed">
            NovaServe is 100% open source and driven by developer contributions. Explore our maintainers, submit your first pull request, and claim your place on our Wall of Fame!
          </p>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#wall-of-fame-grid"
              className="btn-yellow px-7 py-3.5 rounded-2xl font-black text-sm flex items-center space-x-2 shadow-lg cursor-pointer"
            >
              <Trophy className="w-4 h-4" />
              <span>Explore Wall of Fame</span>
            </a>
            <a
              href="https://github.com/novaserve-cloud/novaserve"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-2xl bg-gray-900 text-white font-extrabold text-sm hover:bg-black transition-all flex items-center space-x-2 shadow-md cursor-pointer"
            >
              <Github className="w-4 h-4 text-[#FFB020]" />
              <span>Contribute on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
            <a
              href="#good-first-issues"
              className="px-7 py-3.5 rounded-2xl bg-amber-100/70 border border-amber-300 text-amber-950 font-extrabold text-sm hover:bg-amber-200/80 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-amber-700" />
              <span>Good First Issues</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Wall of Fame Section */}
      <section id="wall-of-fame-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-extrabold text-amber-700 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>CORE ARCHITECTS & CONTRIBUTORS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Community Wall of Fame
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
              Meet the core maintainers behind NovaServe. Contribute to earn your spot next!
            </p>
          </div>

          {/* Grid of Contributor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real Maintainer 1 */}
            {maintainers.map((m) => (
              <div
                key={m.id}
                onClick={() => setActiveModalContributor(m)}
                className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all cursor-pointer space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl ${m.avatarBg} text-white font-black text-2xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                      {m.avatarText}
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-extrabold">
                      {m.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-amber-600 transition-colors">
                      {m.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono">@{m.username}</p>
                  </div>

                  <div className="text-xs font-mono font-semibold text-amber-800 bg-amber-50/80 px-3 py-2 rounded-xl border border-amber-200/60">
                    {m.topContribution}
                  </div>

                  <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                    {m.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono font-semibold">
                  <span className="text-amber-700 font-bold">{m.role}</span>
                  <span className="text-gray-400 group-hover:text-amber-600 flex items-center text-[11px] font-bold">
                    View Profile <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </div>
              </div>
            ))}

            {/* COMING SOON: YOU COULD BE NEXT CARD */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-50 via-amber-100/50 to-orange-50 border-2 border-dashed border-amber-400 shadow-md hover:shadow-2xl hover:border-amber-500 transition-all flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 text-black font-black text-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                    <Rocket className="w-8 h-8 text-black" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-black text-xs font-mono font-black animate-pulse">
                    COMING SOON
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-gray-900 group-hover:text-amber-700 transition-colors">
                    You Could Be Next!
                  </h3>
                  <p className="text-xs text-amber-900 font-mono font-bold mt-1">@your-github-handle</p>
                </div>

                <div className="text-xs font-mono font-bold text-amber-950 bg-amber-200/80 px-3.5 py-2.5 rounded-xl border border-amber-300">
                  🏆 Claim your spot on the Wall of Fame!
                </div>

                <p className="text-xs text-gray-700 font-semibold leading-relaxed">
                  NovaServe is actively inviting open-source developers to contribute! Submit your first Pull Request today and get permanently featured on this Wall of Fame with custom badges.
                </p>
              </div>

              <div className="pt-6 border-t border-amber-200 relative z-10">
                <a
                  href="https://github.com/novaserve-cloud/novaserve"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-yellow w-full py-3 rounded-2xl font-black text-xs flex items-center justify-center space-x-2 shadow-md cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Contribute Now & Get Featured</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Contribute & Quickstart Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFB020]/20 border border-[#FFB020]/40 text-xs font-mono text-[#FFB020] font-bold">
              <Terminal className="w-3.5 h-3.5" />
              <span>STEP-BY-STEP CONTRIBUTION WORKFLOW</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              How to Get Featured
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-semibold leading-relaxed">
              Making your contribution to NovaServe is simple. Follow these steps to earn your Wall of Fame badge.
            </p>
          </div>

          {/* 4 Steps Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-gray-800/80 border border-gray-700 space-y-3 relative hover:border-[#FFB020] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FFB020] text-black font-black text-sm flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-black text-white">Find an Issue</h3>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                Browse open issues on GitHub tagged with <code className="text-[#FFB020] font-mono">good-first-issue</code> or <code className="text-[#FFB020] font-mono">help-wanted</code>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-800/80 border border-gray-700 space-y-3 relative hover:border-[#FFB020] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FFB020] text-black font-black text-sm flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-black text-white">Fork & Setup</h3>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                Fork the repo, clone locally, run <code className="text-[#FFB020] font-mono">npm install</code>, and start the development server.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-800/80 border border-gray-700 space-y-3 relative hover:border-[#FFB020] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FFB020] text-black font-black text-sm flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-black text-white">Build & Test</h3>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                Write code or documentation enhancements, then verify with <code className="text-[#FFB020] font-mono">npm test</code>.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-800/80 border border-gray-700 space-y-3 relative hover:border-[#FFB020] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FFB020] text-black font-black text-sm flex items-center justify-center">
                4
              </div>
              <h3 className="text-lg font-black text-white">Submit PR</h3>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                Submit your Pull Request! Once merged, your name and avatar will be added to the Wall of Fame.
              </p>
            </div>
          </div>

          {/* Quickstart Terminal Snippet */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-black border border-gray-800 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400 font-mono ml-2">quickstart-contribute.sh</span>
              </div>
              <button
                onClick={() => handleCopy(quickstartCommands.join("\n"))}
                className="text-xs text-gray-400 hover:text-[#FFB020] font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                {copiedCommand === quickstartCommands.join("\n") ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy All</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2 font-mono text-xs text-gray-300">
              {quickstartCommands.map((cmd, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <div className="flex items-center space-x-2">
                    <span className="text-amber-500 font-bold">$</span>
                    <span>{cmd}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(cmd)}
                    className="opacity-0 group-hover:opacity-100 text-[10px] text-gray-500 hover:text-white px-2 py-0.5 rounded bg-gray-800 transition-all cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Good First Issues Interactive Section */}
      <section id="good-first-issues" className="py-20 bg-amber-50/30 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-extrabold text-amber-800 uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Open Opportunities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-1">
                Good First Issues to Claim Now
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center space-x-2 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm">
              {[
                { id: "all", label: "All Difficulties" },
                { id: "beginner", label: "Good First Issue" },
                { id: "intermediate", label: "Intermediate" },
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setIssueFilter(btn.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    issueFilter === btn.id
                      ? "bg-[#FFB020] text-black shadow"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredIssues.map((issue) => (
              <div
                key={issue.id}
                className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#FFB020] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                      {issue.id}
                    </span>
                    <span className="text-xs font-mono text-gray-500 font-semibold">
                      {issue.category}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        issue.difficulty === "Good First Issue"
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          : "bg-indigo-50 text-indigo-800 border border-indigo-200"
                      }`}
                    >
                      {issue.difficulty}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 group-hover:text-amber-600 transition-colors">
                    {issue.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {issue.labels.map((lbl, idx) => (
                      <span key={idx} className="text-[10px] font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                        #{lbl}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-gray-100">
                  <a
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-yellow px-5 py-2.5 rounded-xl text-xs font-black flex items-center space-x-1.5 shadow cursor-pointer"
                  >
                    <span>Claim Issue</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributor Swag & Recognition Perks */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-extrabold text-amber-700 uppercase tracking-wider">
              <Gift className="w-3.5 h-3.5 text-[#FFB020]" />
              <span>COMMUNITY REWARDS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Contributor Swag & Perks
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold">
              We appreciate every contribution! Here is how we give back to our open source developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#FFB020] mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Exclusive Swag Box</h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                Get custom NovaServe stickers, enamel pins, and contributor swag upon your first merged PR!
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Wall of Fame Badge</h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                Permanent spot on our Wall of Fame page with customized badges and direct links to your GitHub profile.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900">VIP Maintainer Access</h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                Gain direct access to maintainer channels, architecture reviews, and early access feature previews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contributor Detail Modal */}
      {activeModalContributor && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl p-8 space-y-6 shadow-2xl relative border border-gray-200">
            <button
              onClick={() => setActiveModalContributor(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-black font-bold p-1 rounded-full text-sm"
            >
              ✕
            </button>

            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 rounded-2xl ${activeModalContributor.avatarBg} text-white font-black text-2xl flex items-center justify-center shadow-lg`}>
                {activeModalContributor.avatarText}
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900">{activeModalContributor.name}</h3>
                <p className="text-xs font-mono text-gray-500">@{activeModalContributor.username}</p>
                <span className="inline-block mt-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900">
                  {activeModalContributor.badge}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="text-xs font-mono text-gray-400 font-bold uppercase">Role & Impact</div>
              <div className="text-sm font-bold text-gray-900">{activeModalContributor.role}</div>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                {activeModalContributor.bio}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-gray-500 font-bold">Top Contribution:</div>
              <div className="text-xs font-mono font-bold text-gray-900 bg-gray-100 p-3 rounded-xl border border-gray-200">
                {activeModalContributor.topContribution}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={activeModalContributor.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yellow w-full py-3 rounded-xl text-center text-xs font-black flex items-center justify-center space-x-2 cursor-pointer shadow"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

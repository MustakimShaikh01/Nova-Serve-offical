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
  Layers,
  BookOpen,
  Zap,
  Gift,
  Users,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Filter,
} from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

interface Contributor {
  id: string;
  name: string;
  username: string;
  role: string;
  category: "maintainer" | "code" | "docs" | "providers" | "first-time";
  avatarBg: string;
  avatarText: string;
  prsMerged: number;
  commits: number;
  badge: string;
  bio: string;
  topContribution: string;
  location: string;
  joined: string;
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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [activeModalContributor, setActiveModalContributor] = useState<Contributor | null>(null);
  const [issueFilter, setIssueFilter] = useState<string>("all");

  const quickstartCommands = [
    "git clone https://github.com/sazamansari/NovaServe-.git",
    "cd NovaServe-",
    "npm install",
    "npm run dev",
  ];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const contributors: Contributor[] = [
    {
      id: "1",
      name: "Sazam Ansari",
      username: "sazamansari",
      role: "Creator & Lead Architect",
      category: "maintainer",
      avatarBg: "bg-amber-500",
      avatarText: "SA",
      prsMerged: 342,
      commits: 1250,
      badge: "👑 Creator",
      bio: "Creator of NovaServe. Lead architect behind the TypeScript AST multi-cloud compiler engine and zero-drift state machine.",
      topContribution: "NovaServe Core AST Compiler & Provider Matrix",
      location: "San Francisco, CA",
      joined: "Jan 2025",
      featured: true,
    },
    {
      id: "2",
      name: "Alex Rivera",
      username: "arivera-cloud",
      role: "Core Maintainer",
      category: "maintainer",
      avatarBg: "bg-indigo-600",
      avatarText: "AR",
      prsMerged: 184,
      commits: 620,
      badge: "⚡ AST Pioneer",
      bio: "Spearheaded the Python AST parser integration and AWS Lambda/ECS auto-scaling terraform module generators.",
      topContribution: "Python AST Transformer & AWS Provider Module",
      location: "Berlin, Germany",
      joined: "Feb 2025",
      featured: true,
    },
    {
      id: "3",
      name: "Elena Rostova",
      username: "elena-dev",
      role: "Cloud Edge Specialist",
      category: "providers",
      avatarBg: "bg-emerald-600",
      avatarText: "ER",
      prsMerged: 96,
      commits: 310,
      badge: "🛡️ Edge Titan",
      bio: "Authored Cloudflare Workers & Vercel Edge Runtime bindings for sub-4ms cold start execution.",
      topContribution: "Cloudflare Workers & KV Edge Provider Specs",
      location: "Toronto, Canada",
      joined: "Mar 2025",
      featured: true,
    },
    {
      id: "4",
      name: "Marcus Chen",
      username: "marcus-k8s",
      role: "Infrastructure Lead",
      category: "code",
      avatarBg: "bg-[#FFB020]",
      avatarText: "MC",
      prsMerged: 112,
      commits: 440,
      badge: "🚀 K8s Architect",
      bio: "Created Helm chart generation pipeline and Docker Compose fallback engine for local zero-config testing.",
      topContribution: "Kubernetes & Helm Chart Compiler Target",
      location: "Singapore",
      joined: "Feb 2025",
      featured: true,
    },
    {
      id: "5",
      name: "Sarah Jenkins",
      username: "sjenkins-docs",
      role: "Docs & Developer Experience",
      category: "docs",
      avatarBg: "bg-rose-500",
      avatarText: "SJ",
      prsMerged: 78,
      commits: 210,
      badge: "📚 Docs Hero",
      bio: "Redesigned NovaServe documentation strategy, interactive playgrounds, and zero-to-hero CLI tutorials.",
      topContribution: "Complete Interactive CLI Docs & API Specs",
      location: "London, UK",
      joined: "Apr 2025",
      featured: false,
    },
    {
      id: "6",
      name: "Dmitri Volkov",
      username: "dmitri-gcp",
      role: "GCP Module Author",
      category: "providers",
      avatarBg: "bg-blue-600",
      avatarText: "DV",
      prsMerged: 64,
      commits: 195,
      badge: "🌩️ GCP Specialist",
      bio: "Built Google Cloud Run and Cloud Functions native HCL mapping layers with IAM auto-minimization.",
      topContribution: "GCP Cloud Run & IAM Security Policy Generator",
      location: "Zurich, Switzerland",
      joined: "Mar 2025",
      featured: false,
    },
    {
      id: "7",
      name: "Aisha Patel",
      username: "aisha-sec",
      role: "Security & Compliance Auditor",
      category: "code",
      avatarBg: "bg-purple-600",
      avatarText: "AP",
      prsMerged: 52,
      commits: 165,
      badge: "🔒 Security Sentinel",
      bio: "Implemented SOC2 audit report generation, automated CSP rules, and zero-trust IAM policy verifier.",
      topContribution: "Zero-Trust IAM Policy Checker & SOC2 Auditing",
      location: "Bengaluru, India",
      joined: "May 2025",
      featured: false,
    },
    {
      id: "8",
      name: "Kenji Sato",
      username: "kenji-wasm",
      role: "WASM Compiler Contributor",
      category: "code",
      avatarBg: "bg-teal-600",
      avatarText: "KS",
      prsMerged: 41,
      commits: 130,
      badge: "⚙️ WASM Engine",
      bio: "Optimized Rust-to-WASM AST parser reducing client-side playground compile time from 1.2s to 0.38s.",
      topContribution: "Rust WASM AST Parser Optimization",
      location: "Tokyo, Japan",
      joined: "May 2025",
      featured: false,
    },
    {
      id: "9",
      name: "Amara Okeke",
      username: "amara-first",
      role: "Open Source Contributor",
      category: "first-time",
      avatarBg: "bg-pink-600",
      avatarText: "AO",
      prsMerged: 14,
      commits: 45,
      badge: "🌟 Rising Star",
      bio: "Fixed 8 good-first-issues in CLI error formatting and added color-coded diff output for `novaserve plan`.",
      topContribution: "Color-Coded CLI Terminal Diff Output",
      location: "Lagos, Nigeria",
      joined: "Jun 2025",
      featured: false,
    },
    {
      id: "10",
      name: "Lucas Silva",
      username: "lucas-azure",
      role: "Azure Provider Specialist",
      category: "providers",
      avatarBg: "bg-sky-600",
      avatarText: "LS",
      prsMerged: 38,
      commits: 110,
      badge: "🔷 Azure Specialist",
      bio: "Added Azure Container Apps & Cosmos DB ARM template mapping modules.",
      topContribution: "Azure Container Apps & Bicep Exporter",
      location: "São Paulo, Brazil",
      joined: "May 2025",
      featured: false,
    },
    {
      id: "11",
      name: "Hannah Lindqvist",
      username: "hannah-bench",
      role: "Performance Engineer",
      category: "code",
      avatarBg: "bg-amber-600",
      avatarText: "HL",
      prsMerged: 29,
      commits: 98,
      badge: "⚡ Benchmarking Lead",
      bio: "Created latency benchmarking suite comparing NovaServe compile speeds against Terraform and Pulumi.",
      topContribution: "Automated Micro-Benchmarking Suite",
      location: "Stockholm, Sweden",
      joined: "Jun 2025",
      featured: false,
    },
    {
      id: "12",
      name: "Liam O'Connor",
      username: "liam-docs",
      role: "Community Advocate",
      category: "docs",
      avatarBg: "bg-emerald-500",
      avatarText: "LO",
      prsMerged: 22,
      commits: 76,
      badge: "✍️ Content Creator",
      bio: "Authored 10+ starter templates and step-by-step guides for serverless API deployment.",
      topContribution: "10+ Next.js & Python Starter Templates",
      location: "Dublin, Ireland",
      joined: "Jul 2025",
      featured: false,
    },
  ];

  const goodFirstIssues: Issue[] = [
    {
      id: "#412",
      title: "Add dark mode auto-detection toggle in Web Playground",
      category: "Frontend UI",
      difficulty: "Good First Issue",
      points: 100,
      labels: ["good-first-issue", "react", "ui"],
      url: "https://github.com/sazamansari/NovaServe-/issues/412",
    },
    {
      id: "#428",
      title: "Enhance `novaserve status` CLI output with spinner animations",
      category: "CLI Tooling",
      difficulty: "Good First Issue",
      points: 150,
      labels: ["good-first-issue", "typescript", "cli"],
      url: "https://github.com/sazamansari/NovaServe-/issues/428",
    },
    {
      id: "#455",
      title: "Create GCP Cloud Functions v2 provider JSON schema mapping",
      category: "Providers Matrix",
      difficulty: "Intermediate",
      points: 300,
      labels: ["help-wanted", "gcp", "schema"],
      url: "https://github.com/sazamansari/NovaServe-/issues/455",
    },
    {
      id: "#479",
      title: "Add error diagnostic suggestions for invalid AWS IAM role wildcards",
      category: "Compiler Engine",
      difficulty: "Intermediate",
      points: 350,
      labels: ["compiler", "security", "ast"],
      url: "https://github.com/sazamansari/NovaServe-/issues/479",
    },
    {
      id: "#501",
      title: "Implement Terraform HCL state reverse-importer for AWS S3 buckets",
      category: "State Management",
      difficulty: "Advanced",
      points: 600,
      labels: ["terraform", "hcl", "advanced"],
      url: "https://github.com/sazamansari/NovaServe-/issues/501",
    },
  ];

  const filteredContributors = contributors.filter((c) => {
    const matchesCategory = selectedCategory === "all" || c.category === selectedCategory;
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <span>OPEN SOURCE WALL OF FAME & CONTRIBUTION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-gray-900 max-w-5xl mx-auto leading-[1.1]">
            Honoring the Legends Building <span className="bg-gradient-to-r from-amber-600 via-[#FFB020] to-yellow-500 bg-clip-text text-transparent">NovaServe</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-semibold max-w-3xl mx-auto leading-relaxed">
            NovaServe is 100% open source and powered by developer contributions worldwide. 
            Discover our Hall of Fame, claim good first issues, and earn recognition in our global community.
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
              href="https://github.com/sazamansari/NovaServe-"
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

          {/* Key Community Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm text-center space-y-1 hover:border-[#FFB020] transition-all">
              <div className="text-3xl font-black text-gray-900">248+</div>
              <div className="text-xs text-gray-500 font-mono font-bold">Total Contributors</div>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm text-center space-y-1 hover:border-[#FFB020] transition-all">
              <div className="text-3xl font-black text-amber-600">3,420+</div>
              <div className="text-xs text-gray-500 font-mono font-bold">PRs Merged</div>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm text-center space-y-1 hover:border-[#FFB020] transition-all">
              <div className="text-3xl font-black text-indigo-600">18,900+</div>
              <div className="text-xs text-gray-500 font-mono font-bold">Code Commits</div>
            </div>
            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm text-center space-y-1 hover:border-[#FFB020] transition-all">
              <div className="text-3xl font-black text-emerald-600">42+</div>
              <div className="text-xs text-gray-500 font-mono font-bold">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Core Maintainers Spotlight */}
      <section className="py-16 bg-gray-50/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-extrabold text-amber-700 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Featured Legends</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-1">
                Top Maintainers & Architects
              </h2>
            </div>
            <p className="text-sm text-gray-600 font-semibold max-w-md">
              Recognizing our core maintainers who drive architecture design, code reviews, and community mentoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributors
              .filter((c) => c.featured)
              .map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveModalContributor(c)}
                  className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl ${c.avatarBg} text-white font-black text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                        {c.avatarText}
                      </div>
                      <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold">
                        {c.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-gray-900 group-hover:text-amber-600 transition-colors">
                        {c.name}
                      </h3>
                      <p className="text-xs text-gray-500 font-mono">@{c.username}</p>
                    </div>

                    <p className="text-xs text-gray-600 font-semibold line-clamp-3 leading-relaxed">
                      {c.bio}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono font-semibold mt-4">
                    <span className="flex items-center space-x-1 text-emerald-600 font-bold">
                      <GitPullRequest className="w-3.5 h-3.5" />
                      <span>{c.prsMerged} PRs</span>
                    </span>
                    <span>{c.location}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Main Wall of Fame Grid Section */}
      <section id="wall-of-fame-grid" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight">
              Community Hall of Fame
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-semibold max-w-2xl mx-auto">
              Filter through our global contributors by impact area or search by name.
            </p>
          </div>

          {/* Filter Tabs & Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-3xl bg-gray-50 border border-gray-200">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: "all", label: "All Contributors" },
                { id: "maintainer", label: "Maintainers" },
                { id: "code", label: "Core Code" },
                { id: "providers", label: "Providers" },
                { id: "docs", label: "Docs Heroes" },
                { id: "first-time", label: "Rising Stars" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-[#FFB020] text-black shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search contributor or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-200 text-xs text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#FFB020] focus:ring-1 focus:ring-[#FFB020] font-semibold"
              />
            </div>
          </div>

          {/* Grid of Contributor Cards */}
          {filteredContributors.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-3xl border border-dashed border-gray-300 space-y-3">
              <Users className="w-10 h-10 text-gray-400 mx-auto" />
              <div className="text-lg font-black text-gray-800">No contributors found</div>
              <p className="text-xs text-gray-500 font-semibold">
                Try adjusting your search query or filter category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContributors.map((c) => (
                <div
                  key={c.id}
                  onClick={() => setActiveModalContributor(c)}
                  className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all cursor-pointer space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-2xl ${c.avatarBg} text-white font-black text-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                          {c.avatarText}
                        </div>
                        <div>
                          <h3 className="text-base font-black text-gray-900 group-hover:text-amber-600 transition-colors">
                            {c.name}
                          </h3>
                          <p className="text-xs text-gray-500 font-mono">@{c.username}</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-700">
                        {c.badge}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-semibold text-amber-700 bg-amber-50/80 px-3 py-1.5 rounded-xl border border-amber-200/60 truncate">
                      Key PR: {c.topContribution}
                    </div>

                    <p className="text-xs text-gray-600 font-semibold leading-relaxed line-clamp-2">
                      {c.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-mono font-semibold">
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1 text-emerald-600 font-bold">
                        <GitPullRequest className="w-3.5 h-3.5" />
                        <span>{c.prsMerged}</span>
                      </span>
                      <span className="flex items-center space-x-1 text-indigo-600 font-bold">
                        <Code2 className="w-3.5 h-3.5" />
                        <span>{c.commits}</span>
                      </span>
                    </div>
                    <span className="text-gray-400 group-hover:text-amber-600 flex items-center text-[11px]">
                      Details <ChevronRight className="w-3 h-3 ml-0.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
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
              How to Become a Contributor
            </h2>
            <p className="text-base sm:text-lg text-gray-300 font-semibold leading-relaxed">
              Making your first contribution to NovaServe is quick and rewarding. Follow this simple guide to get started.
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
                Browse open issues on GitHub filtered by <code className="text-[#FFB020] font-mono">good-first-issue</code> or <code className="text-[#FFB020] font-mono">help-wanted</code>.
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
                Write your code or doc enhancements, then verify with <code className="text-[#FFB020] font-mono">npm test</code> to ensure clean execution.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-gray-800/80 border border-gray-700 space-y-3 relative hover:border-[#FFB020] transition-colors">
              <div className="w-8 h-8 rounded-full bg-[#FFB020] text-black font-black text-sm flex items-center justify-center">
                4
              </div>
              <h3 className="text-lg font-black text-white">Submit & Join</h3>
              <p className="text-xs text-gray-300 font-semibold leading-relaxed">
                Open your Pull Request! Once merged, your name will automatically be featured on this Wall of Fame!
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
                { id: "advanced", label: "Advanced" },
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
                          : issue.difficulty === "Intermediate"
                          ? "bg-indigo-50 text-indigo-800 border border-indigo-200"
                          : "bg-purple-50 text-purple-800 border border-purple-200"
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
                  <div className="text-right">
                    <div className="text-xs text-gray-400 font-mono font-semibold">Reward</div>
                    <div className="text-sm font-black text-amber-600">+{issue.points} pts</div>
                  </div>
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
              We appreciate every contribution! Here is how we give back to our amazing open source developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#FFB020] mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Gift className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Exclusive Swag Box</h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                Get a custom NovaServe t-shirt, holographic laptop stickers, and enamel pins delivered straight to your door upon your first merged PR!
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Trophy className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900">Wall of Fame Badge</h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                Permanent spot on our Wall of Fame page with customized badges, PR highlights, and links to your GitHub profile and website.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#FFB020] transition-all space-y-4 text-center group">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-gray-900">VIP Discord & Advisory</h3>
              <p className="text-xs text-gray-600 font-semibold leading-relaxed">
                Gain direct access to private maintainer channels, architecture review office hours, and early access preview builds.
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

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                <div className="text-2xl font-black text-amber-600">{activeModalContributor.prsMerged}</div>
                <div className="text-xs text-gray-500 font-mono font-bold">Pull Requests</div>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                <div className="text-2xl font-black text-indigo-600">{activeModalContributor.commits}</div>
                <div className="text-xs text-gray-500 font-mono font-bold">Commits</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-gray-500 font-bold">Top Contribution:</div>
              <div className="text-xs font-mono font-bold text-gray-900 bg-gray-100 p-3 rounded-xl border border-gray-200">
                {activeModalContributor.topContribution}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={`https://github.com/${activeModalContributor.username}`}
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

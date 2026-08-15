"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Terminal,
  FileText,
  Boxes,
  Cpu,
  Zap,
  BarChart3,
  DollarSign,
  ShieldCheck,
  Github,
  BookOpen,
  Map,
  X,
  ArrowRight,
} from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Documentation" | "CLI Commands" | "Resources";
  href?: string;
  action?: () => void;
  icon: React.ReactNode;
  shortcut?: string;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items: CommandItem[] = [
    { id: "home", title: "Home / Overview", category: "Navigation", href: "/", icon: <Zap className="w-4 h-4 text-[#5B8CFF]" /> },
    { id: "docs", title: "Documentation Hub", category: "Documentation", href: "/docs", icon: <BookOpen className="w-4 h-4 text-[#28D17C]" /> },
    { id: "architecture", title: "System Architecture", category: "Navigation", href: "/architecture", icon: <Cpu className="w-4 h-4 text-[#5B8CFF]" /> },
    { id: "pricing", title: "Pricing Tiers & Estimator", category: "Navigation", href: "/pricing", icon: <DollarSign className="w-4 h-4 text-[#FFB020]" /> },
    { id: "examples", title: "Starter Templates & Examples", category: "Navigation", href: "/examples", icon: <Boxes className="w-4 h-4 text-purple-400" /> },
    { id: "roadmap", title: "Interactive Product Roadmap", category: "Resources", href: "/roadmap", icon: <Map className="w-4 h-4 text-cyan-400" /> },
    { id: "changelog", title: "Changelog & Releases", category: "Resources", href: "/changelog", icon: <FileText className="w-4 h-4 text-emerald-400" /> },
    { id: "comparison", title: "NovaServe vs IaC Comparison", category: "Navigation", href: "/comparison", icon: <BarChart3 className="w-4 h-4 text-[#5B8CFF]" /> },
    { id: "providers", title: "Multi-Cloud Provider Matrix", category: "Navigation", href: "/providers", icon: <Boxes className="w-4 h-4 text-[#28D17C]" /> },
    { id: "community", title: "Community & GitHub Stats", category: "Resources", href: "/community", icon: <Github className="w-4 h-4 text-white" /> },
    { id: "security", title: "Enterprise Security & Compliance", category: "Navigation", href: "/security", icon: <ShieldCheck className="w-4 h-4 text-emerald-400" /> },
    
    // CLI commands
    { id: "cmd-init", title: "nova init - Bootstrap new application", category: "CLI Commands", icon: <Terminal className="w-4 h-4 text-[#5B8CFF]" />, shortcut: "CLI" },
    { id: "cmd-dev", title: "nova dev - Local hot-reloading dev server", category: "CLI Commands", icon: <Terminal className="w-4 h-4 text-[#28D17C]" />, shortcut: "CLI" },
    { id: "cmd-plan", title: "nova plan - Generate deterministic IR execution graph", category: "CLI Commands", icon: <Terminal className="w-4 h-4 text-[#FFB020]" />, shortcut: "CLI" },
    { id: "cmd-deploy", title: "nova deploy - Multi-region cloud atomic deployment", category: "CLI Commands", icon: <Terminal className="w-4 h-4 text-cyan-400" />, shortcut: "CLI" },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: CommandItem) => {
    setOpen(false);
    setQuery("");
    if (item.href) {
      router.push(item.href);
    } else if (item.action) {
      item.action();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#0D0D0D] border border-[#202020] rounded-2xl shadow-2xl overflow-hidden glow-blue"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#202020]">
          <Search className="w-5 h-5 text-[#9A9A9A] mr-3" />
          <input
            type="text"
            placeholder="Type a command, page, or search docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#F5F5F5] placeholder-[#9A9A9A] outline-none text-base font-medium"
            autoFocus
          />
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded-lg hover:bg-[#111111] text-[#9A9A9A] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 divide-y divide-[#151515]">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-[#9A9A9A]">
              No results found for &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item)}
                className="w-full flex items-center justify-between px-3.5 py-3 rounded-xl hover:bg-[#151515] text-left transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-[#111111] border border-[#202020] group-hover:border-[#5B8CFF]/40 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#F5F5F5] group-hover:text-[#5B8CFF] transition-colors flex items-center gap-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#9A9A9A]">{item.category}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-[#9A9A9A]">
                  {item.shortcut && (
                    <span className="px-2 py-0.5 rounded bg-[#111111] border border-[#202020] font-mono">
                      {item.shortcut}
                    </span>
                  )}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#5B8CFF]" />
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-[#050505] border-t border-[#202020] flex items-center justify-between text-xs text-[#9A9A9A]">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#111111] border border-[#202020] font-mono">↑↓</kbd>
              <span>Navigate</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#111111] border border-[#202020] font-mono">↵</kbd>
              <span>Select</span>
            </span>
            <span className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 rounded bg-[#111111] border border-[#202020] font-mono">ESC</kbd>
              <span>Close</span>
            </span>
          </div>
          <div className="text-[#5B8CFF] font-medium">NovaServe Platform</div>
        </div>
      </div>
    </div>
  );
}

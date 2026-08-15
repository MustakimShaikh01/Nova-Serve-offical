"use client";

import { useEffect, useState } from "react";
import { Rss, ExternalLink, RefreshCw, Clock, User, Tag, Sparkles, Check, Copy, Zap, Layers } from "lucide-react";
import Link from "next/link";

interface FeedItem {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  description: string;
  category: string;
  badgeText?: string;
}

export function NovaFeedSection() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const fetchFeed = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/feed");
      const data = await res.json();
      if (data.success && Array.isArray(data.items)) {
        setItems(data.items);
      } else {
        throw new Error(data.error || "Could not load feed");
      }
    } catch (err: any) {
      setError(err.message || "Failed to load NovaServe feed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  const handleCopyRssUrl = () => {
    const rssUrl = `${window.location.origin}/api/feed?format=xml`;
    navigator.clipboard.writeText(rssUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const categories = ["ALL", ...Array.from(new Set(items.map((i) => i.category)))];

  const filteredItems =
    selectedCategory === "ALL"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-10 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-8 p-6 sm:p-10">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-300 font-bold">
            <Rss className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>NOVASERVE CLOUD OFFICIAL RSS STREAM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center space-x-3">
            <span>Engineering & Release RSS Feed</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold max-w-2xl">
            Live RSS feed stream covering AST cloud compiler updates, zero-trust IAM security, multi-cloud engine sharding, and open-source releases.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchFeed}
            disabled={loading}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 text-xs font-mono font-bold text-gray-300 hover:text-white flex items-center space-x-2 transition-all cursor-pointer disabled:opacity-50 shadow-sm"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#FFB020]" : ""}`} />
            <span>Refresh Feed</span>
          </button>

          <button
            onClick={handleCopyRssUrl}
            className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-500 text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center space-x-2 transition-all cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">RSS Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#FFB020]" />
                <span>Copy Feed URL</span>
              </>
            )}
          </button>

          <a
            href="/api/feed?format=xml"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black text-xs font-mono font-black flex items-center space-x-2 transition-all cursor-pointer shadow-md"
          >
            <Rss className="w-3.5 h-3.5" />
            <span>RSS 2.0 XML</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Category Pills Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 pt-1 relative z-10">
          <span className="text-xs font-mono text-gray-400 font-bold mr-2 flex items-center space-x-1">
            <Tag className="w-3 h-3 text-[#FFB020]" />
            <span>Filter Category:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-[#FFB020] text-black shadow-sm"
                  : "bg-slate-900 text-gray-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Loading state */}
      {loading && items.length === 0 && (
        <div className="py-16 text-center space-y-3 font-mono text-xs text-gray-400">
          <RefreshCw className="w-8 h-8 text-[#FFB020] animate-spin mx-auto" />
          <div>Fetching official NovaServe engineering feed...</div>
        </div>
      )}

      {/* Error state */}
      {error && items.length === 0 && (
        <div className="p-6 rounded-2xl bg-red-950/50 border border-red-800/80 text-xs text-red-200 font-mono space-y-2">
          <div className="font-bold text-red-400">Error loading feed</div>
          <p>{error}</p>
          <a
            href="/api/feed?format=xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-amber-400 underline pt-2"
          >
            Open XML feed directly ↗
          </a>
        </div>
      )}

      {/* Feed Items Grid */}
      {filteredItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/80 transition-all space-y-4 flex flex-col justify-between group hover:shadow-xl relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-950/80 border border-amber-800/80 text-amber-300 font-bold text-[11px]">
                      {item.category}
                    </span>
                    {item.badgeText && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-gray-300 font-mono text-[10px] font-semibold">
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  <span className="flex items-center space-x-1 text-[11px]">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span>{new Date(item.pubDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-300 font-normal leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400 flex items-center space-x-1.5 truncate max-w-[200px]">
                  <User className="w-3 h-3 text-[#FFB020] shrink-0" />
                  <span className="truncate">{item.creator}</span>
                </span>

                <Link
                  href={item.link}
                  className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-[#FFB020] text-amber-300 hover:text-black font-extrabold flex items-center space-x-1.5 transition-all border border-amber-500/30 hover:border-amber-500"
                >
                  <span>Explore</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

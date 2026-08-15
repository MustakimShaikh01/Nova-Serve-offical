"use client";

import { useEffect, useState } from "react";
import { Rss, ExternalLink, RefreshCw, Box, Layers, Clock, User, Tag, Sparkles } from "lucide-react";

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  creator: string;
  description: string;
  category: string;
}

export function PodmanFeedSection() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      setError(err.message || "Failed to load Podman feed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <section className="py-12 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden space-y-8 p-6 sm:p-10">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-6 relative z-10">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-mono text-purple-300 font-bold">
            <Rss className="w-3.5 h-3.5 text-purple-400" />
            <span>CONTAINER ECOSYSTEM LIVE RSS FEED</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center space-x-3">
            <span>Podman Blog RSS Feed</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-semibold max-w-xl">
            Live RSS feed stream from <code className="text-purple-400 font-mono">https://blog.podman.io/feed/</code> covering container tools, Buildah, Skopeo, and serverless runtime updates.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={fetchFeed}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-purple-500 text-xs font-mono font-bold text-gray-300 hover:text-white flex items-center space-x-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-purple-400" : ""}`} />
            <span>Refresh Feed</span>
          </button>

          <a
            href="https://blog.podman.io/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold flex items-center space-x-2 transition-all cursor-pointer shadow-md"
          >
            <Rss className="w-3.5 h-3.5" />
            <span>RSS XML</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Loading state */}
      {loading && items.length === 0 && (
        <div className="py-16 text-center space-y-3 font-mono text-xs text-gray-400">
          <RefreshCw className="w-8 h-8 text-purple-400 animate-spin mx-auto" />
          <div>Fetching latest RSS items from blog.podman.io...</div>
        </div>
      )}

      {/* Error state */}
      {error && items.length === 0 && (
        <div className="p-6 rounded-2xl bg-red-950/50 border border-red-800/80 text-xs text-red-200 font-mono space-y-2">
          <div className="font-bold text-red-400">Error loading RSS feed</div>
          <p>{error}</p>
          <a
            href="https://blog.podman.io/feed/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-purple-400 underline pt-2"
          >
            Open https://blog.podman.io/feed/ directly ↗
          </a>
        </div>
      )}

      {/* Feed Items Grid */}
      {items.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/80 transition-all space-y-4 flex flex-col justify-between group hover:shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-950 border border-purple-800 text-purple-300 font-bold text-[11px]">
                    {item.category || "Podman News"}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span>{item.pubDate}</span>
                  </span>
                </div>

                <h3 className="text-lg font-black text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-300 font-normal leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-400 flex items-center space-x-1">
                  <User className="w-3 h-3 text-purple-400" />
                  <span>{item.creator}</span>
                </span>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-purple-900/60 hover:bg-purple-600 text-purple-200 hover:text-white font-bold flex items-center space-x-1.5 transition-all"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

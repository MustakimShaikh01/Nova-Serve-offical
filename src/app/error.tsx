"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home, Search } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global Route Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 flex items-center justify-center text-[#F5F5F5]">
      <div className="max-w-md mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FF5D5D]/15 border border-[#FF5D5D]/40 text-xs font-mono text-[#FF5D5D]">
          <AlertTriangle className="w-4 h-4" />
          <span>RUNTIME EXCEPTION CAUGHT</span>
        </div>

        <h1 className="text-3xl font-extrabold text-white">Something went wrong</h1>
        <p className="text-xs font-mono text-[#9A9A9A] bg-[#0D0D0D] p-3 rounded-xl border border-[#202020] text-left overflow-x-auto">
          {error.message || "An unexpected rendering exception occurred."}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="px-4 py-2.5 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black text-xs font-mono font-bold flex items-center space-x-2 shadow-lg shadow-[#FFB020]/20 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Operation</span>
          </button>

          <Link
            href="/"
            className="px-4 py-2.5 rounded-xl bg-[#0D0D0D] border border-[#202020] text-white text-xs font-mono font-semibold flex items-center space-x-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Zap } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white text-gray-900 space-y-4">
      <div className="relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 rounded-2xl bg-[#FFB020]/20 animate-ping" />
        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-[#FFB020] flex items-center justify-center shadow-md">
          <Zap className="w-6 h-6 text-[#FFB020] animate-pulse" />
        </div>
      </div>
      <span className="text-xs font-mono font-bold text-gray-600 tracking-wider uppercase animate-pulse">
        Compiling Route State...
      </span>
    </div>
  );
}

"use client";

import Link from "next/link";
import { DiamondIcon } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-900 px-4 text-center">
      <div className="space-y-4 max-w-md">
        <div className="mx-auto w-fit p-3 rounded-2xl bg-amber-50 border border-amber-200">
          <DiamondIcon size={36} />
        </div>
        <h1 className="text-6xl font-black text-gray-900">404</h1>
        <h2 className="text-xl font-bold text-gray-800">Resource Node Not Found</h2>
        <p className="text-xs font-mono text-gray-600">
          The compiled AST path you requested does not exist or has been relocated.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-[#FFB020] text-black font-extrabold text-xs shadow-md hover:bg-[#FFC44D]"
        >
          Return to Platform Home
        </Link>
      </div>
    </div>
  );
}

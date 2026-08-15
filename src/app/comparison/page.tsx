"use client";

import { ComparisonTable } from "@/components/ComparisonTable";
import { BenchmarksSection } from "@/components/BenchmarksSection";

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-white pt-16 space-y-12">
      <ComparisonTable />
      <BenchmarksSection />
    </div>
  );
}

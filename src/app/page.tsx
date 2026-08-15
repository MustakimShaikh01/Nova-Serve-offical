import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { WhatIsNovaServe } from "@/components/WhatIsNovaServe";
import { CompilerPipelineSection } from "@/components/CompilerPipelineSection";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { CoreFeatures } from "@/components/CoreFeatures";
import { CliSection } from "@/components/CliSection";
import { ProviderSupport } from "@/components/ProviderSupport";
import { DashboardPreview } from "@/components/DashboardPreview";
import { BenchmarksSection } from "@/components/BenchmarksSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CommunitySection } from "@/components/CommunitySection";
import { CTASection } from "@/components/CTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-[#FFB020]/40 selection:text-black">
      <Hero />
      <TrustedBy />
      <WhatIsNovaServe />
      <CompilerPipelineSection />
      <InteractivePlayground />
      <ArchitectureDiagram />
      <CoreFeatures />
      <CliSection />
      <ProviderSupport />
      <DashboardPreview />
      <BenchmarksSection />
      <ComparisonTable />
      <CommunitySection />
      <CTASection />
    </div>
  );
}

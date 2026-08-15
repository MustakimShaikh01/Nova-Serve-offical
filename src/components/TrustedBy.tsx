"use client";

import React from "react";
import {
  AwsIcon,
  CloudflareIcon,
  DockerIcon,
  GcpIcon,
  AzureIcon,
  VercelIcon,
  StripeIcon,
  SupabaseIcon,
  LinearIcon,
  TypescriptIcon,
} from "./Icons";

const realLogos = [
  { name: "Amazon Web Services", icon: AwsIcon },
  { name: "Cloudflare Edge", icon: CloudflareIcon },
  { name: "Docker Container Runtime", icon: DockerIcon },
  { name: "Google Cloud Platform", icon: GcpIcon },
  { name: "Microsoft Azure", icon: AzureIcon },
  { name: "Vercel", icon: VercelIcon },
  { name: "Stripe", icon: StripeIcon },
  { name: "Supabase", icon: SupabaseIcon },
  { name: "Linear", icon: LinearIcon },
  { name: "TypeScript", icon: TypescriptIcon },
];

export function TrustedBy() {
  const marqueeLogos = [...realLogos, ...realLogos, ...realLogos];

  return (
    <section className="py-12 bg-white border-y border-gray-100 relative z-10 overflow-hidden text-gray-900">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-xs font-mono font-black tracking-widest text-gray-500 uppercase">
          SUPPORTED BY INDUSTRY-STANDARD CLOUD & DEV INFRASTRUCTURE
        </p>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* Left & Right Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center space-x-12 sm:space-x-16">
          {marqueeLogos.map((brand, idx) => {
            const IconComponent = brand.icon;
            return (
              <div
                key={idx}
                className="flex items-center space-x-2.5 text-gray-800 hover:text-black transition-all transform hover:scale-105 cursor-pointer shrink-0 py-2 px-4 bg-gray-50 border border-gray-200/80 rounded-xl shadow-xs"
              >
                <IconComponent size={22} />
                <span className="text-xs font-mono font-bold">{brand.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

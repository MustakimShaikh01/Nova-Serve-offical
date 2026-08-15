"use client";

import { useState } from "react";
import { Map, ThumbsUp, CheckCircle2, Clock, Sparkles } from "lucide-react";

interface RoadmapItem {
  id: string;
  title: string;
  quarter: "Released Q3" | "Now (In Dev)" | "Next Q4" | "Planned 2027";
  desc: string;
  votes: number;
}

const initialItems: RoadmapItem[] = [
  { id: "1", title: "AWS Lambda & Cloudflare KV Compiler Engine", quarter: "Released Q3", desc: "Native AST parser for AWS and Cloudflare Edge.", votes: 412 },
  { id: "2", title: "OpenTelemetry Automatic Span Injection", quarter: "Released Q3", desc: "Compiled distributed tracing headers for multi-cloud RPC.", votes: 320 },
  { id: "3", title: "GCP Cloud Run & BigQuery Compiler Target", quarter: "Now (In Dev)", desc: "Direct container compilation to GCP artifact registry.", votes: 540 },
  { id: "4", title: "Azure Functions & CosmosDB Target Spec", quarter: "Next Q4", desc: "Enterprise Azure Active Directory token binding.", votes: 290 },
  { id: "5", title: "Automated SOC2 Audit Trail Generator", quarter: "Planned 2027", desc: "One-click SOC2 Type II compliance manifest creation.", votes: 680 },
];

export default function RoadmapPage() {
  const [items, setItems] = useState<RoadmapItem[]>(initialItems);

  const handleVote = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, votes: item.votes + 1 } : item))
    );
  };

  return (
    <div className="min-h-screen bg-white pt-28 pb-20 text-gray-900 selection:bg-[#FFB020]/40 selection:text-black">
      <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold">
            <Map className="w-3.5 h-3.5 text-[#FFB020]" />
            <span>OPEN SOURCE ROADMAP</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
            Interactive Product Roadmap
          </h1>
          <p className="text-base text-gray-600 font-medium">
            Vote on upcoming cloud targets, compiler passes, and developer platform features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-[10px] font-mono font-extrabold">
                    {item.quarter}
                  </span>
                  <button
                    onClick={() => handleVote(item.id)}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white border border-gray-300 hover:border-black text-xs font-mono text-gray-900 font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{item.votes} votes</span>
                  </button>
                </div>

                <h3 className="text-xl font-extrabold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-700 leading-relaxed font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

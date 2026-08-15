"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Check, FileCode } from "lucide-react";
import {
  AwsIcon,
  CloudflareIcon,
  PythonIcon,
  GoIcon,
  JavaIcon,
  TypescriptIcon,
  DiamondIcon,
} from "@/components/Icons";
import { compilerService, CodeLanguageStrategy } from "@/services/compiler.service";

export function HeroPipeline() {
  const languages = compilerService.getLanguages();
  const [selectedLang, setSelectedLang] = useState<CodeLanguageStrategy>(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Auto-cycle languages every 4 seconds unless dropdown is open
  useEffect(() => {
    if (dropdownOpen) return;
    const interval = setInterval(() => {
      setSelectedLang((prev) => {
        const nextIdx = (languages.findIndex((l) => l.id === prev.id) + 1) % languages.length;
        return languages[nextIdx];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [dropdownOpen, languages]);

  const renderIcon = (langId: string) => {
    switch (langId) {
      case "ts":
        return <TypescriptIcon size={16} />;
      case "python":
        return <PythonIcon size={16} />;
      case "go":
        return <GoIcon size={16} />;
      case "java":
        return <JavaIcon size={16} />;
      case "csharp":
        return <FileCode className="w-4 h-4 text-emerald-400" />;
      default:
        return <FileCode className="w-4 h-4 text-red-400" />;
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto py-4">
      {/* Background Pulumi Circuit Flow SVG Lines & Bot Nodes */}
      <svg
        className="absolute -top-12 -left-16 w-[130%] h-[130%] pointer-events-none z-0 overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 500"
      >
        {/* Curving Light Purple/Blue Lines */}
        <path
          d="M 320 60 L 320 280 L 150 280 L 150 380"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="2"
        />
        <path
          d="M 330 60 L 330 310 L 420 310 L 420 380"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="2"
        />
        <path
          d="M 310 60 L 310 240 L 120 240 L 120 360"
          fill="none"
          stroke="#EEF2FF"
          strokeWidth="2"
        />

        {/* Small Floating Pulumi Bot Nodes */}
        <g transform="translate(305, 140)">
          <rect width="28" height="28" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" className="shadow-md" />
          <circle cx="10" cy="12" r="2.5" fill="#FFB020" />
          <circle cx="18" cy="12" r="2.5" fill="#FFB020" />
          <rect x="9" y="18" width="10" height="3" rx="1.5" fill="#FFB020" />
        </g>
        <g transform="translate(320, 200)">
          <rect width="28" height="28" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" className="shadow-md" />
          <circle cx="10" cy="12" r="2.5" fill="#FFB020" />
          <circle cx="18" cy="12" r="2.5" fill="#FFB020" />
          <rect x="9" y="18" width="10" height="3" rx="1.5" fill="#FFB020" />
        </g>
      </svg>

      {/* Main Pulumi Code Editor Box (Dark Navy Editor as per Screenshot) */}
      <div className="relative z-10 rounded-2xl bg-[#0F0E17] border border-[#232136] p-5 shadow-2xl text-white font-mono overflow-visible">
        {/* Editor Top Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-[#232136]">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-gray-300">
              {selectedLang.filename}
            </span>
          </div>

          {/* Multi-language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-3 py-1 rounded-lg bg-[#1D1B2A] border border-[#2D2A40] hover:border-[#FFB020] text-xs text-gray-200 font-semibold transition-all"
            >
              <span>{renderIcon(selectedLang.id)}</span>
              <span>{selectedLang.name}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-white" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#181625] border border-[#2D2A40] shadow-2xl p-1 space-y-1 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {languages.map((lang) => {
                  const isSel = lang.id === selectedLang.id;
                  return (
                    <button
                      key={lang.id}
                      onClick={() => {
                        setSelectedLang(lang);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-all ${
                        isSel
                          ? "bg-[#FFB020] text-black font-bold"
                          : "text-gray-300 hover:bg-[#252238] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{renderIcon(lang.id)}</span>
                        <span>{lang.name}</span>
                      </span>
                      {isSel && <Check className="w-3.5 h-3.5 text-black" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Code Content Container */}
        <div className="mt-3 text-xs leading-relaxed overflow-x-auto min-h-[160px] pb-10">
          <pre className="text-gray-200">
            <code>
              {selectedLang.id === "csharp" ? (
                <>
                  <span className="text-purple-400">result</span>.<span className="text-blue-300">Names</span>.<span className="text-indigo-300">Select</span>((az, i) =&gt;{"\n"}
                  {"    "}<span className="text-purple-400">new</span> <span className="text-amber-300">Subnet</span>(<span className="text-emerald-300">$"subnet-&#123;i&#125;"</span>, <span className="text-purple-400">new</span>(){"\n"}
                  {"    "}&#123;{"\n"}
                  {"        "}<span className="text-indigo-300">VpcId</span> = vpc.VpcId,{"\n"}
                  {"        "}<span className="text-indigo-300">CidrBlock</span> = <span className="text-emerald-300">$"10.0.&#123;i&#125;.0/24"</span>,{"\n"}
                  {"        "}<span className="text-indigo-300">AvailabilityZone</span> = az,{"\n"}
                  {"    "}&#125;){"\n"}
                  ).<span className="text-indigo-300">ToList</span>();
                </>
              ) : (
                selectedLang.code
              )}
            </code>
          </pre>
        </div>
      </div>

      {/* Floating Pure White Cards (Exact Pulumi Visualizer Overlays) */}
      <div className="relative -mt-14 z-20 grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
        {/* Floating White Card 1: AWS VPC Target */}
        <div className="bg-white text-gray-900 p-5 rounded-2xl shadow-2xl border border-gray-200 space-y-3 font-mono transform hover:-translate-y-1 transition-all animate-float">
          <div className="flex items-center space-x-2">
            <AwsIcon size={22} />
          </div>

          <div>
            <div className="text-sm font-black text-gray-900">VPC</div>
            <div className="text-xs text-gray-500 font-semibold mt-0.5">
              aws:ec2:Vpc
            </div>
          </div>

          <div className="pt-2 flex items-center justify-start">
            <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold">
              Create
            </span>
          </div>
        </div>

        {/* Floating White Card 2: Production Web App */}
        <div className="bg-white text-gray-900 p-5 rounded-2xl shadow-2xl border border-gray-200 space-y-3 font-mono transform hover:-translate-y-1 transition-all animate-float-delayed">
          <div>
            <div className="text-sm font-black text-gray-900">
              Production web app
            </div>
            <div className="text-xs text-gray-500 font-semibold mt-0.5">
              acme-app/prod
            </div>
          </div>

          {/* Wireframe Graphic (Pulumi Microservice Bars) */}
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-16 h-2 rounded bg-amber-200" />
              <div className="w-4 h-2 rounded bg-amber-500" />
            </div>
            <div className="w-24 h-3 rounded bg-amber-100" />
            <div className="flex items-center space-x-2 pt-1">
              <div className="w-8 h-3 rounded bg-[#FFB020]" />
              <div className="w-8 h-3 rounded bg-gray-200 border border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

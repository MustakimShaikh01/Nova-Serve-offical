import Link from "next/link";
import { Github, Twitter, Disc as Discord } from "lucide-react";
import { DiamondIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 relative overflow-hidden text-gray-900">
      <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-gray-200">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" prefetch={true} className="flex items-center space-x-3 cursor-pointer">
              <div className="w-8 h-8 rounded-xl bg-[#FFB020] p-0.5 shadow-md">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <DiamondIcon size={18} />
                </div>
              </div>
              <span className="text-lg font-black text-gray-900 tracking-tight">NovaServe</span>
            </Link>
            <p className="text-sm text-gray-600 font-semibold leading-relaxed max-w-sm">
              Define your cloud application once in TypeScript. NovaServe compiles, plans, and deploys it to multiple cloud providers with zero-drift safety.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://github.com/sazamansari/NovaServe-"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 hover:text-black hover:border-[#FFB020] hover:bg-[#FFB020] transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/novaserve"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 hover:text-black hover:border-[#FFB020] hover:bg-[#FFB020] transition-colors cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg/novaserve"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 hover:text-black hover:border-[#FFB020] hover:bg-[#FFB020] transition-colors cursor-pointer"
                aria-label="Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-gray-900">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 font-semibold">
              <li><Link href="/docs" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Documentation</Link></li>
              <li><Link href="/architecture" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Compiler Architecture</Link></li>
              <li><Link href="/#playground" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Interactive Playground</Link></li>
              <li><Link href="/pricing" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Pricing & Estimator</Link></li>
              <li><Link href="/examples" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Starter Templates</Link></li>
            </ul>
          </div>

          {/* Column 2: Ecosystem */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-gray-900">Ecosystem</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 font-semibold">
              <li><Link href="/providers" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">AWS Provider</Link></li>
              <li><Link href="/providers" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Cloudflare Edge</Link></li>
              <li><Link href="/providers" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">GCP & Azure Specs</Link></li>
              <li><Link href="/comparison" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">NovaServe vs Pulumi</Link></li>
              <li><Link href="/comparison" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">NovaServe vs Terraform</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources & Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono font-bold tracking-wider text-gray-900">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600 font-semibold">
              <li><Link href="/blog" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Engineering Blog</Link></li>
              <li><Link href="/roadmap" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Product Roadmap</Link></li>
              <li><Link href="/changelog" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Changelog</Link></li>
              <li><Link href="/community" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Community</Link></li>
              <li><Link href="/security" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer">Security & SOC2</Link></li>
              <li><Link href="/sitemap" prefetch={true} className="hover:text-[#FFB020] transition-colors cursor-pointer font-bold">Visual Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & operational status */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600 font-semibold">
          <div className="flex items-center space-x-3">
            <span>© {new Date().getFullYear()} NovaServe Cloud Inc. All rights reserved.</span>
            <span>•</span>
            <Link href="/security" prefetch={true} className="hover:text-[#FFB020] cursor-pointer">Privacy Policy</Link>
            <span>•</span>
            <Link href="/security" prefetch={true} className="hover:text-[#FFB020] cursor-pointer">Terms of Service</Link>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-emerald-900 font-mono text-[11px] font-bold">All Systems Operational (99.999%)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

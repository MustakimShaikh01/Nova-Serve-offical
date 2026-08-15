"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Github,
  ChevronDown,
  Menu,
  X,
  Cpu,
  Boxes,
  ShieldCheck,
  BarChart3,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { DiamondIcon } from "@/components/Icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Registry", href: "/providers" },
    { name: "Wall of Fame", href: "/wall-of-fame" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Changelog", href: "/changelog" },
  ];

  const productMenuItems = [
    { title: "Core Compiler Engine", desc: "TypeScript & Python AST to multi-cloud plans", href: "/architecture", icon: <Cpu className="w-5 h-5 text-amber-500" /> },
    { title: "Provider Matrix", desc: "Native AWS, Cloudflare, Docker, GCP & Azure specs", href: "/providers", icon: <Boxes className="w-5 h-5 text-emerald-600" /> },
    { title: "Performance Benchmarks", desc: "0.38s compile time & 4ms edge cold starts", href: "/comparison", icon: <BarChart3 className="w-5 h-5 text-[#FFB020]" /> },
    { title: "Enterprise Security", desc: "SOC2 Type II, zero-trust IAM generation & CSP audit", href: "/security", icon: <ShieldCheck className="w-5 h-5 text-indigo-600" /> },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Pulumi-style Top Announcement Banner Bar */}
      {bannerVisible && (
        <div className="bg-[#100D23] text-white text-xs font-mono py-2 px-4 flex items-center justify-between border-b border-[#252044]">
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-center w-full">
            <span className="text-[#FFB020]">✦</span>
            <span className="font-medium text-gray-200">
              Latest release (v2.1.6): Nova IR 1.0.0, automated zero-trust IAM synthesis, and local Hono emulator support.
            </span>
            <Link
              href="/changelog"
              prefetch={true}
              className="bg-[#26204B] hover:bg-[#38306D] text-white px-2.5 py-0.5 rounded text-[11px] font-semibold transition-colors inline-flex items-center space-x-1 ml-2"
            >
              <span>See the release</span>
            </Link>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            className="text-gray-400 hover:text-white p-1 text-xs font-bold"
            aria-label="Close Announcement"
          >
            ✕
          </button>
        </div>
      )}

      {/* Header Navigation (Navbar) */}
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
            : "bg-white border-b border-gray-100 py-3.5"
        }`}
      >
        <div className="max-w-[1600px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo & Main Nav */}
            <div className="flex items-center space-x-8">
              <Link href="/" prefetch={true} className="flex items-center space-x-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-xl bg-[#FFB020] p-0.5 shadow-md group-hover:shadow-[#FFB020]/50 transition-all duration-300 flex items-center justify-center text-black">
                  <DiamondIcon size={20} />
                </div>
                <span className="text-xl font-black text-gray-900 tracking-tight">
                  NovaServe
                </span>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-1 font-sans text-sm font-semibold text-gray-700">
                {/* Product Megamenu */}
                <div
                  className="relative"
                  onMouseEnter={() => setProductMenuOpen(true)}
                  onMouseLeave={() => setProductMenuOpen(false)}
                >
                  <button className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:text-amber-600 hover:bg-amber-50/60 transition-all">
                    <span>Product</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${productMenuOpen ? "rotate-180 text-amber-600" : "text-gray-500"}`} />
                  </button>

                  {productMenuOpen && (
                    <div className="absolute top-full left-0 w-[520px] mt-1 bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                      {productMenuItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          prefetch={true}
                          className="flex items-start space-x-3 p-3 rounded-xl hover:bg-amber-50/70 transition-colors group cursor-pointer"
                        >
                          <div className="p-2 rounded-lg bg-gray-100 border border-gray-200 group-hover:border-amber-300 transition-colors">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500 leading-relaxed mt-0.5 font-normal">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      prefetch={true}
                      className={`px-3 py-2 rounded-lg transition-all cursor-pointer ${
                        isActive
                          ? "text-amber-800 bg-amber-100/70 font-bold"
                          : "hover:text-amber-600 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right Side Controls (Pulumi Style) */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* GitHub Star Pill */}
              <a
                href="https://github.com/novaserve-cloud/novaserve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 text-xs font-mono text-gray-700 hover:text-amber-600 transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4 text-gray-900" />
                <span className="font-bold">v2.1.6</span>
              </a>

              {/* Contact Us */}
              <Link
                href="/contact"
                prefetch={true}
                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 cursor-pointer"
              >
                Contact us
              </Link>

              {/* Sign In */}
              <Link
                href="/signin"
                prefetch={true}
                className="text-sm font-semibold text-gray-700 hover:text-amber-600 transition-colors px-2 py-1 cursor-pointer"
              >
                Sign in
              </Link>

              {/* Get Started CTA */}
              <Link
                href="/docs"
                prefetch={true}
                className="px-4 py-2 rounded-xl bg-[#FFB020] hover:bg-[#FFC44D] text-black text-sm font-bold shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
              >
                Get started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-gray-100 border border-gray-300 text-gray-900"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-gray-200 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 font-bold"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-gray-200 flex items-center justify-between">
              <a
                href="https://github.com/novaserve-cloud/novaserve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-gray-700 font-bold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
              <Link
                href="/docs"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 rounded-xl bg-[#FFB020] text-black text-xs font-bold"
              >
                Get started
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
